"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
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
import { revenueData } from "@/lib/placeholder-data";

const chartConfig = {
  value: { label: "Revenue" },
  income: { label: "Income Tax", color: "hsl(var(--chart-1))" },
  corporate: { label: "Corporate Tax", color: "hsl(var(--chart-2))" },
  gst: { label: "GST", color: "hsl(var(--chart-3))" },
  customs: { label: "Customs", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
};

export function RevenueChartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Tax Dashboard</CardTitle>
        <CardDescription>Breakdown of revenue sources (in Trillions of INR)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer>
            <BarChart
              data={revenueData}
              layout="vertical"
              margin={{ left: 10, right: 20 }}
            >
              <CartesianGrid horizontal={false} strokeDasharray="3 3"/>
              <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
                stroke="hsl(var(--muted-foreground))"
              />
              <XAxis 
                type="number" 
                tickLine={false} 
                axisLine={false}
                tickMargin={10}
                stroke="hsl(var(--muted-foreground))"
                tickFormatter={(value) => `₹${value}`}
              />
              <Tooltip cursor={false} content={<ChartTooltipContent formatter={(value) => `₹${value}T`} />} />
              <Bar dataKey="value" layout="vertical" radius={4}>
                {revenueData.map((entry) => (
                    <Bar key={entry.name} dataKey="value" name={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
