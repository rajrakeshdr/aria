import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WhoisData {
  ip: string;
  organization?: string;
  country?: string;
  city?: string;
  network?: string;
  registrar?: string;
  lastUpdated?: string;
}

interface WhoisInfoProps {
  data: WhoisData | null;
  isVisible: boolean;
}

const WhoisInfo = ({ data, isVisible }: WhoisInfoProps) => {
  if (!isVisible || !data) return null;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-lg">WHOIS Information for {data.ip}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.organization && (
          <div>
            <span className="font-medium">Organization:</span> {data.organization}
          </div>
        )}
        {data.country && (
          <div>
            <span className="font-medium">Country:</span> {data.country}
          </div>
        )}
        {data.city && (
          <div>
            <span className="font-medium">City:</span> {data.city}
          </div>
        )}
        {data.network && (
          <div>
            <span className="font-medium">Network:</span> {data.network}
          </div>
        )}
        {data.registrar && (
          <div>
            <span className="font-medium">Registrar:</span> {data.registrar}
          </div>
        )}
        {data.lastUpdated && (
          <div>
            <span className="font-medium">Last Updated:</span> {data.lastUpdated}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WhoisInfo;