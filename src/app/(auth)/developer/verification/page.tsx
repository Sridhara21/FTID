"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, ArrowRight, Activity, Building2, FileCheck, Landmark, CheckCircle2, AlertCircle } from "lucide-react";

export default function DeveloperVerificationPage() {
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerified(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'FINTECH_ENTITY_VERIFIED',
        entity: 'FINTECH_DEVELOPER',
        msg: 'Corporate identity verified via MCA/GST MCA-21 integration. Production tier unlocked.',
        impact: ['API Gateway', 'Trust Registry'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-purple-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Building2 className="h-3 w-3" />
            DEVELOPER PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Entity Verification</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Am I ready to link my corporate bank account to verify my Fintech's legal identity?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-amber-950/40 border border-amber-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-1">Trust Tier</div>
            <div className="text-2xl font-black text-white">L0 (Sandbox)</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Verification Checks */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                Compliance Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="text-emerald-500"><CheckCircle2 className="h-5 w-5" /></div>
                  <div>
                    <div className="text-white font-bold mb-1">MCA Corporate Registration (CIN)</div>
                    <div className="text-xs text-slate-400">Verified against Ministry of Corporate Affairs database.</div>
                  </div>
                </div>
                <div className="text-emerald-500 font-mono text-sm">U72900KA2023PTC144892</div>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="text-emerald-500"><CheckCircle2 className="h-5 w-5" /></div>
                  <div>
                    <div className="text-white font-bold mb-1">Director DIN & KYC</div>
                    <div className="text-xs text-slate-400">Board of Directors Aadhaar/PAN mapping complete.</div>
                  </div>
                </div>
                <div className="text-emerald-500 font-mono text-sm">2/2 Verified</div>
              </div>

              <div className={`p-4 rounded-lg border flex justify-between items-center transition-all ${!verified ? 'bg-amber-950/20 border-amber-900/50' : 'bg-slate-900/50 border-slate-800'}`}>
                <div className="flex items-center gap-4">
                  <div className={!verified ? "text-amber-500" : "text-emerald-500"}>
                    {!verified ? <AlertCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">Corporate Bank Account (Penny Drop)</div>
                    <div className="text-xs text-slate-400">Verify operational bank account matching CIN.</div>
                  </div>
                </div>
                {!verified ? (
                  <div className="text-amber-500 font-mono text-sm uppercase tracking-widest font-bold text-[10px]">Pending</div>
                ) : (
                  <div className="text-emerald-500 font-mono text-sm">HDFC****8892</div>
                )}
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-purple-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2">
                <Landmark className="h-4 w-4" />
                Identity Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Status</p>
                <p className="text-sm text-slate-300">Basic corporate identity verified. To unlock Production API access (L1 Trust Tier), you must complete a Penny Drop verification on your corporate bank account.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Initiate Penny Drop verification via IMPS to confirm account ownership.</p>
              </div>

              {!verified ? (
                <button onClick={handleVerify} className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                  Verify Bank Account <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Verified (Prod Unlocked)
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
