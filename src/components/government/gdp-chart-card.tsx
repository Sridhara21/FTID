"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { gdpData } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp } from "lucide-react";

const chartConfig = {
  gdp: {
    label: "GDP (Trillions INR)",
    color: "hsl(var(--primary))",
  },
};

export function GdpChartCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Real-Time GDP Tracking</CardTitle>
            <CardDescription>Aggregated from FTID transaction data.</CardDescription>
        </div>
        <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
        </Button>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <ResponsiveContainer>
            <AreaChart
              data={gdpData}
              margin={{ top: 5, right: 20, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.gdp.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={chartConfig.gdp.color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
                tickFormatter={(value) => `₹${value}T`}
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" formatter={(value) => `₹${value}T`}/>}
              />
              <Area
                dataKey="gdp"
                type="natural"
                fill="url(#colorGdp)"
                stroke={chartConfig.gdp.color}
                stackId="a"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <p className="text-sm">
                <span className="font-semibold text-accent">+7.8%</span>
                <span className="text-muted-foreground"> vs last year</span>
            </p>
        </div>
        <p className="text-sm text-muted-foreground">Updated 2 minutes ago</p>
      </CardFooter>
    </Card>
  );
}
