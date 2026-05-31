"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowUpRight, Network, Target } from "lucide-react";
import { TrustScoreWidget } from "@/components/shared/observability/TrustScoreWidget";
import { AIPulseIntelligence } from "@/components/shared/observability/AIPulseIntelligence";

export default function Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. Who uses this page? & 2. What decision is made here? */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-rose-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-rose-900/30 text-rose-400 text-[10px] font-bold tracking-widest uppercase rounded">
              REGULATOR PORTAL
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Contagion Engine</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"What could trigger a crisis?"</span>
          </p>
        </div>
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-rose-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Sector Exposure</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-rose-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-rose-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-rose-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Contagion Analysis</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-rose-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-rose-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 4. What action can be taken? */}
        <div className="lg:col-span-2 space-y-6">
          <AIPulseIntelligence 
            title="AI System Analysis"
            primaryInsight="Real-time telemetry active for Contagion Engine."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] border-rose-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 text-rose-400" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Failure Simulations</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Stress Testing</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5. Which other FTID systems are affected? */}
        <div className="space-y-6">
          <TrustScoreWidget 
            score={999} 
            entityName="Module Integrity"
          />

          <Card className="bg-[#0a1520] border-rose-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 text-rose-400" />
                Connected Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Banks</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Institutions</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
