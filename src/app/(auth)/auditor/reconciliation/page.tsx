"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, ArrowRight, Activity, Building2, Landmark, ShieldAlert, ArrowLeftRight, CheckCircle2 } from "lucide-react";

export default function AuditorReconciliationPage() {
  const [penalized, setPenalized] = useState(false);

  const handlePenalty = () => {
    setPenalized(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'PENALTY_LEVIED',
        entity: 'CAG_AUDITOR',
        msg: 'Penalty of ₹1.2 Cr levied on PNB for systemic DBT float-scraping (48hr delays).',
        impact: ['Bank Liquidity', 'RBI Regulatory Node'],
        risk: 'MEDIUM'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-cyan-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <FileSearch className="h-3 w-3" />
            AUDITOR PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Ledger Reconciliation</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Are commercial banks deliberately delaying Treasury DBTs to earn overnight float interest?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-cyan-950/40 border border-cyan-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 mb-1">Unreconciled Float</div>
            <div className="text-2xl font-black text-white">₹4,250 Cr</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Reconciliation Engine */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <ArrowLeftRight className="h-4 w-4" />
                Cross-matching: Treasury Outflow vs Bank Inflow
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-5 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 mb-2"><Landmark className="h-4 w-4" /> Govt Treasury</div>
                  <div className="text-xl font-mono text-emerald-400">₹8,500 Cr</div>
                  <div className="text-xs text-slate-500 mt-1">Disbursed (T-0)</div>
                </div>
                
                <div className="col-span-2 flex justify-center">
                  <ArrowRight className="h-6 w-6 text-emerald-500" />
                </div>

                <div className="col-span-5 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 mb-2"><Building2 className="h-4 w-4" /> SBI Node</div>
                  <div className="text-xl font-mono text-emerald-400">₹8,500 Cr</div>
                  <div className="text-xs text-slate-500 mt-1">Credited to Citizens (T-0)</div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center opacity-50">
                <div className="col-span-5 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 mb-2"><Landmark className="h-4 w-4" /> Govt Treasury</div>
                  <div className="text-xl font-mono text-emerald-400">₹1,200 Cr</div>
                  <div className="text-xs text-slate-500 mt-1">Disbursed (T-0)</div>
                </div>
                
                <div className="col-span-2 flex justify-center">
                  <ArrowRight className="h-6 w-6 text-emerald-500" />
                </div>

                <div className="col-span-5 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 mb-2"><Building2 className="h-4 w-4" /> HDFC Node</div>
                  <div className="text-xl font-mono text-emerald-400">₹1,200 Cr</div>
                  <div className="text-xs text-slate-500 mt-1">Credited to Citizens (T+1)</div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center relative">
                <div className="absolute inset-0 bg-rose-500/5 border border-rose-500/30 rounded-xl pointer-events-none -m-2"></div>
                <div className="col-span-5 p-4 bg-rose-950/20 rounded-lg border border-rose-900/50">
                  <div className="flex items-center gap-2 text-slate-400 mb-2"><Landmark className="h-4 w-4" /> Govt Treasury</div>
                  <div className="text-xl font-mono text-rose-400">₹4,250 Cr</div>
                  <div className="text-xs text-rose-500 mt-1 font-bold">Disbursed (T-0)</div>
                </div>
                
                <div className="col-span-2 flex justify-center">
                  <ShieldAlert className="h-6 w-6 text-rose-500 animate-pulse" />
                </div>

                <div className="col-span-5 p-4 bg-rose-950/20 rounded-lg border border-rose-900/50">
                  <div className="flex items-center gap-2 text-slate-400 mb-2"><Building2 className="h-4 w-4" /> PNB Node</div>
                  <div className="text-xl font-mono text-rose-400 animate-pulse font-bold">₹0 Cr</div>
                  <div className="text-xs text-rose-500 mt-1 font-bold">Pending Credit (T+2 Days)</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-cyan-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Audit Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">PNB Node received ₹4,250 Cr in PM-KISAN treasury disbursements 48 hours ago but has not credited citizen accounts. The bank is generating estimated ₹1.4L/hour in overnight float interest.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Levy an automated regulatory penalty of ₹1.2 Cr for SLA violation and force immediate ledger reconciliation.</p>
              </div>

              {!penalized ? (
                <button onClick={handlePenalty} className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Levy Penalty & Force Sync <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-rose-950/40 border border-rose-900/50 text-rose-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Penalty Levied
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}