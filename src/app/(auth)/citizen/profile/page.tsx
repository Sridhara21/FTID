"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { VerifiedIdentityGraph } from "@/components/shared/v2/VerifiedIdentityGraph";

export default function CitizenprofilePage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Personal Financial Operating System
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Profile</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Single source of truth for identity"
            </p>
          </div>
        </header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<VerifiedIdentityGraph sections={["PAN","Aadhaar","Employment","Education","Verified income","Bank relationships","Financial history","Trust timeline"]} />
</div>
<div className="lg:col-span-2 space-y-6">
<Card className="bg-[#0a1520] border-cyan-900/30"><CardHeader><CardTitle className="text-white text-sm font-bold uppercase tracking-widest">PAN</CardTitle></CardHeader><CardContent><div className="h-[100px] bg-[#05101a] rounded border border-cyan-900/10 flex items-center justify-center"><p className="text-cyan-500/30 text-xs">Verified Data Block</p></div></CardContent></Card>
<Card className="bg-[#0a1520] border-cyan-900/30"><CardHeader><CardTitle className="text-white text-sm font-bold uppercase tracking-widest">Aadhaar</CardTitle></CardHeader><CardContent><div className="h-[100px] bg-[#05101a] rounded border border-cyan-900/10 flex items-center justify-center"><p className="text-cyan-500/30 text-xs">Verified Data Block</p></div></CardContent></Card>
<Card className="bg-[#0a1520] border-cyan-900/30"><CardHeader><CardTitle className="text-white text-sm font-bold uppercase tracking-widest">Employment</CardTitle></CardHeader><CardContent><div className="h-[100px] bg-[#05101a] rounded border border-cyan-900/10 flex items-center justify-center"><p className="text-cyan-500/30 text-xs">Verified Data Block</p></div></CardContent></Card>
</div>
</div>

      </div>
    </div>
  );
}