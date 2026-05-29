"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Landmark, ArrowUpCircle, Receipt, ActivitySquare, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GovernmentRevenuePage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-blue-500 uppercase flex items-center gap-3">
              <Landmark className="h-8 w-8" />
              Tax & Revenue Collection
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            GST & Direct Tax Real-time Aggregation
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">GST Collections (MTD)</CardTitle>
                <Receipt className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">₹1.84L Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   <ArrowUpCircle className="h-3 w-3" /> +11% YoY
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Direct Tax (MTD)</CardTitle>
                <Landmark className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">₹2.12L Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   <ArrowUpCircle className="h-3 w-3" /> +15% YoY
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tax Buoyancy</CardTitle>
                <ActivitySquare className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">1.2x</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   High elasticity
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Receipt className="h-4 w-4 text-blue-500" /> Sectoral GST Contribution
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-4 space-y-4">
                 {[
                     { name: "Manufacturing", value: "₹42,000 Cr", percent: 45, color: "bg-blue-500" },
                     { name: "Services (IT & Fin)", value: "₹38,000 Cr", percent: 35, color: "bg-emerald-500" },
                     { name: "Auto & Ancillary", value: "₹18,000 Cr", percent: 20, color: "bg-amber-500" },
                     { name: "FMCG", value: "₹14,000 Cr", percent: 15, color: "bg-purple-500" },
                 ].map((item, i) => (
                     <div key={i} className="space-y-1">
                         <div className="flex justify-between items-end text-[10px] font-bold uppercase tracking-widest">
                             <span>{item.name}</span>
                             <span className="font-mono text-foreground">{item.value}</span>
                         </div>
                         <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                             <div className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }}></div>
                         </div>
                     </div>
                 ))}
             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Deficit Control
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-4">
                 <div className="p-6 border-2 border-dashed border-emerald-500/30 rounded-xl flex flex-col items-center justify-center text-center h-full space-y-4">
                     <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                         <Landmark className="h-8 w-8 text-emerald-500" />
                     </div>
                     <div>
                         <p className="text-sm font-black uppercase tracking-widest text-emerald-500">Fiscal Target: On Track</p>
                         <p className="text-[10px] font-mono text-muted-foreground mt-2 max-w-xs">
                             Strong tax buoyancy and reduced subsidy leakages have kept the fiscal deficit well within the 5.1% target bandwidth.
                         </p>
                     </div>
                 </div>
             </CardContent>
          </Card>
      </div>

    </div>
  );
}
