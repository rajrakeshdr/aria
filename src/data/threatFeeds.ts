import { ThreatFeedCategory } from "@/types/threatFeeds";

export const threatFeedCategories: ThreatFeedCategory[] = [
  {
    name: "IP Blocklists",
    feeds: [
      {
        name: "abuse.ch SSL IPBL",
        provider: "sslbl.abuse.ch/blacklist",
        format: "csv",
        type: "ip",
      },
      {
        name: "alienvault reputation generic",
        provider: "reputation.alienvault.com/reputation.generic",
        format: "csv",
        type: "ip",
      },
      {
        name: "blocklist.greensnow.co",
        provider: "blocklist.greensnow.co/greensnow.txt",
        format: "csv",
        type: "ip",
      },
      {
        name: "Feodo IP Blocklist",
        provider: "feodotracker.abuse.ch/downloads/ipblocklist.txt",
        format: "csv",
        type: "ip",
      },
      {
        name: "IP protocol 41",
        provider: "dataplane.org/protocol41.txt",
        format: "csv",
        type: "ip",
      },
      {
        name: "James Brine Bruteforce IPs",
        provider: "jamesbrine.com.au/iplist.txt",
        format: "csv",
        type: "ip",
      },
      {
        name: "malsilo.ipv4",
        provider: "malsilo.gitlab.io/feeds/ips.txt",
        format: "csv",
        type: "ip",
      },
      {
        name: "Threatview.io - IP Blocklist",
        provider: "threatview.io/Downloads/IP_Feeds.txt",
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
        provider: "osint.bambenekconsulting.com/feeds/dga-feed.txt",
        format: "csv",
        type: "domain",
      },
      {
        name: "List of malicious domains in Poland",
        provider: "cert.pl/posts/2015/11/zeus_domains/",
        format: "freetext",
        type: "domain",
      },
      {
        name: "malsilo.domain",
        provider: "malsilo.gitlab.io/feeds/domains.txt",
        format: "csv",
        type: "domain",
      },
      {
        name: "Domains from High-Confidence DGA-based C&C Domains",
        provider: "osint.bambenekconsulting.com/feeds/c2-dommasterlist.txt",
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
        provider: "bb.com.br/malware-hashes.txt",
        format: "csv",
        type: "hash",
      },
      {
        name: "Malware Bazaar",
        provider: "bazaar.abuse.ch/export/txt/md5/recent/",
        format: "csv",
        type: "hash",
      },
      {
        name: "Threatview.io - MD5 Hash Blocklist",
        provider: "threatview.io/Downloads/MD5_Feed.txt",
        format: "freetext",
        type: "hash",
      },
      {
        name: "Threatview.io - SHA File Hash Blocklist",
        provider: "threatview.io/Downloads/SHA_Feed.txt",
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
        provider: "api.cybercure.ai/feed/get_url",
        format: "csv",
        type: "url",
      },
      {
        name: "malsilo.url",
        provider: "malsilo.gitlab.io/feeds/urls.txt",
        format: "csv",
        type: "url",
      },
      {
        name: "OpenPhish url list",
        provider: "openphish.com/feed.txt",
        format: "freetext",
        type: "url",
      },
      {
        name: "URLHaus Malware URLs",
        provider: "urlhaus.abuse.ch/downloads/text/",
        format: "csv",
        type: "url",
      }
    ],
  }
];