"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Activity, Network, ShieldCheck, UserX, ScanFace, Building, FileText, Send, EyeOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function InstitutionalFraudPage() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">AML & Fraud Ops</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> Internal Compliance & Threat Isolation
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="gap-2 border-primary/20 text-primary uppercase tracking-widest text-[10px] font-bold">
            <FileText className="h-4 w-4" /> Download STR Batch
            </Button>
            <Button variant="destructive" className="gap-2 uppercase tracking-widest text-[10px] font-bold shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            <Send className="h-4 w-4" /> Push to RBI FIU
            </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-red-400">Suspicious Tx (STR)</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">1,204</div>
            <p className="text-[10px] text-red-400/80 font-bold uppercase tracking-widest mt-1">Pending RBI Review</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-500/20 bg-orange-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-orange-400">Mule Accounts Isolated</CardTitle>
            <UserX className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-orange-500">842</div>
            <p className="text-[10px] text-orange-400/80 font-bold uppercase tracking-widest mt-1">Funds frozen automatically</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-yellow-400">KYC/KYB Anomalies</CardTitle>
            <ScanFace className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-yellow-500">3.4%</div>
            <p className="text-[10px] text-yellow-400/80 font-bold uppercase tracking-widest mt-1">Mismatch rate today</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Insider Threat Index</CardTitle>
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-foreground">0.02</div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Employee risk nominal</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {/* Live Isolation Feed */}
         <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <ShieldCheck className="h-4 w-4 text-primary" /> Real-Time Isolation Feed
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Time</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Account/Entity</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Trigger Logic</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Action Taken</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { time: "Just now", acct: "Acct #8812 (Retail)", trigger: "Velocity Spike (>50x)", action: "FROZEN", color: "text-red-500", bg: "bg-red-500/10 text-red-500 border-red-500/30" },
                         { time: "2m ago", acct: "Corp-Alpha (SME)", trigger: "KYB Deepfake Detected", action: "ONBOARD HALT", color: "text-orange-500", bg: "bg-orange-500/10 text-orange-500 border-orange-500/30" },
                         { time: "14m ago", acct: "Acct #4421 (Retail)", trigger: "Known Mule Cluster Match", action: "FROZEN", color: "text-red-500", bg: "bg-red-500/10 text-red-500 border-red-500/30" },
                         { time: "42m ago", acct: "Employee ID: EX-44", trigger: "Unusual Data Access (VIP)", action: "REVOKED", color: "text-yellow-500", bg: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30" },
                         { time: "1h ago", acct: "Acct #9901 (Retail)", trigger: "Circular Routing (Hawala)", action: "FROZEN", color: "text-red-500", bg: "bg-red-500/10 text-red-500 border-red-500/30" },
                         { time: "2h ago", acct: "Global Traders (Corp)", trigger: "Shell Entity Probability >99%", action: "LIMIT DROPPED", color: "text-primary", bg: "bg-primary/10 text-primary border-primary/30" },
                       ].map((log, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-3 text-xs font-mono text-muted-foreground">
                                {log.time}
                             </td>
                             <td className="px-4 py-3 font-semibold text-xs flex items-center gap-2">
                                {log.color === 'text-orange-500' || log.color === 'text-primary' ? <Building className={`h-3 w-3 ${log.color}`} /> : log.color === 'text-yellow-500' ? <EyeOff className={`h-3 w-3 ${log.color}`} /> : <UserX className={`h-3 w-3 ${log.color}`} />}
                                {log.acct}
                             </td>
                             <td className="px-4 py-3 text-[10px] font-mono text-muted-foreground uppercase">
                                {log.trigger}
                             </td>
                             <td className="px-4 py-3 text-right">
                                 <Badge variant="outline" className={`font-mono text-[9px] ${log.bg}`}>
                                     {log.action}
                                 </Badge>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
            </CardContent>
         </Card>

         {/* Reporting & Compliance Status */}
         <Card className="lg:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <Network className="h-4 w-4 text-muted-foreground" /> RBI FIU Connect Status
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-6 space-y-8">
               <div className="flex flex-col items-center text-center justify-center space-y-4 mb-8">
                   <div className="relative">
                       <div className="w-20 h-20 rounded-full bg-green-500/10 border-4 border-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                           <ShieldCheck className="h-8 w-8 text-green-500" />
                       </div>
                       {pulse && <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-50"></div>}
                   </div>
                   <div>
                       <h3 className="text-lg font-black uppercase tracking-widest text-green-500">Sync: Optimal</h3>
                       <p className="text-[10px] font-mono text-muted-foreground mt-1">Last heartbeart: 2s ago</p>
                   </div>
               </div>

               <div className="space-y-4">
                  <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                          <span>STRs Uploaded (Today)</span>
                          <span className="text-foreground">84 / 1204</span>
                      </div>
                      <Progress value={7} className="h-1.5 [&>div]:bg-primary" />
                  </div>
                  
                  <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                          <span>CTR Batch Generation</span>
                          <span className="text-foreground">Preparing</span>
                      </div>
                      <Progress value={85} className="h-1.5 [&>div]:bg-blue-500" />
                  </div>

                  <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                          <span>Data Sanitization Quality</span>
                          <span className="text-green-500">100%</span>
                      </div>
                      <Progress value={100} className="h-1.5 [&>div]:bg-green-500" />
                  </div>
               </div>
               
               <div className="pt-4 border-t border-border/50">
                   <Button variant="outline" className="w-full text-[10px] uppercase font-bold tracking-widest border-border/50 bg-background hover:bg-secondary/50">
                       View Submission Logs
                   </Button>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}