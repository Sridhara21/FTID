"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, ArrowRight, Activity, HandCoins, AlertOctagon, CheckCircle2 } from "lucide-react";

export default function CitizenSubsidiesPage() {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'SUBSIDY_RELEASED',
        entity: 'GOVERNMENT_TREASURY',
        msg: 'Direct Benefit Transfer (DBT) executed for PM-KISAN via automated e-KYC.',
        impact: ['Citizen Wallet', 'Govt Treasury'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-cyan-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <HandCoins className="h-3 w-3" />
            CITIZEN PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Entitlements & Subsidies</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Am I receiving all government benefits I am entitled to?"</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Subsidies List */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Landmark className="h-4 w-4" />
                Active & Eligible Schemes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-emerald-400 font-bold mb-1">PM Ujjwala Yojana</div>
                  <div className="text-xs text-slate-400">LPG Subsidy • Disbursed Monthly</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono">₹1,200</div>
                  <div className="text-[10px] text-emerald-500 font-bold uppercase mt-1 flex items-center gap-1 justify-end"><CheckCircle2 className="h-3 w-3" /> Active</div>
                </div>
              </div>

              <div className="p-4 bg-rose-950/20 rounded-lg border border-rose-900/30 flex justify-between items-center">
                <div>
                  <div className="text-rose-400 font-bold mb-1">PM-KISAN</div>
                  <div className="text-xs text-slate-400">Income Support • ₹6,000 / year</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono">₹2,000 / term</div>
                  <div className="text-[10px] text-rose-500 font-bold uppercase mt-1 flex items-center gap-1 justify-end"><AlertOctagon className="h-3 w-3" /> Suspended</div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center opacity-60">
                <div>
                  <div className="text-slate-400 font-bold mb-1">PMAY (Urban)</div>
                  <div className="text-xs text-slate-500">Housing Subsidy</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500 font-mono">--</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1 flex items-center gap-1 justify-end">Not Eligible</div>
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
                <AlertOctagon className="h-4 w-4" />
                Leak Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Your PM-KISAN installment (₹2,000) was suspended because the receiving bank account's Aadhaar e-KYC expired.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Use Account Aggregator to instantly push your renewed KYC from DigiLocker to the Treasury system and claim the pending DBT.</p>
              </div>

              {!claimed ? (
                <button onClick={handleClaim} className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  Push KYC & Claim <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Activity className="h-4 w-4" /> DBT Initiated
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}