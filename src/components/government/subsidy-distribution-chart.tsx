"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts";
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
  ChartLegendContent
} from "@/components/ui/chart";
import { subsidyDistributionData } from "@/lib/placeholder-data";

const chartConfig = {
  value: { label: "Crores (INR)" },
  Food: { label: "Food", color: "hsl(var(--chart-1))" },
  Fertiliser: { label: "Fertiliser", color: "hsl(var(--chart-2))" },
  Petroleum: { label: "Petroleum", color: "hsl(var(--chart-3))" },
  Interest: { label: "Interest", color: "hsl(var(--chart-4))" },
  Other: { label: "Other", color: "hsl(var(--chart-5))" },
};

export function SubsidyDistributionChart() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Subsidy Distribution (in Crores)</CardTitle>
        <CardDescription>Allocation of national subsidies by sector for FY 2025-26.</CardDescription>
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
                content={<ChartTooltipContent hideLabel formatter={(value, name) => `${name}: ₹${Number(value).toLocaleString('en-IN')} Cr`} />}
              />
              <Pie
                data={subsidyDistributionData}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                strokeWidth={5}
                labelLine={false}
                label={({ percent, name }) => {
                    if (percent < 0.05) return null;
                    return `${name} (${(percent * 100).toFixed(0)}%)`
                }}
              >
                {subsidyDistributionData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.fill} name={entry.name} />
                ))}
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
