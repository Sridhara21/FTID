"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, ArrowRight, Activity, MapPin, AlertTriangle, ShieldAlert, CheckCircle2, Factory } from "lucide-react";

export default function GovernmentStressPage() {
  const [reliefDeployed, setReliefDeployed] = useState(false);

  const handleRelief = () => {
    setReliefDeployed(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'RELIEF_DEPLOYED',
        entity: 'MINISTRY_OF_FINANCE',
        msg: 'Emergency forbearance directive issued for Surat Textile MSMEs. Repayments paused for 90 days.',
        impact: ['Commercial Bank Underwriting', 'Business Compliance'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-amber-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-amber-900/30 text-amber-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <ShieldAlert className="h-3 w-3" />
            GOVERNMENT PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Economic Stress & Relief</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Which geographic clusters require immediate forbearance to prevent mass defaults?"</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Stress Hotspots */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Live Stress Hotspots
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className="p-4 bg-rose-950/20 rounded-lg border border-rose-900/50 flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-rose-400 font-bold">Surat (Gujarat)</span>
                    <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] uppercase font-bold rounded">Critical</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1"><Factory className="h-3 w-3" /> Textile Hub</span>
                    <span>GST Filings: <span className="text-rose-400 font-bold">-45% (MoM)</span></span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono text-xl">8.4%</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Projected Default Rate</div>
                </div>
              </div>

              <div className="p-4 bg-amber-950/20 rounded-lg border border-amber-900/30 flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-400 font-bold">Ludhiana (Punjab)</span>
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] uppercase font-bold rounded">Elevated</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1"><Factory className="h-3 w-3" /> Auto Parts</span>
                    <span>GST Filings: <span className="text-amber-400 font-bold">-12% (MoM)</span></span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono text-xl">4.1%</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Projected Default Rate</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-rose-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-rose-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Intervention Directive
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Systemic Threat</p>
                <p className="text-sm text-slate-300">Surat textile MSMEs are facing a severe liquidity crunch due to supply chain disruptions. Algorithm predicts a cascading default wave within 14 days impacting 3 regional banks.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Issue an emergency 90-day loan forbearance directive targeting the Surat Textile cluster via the RBI APIs.</p>
              </div>

              {!reliefDeployed ? (
                <button onClick={handleRelief} className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                  Deploy Forbearance <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Directive Issued
                </div>
              )}

              {reliefDeployed && (
                <p className="text-[10px] text-slate-500 text-center">
                  Banks notified. NPA classifications suspended for 90 days.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
