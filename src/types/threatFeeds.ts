export interface ThreatFeed {
  name: string;
  provider: string;
  format: string;
  description?: string;
  type: 'ip' | 'domain' | 'hash' | 'url' | 'multiple';
}

export interface ThreatFeedCategory {
  name: string;
  feeds: ThreatFeed[];
}