"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stateHeatmapData } from "@/lib/placeholder-data";
import { Factory, Activity } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function EconomicHeatmap() {
  return (
    <Card className="border-border/50 bg-card/50 h-full">
      <CardHeader className="pb-2 border-b border-border/10">
        <div className="flex items-center justify-between">
            <CardTitle className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" /> State-wise Activity
            </CardTitle>
            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Intensity Index</p>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <TooltipProvider>
            {stateHeatmapData.map((item) => (
            <div key={item.state} className="space-y-1.5 group">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest cursor-help">
                            <span className="group-hover:text-primary transition-colors">{item.state}</span>
                            <span className="font-mono tabular-nums opacity-60 group-hover:opacity-100 transition-opacity">{item.intensity}%</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className="text-[10px] border-primary/20 font-bold uppercase tracking-widest">
                        High Velocity Clusters Detected
                    </TooltipContent>
                </Tooltip>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden border border-border/50">
                <div 
                    className={`h-full ${item.color} transition-all duration-1000 ease-out`} 
                    style={{ width: `${item.intensity}%` }} 
                />
                </div>
            </div>
            ))}
        </TooltipProvider>
        <div className="pt-4 border-t border-border/30">
            <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-widest leading-relaxed italic">
                Derived from weighted GST-flow and industrial CBDC velocity aggregates.
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
