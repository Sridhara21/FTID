"use client";
import { Calculator, Target, Zap, FileSpreadsheet } from "lucide-react";

export default function AlternativeCreditEngine() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600 mb-2 font-sans">Alternative Credit Engine</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Collateral-free underwriting via transaction & GST behavioral intelligence.</p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 bg-[#020810]/50 border border-violet-900/40 rounded-xl p-6 backdrop-blur-md">
          <h3 className="text-violet-400 font-mono text-sm mb-6 flex items-center gap-2"><Target className="w-4 h-4"/> Input Parameters</h3>
          <div className="space-y-4">
            <div className="p-3 bg-violet-950/20 border border-violet-900/30 rounded-lg">
              <label className="text-xs text-slate-500 uppercase mb-1 block">Target MSME GSTIN</label>
              <input type="text" className="w-full bg-transparent border-b border-violet-700 text-white font-mono text-sm py-1 outline-none" defaultValue="29AABCU9603R1ZN" />
            </div>
            <button className="w-full py-3 mt-4 bg-gradient-to-r from-violet-900 to-fuchsia-900 rounded-lg text-white font-medium flex justify-center items-center gap-2 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
              <Zap className="w-4 h-4" /> Generate Alternative Score
            </button>
          </div>
        </div>

        <div className="col-span-8 bg-[#020810]/50 border border-violet-900/40 rounded-xl p-6 backdrop-blur-md relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-violet-900/40">
            <div>
              <h2 className="text-2xl font-bold text-white">Dynamic Credit Assessment</h2>
              <p className="text-emerald-400 text-sm font-mono mt-1">Status: High Confidence Match</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase mb-1">Alt-Credit Score</p>
              <p className="text-4xl font-bold text-violet-400 font-mono">812</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 border border-white/5 rounded-lg bg-white/[0.02]">
              <FileSpreadsheet className="w-5 h-5 text-slate-400 mb-2" />
              <p className="text-xs text-slate-500 mb-1">GST Cashflow Proxy</p>
              <p className="text-lg text-slate-200 font-mono">₹14.2L / mo</p>
            </div>
            <div className="p-4 border border-white/5 rounded-lg bg-white/[0.02]">
              <Activity className="w-5 h-5 text-emerald-400 mb-2" />
              <p className="text-xs text-slate-500 mb-1">Behavioral Trust</p>
              <p className="text-lg text-emerald-400 font-mono">Excellent</p>
            </div>
            <div className="p-4 border border-white/5 rounded-lg bg-white/[0.02]">
              <Calculator className="w-5 h-5 text-cyan-400 mb-2" />
              <p className="text-xs text-slate-500 mb-1">Recommended Max Limit</p>
              <p className="text-lg text-cyan-400 font-mono">₹5,00,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
