"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle, FileText, FileCheck2, Fingerprint } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function BusinessCompliancePage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <ShieldCheck className="h-8 w-8" />
              Tax & Compliance Ops
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Automated RBI/GST Alignment
          </p>
        </div>
        <div className="flex gap-2">
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <FileCheck2 className="h-4 w-4" /> File GSTR-1
            </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card className="lg:col-span-2 bg-secondary/10 border-border/50 h-[450px] flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-500" /> Compliance Calendar & Filing Status
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-6 space-y-6">
                {[
                  { name: "GSTR-1 (Outward Supplies)", due: "11th of Next Month", status: "Ready to File", progress: 100, color: "text-emerald-500", bg: "bg-emerald-500" },
                  { name: "GSTR-2B (Auto-drafted ITC)", due: "14th of Next Month", status: "Reviewing", progress: 85, color: "text-blue-500", bg: "bg-blue-500" },
                  { name: "GSTR-3B (Summary Return)", due: "20th of Next Month", status: "Drafting", progress: 40, color: "text-amber-500", bg: "bg-amber-500" },
                  { name: "TDS Return (Form 26Q)", due: "31st July", status: "Pending Data", progress: 10, color: "text-muted-foreground", bg: "bg-muted-foreground" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2 p-4 border border-border/50 bg-background/50 rounded-lg">
                     <div className="flex justify-between items-start">
                       <div>
                         <span className="text-sm font-black uppercase tracking-widest text-foreground">{item.name}</span>
                         <p className="text-[10px] text-muted-foreground font-mono mt-1 flex items-center gap-1">
                             <AlertTriangle className={`h-3 w-3 ${item.progress < 50 ? 'text-amber-500' : 'text-muted-foreground'}`} /> Due: {item.due}
                         </p>
                       </div>
                       <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                             item.status === 'Ready to File' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
                             item.status === 'Reviewing' ? 'bg-blue-500/10 text-blue-500 border-blue-500/30' : 
                             'bg-amber-500/10 text-amber-500 border-amber-500/30'
                       }`}>
                          {item.status}
                       </Badge>
                     </div>
                     <div className="pt-2">
                        <Progress value={item.progress} className={`h-1.5 ${item.bg.replace('bg-', '[&>div]:bg-')}`} />
                     </div>
                  </div>
                ))}
            </CardContent>
         </Card>

         <Card className="lg:col-span-1 border-emerald-500/20 bg-emerald-500/5 flex flex-col h-[450px]">
            <CardHeader className="pb-4 border-b border-emerald-500/20">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-emerald-500">
                 <Fingerprint className="h-4 w-4" /> FTID Automated Audits
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-6 space-y-8">
               <div className="flex flex-col items-center text-center justify-center space-y-4 mb-8">
                   <div className="relative">
                       <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                           <ShieldCheck className="h-8 w-8 text-emerald-500" />
                       </div>
                   </div>
                   <div>
                       <h3 className="text-lg font-black uppercase tracking-widest text-emerald-500">Hygiene: Excellent</h3>
                       <p className="text-[10px] font-mono text-emerald-500/60 mt-1">No discrepancies found in continuous audit.</p>
                   </div>
               </div>

               <div className="space-y-4 border-t border-emerald-500/20 pt-4">
                   <div className="flex items-center gap-3">
                       <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                       <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Invoice Matching</p>
                           <p className="text-[9px] font-mono text-muted-foreground">100% of claimed ITC matches vendor GSTR-1.</p>
                       </div>
                   </div>
                   <div className="flex items-center gap-3">
                       <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                       <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">E-Way Bill Sync</p>
                           <p className="text-[9px] font-mono text-muted-foreground">Logistics data perfectly aligns with invoices.</p>
                       </div>
                   </div>
                   <div className="flex items-center gap-3">
                       <XCircle className="h-4 w-4 text-muted-foreground opacity-50" />
                       <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tax Defaults</p>
                           <p className="text-[9px] font-mono text-muted-foreground">Zero default events detected.</p>
                       </div>
                   </div>
               </div>
            </CardContent>
         </Card>
      </div>

    </div>
  );
}
