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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-blue-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-[10px] font-bold tracking-widest uppercase rounded">
              BUSINESS PORTAL
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
=======
import { Building2, ShieldCheck, Activity, Award } from "lucide-react";

export default function EnterpriseHub() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-2 font-sans">Enterprise Engine Hub</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Corporate telemetry and structural trust indexing.</p>

      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-8 bg-[#020810]/50 border border-blue-900/40 rounded-xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">TechFlow Logistics Pvt Ltd</h2>
              <p className="text-slate-400 text-sm font-mono">CIN: U72900KA2021PTC145</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Enterprise Trust Score</p>
              <div className="flex items-center justify-end gap-2">
                <Award className="w-6 h-6 text-emerald-400" />
                <span className="text-4xl font-bold text-emerald-400 font-mono">942</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">GST Compliance</p>
              <p className="text-xl text-slate-200 font-mono">100%</p>
            </div>
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">Vendor Reliability</p>
              <p className="text-xl text-slate-200 font-mono">A+</p>
            </div>
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">Invoice Quality</p>
              <p className="text-xl text-slate-200 font-mono">98.2%</p>
            </div>
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">Credit Utilization</p>
              <p className="text-xl text-slate-200 font-mono">42%</p>
            </div>
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Business Command Center</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"How healthy is my business?"</span>
          </p>
        </div>
<<<<<<< HEAD
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-blue-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Revenue</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-blue-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-blue-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Profitability</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-blue-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-blue-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Compliance Score</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-blue-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-blue-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Credit Readiness</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-blue-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-blue-400" />
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
            primaryInsight="Real-time telemetry active for Business Command Center."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] border-blue-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-400" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Vendor Risk</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Cash Position</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">AI CFO Recommendations</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
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

          <Card className="bg-[#0a1520] border-blue-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 text-blue-400" />
                Connected Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Tax</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Banks</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Supply Chain</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
=======

        <div className="col-span-4 bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md flex flex-col justify-center items-center text-center">
          <Activity className="w-12 h-12 text-cyan-400 mb-4 animate-pulse" />
          <h3 className="text-lg text-slate-200 font-medium mb-2">Ready for Institutional Access</h3>
          <p className="text-xs text-slate-400 mb-4">Your Trust Score qualifies you for prime lending rates from top-tier institutions.</p>
          <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-colors">Apply for Credit Line</button>
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
        </div>
      </div>
    </div>
  );
}
