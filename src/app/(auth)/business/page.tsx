"use client";
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
          </div>
        </div>

        <div className="col-span-4 bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md flex flex-col justify-center items-center text-center">
          <Activity className="w-12 h-12 text-cyan-400 mb-4 animate-pulse" />
          <h3 className="text-lg text-slate-200 font-medium mb-2">Ready for Institutional Access</h3>
          <p className="text-xs text-slate-400 mb-4">Your Trust Score qualifies you for prime lending rates from top-tier institutions.</p>
          <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-colors">Apply for Credit Line</button>
        </div>
      </div>
    </div>
  );
}
