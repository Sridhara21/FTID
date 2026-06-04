"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, ArrowRight, Network, Crosshair, AlertTriangle, Snowflake, UserX, Landmark } from "lucide-react";

export default function InstitutionFraudPage() {
  const [frozen, setFrozen] = useState(false);

  const handleFreeze = () => {
    setFrozen(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'MULE_ACCOUNT_FROZEN',
        entity: 'COMMERCIAL_BANK',
        msg: 'Account 8892-*** frozen proactively due to 1st-degree connection to known Jamtara mule network.',
        impact: ['Central Fraud Registry', 'Citizen Access'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-orange-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-orange-900/30 text-orange-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <ShieldAlert className="h-3 w-3" />
            INSTITUTIONAL PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Cross-Bank Fraud Engine</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Should we freeze this customer's account based on its connection to a known fraud network in another bank?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-orange-950/40 border border-orange-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-1">Network Risk</div>
            <div className="text-2xl font-black text-white">Critical</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Fraud Network Graph */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Network className="h-4 w-4" />
                RBI Central Fraud Registry: Mule Topology
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              
              <div className="flex justify-between items-center bg-rose-950/20 p-4 rounded-lg border border-rose-900/50">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-rose-900/40 rounded-full"><UserX className="h-5 w-5 text-rose-500" /></div>
                  <div>
                    <div className="text-rose-500 font-bold mb-1">Source Node: Jamtara-Syndicate-A</div>
                    <div className="text-xs text-rose-400">Status: Frozen (PNB) • FIR Lodged</div>
                  </div>
                </div>
              </div>

              <div className="pl-8 border-l-2 border-dashed border-rose-900/50 ml-6 space-y-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[2px] bg-rose-900/50"></div>
                  <div className="flex-1 flex justify-between items-center bg-rose-950/20 p-3 rounded-lg border border-rose-900/30">
                    <div>
                      <div className="text-rose-400 font-bold mb-1 text-sm">Transfer: ₹4.5L (T-2 Days)</div>
                      <div className="text-xs text-slate-400">To: Acc 4491-*** (ICICI) • Status: Frozen</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-[2px] bg-orange-900/50"></div>
                  <div className={`flex-1 flex justify-between items-center p-3 rounded-lg border transition-all ${!frozen ? 'bg-orange-950/20 border-orange-900/50' : 'bg-slate-900/50 border-slate-800'}`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={!frozen ? "text-orange-400 font-bold text-sm" : "text-slate-400 font-bold text-sm line-through"}>Transfer: ₹2.1L (T-1 Hr)</span>
                        {!frozen && <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-[10px] uppercase font-bold rounded animate-pulse">Live Threat</span>}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">To: Acc 8892-*** (Your Bank)</div>
                    </div>
                    {frozen && <div className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest border border-emerald-900/50 bg-emerald-950/30 px-2 py-1 rounded">Secured</div>}
                  </div>
                </div>

              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-orange-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-orange-400 flex items-center gap-2">
                <Crosshair className="h-4 w-4" />
                Risk Intervention
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Customer account <span className="font-mono text-orange-400">8892-***</span> received ₹2.1L one hour ago from a PNB account that was just flagged by the Central Fraud Registry as a primary node in the Jamtara syndicate.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Proactively freeze account 8892-*** (Debit block) before the funds are withdrawn via ATMs or further cascaded.</p>
              </div>

              {!frozen ? (
                <button onClick={handleFreeze} className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                  Freeze Account (Debit Block) <Snowflake className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <ShieldAlert className="h-4 w-4" /> Account Frozen & Secured
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}