"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, DollarSign, ArrowRightLeft, ShieldCheck, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BusinessCashflowPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <Activity className="h-8 w-8" />
              Cashflow Intelligence
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Predictive Liquidity & Treasury Automation
          </p>
        </div>
        <div className="flex gap-2">
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                + Initiate Transfer
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Current Liquidity</CardTitle>
                <DollarSign className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">₹42.8M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Consolidated accounts
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">7-Day Projection</CardTitle>
                <Target className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">₹39.2M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   <TrendingDown className="h-3 w-3" /> Expected dip (Payroll)
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Inflow Velocity</CardTitle>
                <TrendingUp className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">Fast</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Avg. receipt: 12 days
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Anomaly Scan</CardTitle>
                <ShieldCheck className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">Clear</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   No suspicious outflow
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
            <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <ArrowRightLeft className="h-4 w-4 text-emerald-500" /> Treasury Ledger
               </CardTitle>
               <Badge variant="outline" className="font-mono text-[9px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
                   Real-Time Sync
               </Badge>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Timestamp</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Description</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Amount</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Category</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { time: "Today, 10:42 AM", desc: "Inward Remittance - Global Logistics", amount: "+₹1,45,000", type: "IN", cat: "Accounts Receivable" },
                         { time: "Today, 09:15 AM", desc: "Auto-sweep to Liquid Fund", amount: "-₹5,00,000", type: "OUT", cat: "Treasury" },
                         { time: "Yesterday, 04:30 PM", desc: "Vendor Payout - TechCorp India", amount: "-₹85,000", type: "OUT", cat: "Accounts Payable" },
                         { time: "Yesterday, 11:20 AM", desc: "Interest Yield - Corporate FD", amount: "+₹12,400", type: "IN", cat: "Treasury" },
                         { time: "Oct 24, 02:10 PM", desc: "Tax Challan - GST Remittance", amount: "-₹4,20,000", type: "OUT", cat: "Tax & Compliance" },
                       ].map((tx, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 text-xs font-mono text-muted-foreground">
                                {tx.time}
                             </td>
                             <td className="px-4 py-4 font-semibold text-xs text-foreground">
                                {tx.desc}
                             </td>
                             <td className={`px-4 py-4 text-right font-mono font-black ${tx.type === 'IN' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                {tx.amount}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className="font-mono text-[9px] uppercase bg-background text-muted-foreground border-border/50">
                                     {tx.cat}
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
                 <Target className="h-4 w-4 text-muted-foreground" /> Treasury AI Insights
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-6 space-y-6">
               
               <div className="p-4 border border-emerald-500/30 bg-emerald-500/10 rounded-lg">
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Yield Opportunity</h4>
                   <p className="text-xs font-mono text-emerald-500/80 mb-3">
                       Idle float of ₹1.2M detected in Current Account ending *4421.
                   </p>
                   <Button size="sm" className="w-full text-[10px] font-bold uppercase tracking-widest bg-emerald-600 hover:bg-emerald-700 text-white">
                       Auto-Sweep to Liquid Fund
                   </Button>
               </div>

               <div className="p-4 border border-amber-500/30 bg-amber-500/10 rounded-lg">
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-1">Upcoming Deficit</h4>
                   <p className="text-xs font-mono text-amber-500/80 mb-3">
                       Projected shortfall of ₹400k for payroll processing on 1st Nov.
                   </p>
                   <Button size="sm" variant="outline" className="w-full text-[10px] font-bold uppercase tracking-widest border-amber-500/50 text-amber-500 hover:bg-amber-500/20">
                       Discount Invoice INV-084
                   </Button>
               </div>

            </CardContent>
         </Card>
      </div>

    </div>
  );
}
