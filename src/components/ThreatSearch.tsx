import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ThreatSearch = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search for threats (IP, domain, hash, CVE...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default ThreatSearch;