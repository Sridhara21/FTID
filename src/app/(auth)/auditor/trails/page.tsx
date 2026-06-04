"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Fingerprint, Lock, FileKey, CheckCircle2, FileText, DatabaseZap, Search } from "lucide-react";
import { useScenario } from "@/components/ScenarioContext";
import { DemoGuide } from "@/components/shared/DemoGuide";

export default function AuditorTrailsPage() {
  const [signed, setSigned] = useState(false);
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.currentStep >= 9;

  const handleSign = () => {
    setSigned(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-cyan-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Lock className="h-3 w-3" />
            AUDITOR PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Immutable Evidence Vault</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"What requires investigation and is this digital audit trail cryptographically verified for court proceedings?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Blockchain Verification</div>
            <div className="text-2xl font-black text-white">Valid</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Evidence Chain */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800 relative overflow-hidden">
            {isImpacted && (
               <div className="absolute top-0 right-0 p-2 bg-emerald-900/40 border-b border-l border-emerald-500/50 rounded-bl-lg text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                 <Search className="w-3 h-3" /> SCENARIO ANOMALY DETECTED
               </div>
            )}
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <DatabaseZap className="h-4 w-4" />
                Chain of Custody: Record {isImpacted ? 'TR-9904-X (Subsidy Anomaly)' : 'TR-4091-B (Apex Manufacturing)'}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-800 rounded-md text-emerald-500"><CheckCircle2 className="h-4 w-4" /></div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">{isImpacted ? '1. Subsidy Disbursal Trigger' : '1. e-Way Bill Interception'}</div>
                  <div className="text-xs text-slate-400 mb-2">Source: {isImpacted ? 'Gov Treasury Node' : 'NIC Gateway'}</div>
                  <div className="text-[10px] font-mono text-cyan-500 bg-cyan-950/30 px-2 py-1 rounded inline-block">Hash: {isImpacted ? '0x7b2f...1a42' : '0x8f4a...2c91'}</div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-800 rounded-md text-emerald-500"><CheckCircle2 className="h-4 w-4" /></div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">{isImpacted ? '2. Immediate Circular Transfer' : '2. GST Return Mismatch Detection'}</div>
                  <div className="text-xs text-slate-400 mb-2">Source: {isImpacted ? 'NPCI Switch' : 'CBDT AI Engine'}</div>
                  <div className="text-[10px] font-mono text-cyan-500 bg-cyan-950/30 px-2 py-1 rounded inline-block">Hash: {isImpacted ? '0x1c8b...33f4' : '0x41b2...99ee'}</div>
                </div>
              </div>

              <div className={`p-4 rounded-lg border flex items-start gap-4 relative overflow-hidden ${isImpacted ? 'bg-amber-950/20 border-amber-900/50' : 'bg-slate-900/50 border-slate-800'}`}>
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isImpacted ? 'bg-amber-500' : 'bg-cyan-500'}`}></div>
                <div className={`mt-1 p-2 rounded-md ${isImpacted ? 'bg-amber-900/40 border border-amber-500/30 text-amber-400' : 'bg-cyan-900/40 border border-cyan-500/30 text-cyan-400'}`}>
                  <Fingerprint className="h-4 w-4" />
                </div>
                <div>
                  <div className={`${isImpacted ? 'text-amber-400' : 'text-cyan-400'} font-bold text-sm mb-1`}>
                    {isImpacted ? '3. Automated Freeze on Suspect Destination' : '3. Automated Scrutiny Notice Dispatched'}
                  </div>
                  <div className="text-xs text-slate-400 mb-2">Target: {isImpacted ? 'Shadow NBFC Node' : 'GSTIN: 27AABCU9603R1Z4'}</div>
                  <div className="text-[10px] font-mono text-cyan-500 bg-cyan-950/30 px-2 py-1 rounded inline-block">Hash: {isImpacted ? '0x2a9e...00c1' : '0x9c3d...11b4'}</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-emerald-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Legal Admissibility
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">
                  {isImpacted ? "The evidentiary trail TR-9904-X captures a sophisticated attempt to divert subsidy funds. Cryptographic integrity is verified across all hops." : "The evidentiary trail TR-4091-B demonstrates continuous cryptographic integrity. No tampering detected across the GST, e-Way, and CBDT node data hashes."}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Digitally sign this evidentiary record to make it legally admissible under the Information Technology Act (Sec 65B), and export to the e-Courts portal.</p>
              </div>

              {!signed ? (
                <button onClick={handleSign} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(5,150,105,0.3)]">
                  Cryptographically Sign & Export <FileKey className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" /> Exported to e-Courts
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <DemoGuide nextStopUrl="/" label="Demo Complete (Return Home)" />
    </div>
  );
}