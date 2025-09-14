"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";
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
import { incomeExpenseData } from "@/lib/placeholder-data";
import { LineChart } from "lucide-react";

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-2))",
  },
  expense: {
    label: "Expense",
    color: "hsl(var(--chart-1))",
  },
};

export function IncomeExpenseChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><LineChart />Financial Analysis</CardTitle>
        <CardDescription>Income vs. Expense for the last 6 months.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer>
            <BarChart data={incomeExpenseData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                stroke="hsl(var(--muted-foreground))"
                tickFormatter={(value) => `₹${value / 1000}k`}
              />
              <Tooltip cursor={false} content={<ChartTooltipContent formatter={(value, name) => `${name}: ₹${value.toLocaleString()}`} />} />
              <Legend />
              <Bar dataKey="income" fill={chartConfig.income.color} radius={[4, 4, 0, 0]} />
              <Bar dataKey="expense" fill={chartConfig.expense.color} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
