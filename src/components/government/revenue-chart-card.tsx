
"use client";

import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { revenueData } from "@/lib/placeholder-data";
import { Banknote, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const chartConfig = {
  value: { label: "Trillions (INR)" },
  "Income Tax": { label: "Income Tax", color: "hsl(var(--chart-1))" },
  "Corporate Tax": { label: "Corporate Tax", color: "hsl(var(--chart-2))" },
  "GST": { label: "GST", color: "hsl(var(--chart-3))" },
  "Customs": { label: "Customs", color: "hsl(var(--chart-4))" },
  "Other": { label: "Other", color: "hsl(var(--chart-5))" },
};

export function RevenueChartCard() {
  const totalRevenue = revenueData.reduce((acc, curr) => acc + curr.value, 0);

  const getRiskBadgeVariant = (risk: string) => {
    switch(risk.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Banknote />
            Revenue & Tax Analytics
        </CardTitle>
        <CardDescription>Analysis of revenue structure, stability, and risk for FY 2025-26.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer>
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel formatter={(value, name) => `${name}: ${(value / totalRevenue * 100).toFixed(0)}% (₹${value}T)`} />}
              />
              <Pie
                data={revenueData}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                strokeWidth={2}
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {revenueData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div>
           <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead className="text-right">Growth</TableHead>
                  <TableHead className="text-right">Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {revenueData.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }} />
                      {item.name}
                    </TableCell>
                    <TableCell className={cn("text-right font-mono text-sm flex items-center justify-end gap-1", item.growth.startsWith('+') ? 'text-green-400' : 'text-red-400')}>
                      {item.growth.startsWith('+') ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {item.growth}
                    </TableCell>
                    <TableCell className="text-right">
                       <Badge variant={getRiskBadgeVariant(item.risk)} className="text-xs">{item.risk}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
      </CardContent>
    </Card>
  );
}

    