"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, BarChart2, TrendingUp, TrendingDown } from "lucide-react";

export default function EconomicObservatoryPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">National Economic Observatory</h1>
        <p className="text-muted-foreground">
          Real-time macroeconomic heatmaps and sectoral performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Real-time GDP", value: "₹284.2T", trend: "up", icon: TrendingUp },
          { label: "Inflation Core", value: "4.12%", trend: "down", icon: TrendingDown },
          { label: "Exports", value: "$42.1B", trend: "up", icon: TrendingUp },
          { label: "FDI Inflow", value: "$3.8B", trend: "down", icon: TrendingDown },
        ].map((stat) => (
          <Card key={stat.label} className="border-border/50 bg-secondary/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.trend === "up" ? "text-green-500" : "text-orange-500"}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="flex-1 min-h-[400px] border-border/50 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-background to-background"></div>
        <div className="z-10 flex flex-col items-center text-center">
          <Globe className="h-16 w-16 text-indigo-500 opacity-50 mb-4 animate-[spin_20s_linear_infinite]" />
          <h2 className="text-xl font-bold">Sectoral Heatmap Projection</h2>
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            Loading geographical high-frequency indicators across 28 states and 8 union territories...
          </p>
        </div>
      </Card>
    </div>
  );
}
