import React from "react";
import { threatFeedCategories } from "@/data/threatFeeds";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ThreatFeedsProps {
  searchedIP?: string;
}

const ThreatFeeds = ({ searchedIP }: ThreatFeedsProps) => {
  const handleFeedClick = (provider: string) => {
    // Add http:// if the URL doesn't start with a protocol
    const url = provider.startsWith('http') ? provider : `https://${provider}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const isMatch = (feedType: string) => {
    if (!searchedIP) return false;
    return feedType === "ip";
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Threat Intelligence Sources</h2>
      <Accordion type="single" collapsible className="w-full">
        {threatFeedCategories.map((category, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg">
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.feeds.length}
              </Badge>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {category.feeds.map((feed, feedIndex) => (
                  <div
                    key={feedIndex}
                    onClick={() => handleFeedClick(feed.provider)}
                    className={`p-4 rounded-lg border transition-colors cursor-pointer hover:bg-accent group ${
                      isMatch(feed.type)
                        ? "border-red-500 bg-red-50 hover:bg-red-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{feed.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Provider: {feed.provider}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Format: {feed.format}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ThreatFeeds;