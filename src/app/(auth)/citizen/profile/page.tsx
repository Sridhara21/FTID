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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-emerald-900/30 text-emerald-400 text-[10px] font-bold tracking-widest uppercase rounded">
              CITIZEN PORTAL
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Financial Identity Hub</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Is my financial identity complete and trusted?"</span>
          </p>
        </div>
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-emerald-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">PAN Status</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-emerald-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-emerald-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Aadhaar Status</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-emerald-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-emerald-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">CKYC Status</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-emerald-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-emerald-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Verification Status</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-emerald-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-emerald-400" />
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
            primaryInsight="Real-time telemetry active for Financial Identity Hub."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] border-emerald-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 text-emerald-400" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">Employment Information</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">Income Sources</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">Family/Dependent Information</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">Financial Trust Contributors</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
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

          <Card className="bg-[#0a1520] border-emerald-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 text-emerald-400" />
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

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Tax</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Credit</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
=======
import { ShieldCheck, User, AlertTriangle, Fingerprint, Activity } from "lucide-react";

export default function CitizenProfile() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8 font-sans">Citizen Digital Identity</h1>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center">
                <User className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Rahul Sharma</h2>
                <p className="text-slate-400 text-sm font-mono">FTID: RS-9281-XXXX</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-cyan-950/20 rounded-lg">
                <span className="text-sm text-slate-300">Financial Health Score</span>
                <span className="text-emerald-400 font-bold text-lg font-mono">785</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyan-950/20 rounded-lg">
                <span className="text-sm text-slate-300">Identity Verification</span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="bg-[#020810]/50 border border-rose-900/40 rounded-xl p-6 backdrop-blur-md relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-4">
              <Activity className="w-6 h-6 text-rose-500 animate-pulse" />
            </div>
            <h3 className="text-rose-400 font-mono text-lg mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Scam Protection Center
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-rose-900/30 bg-rose-950/10 rounded-lg">
                <p className="text-rose-400 text-sm font-bold mb-1">Active Threat Level</p>
                <p className="text-slate-300 text-xs">Elevated phishing campaigns in your geographical cluster targeting digital wallets.</p>
              </div>
              <div className="p-4 border border-emerald-900/30 bg-emerald-950/10 rounded-lg">
                <p className="text-emerald-400 text-sm font-bold mb-1">Account Safety</p>
                <p className="text-slate-300 text-xs">No anomalous transactions detected in trailing 90 days. Bio-metric lock active.</p>
              </div>
            </div>

            <div className="border-t border-rose-900/20 pt-4">
              <h4 className="text-slate-300 text-sm font-medium mb-3">Recent Security Flags</h4>
              <div className="p-3 bg-rose-950/20 rounded-lg flex items-center justify-between border-l-2 border-rose-500">
                <div>
                  <p className="text-sm text-slate-200">Suspicious SMS Link Detected</p>
                  <p className="text-xs text-slate-500">Blocked by OS-level heuristic scanning. Do not click links from unknown numbers claiming to be Electricity Board.</p>
                </div>
                <span className="text-xs text-rose-400 font-mono">Today, 14:02</span>
              </div>
            </div>
          </div>
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
        </div>
      </div>
    </div>
  );
}
