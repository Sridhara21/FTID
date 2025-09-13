import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { subsidies } from "@/lib/placeholder-data";

export function SubsidyTrackerCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance & Subsidy Tracker</CardTitle>
        <CardDescription>
          Overview of your government-provided benefits.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Benefit Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Monthly Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subsidies.map((subsidy) => (
              <TableRow key={subsidy.id}>
                <TableCell className="font-medium flex items-center gap-3">
                  <div className="p-2 bg-secondary rounded-md hidden sm:block">
                     <subsidy.icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  {subsidy.name}
                </TableCell>
                <TableCell>
                  <Badge variant={subsidy.status === 'Active' ? 'default' : 'secondary'} className={subsidy.status === 'Active' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}>
                    {subsidy.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {subsidy.amount.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}