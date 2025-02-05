
import React from "react";
import ThreatSearch from "@/components/ThreatSearch";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    // For now, just show a toast to acknowledge the search
    toast({
      title: "Search initiated",
      description: `Searching for threat intelligence related to: ${query}`,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          AI-Enhanced Cybersecurity Platform
        </h1>
        <p className="text-lg text-muted-foreground">
          Enter any query about cybersecurity threats, vulnerabilities, or best practices
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <ThreatSearch onSearch={handleSearch} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Threat Intelligence</h3>
          <p className="text-sm text-muted-foreground">
            Real-time threat intelligence powered by AI, providing insights on emerging threats and vulnerabilities.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">SOC Assistant</h3>
          <p className="text-sm text-muted-foreground">
            AI-powered assistance for security operations, helping with threat detection and incident response.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Policy Advisor</h3>
          <p className="text-sm text-muted-foreground">
            Intelligent guidance for creating and maintaining security policies based on best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
