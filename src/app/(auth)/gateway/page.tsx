"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Server, Activity, Network, CheckCircle2, AlertTriangle, Zap, ServerCrash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function GatewayPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-indigo-500 uppercase flex items-center gap-3">
              <Network className="h-8 w-8" />
              National Settlement Infrastructure
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Gateway Throughput & Switch Health
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Current TPS</CardTitle>
                <Activity className="h-4 w-4 text-indigo-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-indigo-500">14,285</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-indigo-500/80 flex items-center gap-1">
                   Transactions per second
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Settlement Queue</CardTitle>
                <Server className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">0.4s</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Avg. latency
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Switch Health</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">99.99%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Uptime (24h)
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Failures</CardTitle>
                <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">0.02%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Technical declines
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Activity className="h-4 w-4 text-indigo-500" /> Network Switch Load Distribution
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-6 overflow-auto space-y-6">
                 
                 {[
                     { name: "UPI Core Switch (Mumbai)", load: 82, status: "Normal" },
                     { name: "UPI Standby Switch (Chennai)", load: 45, status: "Normal" },
                     { name: "IMPS Gateway", load: 68, status: "Normal" },
                     { name: "AEPS Authentication Node", load: 92, status: "Warning" },
                     { name: "CBDC Distributed Ledger", load: 35, status: "Normal" },
                 ].map((node, i) => (
                     <div key={i} className="space-y-2">
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-foreground">
                             <span>{node.name}</span>
                             <div className="flex items-center gap-2">
                                 <Badge variant="outline" className={`font-mono text-[8px] uppercase ${
                                     node.status === 'Normal' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
                                     'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                 }`}>
                                     {node.status}
                                 </Badge>
                                 <span className="font-mono text-muted-foreground">{node.load}%</span>
                             </div>
                         </div>
                         <Progress value={node.load} className={`h-1.5 ${node.load > 85 ? '[&>div]:bg-amber-500' : '[&>div]:bg-indigo-500'}`} />
                     </div>
                 ))}

             </CardContent>
          </Card>

          <Card className="md:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <ServerCrash className="h-4 w-4 text-red-500" /> Bank Downtime Monitor
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                 
                 <div className="p-3 border border-red-500/30 bg-red-500/5 rounded-lg">
                     <div className="flex justify-between items-start mb-1">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-500">Bank of Baroda</h4>
                         <span className="text-[9px] font-mono font-bold text-red-500">DEGRADED</span>
                     </div>
                     <p className="text-[10px] font-mono text-muted-foreground">
                         UPI technical decline rate spike (14%). Routing traffic to secondary core.
                     </p>
                 </div>

                 <div className="p-3 border border-amber-500/30 bg-amber-500/5 rounded-lg">
                     <div className="flex justify-between items-start mb-1">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Axis Bank</h4>
                         <span className="text-[9px] font-mono font-bold text-amber-500">LATENCY</span>
                     </div>
                     <p className="text-[10px] font-mono text-muted-foreground">
                         CBS response > 2.5s. Holding settlement queue.
                     </p>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
