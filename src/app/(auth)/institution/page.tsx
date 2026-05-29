"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Activity, Network, ShieldCheck, Banknote, Briefcase, TrendingUp, AlertTriangle, Layers, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function InstitutionDashboard() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Institutional Core</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" /> Banking Intelligence Infrastructure
          </p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest text-[9px] font-bold">
          NODE: HDFC NEXUS
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/50 bg-secondary/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Liquidity Buffer (LCR)</CardTitle>
            <Wallet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">142%</div>
            <p className="text-[10px] text-blue-400/80 font-bold uppercase tracking-widest mt-1">₹4.2T Excess</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Live Lending Exposure</CardTitle>
            <Banknote className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-green-500">₹84K Cr</div>
            <p className="text-[10px] text-green-400/80 font-bold uppercase tracking-widest mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +12% this quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">SME Credit Confidence</CardTitle>
            <Briefcase className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-primary">High</div>
            <p className="text-[10px] text-primary/80 font-bold uppercase tracking-widest mt-1">94% Repayment Prob</p>
          </CardContent>
        </Card>
        
        <Card className="border-red-500/20 bg-red-500/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-red-400">Fraud Pressure Index</CardTitle>
            <ShieldCheck className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">Elevated</div>
            <p className="text-[10px] text-red-400/80 font-bold uppercase tracking-widest mt-1">Synthetic Identity Spikes</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <Activity className="h-4 w-4 text-primary" /> Sectoral Risk Indicators
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-4 space-y-6">
                {[
                  { sector: "Real Estate & Construction", exposure: "₹42,000 Cr", risk: 78, color: "text-orange-500", bg: "bg-orange-500" },
                  { sector: "Manufacturing MSMEs", exposure: "₹18,500 Cr", risk: 42, color: "text-primary", bg: "bg-primary" },
                  { sector: "Agriculture & Allied", exposure: "₹24,000 Cr", risk: 35, color: "text-green-500", bg: "bg-green-500" },
                  { sector: "Retail & Consumer", exposure: "₹38,000 Cr", risk: 85, color: "text-red-500", bg: "bg-red-500" },
                  { sector: "Tech & IT Services", exposure: "₹12,400 Cr", risk: 15, color: "text-green-500", bg: "bg-green-500" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex justify-between items-end">
                       <div>
                         <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.sector}</span>
                         <p className="text-[9px] text-muted-foreground font-mono uppercase mt-0.5">Exposure: {item.exposure}</p>
                       </div>
                       <span className="text-[10px] font-mono font-bold text-muted-foreground">RISK: {item.risk}%</span>
                     </div>
                     <Progress value={item.risk} className={`h-1.5 ${item.bg.replace('bg-', '[&>div]:bg-')}`} />
                  </div>
                ))}
            </CardContent>
         </Card>

         <Card className="lg:col-span-1 border-border/50 bg-secondary/10 flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <Layers className="h-4 w-4 text-muted-foreground" /> Underwriting Activity
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-4 space-y-3">
               {[
                 { action: "Auto-Approved", type: "MSME Loan (Tier 1)", amount: "₹45 Lakh", time: "Just now", status: "success" },
                 { action: "Manual Review", type: "Corp Overdraft", amount: "₹12 Cr", time: "2m ago", status: "warning" },
                 { action: "Rejected (Fraud)", type: "Retail Personal", amount: "₹8 Lakh", time: "14m ago", status: "error" },
                 { action: "Auto-Approved", type: "Agri Machinery", amount: "₹12 Lakh", time: "18m ago", status: "success" },
                 { action: "Auto-Approved", type: "MSME Loan (Tier 2)", amount: "₹25 Lakh", time: "22m ago", status: "success" },
                 { action: "Risk Flagged", type: "Supply Chain Fin", amount: "₹4 Cr", time: "34m ago", status: "warning" },
               ].map((log, i) => (
                  <div key={i} className="p-2 border border-border/50 bg-background/50 rounded flex justify-between items-center group hover:border-primary/50 transition-colors cursor-default">
                      <div>
                         <span className={`text-[10px] font-bold uppercase tracking-widest ${log.status === 'success' ? 'text-green-500' : log.status === 'warning' ? 'text-orange-500' : 'text-red-500'}`}>
                             {log.action}
                         </span>
                         <p className="text-[9px] font-mono text-muted-foreground uppercase mt-0.5">{log.type}</p>
                      </div>
                      <div className="text-right">
                          <span className="text-xs font-mono font-bold text-foreground">{log.amount}</span>
                          <p className="text-[9px] font-mono text-muted-foreground">{log.time}</p>
                      </div>
                  </div>
               ))}
            </CardContent>
         </Card>
      </div>
    </div>
  );
}