"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandCoins, ShieldCheck, Search, Users, ActivitySquare, Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GovernmentSubsidiesPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <HandCoins className="h-8 w-8" />
              DBT & Subsidy Leakage Prevention
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Direct Benefit Transfer Real-Time Ledger
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Total DBT Disbursed</CardTitle>
                <HandCoins className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">₹4.2L Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   FY 2024-25
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Leakage Prevented</CardTitle>
                <ShieldCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">₹82,400 Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Via Aadhaar Deduplication
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Ghost Beneficiaries Blocked</CardTitle>
                <Ban className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">4.2M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Identities disabled
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <ActivitySquare className="h-4 w-4 text-emerald-500" /> Major Scheme Disbursement
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Scheme Name</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Fund Allocation</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Beneficiaries</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Aadhaar Seeded</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { name: "PM-KISAN", funds: "₹60,000 Cr", people: "11.2 Cr", a: "99.8%" },
                         { name: "MGNREGA", funds: "₹86,000 Cr", people: "14.4 Cr", a: "99.5%" },
                         { name: "PM Awas Yojana", funds: "₹80,670 Cr", people: "2.1 Cr", a: "100%" },
                         { name: "PAHAL (LPG)", funds: "₹30,000 Cr", people: "28.5 Cr", a: "98.2%" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-semibold text-xs text-foreground uppercase tracking-widest">
                                {item.name}
                             </td>
                             <td className="px-4 py-4 text-right font-mono font-black text-emerald-500">
                                {item.funds}
                             </td>
                             <td className="px-4 py-4 text-center font-mono text-muted-foreground">
                                {item.people}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className="font-mono text-[9px] uppercase bg-blue-500/10 text-blue-500 border-blue-500/30">
                                     {item.a}
                                 </Badge>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
             </CardContent>
          </Card>

          <Card className="md:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Search className="h-4 w-4 text-amber-500" /> Aadhaar Verification Feed
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                 {[
                     { msg: "De-duplication caught 1,200 duplicate ration cards in UP.", status: "Blocked" },
                     { msg: "DBT to dead beneficiaries halted in Bihar (PM-KISAN).", status: "Halted" },
                     { msg: "Synthetic identities using single bank account blocked.", status: "Frozen" },
                 ].map((alert, i) => (
                     <div key={i} className="p-3 border border-border/50 bg-background/50 rounded-lg">
                         <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">{alert.msg}</p>
                         <Badge variant="outline" className="mt-2 font-mono text-[8px] uppercase bg-red-500/10 text-red-500 border-red-500/30">
                             Action: {alert.status}
                         </Badge>
                     </div>
                 ))}
             </CardContent>
          </Card>
      </div>

    </div>
  );
}
