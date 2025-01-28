import React from "react";
import ThreatSearch from "@/components/ThreatSearch";
import ThreatResults from "@/components/ThreatResults";
import WhoisInfo from "@/components/WhoisInfo";
import { useToast } from "@/components/ui/use-toast";
import type { ThreatResult } from "@/components/ThreatResults";
import { Rss, Globe, Database, Shield, Server, Network } from "lucide-react";

// Sample WHOIS data - in a real app, this would come from an API
const sampleWhoisData = {
  "192.168.1.1": {
    ip: "192.168.1.1",
    organization: "Private Network",
    country: "United States",
    city: "Los Angeles",
    network: "192.168.0.0/16",
    registrar: "IANA",
    lastUpdated: "2024-01-28",
  },
  "10.0.0.1": {
    ip: "10.0.0.1",
    organization: "Private Network",
    country: "United States",
    city: "New York",
    network: "10.0.0.0/8",
    registrar: "IANA",
    lastUpdated: "2024-01-28",
  },
  "172.16.0.1": {
    ip: "172.16.0.1",
    organization: "Private Network",
    country: "United States",
    city: "Chicago",
    network: "172.16.0.0/12",
    registrar: "IANA",
    lastUpdated: "2024-01-28",
  },
};

const sampleResults: ThreatResult[] = [
  {
    id: "1",
    type: "IP Address",
    indicator: "192.168.1.1",
    severity: "high",
    lastSeen: "2024-01-28",
    confidence: 95,
  },
  {
    id: "2",
    type: "Domain",
    indicator: "malicious-domain.com",
    severity: "medium",
    lastSeen: "2024-01-27",
    confidence: 85,
  },
  {
    id: "3",
    type: "Hash",
    indicator: "a1b2c3d4e5f6...",
    severity: "low",
    lastSeen: "2024-01-26",
    confidence: 75,
  },
];

const feedSources = [
  {
    name: "AlienVault OTX",
    description: "Open Threat Exchange",
    icon: Globe,
    knownIPs: ["192.168.1.1", "10.0.0.1"],
  },
  {
    name: "VirusTotal",
    description: "Malware Intelligence",
    icon: Shield,
    knownIPs: ["192.168.1.1"],
  },
  {
    name: "Abuse.ch",
    description: "Malware Tracking",
    icon: Database,
    knownIPs: ["192.168.1.1", "172.16.0.1"],
  },
  {
    name: "MISP",
    description: "Threat Sharing Platform",
    icon: Server,
    knownIPs: ["10.0.0.1"],
  },
  {
    name: "PhishTank",
    description: "Phishing Database",
    icon: Network,
    knownIPs: ["192.168.1.1"],
  },
  {
    name: "Emerging Threats",
    description: "Network Security",
    icon: Rss,
    knownIPs: ["172.16.0.1"],
  },
];

const Index = () => {
  const { toast } = useToast();
  const [results, setResults] = React.useState<ThreatResult[]>([]);
  const [searchedIP, setSearchedIP] = React.useState<string>("");
  const [whoisData, setWhoisData] = React.useState<typeof sampleWhoisData[keyof typeof sampleWhoisData] | null>(null);

  const isIPAddress = (query: string) => {
    // Basic IP validation regex
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    return ipRegex.test(query);
  };

  const handleSearch = (query: string) => {
    if (isIPAddress(query)) {
      setSearchedIP(query);
      const sourcesWithIP = feedSources.filter(source => 
        source.knownIPs.includes(query)
      );

      // Set WHOIS data if available
      setWhoisData(sampleWhoisData[query as keyof typeof sampleWhoisData] || {
        ip: query,
        organization: "Unknown",
        country: "Unknown",
        network: "Unknown",
        lastUpdated: new Date().toISOString().split('T')[0],
      });

      if (sourcesWithIP.length > 0) {
        setResults(sampleResults);
        toast({
          title: "IP Found in Threat Feeds",
          description: `IP ${query} was found in ${sourcesWithIP.length} threat feeds`,
        });
      } else {
        setResults([]);
        toast({
          title: "IP Not Found",
          description: "This IP was not found in any threat feeds",
        });
      }
    } else if (query.trim()) {
      setSearchedIP("");
      setWhoisData(null);
      setResults(sampleResults);
      toast({
        title: "Search completed",
        description: `Found ${sampleResults.length} results for "${query}"`,
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Threat Intelligence Search</h1>
        <p className="text-muted-foreground">
          Search for potential threats using IP addresses, domains, hashes, or CVE identifiers
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <ThreatSearch onSearch={handleSearch} />
      </div>

      {whoisData && <WhoisInfo data={whoisData} isVisible={Boolean(searchedIP)} />}

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-center">Top Threat Intelligence Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feedSources.map((source) => (
            <div
              key={source.name}
              className={`flex items-center p-4 bg-white rounded-lg shadow-sm border hover:border-primary/50 transition-colors ${
                searchedIP && source.knownIPs.includes(searchedIP)
                  ? "border-red-500 bg-red-50"
                  : ""
              }`}
            >
              <div className={`p-2 rounded-full mr-4 ${
                searchedIP && source.knownIPs.includes(searchedIP)
                  ? "bg-red-100"
                  : "bg-lavender"
              }`}>
                <source.icon className={`h-5 w-5 ${
                  searchedIP && source.knownIPs.includes(searchedIP)
                    ? "text-red-500"
                    : "text-primary"
                }`} />
              </div>
              <div>
                <h3 className="font-medium">{source.name}</h3>
                <p className="text-sm text-muted-foreground">{source.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {results.length > 0 && (
        <div className="mx-auto max-w-5xl">
          <ThreatResults results={results} />
        </div>
      )}
    </div>
  );
};

export default Index;
