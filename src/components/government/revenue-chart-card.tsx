"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table";
import { revenueData } from "@/lib/placeholder-data";
import { Banknote } from "lucide-react";

export function RevenueChartCard() {
  const totalRevenue = revenueData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Banknote />
            Revenue & Tax Dashboard
        </CardTitle>
        <CardDescription>Breakdown of revenue sources (in Trillions of INR).</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead className="text-right">Amount (₹ Trillion)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {revenueData.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.fill}}/>
                    {item.name}
                </TableCell>
                <TableCell className="text-right font-mono">{item.value.toLocaleString('en-IN')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
                <TableHead>Total Revenue</TableHead>
                <TableHead className="text-right font-mono font-bold">{totalRevenue.toLocaleString('en-IN')}</TableHead>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
