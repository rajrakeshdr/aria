import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Activity } from "lucide-react";

export interface ThreatResult {
  id: string;
  type: string;
  indicator: string;
  severity: "high" | "medium" | "low";
  lastSeen: string;
  confidence: number;
}

const ThreatResults = ({ results }: { results: ThreatResult[] }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="h-4 w-4" />;
      case "medium":
        return <Activity className="h-4 w-4" />;
      case "low":
        return <Shield className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Indicator</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Last Seen</TableHead>
            <TableHead>Confidence</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-medium">{result.type}</TableCell>
              <TableCell>{result.indicator}</TableCell>
              <TableCell>
                <Badge className={`${getSeverityColor(result.severity)} flex items-center gap-1`}>
                  {getSeverityIcon(result.severity)}
                  {result.severity}
                </Badge>
              </TableCell>
              <TableCell>{result.lastSeen}</TableCell>
              <TableCell>{result.confidence}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ThreatResults;