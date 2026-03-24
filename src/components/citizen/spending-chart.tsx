"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Label } from "recharts";
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
  const totalSpending = spendingCategoryData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card className="flex flex-col h-full border-border/50 bg-secondary/5">
      <CardHeader className="pb-2 border-b border-border/30">
        <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 text-primary" /> Spending Breakdown
        </CardTitle>
        <CardDescription className="text-[10px] uppercase font-bold tracking-tight">Monthly Outflow Analysis</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-6">
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
                innerRadius="70%"
                outerRadius="95%"
                paddingAngle={4}
                strokeWidth={0}
              >
                {spendingCategoryData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.fill} className="hover:opacity-80 transition-opacity" />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-lg font-black font-mono tabular-nums"
                          >
                            ₹{(totalSpending / 1000).toFixed(1)}k
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 18}
                            className="fill-muted-foreground text-[9px] uppercase font-bold tracking-widest"
                          >
                            Total Out
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
          {spendingCategoryData.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-[9px] font-bold p-1.5 rounded-sm bg-secondary/20">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.fill }} />
                <span className="uppercase tracking-widest opacity-70 truncate max-w-[60px]">{item.name}</span>
              </div>
              <span className="font-mono tabular-nums">₹{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}