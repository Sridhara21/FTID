"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileSearch, CheckSquare, AlertCircle, FileCheck, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AuditorPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <FileSearch className="h-8 w-8" />
              Automated Compliance Intelligence
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            National Auditor Operations Hub
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Active Audits</CardTitle>
                <CheckSquare className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">2,140</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   In progress
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Anomalies Found</CardTitle>
                <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">182</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-red-500/80 flex items-center gap-1">
                   Requires manual review
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Auto-Reconciled</CardTitle>
                <FileCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">8.5M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Documents processed
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Critical Risks</CardTitle>
                <ShieldAlert className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">14</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Escalated to RBI
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" /> Priority Anomaly Feed
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Entity Name</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Anomaly Type</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Severity</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { entity: "Vanguard Tech P.L.", type: "Mismatch: GSTR-3B vs GSTR-1", sev: "Critical" },
                         { entity: "Oasis Supply Chain", type: "Circular Billing Suspect", sev: "High" },
                         { entity: "Apex Merchants", type: "Input Tax Credit Discrepancy", sev: "High" },
                         { entity: "Global Trade Corp", type: "Abnormal Cash Withdrawals", sev: "Medium" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-semibold text-xs text-foreground uppercase tracking-widest">
                                {item.entity}
                             </td>
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground">
                                {item.type}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     item.sev === 'Critical' ? 'bg-red-500/10 text-red-500 border-red-500/30' : 
                                     item.sev === 'High' ? 'bg-amber-500/10 text-amber-500 border-amber-500/30' :
                                     'bg-blue-500/10 text-blue-500 border-blue-500/30'
                                 }`}>
                                     {item.sev}
                                 </Badge>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-emerald-500" /> Reconciliation Progress
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-6 space-y-6">
                 
                 <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 rounded-lg">
                     <div className="flex justify-between items-center mb-4">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Daily E-Invoicing Ledger</h4>
                         <span className="font-mono text-xs font-black text-emerald-500">98% Auto-Matched</span>
                     </div>
                     <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                         <div className="h-full bg-emerald-500 w-[98%]"></div>
                     </div>
                 </div>

                 <div className="p-4 border border-blue-500/30 bg-blue-500/5 rounded-lg">
                     <div className="flex justify-between items-center mb-4">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Corporate Tax Filings</h4>
                         <span className="font-mono text-xs font-black text-blue-500">75% Audited</span>
                     </div>
                     <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                         <div className="h-full bg-blue-500 w-[75%]"></div>
                     </div>
                 </div>

                 <div className="p-4 border border-amber-500/30 bg-amber-500/5 rounded-lg">
                     <div className="flex justify-between items-center mb-4">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500">High-Risk Suspense Accounts</h4>
                         <span className="font-mono text-xs font-black text-amber-500">40% Cleared</span>
                     </div>
                     <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                         <div className="h-full bg-amber-500 w-[40%]"></div>
                     </div>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
