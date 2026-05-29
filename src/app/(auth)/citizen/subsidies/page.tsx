"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandCoins, ShieldCheck, CheckCircle2, FileText, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CitizenSubsidiesPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-cyan-500 uppercase flex items-center gap-3">
              <HandCoins className="h-8 w-8" />
              Direct Benefit Tracking
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Government Aid & Subsidy Eligibility
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Lifetime Disbursed</CardTitle>
                <HandCoins className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-cyan-500">₹45,200</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-cyan-500/80 flex items-center gap-1">
                   Via DBT
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Active Subsidies</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">2</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Currently enrolled
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Aadhaar Status</CardTitle>
                <ShieldCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">Linked</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   NPCI Mapper Active
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cyan-500" /> Benefit History
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Date</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Scheme</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Amount</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Credited To</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { date: "Oct 15, 2024", scheme: "PAHAL (LPG Subsidy)", amount: "₹300", account: "HDFC ***8812" },
                         { date: "Aug 10, 2024", scheme: "PM-KISAN", amount: "₹2,000", account: "HDFC ***8812" },
                         { date: "Jun 12, 2024", scheme: "PM-KISAN", amount: "₹2,000", account: "HDFC ***8812" },
                         { date: "Apr 05, 2024", scheme: "PAHAL (LPG Subsidy)", amount: "₹300", account: "HDFC ***8812" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground">
                                {item.date}
                             </td>
                             <td className="px-4 py-4 font-semibold text-xs text-foreground uppercase tracking-widest">
                                {item.scheme}
                             </td>
                             <td className="px-4 py-4 text-right font-mono font-black text-emerald-500">
                                {item.amount}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className="font-mono text-[9px] uppercase bg-background text-muted-foreground border-border/50">
                                     {item.account}
                                 </Badge>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
             </CardContent>
          </Card>

          <Card className="lg:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" /> Auto-Eligibility Engine
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-6 space-y-4">
                 
                 <div className="p-4 border border-emerald-500/30 bg-emerald-500/10 rounded-lg">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Ayushman Bharat</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Eligible</Badge>
                     </div>
                     <p className="text-[10px] font-mono text-muted-foreground">
                         Based on socio-economic profile, you qualify for free health coverage up to ₹5L.
                     </p>
                 </div>

                 <div className="p-4 border border-border/50 bg-background/50 rounded-lg opacity-50">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">PM Awas Yojana</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-transparent text-muted-foreground border-border/50">Ineligible</Badge>
                     </div>
                     <p className="text-[10px] font-mono text-muted-foreground">
                         Income criteria exceeds threshold for housing subsidy.
                     </p>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
