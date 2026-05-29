"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Target, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface AIPulseIntelligenceProps {
  title?: string;
  primaryInsight: string;
  secondaryInsights: string[];
  riskLevel?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  className?: string;
}

export function AIPulseIntelligence({ 
  title = "AI Intelligence Pulse", 
  primaryInsight, 
  secondaryInsights, 
  riskLevel = "LOW",
  className = "" 
}: AIPulseIntelligenceProps) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const riskColors = {
    LOW: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    MEDIUM: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    HIGH: "text-rose-400 border-rose-500/30 bg-rose-500/10",
    CRITICAL: "text-red-500 border-red-500/50 bg-red-500/20 animate-pulse",
  };

  return (
    <Card className={`bg-[#0a1520] border-cyan-900/30 relative overflow-hidden ${className}`}>
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
          <BrainCircuit className={`h-4 w-4 ${pulse ? 'opacity-100' : 'opacity-50'} transition-opacity duration-700`} />
          {title}
        </CardTitle>
        <div className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-widest border ${riskColors[riskLevel]}`}>
          {riskLevel} RISK
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="p-3 bg-[#05101a] border border-cyan-900/30 rounded-lg mb-3">
          <div className="flex gap-2">
            <Target className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-slate-200">{primaryInsight}</p>
          </div>
        </div>
        
        <div className="space-y-2 pl-1">
          {secondaryInsights.map((insight, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="w-1 h-1 rounded-full bg-cyan-600 mt-1.5 shrink-0"></div>
              <p className="text-xs text-slate-400">{insight}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
