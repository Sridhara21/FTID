
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { subsidies } from "@/lib/placeholder-data";
import { HandCoins, HelpCircle, CheckCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export function SubsidyTrackerCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><HandCoins />Subsidy & Welfare Tracker</CardTitle>
        <CardDescription>
          Transparent overview of your government-provided benefits, verified via FTID flow analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Benefit Name</TableHead>
              <TableHead>Source Ministry</TableHead>
              <TableHead>Disbursement</TableHead>
              <TableHead className="text-right">FTID Verification</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TooltipProvider>
                {subsidies.map((subsidy) => (
                <TableRow key={subsidy.id}>
                    <TableCell className="font-medium flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded-md hidden sm:block">
                        <subsidy.icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    {subsidy.name}
                     <Tooltip>
                        <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Eligibility: {subsidy.eligibility}</p>
                        </TooltipContent>
                    </Tooltip>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-xs">{subsidy.sourceMinistry}</TableCell>
                    <TableCell>
                        <div className="flex flex-col">
                            <span className="font-mono text-sm">
                                {subsidy.amount > 0 ? subsidy.amount.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }) : "Coverage"}
                            </span>
                            <span className="text-xs text-muted-foreground">{subsidy.timeline}</span>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">
                         {subsidy.ftidVerified ? (
                            <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/20">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Verified
                            </Badge>
                         ) : (
                            <Badge variant="secondary">N/A</Badge>
                         )}
                    </TableCell>
                </TableRow>
                ))}
            </TooltipProvider>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
