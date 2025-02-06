
import React, { useState } from "react";
import { Search } from "lucide-react";
import BrainNetwork from "../components/BrainNetwork";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [query, setQuery] = useState("");

  const exampleQueries = [
    "How does quantum computing work?",
    "What are black holes?",
    "Explain artificial intelligence",
    "Latest breakthroughs in science"
  ];

  return (
    <div className="min-h-screen relative bg-[#1A1F2C]">
      <BrainNetwork />
      <div className="container mx-auto py-8 px-4 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">AI Search Assistant</h1>
          <p className="text-gray-400 text-lg mb-8">Ask anything, get detailed answers</p>
        </div>

        <div className="w-full max-w-2xl">
          <div className="relative">
            <Input
              type="text"
              placeholder="Ask me anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 rounded-xl bg-[#222222]/80 border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <div className="mt-6">
            <p className="text-gray-400 mb-3 text-sm">Try asking about:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQueries.map((query, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-lg bg-[#222222]/50 text-gray-300 hover:bg-[#222222]/80 transition-colors text-sm border border-gray-700"
                  onClick={() => setQuery(query)}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
