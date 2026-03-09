
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
    <Card className="flex flex-col h-full border-border/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Banknote className="h-5 w-5 text-primary" />
                Revenue & Tax Analytics
            </CardTitle>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">FY 2025-26 Snapshot</span>
        </div>
        <CardDescription className="text-xs">
            Structural analysis of national revenue streams and institutional dependency risk.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
        <div className="md:col-span-5 flex justify-center">
            <ChartContainer
                config={chartConfig}
                className="aspect-square w-full max-h-[220px]"
            >
                <ResponsiveContainer>
                    <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel formatter={(value, name) => `${name}: ${(Number(value) / totalRevenue * 100).toFixed(0)}% (₹${value}T)`} />}
                    />
                    <Pie
                        data={revenueData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="65%"
                        paddingAngle={2}
                        strokeWidth={0}
                    >
                        {revenueData.map((entry) => (
                        <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </ChartContainer>
        </div>
        
        <div className="md:col-span-7">
           <Table>
              <TableHeader className="bg-secondary/20">
                <TableRow className="hover:bg-transparent border-b">
                  <TableHead className="h-8 text-[10px] uppercase font-bold">Source</TableHead>
                  <TableHead className="h-8 text-right text-[10px] uppercase font-bold">Value (₹T)</TableHead>
                  <TableHead className="h-8 text-right text-[10px] uppercase font-bold">Growth</TableHead>
                  <TableHead className="h-8 text-right text-[10px] uppercase font-bold">Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {revenueData.map((item) => (
                  <TableRow key={item.name} className="hover:bg-secondary/10 border-b last:border-0">
                    <TableCell className="py-2.5 font-medium flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.fill }} />
                      <span className="text-xs whitespace-nowrap">{item.name}</span>
                    </TableCell>
                    <TableCell className="py-2.5 text-right font-mono text-xs tabular-nums">
                        ₹{item.value.toFixed(1)}T
                    </TableCell>
                    <TableCell className={cn(
                        "py-2.5 text-right font-mono text-xs tabular-nums flex items-center justify-end gap-1", 
                        item.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    )}>
                      {item.growth.startsWith('+') ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {item.growth}
                    </TableCell>
                    <TableCell className="py-2.5 text-right">
                       <Badge variant={getRiskBadgeVariant(item.risk)} className="text-[9px] px-1.5 py-0 h-4 uppercase font-bold leading-none">
                            {item.risk}
                       </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 p-2 rounded bg-secondary/30 border border-border/30">
                <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                    * Dependency risk is calculated based on seasonal volatility and external market sensitivity of {revenueData.find(r => r.risk === 'High')?.name || 'key sectors'}.
                </p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
