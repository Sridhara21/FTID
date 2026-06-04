"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, ArrowRight, ShieldAlert, KeyRound, Clock, AlertOctagon, RotateCcw, ShieldCheck } from "lucide-react";

export default function DeveloperKeysPage() {
  const [rotated, setRotated] = useState(false);

  const handleRotate = () => {
    setRotated(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'API_KEYS_ROTATED',
        entity: 'FINTECH_DEVELOPER',
        msg: 'Production e-KYC API keys revoked and rotated due to suspected leak in public GitHub repository.',
        impact: ['API Gateway', 'Production Auth Server'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-purple-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <KeyRound className="h-3 w-3" />
            DEVELOPER PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Cryptographic Key Vault</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Were my production API keys compromised, and should I rotate them immediately?"</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Keys Vault */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Key className="h-4 w-4" />
                Active Environment Keys
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className={`p-4 rounded-lg border transition-all ${!rotated ? 'bg-rose-950/20 border-rose-900/50' : 'bg-slate-900/50 border-slate-800'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">e-KYC Production Key</span>
                      {!rotated && <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] uppercase font-bold rounded animate-pulse">Compromised</span>}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                      <Clock className="h-3 w-3" /> Created: 45 days ago
                    </div>
                  </div>
                  {!rotated ? (
                    <div className="text-rose-500 bg-rose-950/40 px-2 py-1 rounded font-mono text-sm border border-rose-900">sk_prod_8492...leak</div>
                  ) : (
                    <div className="text-slate-500 bg-slate-900 px-2 py-1 rounded font-mono text-sm border border-slate-800 line-through">sk_prod_8492...revoked</div>
                  )}
                </div>
              </div>

              {rotated && (
                <div className="p-4 bg-emerald-950/20 rounded-lg border border-emerald-900/50 animate-in slide-in-from-top-4 fade-in">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold">e-KYC Production Key (v2)</span>
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold rounded">Active</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                        <Clock className="h-3 w-3" /> Created: Just now
                      </div>
                    </div>
                    <div className="text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded font-mono text-sm border border-emerald-900">sk_prod_v2_new...</div>
                  </div>
                </div>
              )}

              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">Account Aggregator Sandbox</span>
                      <span className="px-2 py-0.5 bg-amber-500/20 text-amber-500 text-[10px] uppercase font-bold rounded">Testing</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                      <Clock className="h-3 w-3" /> Created: 12 days ago
                    </div>
                  </div>
                  <div className="text-amber-400 bg-amber-950/20 px-2 py-1 rounded font-mono text-sm border border-amber-900/50">sk_test_1102...</div>
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
                <ShieldAlert className="h-4 w-4" />
                Security Intervention
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">GitHub Secret Scanning detected your <span className="font-mono text-rose-400">e-KYC Production Key</span> in a public repository commit 14 minutes ago. Severe risk of unauthorized demographic data access.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Immediately revoke the compromised key and generate a new secure cryptographic token.</p>
              </div>

              {!rotated ? (
                <button onClick={handleRotate} className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                  Revoke & Rotate Keys <RotateCcw className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Secured & Rotated
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}