import { ThreatFeedCategory } from "@/types/threatFeeds";

export const threatFeedCategories: ThreatFeedCategory[] = [
  {
    name: "IP Blocklists",
    feeds: [
      {
        name: "abuse.ch SSL IPBL",
        provider: "abuse.ch",
        format: "csv",
        type: "ip",
      },
      {
        name: "alienvault reputation generic",
        provider: "alienvault.com",
        format: "csv",
        type: "ip",
      },
      {
        name: "blocklist.greensnow.co",
        provider: "greensnow.co",
        format: "csv",
        type: "ip",
      },
      // ... and so on for IP-related feeds
    ],
  },
  {
    name: "Domain Lists",
    feeds: [
      {
        name: "All current domains belonging to known malicious DGAs",
        provider: "osint.bambenekconsulting.com",
        format: "csv",
        type: "domain",
      },
      {
        name: "List of malicious domains in Poland",
        provider: "CERT-PL",
        format: "freetext",
        type: "domain",
      },
      // ... and so on for domain-related feeds
    ],
  },
  {
    name: "Hash Databases",
    feeds: [
      {
        name: "List of malicious hashes",
        provider: "Banco do Brasil S.A",
        format: "csv",
        type: "hash",
      },
      {
        name: "Malware Bazaar",
        provider: "abuse.ch",
        format: "csv",
        type: "hash",
      },
      // ... and so on for hash-related feeds
    ],
  },
];