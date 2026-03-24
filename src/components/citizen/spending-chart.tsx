"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";
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
import { spendingCategoryData } from "@/lib/placeholder-data";
import { ShoppingCart } from "lucide-react";

const chartConfig = {
  value: { label: "Amount (₹)" },
  Housing: { label: "Housing", color: "hsl(var(--chart-1))" },
  Groceries: { label: "Groceries", color: "hsl(var(--chart-2))" },
  Transport: { label: "Transport", color: "hsl(var(--chart-3))" },
  Leisure: { label: "Leisure", color: "hsl(var(--chart-4))" },
  Utilities: { label: "Utilities", color: "hsl(var(--chart-5))" },
};

export function SpendingChart() {
  return (
    <Card className="flex flex-col h-full border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 text-primary" /> Spending Breakdown
        </CardTitle>
        <CardDescription className="text-xs">Category-wise monthly allocation.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[220px]"
        >
          <ResponsiveContainer>
            <PieChart>
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel formatter={(value) => `₹${value.toLocaleString()}`} />}
              />
              <Pie
                data={spendingCategoryData}
                dataKey="value"
                nameKey="name"
                innerRadius="65%"
                strokeWidth={0}
              >
                {spendingCategoryData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 space-y-2">
          {spendingCategoryData.slice(0, 3).map((item) => (
            <div key={item.name} className="flex items-center justify-between text-[10px] font-bold">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.fill }} />
                <span className="uppercase tracking-widest opacity-60">{item.name}</span>
              </div>
              <span className="font-mono tabular-nums">₹{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
