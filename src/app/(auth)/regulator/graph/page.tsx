"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { EntityRelationshipGraph } from "@/components/shared/v2/EntityRelationshipGraph";

export default function RegulatorgraphPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                National Financial Stability Command Center
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Entity Graph</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "FTID flagship visualization"
            </p>
          </div>
        </header>

<div className="h-[600px] w-full rounded-xl overflow-hidden border border-cyan-900/30">
<EntityRelationshipGraph nodes={["Citizens","Businesses","Banks","Institutions","Government","Regulators"]} purpose="FTID flagship visualization" />
</div>

      </div>
    </div>
  );
}