"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
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
import { sectorActivityData } from "@/lib/placeholder-data";
import { Cpu } from "lucide-react";

const chartConfig = {
  value: { label: "Activity %" },
};

export function SectorActivityChart() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-2 border-b border-border/10">
        <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
          <Cpu className="h-4 w-4 text-primary" /> Sector-wise Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex items-center justify-center">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <ResponsiveContainer>
            <PieChart>
              <Tooltip cursor={false} content={<ChartTooltipContent hideLabel formatter={(v) => `${v}%`} />} />
              <Pie
                data={sectorActivityData}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                outerRadius="90%"
                paddingAngle={4}
                strokeWidth={0}
              >
                {sectorActivityData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex flex-col gap-2 ml-4">
          {sectorActivityData.map(item => (
            <div key={item.name} className="flex items-center gap-2 text-[10px] font-bold">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.fill }} />
              <span className="opacity-60">{item.name}</span>
              <span className="font-mono">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
