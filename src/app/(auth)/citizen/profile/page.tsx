"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, ShieldCheck, Fingerprint, Activity, Clock, FileText, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function CitizenProfilePage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-cyan-500 uppercase flex items-center gap-3">
              <User className="h-8 w-8" />
              Financial Identity Summary
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Verified Economic Participation Profile
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Identity Confidence</CardTitle>
                <Fingerprint className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-cyan-500">99.9%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-cyan-500/80 flex items-center gap-1">
                   Aadhaar/PAN Verified
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Economic Participation</CardTitle>
                <Activity className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">High</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Top 15% bracket
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Institutional Trust Score</CardTitle>
                <ShieldCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">842</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   0 defaults, 12 yrs history
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-foreground">
                    <Clock className="h-4 w-4 text-cyan-500" /> Institutional Trust History
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-6 overflow-auto">
                 <div className="relative border-l border-cyan-500/30 ml-3 space-y-6">
                     <div className="relative pl-6">
                         <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">Home Loan Cleared</h4>
                         <p className="text-xs font-mono text-muted-foreground mt-1">HDFC Bank • ₹45L • Zero late payments over 10 years.</p>
                         <p className="text-[9px] font-mono text-cyan-500/60 mt-1">Trust Score Impact: +45 points</p>
                     </div>
                     <div className="relative pl-6">
                         <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1"></div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">Tax Filing Continuity</h4>
                         <p className="text-xs font-mono text-muted-foreground mt-1">Income Tax Department • Continuous filing for 12 years.</p>
                         <p className="text-[9px] font-mono text-cyan-500/60 mt-1">Trust Score Impact: +20 points</p>
                     </div>
                     <div className="relative pl-6">
                         <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1"></div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">First Credit Line</h4>
                         <p className="text-xs font-mono text-muted-foreground mt-1">SBI • Credit Card • Maintained &lt;30% utilization.</p>
                     </div>
                 </div>
             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col">
             <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Lock className="h-4 w-4 text-emerald-500" /> Account Aggregator Consent Visibility
                 </CardTitle>
                 <Badge variant="outline" className="font-mono text-[9px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
                     Active Control
                 </Badge>
             </CardHeader>
             <CardContent className="flex-1 pt-4 overflow-auto p-0">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <tbody className="divide-y divide-border/50">
                       {[
                         { app: "SpendWise AI", data: "Tx History (6 mo)", expiry: "Expires in 12 days", status: "Active" },
                         { app: "TaxSaver Pro", data: "Form 26AS, MF holdings", expiry: "Expires in 4 months", status: "Active" },
                         { app: "AutoLoan Hub", data: "Salary Account, CIBIL", expiry: "Expired", status: "Revoked" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-semibold text-xs text-foreground">
                                {item.app}
                             </td>
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground">
                                {item.data}
                             </td>
                             <td className="px-4 py-4 font-mono font-bold text-[9px] text-muted-foreground text-center">
                                 {item.expiry}
                             </td>
                             <td className="px-4 py-4 text-right">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     item.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
                                     'bg-red-500/10 text-red-500 border-red-500/30'
                                 }`}>
                                     {item.status}
                                 </Badge>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="p-4 border-t border-border/50">
                     <Button variant="destructive" className="w-full text-[10px] font-bold uppercase tracking-widest">
                         Revoke All Consents
                     </Button>
                 </div>
             </CardContent>
          </Card>
      </div>

    </div>
  );
}
