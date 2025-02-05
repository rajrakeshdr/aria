import React, { useState } from "react";
import ThreatSearch from "@/components/ThreatSearch";
import ThreatResults from "@/components/ThreatResults";
import WhoisInfo from "@/components/WhoisInfo";
import ThreatFeeds from "@/components/ThreatFeeds";
import InteractiveBackground from "@/components/InteractiveBackground";
import { useToast } from "@/hooks/use-toast";
import { ThreatResult } from "@/components/ThreatResults";
import { Shield, AlertTriangle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Sample data for demonstration
  const sampleResults: ThreatResult[] = [
    {
      id: "1",
      type: "IP",
      indicator: "192.168.1.1",
      severity: "high",
      lastSeen: "2024-02-20",
      confidence: 95,
    },
    {
      id: "2",
      type: "Domain",
      indicator: "malicious-site.com",
      severity: "medium",
      lastSeen: "2024-02-19",
      confidence: 85,
    },
    {
      id: "3",
      type: "Hash",
      indicator: "a1b2c3d4e5f6...",
      severity: "low",
      lastSeen: "2024-02-18",
      confidence: 75,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowResults(true);
    toast({
      title: "Analysis initiated",
      description: `Analyzing threat intelligence for: ${query}`,
    });
  };

  const whoisData = {
    ip: "192.168.1.1",
    organization: "Example Org",
    country: "United States",
    city: "San Francisco",
    network: "192.168.0.0/16",
    registrar: "Example Registrar",
    lastUpdated: "2024-02-20",
  };

  return (
    <>
      <InteractiveBackground />
      <div className="container mx-auto py-8 px-4 relative">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
            AI-Enhanced Cybersecurity Platform
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Advanced threat intelligence and security analysis powered by AI
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="mb-8 flex justify-center">
            <ThreatSearch onSearch={handleSearch} />
          </div>

          {/* Quick Action Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" className="gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20">
              <Shield className="h-4 w-4" />
              Run Security Scan
            </Button>
            <Button variant="outline" className="gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20">
              <AlertTriangle className="h-4 w-4" />
              Check Vulnerabilities
            </Button>
            <Button variant="outline" className="gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20">
              <Search className="h-4 w-4" />
              Advanced Search
            </Button>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6 text-white">Analysis Results</h2>
            <div className="space-y-8">
              <WhoisInfo data={whoisData} isVisible={true} />
              <ThreatResults results={sampleResults} />
            </div>
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Real-time Threat Intelligence</CardTitle>
              <CardDescription className="text-gray-300">
                Analyze and monitor emerging threats in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Advanced threat detection</li>
                <li>• Behavioral analysis</li>
                <li>• Automated response recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">SOC Assistant</CardTitle>
              <CardDescription className="text-gray-300">
                AI-powered support for security operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Incident response automation</li>
                <li>• Alert prioritization</li>
                <li>• Threat hunting assistance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Policy Advisor</CardTitle>
              <CardDescription className="text-gray-300">
                Smart security policy management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Policy compliance checks</li>
                <li>• Best practice recommendations</li>
                <li>• Framework alignment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Threat Feeds Section */}
        <div className="mb-12">
          <ThreatFeeds searchedIP={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default Index;
