import React from "react";
import ThreatSearch from "@/components/ThreatSearch";
import ThreatResults from "@/components/ThreatResults";
import { useToast } from "@/components/ui/use-toast";
import type { ThreatResult } from "@/components/ThreatResults";

// Sample data - in a real app, this would come from an API
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

const Index = () => {
  const { toast } = useToast();
  const [results, setResults] = React.useState<ThreatResult[]>([]);

  const handleSearch = (query: string) => {
    // In a real app, this would make an API call
    if (query.trim()) {
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

      {results.length > 0 && (
        <div className="mx-auto max-w-5xl">
          <ThreatResults results={results} />
        </div>
      )}
    </div>
  );
};

export default Index;