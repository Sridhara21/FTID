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
import { Banknote, TrendingDown, TrendingUp, Info } from "lucide-react";
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
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Banknote className="h-5 w-5 text-primary" />
                Revenue & Tax Analytics
            </CardTitle>
            <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest bg-primary/5">FY 2026-27 ESTIMATES</Badge>
        </div>
        <CardDescription className="text-xs">
            Structural analysis of sovereign revenue streams and institutional dependency risk.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
        <div className="md:col-span-4 flex justify-center">
            <ChartContainer
                config={chartConfig}
                className="aspect-square w-full max-h-[240px]"
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
        
        <div className="md:col-span-8">
           <TooltipProvider>
           <Table>
              <TableHeader className="bg-secondary/20">
                <TableRow className="hover:bg-transparent border-b">
                  <TableHead className="h-8 text-[10px] uppercase font-bold">Revenue Source</TableHead>
                  <TableHead className="h-8 text-right text-[10px] uppercase font-bold">Yield (₹T)</TableHead>
                  <TableHead className="h-8 text-right text-[10px] uppercase font-bold">Growth</TableHead>
                  <TableHead className="h-8 text-right text-[10px] uppercase font-bold">
                    <div className="flex items-center justify-end gap-1">
                      Risk <Info className="h-3 w-3 opacity-50" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {revenueData.map((item) => (
                  <TableRow key={item.name} className="hover:bg-secondary/10 border-b last:border-0 group">
                    <TableCell className="py-2.5 font-medium flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform" style={{ backgroundColor: item.fill }} />
                      <span className="text-xs font-bold whitespace-nowrap">{item.name}</span>
                    </TableCell>
                    <TableCell className="py-2.5 text-right font-mono text-xs tabular-nums font-bold">
                        ₹{item.value.toFixed(1)}T
                    </TableCell>
                    <TableCell className={cn(
                        "py-2.5 text-right font-mono text-xs tabular-nums flex items-center justify-end gap-1 font-bold", 
                        item.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    )}>
                      {item.growth.startsWith('+') ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {item.growth}
                    </TableCell>
                    <TableCell className="py-2.5 text-right">
                       <Tooltip>
                          <TooltipTrigger>
                            <Badge variant={getRiskBadgeVariant(item.risk)} className="text-[9px] px-1.5 py-0 h-4 uppercase font-bold leading-none cursor-help">
                                {item.risk}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent className="text-[10px]">
                            Assessment based on market sensitivity and collection volatility.
                          </TooltipContent>
                       </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </TooltipProvider>
            <div className="mt-4 p-3 rounded bg-secondary/20 border border-border/50">
                <p className="text-[10px] text-muted-foreground leading-relaxed font-medium uppercase tracking-tighter">
                    <span className="font-bold text-primary">AUDIT NOTE:</span> Dependency risk is weighted against seasonal volatility and external market shocks. {revenueData.find(r => r.risk === 'High')?.name || 'Indirect tax'} streams show higher sensitivity to consumer sentiment.
                </p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
