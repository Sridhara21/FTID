"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, ShieldAlert, Shield } from "lucide-react";

interface TrustScoreWidgetProps {
  score: number;
  entityName: string;
  trend?: "UP" | "DOWN" | "STABLE";
  className?: string;
}

export function TrustScoreWidget({ score, entityName, trend = "STABLE", className = "" }: TrustScoreWidgetProps) {
  const getScoreColor = (s: number) => {
    if (s >= 90) return "text-emerald-400";
    if (s >= 70) return "text-cyan-400";
    if (s >= 50) return "text-amber-400";
    return "text-rose-500";
  };

  const getScoreBg = (s: number) => {
    if (s >= 90) return "bg-emerald-500";
    if (s >= 70) return "bg-cyan-500";
    if (s >= 50) return "bg-amber-500";
    return "bg-rose-500";
  };

  return (
    <Card className={`bg-[#0a1520] border-cyan-900/30 ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-400 flex justify-between items-center">
          <span>Unified Trust Engine</span>
          {score >= 90 ? <ShieldCheck className="h-4 w-4 text-emerald-400" /> : 
           score <= 50 ? <ShieldAlert className="h-4 w-4 text-rose-500" /> : 
           <Shield className="h-4 w-4 text-cyan-400" />}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-4">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer glowing ring */}
          <div className={`absolute inset-0 rounded-full ${getScoreBg(score)} opacity-10 blur-xl animate-pulse`}></div>
          
          {/* SVG Circle Progress */}
          <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="40" 
              stroke="currentColor" 
              strokeWidth="4" 
              fill="transparent" 
              className="text-slate-800"
            />
            <circle 
              cx="50" cy="50" r="40" 
              stroke="currentColor" 
              strokeWidth="4" 
              fill="transparent" 
              strokeDasharray="251.2" 
              strokeDashoffset={251.2 - (251.2 * score) / 100}
              className={`${getScoreColor(score)} transition-all duration-1000 ease-out`}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Inner Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-black ${getScoreColor(score)}`}>{score}</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm font-bold text-white mb-1">{entityName}</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-slate-500">Systemic Status:</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${getScoreColor(score)}`}>
              {score >= 90 ? "OPTIMAL" : score >= 70 ? "STABLE" : score >= 50 ? "MONITORED" : "CRITICAL"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
