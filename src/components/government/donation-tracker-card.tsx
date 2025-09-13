import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { donationData } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";

export function DonationTrackerCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Election & Donation Transparency</CardTitle>
        <CardDescription>
          Tracking of political contributions for major elections.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Election</TableHead>
              <TableHead>Donor</TableHead>
              <TableHead>Party</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donationData.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell className="font-medium">{donation.election}</TableCell>
                <TableCell>{donation.donor}</TableCell>
                <TableCell>
                  <Badge variant="outline">{donation.party}</Badge>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {donation.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
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
