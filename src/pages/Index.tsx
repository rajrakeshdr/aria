
import React, { useState } from "react";
import { Search, PanelRight, LogIn } from "lucide-react";
import BrainNetwork from "../components/BrainNetwork";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  ResizablePanelGroup, 
  ResizablePanel, 
  ResizableHandle 
} from "@/components/ui/resizable";
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from "@/components/ui/collapsible";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const Index = () => {
  const [query, setQuery] = useState("");
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  const exampleQueries = [
    "How does quantum computing work?",
    "What are black holes?",
    "Explain artificial intelligence",
    "Latest breakthroughs in science"
  ];

  const toggleRightPanel = () => {
    setIsRightPanelOpen(!isRightPanelOpen);
  };

  return (
    <div className="min-h-screen relative bg-[#1A1F2C]">
      <BrainNetwork />
      
      {/* Login Icon */}
      <div className="fixed bottom-4 left-4 z-20">
        <Button variant="ghost" size="icon" className="rounded-full bg-[#222222]/80 hover:bg-[#222222] text-gray-300">
          <LogIn className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Right Panel Toggle Button */}
      <div className="fixed top-4 right-4 z-20">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleRightPanel}
          className={`rounded-full bg-[#222222]/80 hover:bg-[#222222] text-gray-300 ${isRightPanelOpen ? 'bg-purple-500/20' : ''}`}
        >
          <PanelRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Main Content */}
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        <ResizablePanel defaultSize={100} minSize={40} className="transition-all duration-300 ease-in-out">
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
        </ResizablePanel>
        
        {isRightPanelOpen && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel 
              defaultSize={30} 
              minSize={20} 
              maxSize={50} 
              className="bg-[#1A1F2C] border-l border-gray-700 relative"
            >
              <div className="p-4 h-full overflow-auto">
                <h2 className="text-xl font-semibold text-white mb-4">Information Panel</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="history" className="border-gray-700">
                    <AccordionTrigger className="text-gray-300 hover:text-white">
                      Search History
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      <ul className="space-y-2">
                        <li className="p-2 rounded hover:bg-[#222222]/50 cursor-pointer">Quantum physics fundamentals</li>
                        <li className="p-2 rounded hover:bg-[#222222]/50 cursor-pointer">Machine learning algorithms</li>
                        <li className="p-2 rounded hover:bg-[#222222]/50 cursor-pointer">Space exploration timeline</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bookmarks" className="border-gray-700">
                    <AccordionTrigger className="text-gray-300 hover:text-white">
                      Saved Answers
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      <ul className="space-y-2">
                        <li className="p-2 rounded hover:bg-[#222222]/50 cursor-pointer">How GPT models work</li>
                        <li className="p-2 rounded hover:bg-[#222222]/50 cursor-pointer">Quantum entanglement explained</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="settings" className="border-gray-700">
                    <AccordionTrigger className="text-gray-300 hover:text-white">
                      Settings
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Dark mode</span>
                          <span className="text-purple-400">Enabled</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>AI Model</span>
                          <span className="text-purple-400">Advanced</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
};

export default Index;
