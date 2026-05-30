"use client";
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
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
}
