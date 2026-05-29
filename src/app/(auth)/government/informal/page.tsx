"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Activity, ScanFace, Building, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function GovernmentInformalPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <UserPlus className="h-8 w-8" />
              Informal Economy Formalization
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Street Vendor & MSME Digital Inclusion
          </p>
        </div>
        <div className="flex gap-2">
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <ScanFace className="h-4 w-4" /> Trigger Drive
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Newly Formalized</CardTitle>
                <Activity className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">1.2M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   UPI QR deployments this month
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Credit Access Granted</CardTitle>
                <Building className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">₹450 Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Via PM SVANidhi
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Digital Footprint Growth</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">18%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   MoM transaction volume increase
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[400px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <UserPlus className="h-4 w-4 text-emerald-500" /> Regional Formalization Progress
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-6 space-y-6 overflow-auto">
                 {[
                     { state: "Uttar Pradesh", value: 85, target: "2.4M", achieved: "2.0M" },
                     { state: "Maharashtra", value: 72, target: "1.8M", achieved: "1.3M" },
                     { state: "Bihar", value: 45, target: "1.2M", achieved: "0.5M" },
                     { state: "Gujarat", value: 92, target: "1.0M", achieved: "0.9M" },
                 ].map((item, i) => (
                     <div key={i} className="space-y-2">
                         <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-foreground">
                             <span>{item.state}</span>
                             <span className="font-mono">{item.achieved} / {item.target}</span>
                         </div>
                         <Progress value={item.value} className={`h-1.5 ${item.value > 80 ? '[&>div]:bg-emerald-500' : item.value > 50 ? '[&>div]:bg-blue-500' : '[&>div]:bg-amber-500'}`} />
                     </div>
                 ))}
             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[400px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-500" /> Micro-Credit Impact Ledger
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-4 overflow-auto p-0">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <tbody className="divide-y divide-border/50">
                       {[
                         { cohort: "Street Food Vendors", amount: "₹10,000 avg", repay: "98.2%", status: "Excellent" },
                         { cohort: "Handloom Weavers", amount: "₹50,000 avg", repay: "94.5%", status: "Good" },
                         { cohort: "Local Artisans", amount: "₹25,000 avg", repay: "88.1%", status: "Monitor" },
                         { cohort: "Gig Economy Drivers", amount: "₹15,000 avg", repay: "99.1%", status: "Excellent" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-semibold text-xs text-foreground">
                                {item.cohort}
                             </td>
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground uppercase">
                                {item.amount}
                             </td>
                             <td className="px-4 py-4 font-mono font-bold text-[10px] text-foreground text-center">
                                 {item.repay} Repayment
                             </td>
                             <td className="px-4 py-4 text-right">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     item.status === 'Excellent' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
                                     item.status === 'Good' ? 'bg-blue-500/10 text-blue-500 border-blue-500/30' : 
                                     'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                 }`}>
                                     {item.status}
                                 </Badge>
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
