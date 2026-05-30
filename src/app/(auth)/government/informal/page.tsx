"use client";
import { PieChart, TrendingUp, Users } from "lucide-react";

export default function FormalizationIndex() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 mb-2 font-sans">Formalization Index</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Tracking the shift from cash to digital, and unregistered to GST-compliant.</p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="bg-[#020810]/50 border border-emerald-900/40 rounded-xl p-6 backdrop-blur-md text-center">
            <h3 className="text-sm text-slate-400 uppercase tracking-widest mb-4">National Formalization Score</h3>
            <div className="text-6xl font-bold text-emerald-400 font-mono mb-2">64.2</div>
            <p className="text-emerald-500 text-xs flex justify-center items-center gap-1"><TrendingUp className="w-3 h-3" /> +2.4% YoY</p>
          </div>
          <div className="bg-[#020810]/50 border border-emerald-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-emerald-400 font-mono text-sm mb-4 border-b border-emerald-900/40 pb-2">Key Drivers</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">UPI Adoption (Tier 3)</span>
                <span className="text-emerald-400 font-mono">+18%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">New GST Registrations</span>
                <span className="text-emerald-400 font-mono">+4.2M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Cash Velocity Drop</span>
                <span className="text-cyan-400 font-mono">-6.5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8 bg-[#020810]/50 border border-teal-900/40 rounded-xl p-6 backdrop-blur-md flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <PieChart className="w-64 h-64 text-emerald-500" />
          </div>
          <div className="z-10 w-full">
            <h3 className="text-teal-400 font-mono text-sm mb-6">Sectoral Formalization Heatmap</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">Retail & FMCG</span><span className="text-emerald-400">82% Formal</span></div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex"><div className="bg-emerald-500 h-full" style={{width:'82%'}}></div><div className="bg-rose-500 h-full" style={{width:'18%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">Construction & Real Estate</span><span className="text-amber-400">45% Formal</span></div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex"><div className="bg-amber-500 h-full" style={{width:'45%'}}></div><div className="bg-rose-500 h-full" style={{width:'55%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">Agriculture Logistics</span><span className="text-rose-400">22% Formal</span></div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex"><div className="bg-rose-500 h-full" style={{width:'22%'}}></div><div className="bg-rose-800 h-full" style={{width:'78%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
