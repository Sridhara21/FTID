"use client";
import { SlidersHorizontal, Activity, ArrowRight, Zap, Target } from "lucide-react";

export default function PolicyDigitalTwin() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600 mb-2 font-sans tracking-tight">
          Policy Digital Twin
        </h1>
        <p className="text-slate-400 font-mono text-sm">Macroeconomic Simulation & Predictive Impact Modeling</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Pane: Policy Levers */}
        <div className="col-span-5 flex flex-col gap-6">
          <div className="bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-cyan-400 font-mono text-sm mb-6 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" /> Policy Levers
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">GST Base Rate Revision</label>
                  <span className="text-cyan-400 font-mono">16.5%</span>
                </div>
                <input type="range" className="w-full accent-cyan-500 bg-cyan-950" min="10" max="25" defaultValue="16.5" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">MSME Lending Subsidy</label>
                  <span className="text-emerald-400 font-mono">+1.2%</span>
                </div>
                <input type="range" className="w-full accent-emerald-500 bg-emerald-950" min="0" max="5" defaultValue="1.2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Repo Rate (Simulated)</label>
                  <span className="text-rose-400 font-mono">6.25%</span>
                </div>
                <input type="range" className="w-full accent-rose-500 bg-rose-950" min="4" max="9" defaultValue="6.25" />
              </div>
            </div>
            
            <button className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-900 to-emerald-900 hover:from-cyan-800 hover:to-emerald-800 rounded-lg text-white font-medium flex justify-center items-center gap-2 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <Zap className="w-4 h-4" /> Run Simulation
            </button>
          </div>
        </div>

        {/* Right Pane: Simulated Impact */}
        <div className="col-span-7 bg-[#020810]/50 border border-emerald-900/40 rounded-xl p-6 backdrop-blur-md relative">
          <h3 className="text-emerald-400 font-mono text-sm mb-6 flex items-center gap-2">
            <Target className="w-4 h-4" /> Projected Macro Impact (T+12 Months)
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">GDP Growth Rate</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">7.2%</span>
                <span className="text-emerald-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[-45deg]" /> +0.4%</span>
              </div>
            </div>
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">Tax Revenue Collection</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">₹1.84L Cr</span>
                <span className="text-rose-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[45deg]" /> -1.2%</span>
              </div>
            </div>
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">MSME Survival Rate</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">92.4%</span>
                <span className="text-emerald-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[-45deg]" /> +3.1%</span>
              </div>
            </div>
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">Economy Formalization</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">68.5%</span>
                <span className="text-emerald-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[-45deg]" /> +1.8%</span>
              </div>
            </div>
          </div>
          
          <div className="h-48 bg-gradient-to-t from-emerald-900/20 to-transparent border-b border-emerald-500/50 flex items-end relative overflow-hidden">
             {/* Simulated Chart */}
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,80 Q25,60 50,70 T100,20 L100,100 L0,100 Z" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2" />
               <path d="M0,70 Q25,80 50,50 T100,40" stroke="rgba(239,68,68,0.5)" strokeWidth="2" fill="none" strokeDasharray="2,2"/>
             </svg>
             <span className="absolute bottom-2 left-2 text-[10px] text-emerald-500 font-mono">Formalization Curve</span>
             <span className="absolute top-2 right-2 text-[10px] text-rose-500 font-mono">Informal Sector Decay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
