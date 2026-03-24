"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, ComposedChart, Area } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { gdpComposedData } from "@/lib/placeholder-data";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  gdp: { label: "GDP (₹T)", color: "hsl(var(--primary))" },
  consumption: { label: "Consumption (₹T)", color: "hsl(var(--chart-2))" },
  tax: { label: "Tax Collection (₹T)", color: "hsl(var(--chart-3))" },
};

export function MultiMetricChart() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-2 border-b border-border/10">
        <CardTitle className="text-sm font-black uppercase tracking-institutional flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" /> Macro-Economic Velocity
        </CardTitle>
        <CardDescription className="text-xs">Comparative tracking of production, consumption, and sovereign yield.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer>
            <ComposedChart data={gdpComposedData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.gdp.color} stopOpacity={0.2}/>
                  <stop offset="95%" stopColor={chartConfig.gdp.color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} stroke="hsl(var(--muted-foreground))" className="text-[10px] uppercase font-bold" />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `₹${v}T`} className="text-[10px] font-mono" />
              <Tooltip cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '4 4' }} content={<ChartTooltipContent indicator="dot" formatter={(v) => `₹${v}T`} />} />
              <Legend className="text-[10px] uppercase font-bold" />
              <Area type="monotone" dataKey="gdp" fill="url(#colorGdp)" stroke="none" />
              <Line type="monotone" dataKey="gdp" stroke={chartConfig.gdp.color} strokeWidth={3} dot={false} activeDot={{ r: 4 }} />
              <Line type="monotone" dataKey="consumption" stroke={chartConfig.consumption.color} strokeWidth={2} strokeDasharray="5 5" dot={false} />
              <Line type="monotone" dataKey="tax" stroke={chartConfig.tax.color} strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
