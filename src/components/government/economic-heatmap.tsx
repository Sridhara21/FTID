"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stateHeatmapData } from "@/lib/placeholder-data";
import { Factory } from "lucide-react";

export function EconomicHeatmap() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-2 border-b border-border/10">
        <CardTitle className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2">
          <Factory className="h-4 w-4 text-primary" /> State-wise Intensity
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-3">
        {stateHeatmapData.map((item) => (
          <div key={item.state} className="space-y-1">
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest">
              <span>{item.state}</span>
              <span className="font-mono tabular-nums">{item.intensity}%</span>
            </div>
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full ${item.color} transition-all duration-1000`} 
                style={{ width: `${item.intensity}%` }} 
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
