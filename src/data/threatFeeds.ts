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
      {
        name: "Feodo IP Blocklist",
        provider: "abuse.ch",
        format: "csv",
        type: "ip",
      },
      {
        name: "IP protocol 41",
        provider: "dataplane.org",
        format: "csv",
        type: "ip",
      },
      {
        name: "James Brine Bruteforce IPs",
        provider: "jamesbrine.com.au",
        format: "csv",
        type: "ip",
      },
      {
        name: "malsilo.ipv4",
        provider: "MalSilo",
        format: "csv",
        type: "ip",
      },
      {
        name: "Threatview.io - IP Blocklist",
        provider: "threatview.io",
        format: "freetext",
        type: "ip",
      }
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
      {
        name: "malsilo.domain",
        provider: "MalSilo",
        format: "csv",
        type: "domain",
      },
      {
        name: "Domains from High-Confidence DGA-based C&C Domains",
        provider: "osint.bambenekconsulting.com",
        format: "csv",
        type: "domain",
      }
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
      {
        name: "Threatview.io - MD5 Hash Blocklist",
        provider: "threatview.io",
        format: "freetext",
        type: "hash",
      },
      {
        name: "Threatview.io - SHA File Hash Blocklist",
        provider: "threatview.io",
        format: "freetext",
        type: "hash",
      }
    ],
  },
  {
    name: "URL Lists",
    feeds: [
      {
        name: "CyberCure - Blocked URL Feed",
        provider: "www.cybercure.ai",
        format: "csv",
        type: "url",
      },
      {
        name: "malsilo.url",
        provider: "MalSilo",
        format: "csv",
        type: "url",
      },
      {
        name: "OpenPhish url list",
        provider: "openphish.com",
        format: "freetext",
        type: "url",
      },
      {
        name: "URLHaus Malware URLs",
        provider: "abuse.ch",
        format: "csv",
        type: "url",
      }
    ],
  }
];