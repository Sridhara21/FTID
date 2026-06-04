"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, ArrowRight, Activity, AlertOctagon, CheckCircle2, Link2, Unlink } from "lucide-react";

export default function GatewayTransactionsPage() {
  const [repoActivated, setRepoActivated] = useState(false);

  const handleRepo = () => {
    setRepoActivated(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'REPO_ACTIVATED',
        entity: 'RBI_RTGS',
        msg: 'Emergency Liquidity repo window opened for Node ID: HDFC-01 to resolve settlement gridlock.',
        impact: ['Bank Liquidity', 'National Payment Infra'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-indigo-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Network className="h-3 w-3" />
            GATEWAY PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">RTGS Settlement Feed</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Are all commercial bank nodes maintaining sufficient liquidity to settle gross transactions?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Queue Health</div>
            <div className="text-2xl font-black text-white">99.94%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Node Status */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Live Node Telemetry
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold mb-1 flex items-center gap-2">SBI-NODE-01 <CheckCircle2 className="h-4 w-4 text-emerald-500" /></div>
                  <div className="text-xs text-slate-400 flex items-center gap-4">
                    <span>Latency: 14ms</span>
                    <span>Queue: 0</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-mono">Settling</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Status</div>
                </div>
              </div>

              <div className="p-4 bg-rose-950/20 rounded-lg border border-rose-900/50 flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 animate-pulse"></div>
                <div>
                  <div className="text-rose-400 font-bold mb-1 flex items-center gap-2">HDFC-NODE-01 <Unlink className="h-4 w-4 text-rose-500" /></div>
                  <div className="text-xs text-rose-400 flex items-center gap-4">
                    <span>Latency: Timeout</span>
                    <span>Queue: <span className="font-bold font-mono">1,402 txns</span></span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-rose-500 font-mono font-bold animate-pulse">Gridlock</div>
                  <div className="text-[10px] text-rose-500 font-bold uppercase mt-1">Status</div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold mb-1 flex items-center gap-2">ICICI-NODE-01 <CheckCircle2 className="h-4 w-4 text-emerald-500" /></div>
                  <div className="text-xs text-slate-400 flex items-center gap-4">
                    <span>Latency: 18ms</span>
                    <span>Queue: 0</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-mono">Settling</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Status</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-indigo-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <AlertOctagon className="h-4 w-4" />
                Settlement Intervention
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Systemic Threat</p>
                <p className="text-sm text-slate-300">Node <span className="font-mono text-rose-400">HDFC-01</span> has exhausted intraday liquidity and is unable to settle 1,402 outbound RTGS transactions, causing a queue build-up.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Activate Emergency Intraday Liquidity (Repo) Window to inject ₹5,000 Cr directly into the node's settlement account.</p>
              </div>

              {!repoActivated ? (
                <button onClick={handleRepo} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                  Activate Repo Window <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Activity className="h-4 w-4" /> Repo Window Active
                </div>
              )}

              {repoActivated && (
                <p className="text-[10px] text-slate-500 text-center mt-2">
                  Liquidity injected. Queue processing resumed.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}