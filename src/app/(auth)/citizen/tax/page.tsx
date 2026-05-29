"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Calculator, Landmark, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CitizenTaxPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-cyan-500 uppercase flex items-center gap-3">
              <Calculator className="h-8 w-8" />
              AI Tax Engine
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Automated Estimation & Filing Assistant
          </p>
        </div>
        <div className="flex gap-2">
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <FileText className="h-4 w-4" /> Review Return
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. Tax Liability</CardTitle>
                <Landmark className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">₹1,14,200</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Projected for FY 24-25
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">TDS Deducted</CardTitle>
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">₹84,000</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Verified via Form 26AS
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Net Payable</CardTitle>
                <Calculator className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-cyan-500">₹30,200</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-cyan-500/80 flex items-center gap-1">
                   Advance Tax Pending
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" /> Automated AIS Match
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-6 overflow-auto">
                 <div className="space-y-6">
                     <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                             <Landmark className="h-5 w-5 text-emerald-500" />
                         </div>
                         <div className="flex-1">
                             <div className="flex justify-between items-center mb-1">
                                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Salary Income</h4>
                                 <span className="font-mono text-xs text-emerald-500">₹14,50,000</span>
                             </div>
                             <p className="text-[9px] font-mono text-muted-foreground">Matched exactly with Employer TDS (TechCorp India).</p>
                         </div>
                     </div>

                     <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                             <TrendingUp className="h-5 w-5 text-emerald-500" />
                         </div>
                         <div className="flex-1">
                             <div className="flex justify-between items-center mb-1">
                                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Capital Gains</h4>
                                 <span className="font-mono text-xs text-emerald-500">₹1,12,000</span>
                             </div>
                             <p className="text-[9px] font-mono text-muted-foreground">Matched exactly with Demat Account statements (Zerodha).</p>
                         </div>
                     </div>

                     <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
                             <Landmark className="h-5 w-5 text-amber-500" />
                         </div>
                         <div className="flex-1">
                             <div className="flex justify-between items-center mb-1">
                                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">FD Interest</h4>
                                 <span className="font-mono text-xs text-amber-500">₹45,200</span>
                             </div>
                             <p className="text-[9px] font-mono text-muted-foreground">Missing from manual draft. Auto-added by FTID Engine.</p>
                         </div>
                     </div>
                 </div>
             </CardContent>
          </Card>

          <Card className="border-cyan-500/20 bg-cyan-500/5 flex flex-col h-[500px] relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>
             <CardHeader className="pb-4 border-b border-cyan-500/20 relative z-10">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-cyan-500">
                    <ShieldCheck className="h-4 w-4" /> Deduction Intelligence
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-6 space-y-6 relative z-10">
                 
                 <div className="p-4 bg-background border border-cyan-500/20 rounded-lg">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 mb-2">Section 80C Optimized</h4>
                     <p className="text-xs font-mono text-muted-foreground mb-3">
                         You have utilized ₹1.2L of ₹1.5L limit via ELSS and PF. 
                     </p>
                     <p className="text-[10px] font-mono text-cyan-400 font-bold">
                         Suggestion: Invest ₹30,000 before March 31 to save ₹9,000 in taxes.
                     </p>
                 </div>

                 <div className="p-4 bg-background border border-cyan-500/20 rounded-lg">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 mb-2">New vs Old Regime</h4>
                     <p className="text-xs font-mono text-muted-foreground mb-3">
                         Based on your current deductions, the <strong className="text-cyan-400">New Regime</strong> is beneficial by ₹12,400.
                     </p>
                     <Button size="sm" variant="outline" className="w-full text-[10px] font-bold uppercase tracking-widest border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/20">
                         Switch to New Regime
                     </Button>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
