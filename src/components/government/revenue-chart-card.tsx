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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const chartConfig = {
  value: { label: "Trillions (INR)" },
  "Income Tax": { label: "Income Tax", color: "hsl(var(--chart-1))" },
  "Corporate Tax": { label: "Corporate Tax", color: "hsl(var(--chart-2))" },
  "GST": { label: "GST", color: "hsl(var(--chart-3))" },
  "Customs": { label: "Customs", color: "hsl(var(--chart-4))" },
  "Other Receipts": { label: "Other Receipts", color: "hsl(var(--chart-5))" },
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
    <Card className="flex flex-col h-full border-primary/20 bg-card/50">
      <CardHeader className="pb-3 border-b border-border/30">
        <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Banknote className="h-5 w-5 text-primary" />
                Revenue Analytics
            </CardTitle>
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest bg-primary/5 px-2.5">FY 2026-27 EST</Badge>
        </div>
        <CardDescription className="text-[10px] uppercase font-bold tracking-widest mt-1">
            Structural analysis of sovereign yield streams.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col pt-6">
        <div className="flex justify-center mb-6">
            <ChartContainer
                config={chartConfig}
                className="aspect-square w-full max-h-[180px]"
            >
                <ResponsiveContainer>
                    <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel formatter={(value, name) => `${name}: ${(Number(value) / totalRevenue * 100).toFixed(1)}% (₹${value}T)`} />}
                    />
                    <Pie
                        data={revenueData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="65%"
                        paddingAngle={3}
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
        
        <div className="flex-1">
           <TooltipProvider>
           <Table>
              <TableHeader className="bg-secondary/20">
                <TableRow className="hover:bg-transparent border-b">
                  <TableHead className="h-10 text-[10px] uppercase font-black tracking-widest py-2">Source</TableHead>
                  <TableHead className="h-10 text-right text-[10px] uppercase font-black tracking-widest py-2">Yield (₹T)</TableHead>
                  <TableHead className="h-10 text-right text-[10px] uppercase font-black tracking-widest py-2">Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {revenueData.map((item) => (
                  <TableRow key={item.name} className="hover:bg-secondary/10 border-b last:border-0 group">
                    <TableCell className="py-2.5 font-bold flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform" style={{ backgroundColor: item.fill }} />
                      <span className="text-xs">{item.name}</span>
                    </TableCell>
                    <TableCell className="py-2.5 text-right font-mono text-xs tabular-nums font-bold">
                        ₹{item.value.toFixed(1)}T
                    </TableCell>
                    <TableCell className="py-2.5 text-right">
                       <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge variant={getRiskBadgeVariant(item.risk)} className="text-[9px] px-2 py-0 h-5 uppercase font-black leading-none cursor-help tracking-widest">
                                {item.risk}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent className="text-[10px] bg-background border-primary/20">
                            Macro-economic sensitivity score based on collection volatility.
                          </TooltipContent>
                       </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </TooltipProvider>
            <div className="mt-4 p-3 rounded bg-secondary/20 border border-border/50">
                <p className="text-[10px] text-muted-foreground leading-relaxed font-bold uppercase tracking-widest">
                    <span className="text-primary">AUDIT:</span> Structural risk weighted against seasonal volatility.
                </p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
