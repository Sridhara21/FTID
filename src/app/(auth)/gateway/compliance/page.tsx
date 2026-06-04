"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, ArrowRight, Activity, AlertTriangle, ShieldCheck, Globe, Search, Ban } from "lucide-react";

export default function GatewayCompliancePage() {
  const [frozen, setFrozen] = useState(false);

  const handleFreeze = () => {
    setFrozen(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'FUNDS_FROZEN',
        entity: 'FIU_IND',
        msg: 'Cross-border SWIFT batch ($12.5M) frozen due to 92% fuzzy match with OFAC Sanctions list.',
        impact: ['Bank Settlement', 'International Gateway'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-sky-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-sky-900/30 text-sky-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <ShieldAlert className="h-3 w-3" />
            GATEWAY PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">AML & Sanctions Screening</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Should this incoming cross-border batch be frozen under OFAC/UN sanctions?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-sky-950/40 border border-sky-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-sky-500 mb-1">Live Processing Volume</div>
            <div className="text-2xl font-black text-white">$45.2 Billion</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* AML Watchlist */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Search className="h-4 w-4" />
                Live Screening Alerts (Cross-Border SWIFT)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className="p-4 bg-rose-950/20 rounded-lg border border-rose-900/50 flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 animate-pulse"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-rose-400 font-bold">BATCH ID: SW-88492-UAE</span>
                    <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] uppercase font-bold rounded">Critical Match</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> Dubai → Mumbai</span>
                    <span>Beneficiary: <span className="text-white font-mono bg-slate-900 px-1 py-0.5 rounded">AL-TARIQ TRADING LLC</span></span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono text-xl">92%</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">OFAC Fuzzy Match</div>
                </div>
              </div>

              <div className="p-4 bg-amber-950/20 rounded-lg border border-amber-900/30 flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-400 font-bold">BATCH ID: SW-44910-SGP</span>
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] uppercase font-bold rounded">Structuring Risk</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> Singapore → Delhi</span>
                    <span>14 transfers just below $10k reporting limit.</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono text-xl">74%</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Smurfing Probability</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-sky-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                FIU Intervention
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Systemic Threat</p>
                <p className="text-sm text-slate-300">SWIFT Batch SW-88492-UAE ($12.5M) contains a 92% fuzzy name match to an OFAC Specially Designated National (SDN). Clearing this batch risks severe international secondary sanctions.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Issue an immediate freeze order to the receiving commercial bank and lodge an STR (Suspicious Transaction Report).</p>
              </div>

              {!frozen ? (
                <button onClick={handleFreeze} className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(2,132,199,0.3)]">
                  Freeze $12.5M Batch <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-rose-950/40 border border-rose-900/50 text-rose-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Ban className="h-4 w-4" /> Batch Frozen Successfully
                </div>
              )}

              {frozen && (
                <p className="text-[10px] text-slate-500 text-center">
                  STR lodged. Bank settlement node suspended for SW-88492.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
