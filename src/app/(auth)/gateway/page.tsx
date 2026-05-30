"use client";
import { Activity, Server, Zap, AlertCircle } from "lucide-react";

export default function TransactionHealthMonitor() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600 mb-2 font-sans">Transaction Health Monitor</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Live settlement switch telemetry and CBDC routing health.</p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Activity className="w-3 h-3 text-emerald-400" /> Throughput</p>
          <p className="text-2xl text-slate-200 font-mono">14,281 <span className="text-xs text-slate-500">TPS</span></p>
        </div>
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Zap className="w-3 h-3 text-cyan-400" /> Latency P99</p>
          <p className="text-2xl text-slate-200 font-mono">42 <span className="text-xs text-slate-500">ms</span></p>
        </div>
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><AlertCircle className="w-3 h-3 text-rose-400" /> Failure Rate</p>
          <p className="text-2xl text-emerald-400 font-mono">0.02 <span className="text-xs text-emerald-600">%</span></p>
        </div>
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Server className="w-3 h-3 text-purple-400" /> CBDC Health</p>
          <p className="text-2xl text-purple-400 font-mono">Optimal</p>
        </div>
      </div>

      <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-6 backdrop-blur-md">
        <h3 className="text-orange-400 font-mono text-sm mb-6">Live Flagged Transfers Stream</h3>
        <div className="space-y-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.05] transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                <span className="text-sm font-mono text-slate-300">TXN-998{i}A...</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">Cross-border anomaly detected</span>
              <span className="text-sm font-mono text-rose-400">₹14.2M</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
