"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";

export default function CitizenportfolioPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Personal Financial Operating System
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Portfolio</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Investment management"
            </p>
          </div>
        </header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<V2MetricWidget title="Equity" value={Math.floor(Math.random() * 10000)} trend={Math.random() > 0.5 ? "up" : "down"} explanation="This metric tracks the overall volume and health of Equity in real-time." />
<V2MetricWidget title="Mutual Funds" value={Math.floor(Math.random() * 10000)} trend={Math.random() > 0.5 ? "up" : "down"} explanation="This metric tracks the overall volume and health of Mutual Funds in real-time." />
<V2MetricWidget title="Gold" value={Math.floor(Math.random() * 10000)} trend={Math.random() > 0.5 ? "up" : "down"} explanation="This metric tracks the overall volume and health of Gold in real-time." />
<V2MetricWidget title="Real Estate" value={Math.floor(Math.random() * 10000)} trend={Math.random() > 0.5 ? "up" : "down"} explanation="This metric tracks the overall volume and health of Real Estate in real-time." />
<V2MetricWidget title="Fixed Income" value={Math.floor(Math.random() * 10000)} trend={Math.random() > 0.5 ? "up" : "down"} explanation="This metric tracks the overall volume and health of Fixed Income in real-time." />
<V2MetricWidget title="Diversification" value={Math.floor(Math.random() * 10000)} trend={Math.random() > 0.5 ? "up" : "down"} explanation="This metric tracks the overall volume and health of Diversification in real-time." />
<V2MetricWidget title="Risk Exposure" value={Math.floor(Math.random() * 10000)} trend={Math.random() > 0.5 ? "up" : "down"} explanation="This metric tracks the overall volume and health of Risk Exposure in real-time." />
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<Card className="bg-[#0a1520] border-cyan-900/30 h-full">
<CardHeader>
<CardTitle className="text-white">Detailed Portfolio Analytics</CardTitle>
<CardDescription className="text-slate-400">Deep dive into Equity and Mutual Funds</CardDescription>
</CardHeader>
<CardContent className="h-[300px] flex items-center justify-center border-t border-cyan-900/20">
<p className="text-cyan-500/50 font-mono text-sm">[ Unique Visualization for Portfolio ]</p>
</CardContent>
</Card>
</div>
<div>
<V2InsightsFeed title="Actionable Intelligence" />
</div>
</div>

      </div>
    </div>
  );
}