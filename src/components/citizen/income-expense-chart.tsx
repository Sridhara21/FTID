
"use client";

import React from "react";
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
    color: "hsl(142.1 76.2% 36.3%)",
  },
  expense: {
    label: "Expense",
    color: "hsl(var(--chart-1))",
  },
};

export function IncomeExpenseChart({ transactions }: { transactions: any[] | null }) {
  const dynamicData = React.useMemo(() => {
    if (!transactions || transactions.length === 0) return incomeExpenseData;
    const monthly: Record<string, { name: string, income: number, expense: number }> = {};
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    transactions.forEach(t => {
        const d = new Date(t.timestamp);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        if (!monthly[key]) {
            monthly[key] = { name: monthNames[d.getMonth()], income: 0, expense: 0 };
        }
        if (t.amount > 0) monthly[key].income += t.amount;
        else monthly[key].expense += Math.abs(t.amount);
    });
    
    const out = Object.values(monthly).slice(0, 6).reverse(); // Last 6 months with data
    return out.length > 0 ? out : incomeExpenseData;
  }, [transactions]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><LineChart />Financial Analysis</CardTitle>
        <CardDescription>Income vs. Expense for the last 6 months.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer>
            <BarChart data={dynamicData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
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
