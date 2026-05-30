"use client";
import { Activity, ShieldCheck, TrendingUp, AlertTriangle, Globe2, Zap, Scale, Server } from "lucide-react";
import Link from "next/link";

export default function RBIControlRoom() {
  return (
    <div className="flex-1 bg-[#020810] text-slate-200 overflow-y-auto">
      
      {/* Executive Header */}
      <div className="sticky top-0 z-10 bg-[#020810]/80 backdrop-blur-xl border-b border-cyan-900/40 p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight uppercase flex items-center gap-3">
            <Globe2 className="w-6 h-6 text-cyan-400" /> National Intelligence Control Room
          </h1>
          <p className="text-xs text-cyan-500 font-mono mt-1 tracking-widest uppercase">RBI Governor Executive View • Live Data</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-emerald-950/30 border border-emerald-900/50 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono text-emerald-400">SYSTEM NOMINAL</span>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-[1600px] mx-auto space-y-8">
        
        {/* Top Level Indices */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-cyan-950/40 to-[#020810] border border-cyan-900/50 p-6 rounded-xl relative overflow-hidden">
            <ShieldCheck className="absolute -right-4 -bottom-4 w-24 h-24 text-cyan-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Financial Stability Index</p>
            <p className="text-4xl font-bold text-cyan-400 font-mono">92.4 <span className="text-lg text-slate-500">/100</span></p>
          </div>
          <div className="bg-gradient-to-br from-emerald-950/40 to-[#020810] border border-emerald-900/50 p-6 rounded-xl relative overflow-hidden">
            <Activity className="absolute -right-4 -bottom-4 w-24 h-24 text-emerald-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">National Trust Index</p>
            <p className="text-4xl font-bold text-emerald-400 font-mono">88.1 <span className="text-lg text-slate-500">/100</span></p>
          </div>
          <div className="bg-gradient-to-br from-blue-950/40 to-[#020810] border border-blue-900/50 p-6 rounded-xl relative overflow-hidden">
            <TrendingUp className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">GDP Pulse (Live Estimator)</p>
            <p className="text-4xl font-bold text-blue-400 font-mono">+6.8<span className="text-lg text-slate-500">%</span></p>
          </div>
          <div className="bg-gradient-to-br from-purple-950/40 to-[#020810] border border-purple-900/50 p-6 rounded-xl relative overflow-hidden">
            <Scale className="absolute -right-4 -bottom-4 w-24 h-24 text-purple-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Formalization Score</p>
            <p className="text-4xl font-bold text-purple-400 font-mono">64.2<span className="text-lg text-slate-500">%</span></p>
          </div>
        </div>

        {/* Middle Tier: Operational Metrics */}
        <div className="grid grid-cols-12 gap-6">
          
          <div className="col-span-8 bg-[#020810]/50 border border-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-sm font-mono text-slate-300 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Active EWS Alerts (Critical)</h3>
            <div className="space-y-3">
              <Link href="/regulator/ews" className="block p-4 bg-rose-950/20 border border-rose-900/30 rounded-lg hover:bg-rose-900/30 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-rose-500" />
                    <span className="text-rose-400 font-bold text-sm uppercase">MSME Liquidity Stress (Gujarat)</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Impact: ₹850Cr</span>
                </div>
                <p className="text-xs text-slate-400 ml-8 group-hover:text-slate-300">Trailing 30-day cashflow deterioration detected in textile sector.</p>
              </Link>
              <Link href="/regulator/ews" className="block p-4 bg-amber-950/20 border border-amber-900/30 rounded-lg hover:bg-amber-900/30 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <span className="text-amber-400 font-bold text-sm uppercase">Tax Compliance Drop (Tier 2)</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Impact: High Deficit</span>
                </div>
                <p className="text-xs text-slate-400 ml-8 group-hover:text-slate-300">40% drop in timely GST filings observed in construction vendors.</p>
              </Link>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-6">
            <div className="bg-[#020810]/50 border border-white/10 p-6 rounded-xl backdrop-blur-md flex-1">
              <h3 className="text-sm font-mono text-slate-300 mb-4 uppercase tracking-widest">Network Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Gateway Throughput</span><span className="text-cyan-400">14,281 TPS</span></div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full"><div className="h-full bg-cyan-500 rounded-full" style={{width: '78%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Fraud Detection Rate</span><span className="text-emerald-400">99.8%</span></div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{width: '99%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Systemic Risk Exposure</span><span className="text-amber-400">Low-Med</span></div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full"><div className="h-full bg-amber-500 rounded-full" style={{width: '35%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
