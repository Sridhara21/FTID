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
import { sectorActivityData } from "@/lib/placeholder-data";
import { Cpu, Zap } from "lucide-react";

const chartConfig = {
  value: { label: "Activity %" },
};

export function SectorActivityChart() {
  return (
    <Card className="border-border/50 bg-card/50 h-full">
      <CardHeader className="pb-2 border-b border-border/10">
        <div className="flex items-center justify-between">
            <CardTitle className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2">
                <Cpu className="h-4 w-4 text-primary" /> Sectoral Breakdown
            </CardTitle>
            <Zap className="h-3.5 w-3.5 text-accent animate-pulse" />
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex flex-col items-center justify-center">
        <ChartContainer config={chartConfig} className="h-[180px] w-full max-w-[200px]">
          <ResponsiveContainer>
            <PieChart>
              <Tooltip cursor={false} content={<ChartTooltipContent hideLabel formatter={(v) => `${v}%`} />} />
              <Pie
                data={sectorActivityData}
                dataKey="value"
                nameKey="name"
                innerRadius="65%"
                outerRadius="95%"
                paddingAngle={4}
                strokeWidth={0}
              >
                {sectorActivityData.map((entry) => (
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
                            100%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 16}
                            className="fill-muted-foreground text-[8px] uppercase font-bold tracking-widest"
                          >
                            Total Activity
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
        <div className="mt-6 w-full grid grid-cols-2 gap-2">
          {sectorActivityData.map(item => (
            <div key={item.name} className="flex items-center justify-between p-2 rounded bg-secondary/20 border border-border/30">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.fill }} />
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">{item.name}</span>
              </div>
              <span className="text-[10px] font-mono font-black tabular-nums text-primary">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
