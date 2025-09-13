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
  value: { label: "Percentage" },
  healthcare: { label: "Healthcare", color: "hsl(var(--chart-1))" },
  housing: { label: "Housing", color: "hsl(var(--chart-2))" },
  education: { label: "Education", color: "hsl(var(--chart-3))" },
  agriculture: { label: "Agriculture", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
};

export function SubsidyDistributionChart() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Subsidy Distribution</CardTitle>
        <CardDescription>Allocation of national subsidies by sector.</CardDescription>
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
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={subsidyDistributionData}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                strokeWidth={5}
              >
                {subsidyDistributionData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.fill} />
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
