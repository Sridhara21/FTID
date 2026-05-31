"use client";
<<<<<<< HEAD

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowUpRight, Network, Target } from "lucide-react";
import { TrustScoreWidget } from "@/components/shared/observability/TrustScoreWidget";
import { AIPulseIntelligence } from "@/components/shared/observability/AIPulseIntelligence";

export default function Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. Who uses this page? & 2. What decision is made here? */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-teal-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-teal-900/30 text-teal-400 text-[10px] font-bold tracking-widest uppercase rounded">
              AUDITOR PORTAL
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
=======
import { Bot, Terminal, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function AuditExplainability() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-slate-200 mb-2 font-sans">Audit Explainability AI</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Deep natural language reasoning for flagged network anomalies.</p>

      <div className="grid grid-cols-12 gap-6 h-[600px]">
        <div className="col-span-4 bg-[#020810]/50 border border-zinc-700/40 rounded-xl p-6 backdrop-blur-md flex flex-col">
          <h3 className="text-zinc-400 font-mono text-sm mb-4 border-b border-zinc-800 pb-2">Flagged Queue</h3>
          <div className="space-y-2 flex-1 overflow-y-auto pr-2">
            <div className="p-3 bg-rose-950/20 border border-rose-900/50 rounded-lg cursor-pointer border-l-2 border-l-rose-500">
              <p className="text-xs font-mono text-slate-300 mb-1">INV-9821-X</p>
              <p className="text-[10px] text-rose-400">High Risk • ₹4.2L</p>
            </div>
            <div className="p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg cursor-pointer hover:bg-zinc-800/50 transition-colors">
              <p className="text-xs font-mono text-slate-400 mb-1">TXN-4412-Y</p>
              <p className="text-[10px] text-amber-400">Medium Risk • ₹1.1L</p>
            </div>
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">AI Investigator</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"What insights can AI uncover?"</span>
          </p>
        </div>
<<<<<<< HEAD
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-teal-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">AI Confidence Score</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-teal-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-teal-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-teal-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Patterns Detected</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-teal-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-teal-400" />
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
            primaryInsight="Real-time telemetry active for AI Investigator."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] border-teal-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 text-teal-400" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">AI Investigator</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">Natural Language Queries</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
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

          <Card className="bg-[#0a1520] border-teal-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 text-teal-400" />
                Connected Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Regulator</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
=======

        <div className="col-span-8 bg-[#020810]/50 border border-zinc-700/40 rounded-xl p-0 backdrop-blur-md flex flex-col overflow-hidden">
          <div className="p-4 border-b border-zinc-800 bg-zinc-900/20 flex items-center gap-3">
            <Bot className="w-5 h-5 text-zinc-400" />
            <span className="text-sm font-mono text-slate-300">AI Analysis: INV-9821-X</span>
          </div>
          
          <div className="flex-1 p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-rose-950/50 border border-rose-900/50 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
              </div>
              <div>
                <p className="text-sm text-slate-300 leading-relaxed font-mono">
                  <span className="text-rose-400">Flagged because:</span> Vendor risk increased 42% in the last 7 days due to two associated entities being deregistered for GST. Additionally, this invoice value is 3.6× the historical average between these two counterparties.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center shrink-0">
                <Terminal className="w-4 h-4 text-cyan-500" />
              </div>
              <div className="w-full">
                <div className="bg-black/50 p-4 rounded-lg border border-zinc-800/50 font-mono text-xs text-slate-400">
                  <p className="text-emerald-400 mb-2">// Trace Output</p>
                  <p>&gt; Evaluating entity: 27AADCB... (Vendor)</p>
                  <p>&gt; Checking network graph depth=2...</p>
                  <p className="text-rose-400">&gt; ALERT: Linked entity 07BBEP... status == DEREGISTERED</p>
                  <p>&gt; Calculating historical baseline: Avg = ₹1.16L</p>
                  <p className="text-amber-400">&gt; WARNING: Current = ₹4.20L (Deviation: 3.6x)</p>
                </div>
              </div>
            </div>
          </div>
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
        </div>
      </div>
    </div>
  );
}
