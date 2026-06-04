"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowRight, ShieldCheck, Search, Link2, AlertOctagon, Fingerprint, Flag } from "lucide-react";

export default function AuditorLedgerPage() {
  const [flagged, setFlagged] = useState(false);

  const handleFlag = () => {
    setFlagged(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'AUDIT_FLAG_RAISED',
        entity: 'CAG_AUDITOR',
        msg: 'Supplier "Vortex Materials" flagged for forensic audit due to round-tripping topology.',
        impact: ['Business Compliance', 'Bank EWS (Early Warning)'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-cyan-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Fingerprint className="h-3 w-3" />
            AUDITOR PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Ledger Lineage (Rupee Trace)</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Is this sequence of supply chain payments legitimate, or evidence of round-tripping?"</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Lineage Tree */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Link2 className="h-4 w-4" />
                Immutable Payment Chain (Trace ID: TRX-992-K)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              
              <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-8">
                
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-slate-800 border-2 border-cyan-500"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Treasury Disbursement</p>
                      <p className="text-xs text-slate-400">NHAI Road Contract Award • Initial Liquidity</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-mono">₹45.0 Cr</p>
                      <p className="text-[10px] text-slate-500 font-mono">T-0</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-slate-800 border-2 border-emerald-500"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-white mb-1">L&T Infrastructure (Primary Contractor)</p>
                      <p className="text-xs text-slate-400">Escrow Transfer • Account: 0092***</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 font-mono">₹45.0 Cr</p>
                      <p className="text-[10px] text-slate-500 font-mono">T+2 Days</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-slate-800 border-2 border-emerald-500"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Vortex Materials (Sub-Contractor)</p>
                      <p className="text-xs text-slate-400">Invoice: INV-449-A • Material Supply</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 font-mono">₹12.5 Cr</p>
                      <p className="text-[10px] text-slate-500 font-mono">T+5 Days</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-rose-500/20 border-2 border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-rose-400 mb-1">Global Trade Syndicate (Unregistered)</p>
                      <p className="text-xs text-slate-400">Invoice: UNK-001 • Advisory Services</p>
                    </div>
                    <div className="text-right">
                      <p className="text-rose-400 font-mono font-bold animate-pulse">₹11.8 Cr</p>
                      <p className="text-[10px] text-rose-500 font-mono font-bold mt-1 uppercase">T+6 Days (Suspicious)</p>
                    </div>
                  </div>
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
                <Search className="h-4 w-4" />
                Audit Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Within 24 hours of receiving ₹12.5 Cr for material supply, Vortex Materials wired 94% (₹11.8 Cr) to an unregistered entity for "Advisory Services". High probability of invoice fraud and fund siphoning.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Flag Vortex Materials for an immediate forensic audit. Issue a freeze request to the receiving bank for the ₹11.8 Cr transfer.</p>
              </div>

              {!flagged ? (
                <button onClick={handleFlag} className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Flag for Forensic Audit <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-rose-950/40 border border-rose-900/50 text-rose-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Flag className="h-4 w-4" /> Entity Flagged (EWS Updated)
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}