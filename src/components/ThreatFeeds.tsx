import React from "react";
import { threatFeedCategories } from "@/data/threatFeeds";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface ThreatFeedsProps {
  searchedIP?: string;
}

const ThreatFeeds = ({ searchedIP }: ThreatFeedsProps) => {
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
                    className={`p-4 rounded-lg border ${
                      searchedIP && feed.type === "ip"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="font-medium">{feed.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Provider: {feed.provider}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Format: {feed.format}
                    </p>
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