"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, TrendingDown, Scale, Target, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function AuditorRiskPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-amber-500 uppercase flex items-center gap-3">
              <ShieldAlert className="h-8 w-8" />
              Audit Risk Engine
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Hidden Liability & Drift Detection
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">High Risk Entities</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">42</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-red-500/80 flex items-center gap-1">
                   Drift score > 85
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Hidden Liability Est.</CardTitle>
                <TrendingDown className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">₹1,450 Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Across active audits
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Compliance Drift</CardTitle>
                <Scale className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">14.2%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Avg. deviation from baseline
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Target className="h-4 w-4 text-amber-500" /> Compliance Drift Analysis
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-6 space-y-6">
                 
                 {[
                     { sector: "Real Estate (Tier 2)", drift: 38, status: "Critical" },
                     { sector: "Gems & Jewellery", drift: 25, status: "High" },
                     { sector: "IT / ITES", drift: 8, status: "Low" },
                     { sector: "Auto Ancillary", drift: 12, status: "Medium" },
                 ].map((item, i) => (
                     <div key={i} className="space-y-2">
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-foreground">
                             <span>{item.sector}</span>
                             <div className="flex items-center gap-2">
                                 <span className="font-mono text-muted-foreground">{item.drift}% Deviation</span>
                             </div>
                         </div>
                         <Progress value={item.drift} className={`h-1.5 ${item.drift > 30 ? '[&>div]:bg-red-500' : item.drift > 15 ? '[&>div]:bg-amber-500' : '[&>div]:bg-emerald-500'}`} />
                     </div>
                 ))}

             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-red-500" /> Hidden Liability Detection
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Target Entity</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Detection Vector</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Est. Exposure</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { entity: "Skyline Infra P.L.", vector: "Off-balance sheet SPVs", amt: "₹450 Cr" },
                         { entity: "Nexus Traders", vector: "Pending Litigation Risks", amt: "₹120 Cr" },
                         { entity: "Prime Minerals", vector: "Unfunded Pension Liab.", amt: "₹85 Cr" },
                         { entity: "Vertex Logistics", vector: "Contingent Tax Claims", amt: "₹42 Cr" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-semibold text-xs text-foreground uppercase tracking-widest">
                                {item.entity}
                             </td>
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground">
                                {item.vector}
                             </td>
                             <td className="px-4 py-4 text-right font-mono font-black text-red-500">
                                {item.amt}
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
             </CardContent>
          </Card>
      </div>

    </div>
  );
}
