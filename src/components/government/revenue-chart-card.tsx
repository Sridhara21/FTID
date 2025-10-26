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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { revenueData } from "@/lib/placeholder-data";
import { Banknote } from "lucide-react";

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

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Banknote />
            Revenue & Tax Dashboard
        </CardTitle>
        <CardDescription>Breakdown of revenue sources for FY 2025-26 (in Trillions of INR).</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
         <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <ResponsiveContainer>
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel formatter={(value) => `₹${value}T`} />}
              />
              <Pie
                data={revenueData}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                strokeWidth={5}
              >
                {revenueData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                ))}
              </Pie>
               <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="flex-wrap gap-x-4 gap-y-1"
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
