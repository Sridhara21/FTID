"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Activity, TrendingUp, AlertOctagon, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GatewayVelocityPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-amber-500 uppercase flex items-center gap-3">
              <Zap className="h-8 w-8" />
              Velocity Intelligence Engine
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Abnormal Transaction Burst Detection
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Network Velocity Base</CardTitle>
                <Activity className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">12,400</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Expected TPS for current hour
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Anomalous Spikes</CardTitle>
                <TrendingUp className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">4</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Detected in last 60 mins
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Auto-throttled VPAs</CardTitle>
                <AlertOctagon className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">89</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-red-500/80 flex items-center gap-1">
                   Due to extreme velocity
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Flame className="h-4 w-4 text-amber-500" /> Live Velocity Spike Alerts
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Target VPA / Account</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Velocity Metric</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Anomaly Score</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">System Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { vpa: "gaming_merchant@ybl", metric: "1,200 reqs / min", score: "99.4", action: "Throttled (Rate Limit)" },
                         { vpa: "donation_ngo@sbi", metric: "450 reqs / min", score: "82.1", action: "Monitored" },
                         { vpa: "unknown_proxy_88@icici", metric: "800 reqs / min", score: "98.8", action: "Frozen (Mule Suspect)" },
                         { vpa: "flash_sale_ecom@hdfc", metric: "4,500 reqs / min", score: "75.0", action: "Whitelisted (Known Event)" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 text-[10px] font-mono text-foreground font-bold">
                                {item.vpa}
                             </td>
                             <td className="px-4 py-4 font-semibold text-[10px] text-amber-500 uppercase tracking-widest">
                                {item.metric}
                             </td>
                             <td className="px-4 py-4 text-right font-mono font-black text-foreground">
                                {item.score}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     item.action.includes('Frozen') || item.action.includes('Throttled') ? 'bg-red-500/10 text-red-500 border-red-500/30' : 
                                     item.action.includes('White') ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' :
                                     'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                 }`}>
                                     {item.action}
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
