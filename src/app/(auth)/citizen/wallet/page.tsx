"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, ArrowRight, ShieldCheck, Activity, SmartphoneNfc, Fingerprint, Banknote, RefreshCcw } from "lucide-react";

export default function CitizenWalletPage() {
  const [transferred, setTransferred] = useState(false);

  const handleTransfer = () => {
    setTransferred(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'CBDC_MINTED',
        entity: 'CITIZEN_WALLET',
        msg: 'Citizen minted ₹15,000 into e₹ (CBDC) for offline programmable payments.',
        impact: ['RBI Ledger', 'Commercial Bank Reserves'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-cyan-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Wallet className="h-3 w-3" />
            CITIZEN PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Sovereign Wallet</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"How do I allocate liquidity between commercial banks and RBI direct liability (e₹)?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-cyan-950/40 border border-cyan-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 mb-1">Total Liquidity</div>
            <div className="text-2xl font-black text-white">₹85,450</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Wallet Balances */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[#05101a] border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Banknote className="h-24 w-24 text-emerald-500" />
              </div>
              <CardContent className="pt-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Commercial Bank (Fiat)</div>
                <div className="text-3xl font-black text-emerald-400 mb-4">{transferred ? '₹65,450' : '₹80,450'}</div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" /> Insured by DICGC
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-950/40 to-[#05101a] border-cyan-900/50 relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Fingerprint className="h-24 w-24 text-cyan-500" />
              </div>
              <CardContent className="pt-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 mb-2">e₹ (CBDC Retail)</div>
                <div className="text-3xl font-black text-cyan-400 mb-4">{transferred ? '₹20,000' : '₹5,000'}</div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <SmartphoneNfc className="h-4 w-4 text-cyan-500" /> RBI Direct Liability • Offline Ready
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Smart Payment Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded border border-slate-800">
                <div>
                  <div className="text-sm text-white font-bold">Auto-Sweep to SGB</div>
                  <div className="text-xs text-slate-400">If Fiat &gt; ₹1L, sweep excess to Gold Bonds.</div>
                </div>
                <div className="px-2 py-1 bg-emerald-950/50 text-emerald-500 text-[10px] uppercase tracking-widest font-bold rounded">Active</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded border border-slate-800">
                <div>
                  <div className="text-sm text-white font-bold">Offline Sync Limit</div>
                  <div className="text-xs text-slate-400">Max CBDC allowed for offline spending per day.</div>
                </div>
                <div className="text-sm font-mono text-cyan-400">₹2,000</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-cyan-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                <RefreshCcw className="h-4 w-4" />
                Liquidity Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">You are traveling to a low-connectivity zone tomorrow (Zone 4). Your current CBDC balance (₹5,000) may be insufficient for offline transactions.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Mint ₹15,000 from Commercial Bank Fiat into e₹ (CBDC) to ensure offline liquidity.</p>
              </div>

              {!transferred ? (
                <button onClick={handleTransfer} className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  Mint e₹15,000 <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Activity className="h-4 w-4" /> e₹ Minted Successfully
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}