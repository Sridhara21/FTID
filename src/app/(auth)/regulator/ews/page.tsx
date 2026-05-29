"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, AlertTriangle, TrendingDown, BellRing, MapPin, BarChart3, AlertOctagon, ArrowDownRight, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export default function EarlyWarningSystemPage() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">EWS Core</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <BellRing className="h-4 w-4 text-red-500" /> National Early Warning System
          </p>
        </div>
        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 uppercase tracking-widest text-[9px] font-bold animate-pulse">
          THREAT DETECTED
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-red-500/30 bg-red-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-red-400">Contagion Probability</CardTitle>
            <AlertOctagon className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">84.2%</div>
            <p className="text-[10px] text-red-400/80 font-bold uppercase tracking-widest mt-1 flex items-center gap-1">
              <TrendingDown className="h-3 w-3" /> Tier-3 Co-op Sector
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/30 bg-orange-500/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-orange-400">Liquidity Collapse</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-orange-500">T-14 hrs</div>
            <p className="text-[10px] text-orange-400/80 font-bold uppercase tracking-widest mt-1">Bank XYZ (Regional)</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/30 bg-yellow-500/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-yellow-400">MSME Distress Index</CardTitle>
            <Activity className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-yellow-500">62.8</div>
            <p className="text-[10px] text-yellow-400/80 font-bold uppercase tracking-widest mt-1">Elevated (Manufacturing)</p>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-primary">Payment Slowdowns</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-primary">4.2s</div>
            <p className="text-[10px] text-primary/80 font-bold uppercase tracking-widest mt-1">Settlement Lag (+12%)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1 border-border/50 bg-secondary/10 flex flex-col">
          <CardHeader className="pb-2 border-b border-border/50">
            <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" /> Fraud Outbreak Prediction
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 flex-1">
            <div className="space-y-6">
               {[
                 { region: "Western Hub (Gujarat)", type: "GST Input Credit Chain", prob: 94, color: "bg-red-500" },
                 { region: "Southern Corridor (TN)", type: "Mule Account Swarming", prob: 82, color: "bg-orange-500" },
                 { region: "Northern Tier (NCR)", type: "Digital Lending Coercion", prob: 68, color: "bg-yellow-500" },
                 { region: "Eastern Zone (WB)", type: "Micro-Subsidy Leakage", prob: 45, color: "bg-primary" },
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                   <div className="flex justify-between items-end">
                     <div>
                       <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                         <MapPin className="h-3 w-3 text-muted-foreground" /> {item.region}
                       </span>
                       <p className="text-[9px] text-muted-foreground font-mono uppercase mt-0.5">{item.type}</p>
                     </div>
                     <span className={`text-[10px] font-mono font-bold ${item.prob > 80 ? 'text-red-400' : 'text-muted-foreground'}`}>{item.prob}%</span>
                   </div>
                   <Progress value={item.prob} className={`h-1 ${item.color.replace('bg-', '[&>div]:bg-')}`} />
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 border-red-500/20 bg-card/40 flex flex-col relative overflow-hidden">
          <div className={`absolute inset-0 border-[2px] border-red-500/50 transition-opacity duration-1000 rounded-lg ${pulse ? 'opacity-100' : 'opacity-30'}`}></div>
          <CardHeader className="pb-2 border-b border-red-500/20 bg-red-500/5 relative z-10">
            <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-red-500">
              <AlertTriangle className="h-4 w-4" /> Cascading Alert System
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 p-0 flex-1 relative z-10 overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex-1 p-4 space-y-4">
                 <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md relative overflow-hidden">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-[10px] font-black text-red-400 uppercase tracking-widest">CRITICAL ESCALATION</span>
                     <span className="text-[9px] font-mono text-muted-foreground">T-0:00:14</span>
                   </div>
                   <p className="text-xs font-mono text-foreground">Liquidity drain detected at Bank XYZ. Interbank borrowing lines exhausted. Contagion risk spreading to 3 interconnected cooperative nodes.</p>
                   <div className="mt-3 flex gap-2">
                     <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/50 text-[9px] uppercase hover:bg-red-500/40 cursor-pointer">Initiate Freeze</Badge>
                     <Badge variant="outline" className="bg-transparent text-muted-foreground border-border/50 text-[9px] uppercase">View Graph</Badge>
                   </div>
                 </div>

                 <div className="p-3 bg-orange-500/5 border border-orange-500/20 rounded-md relative overflow-hidden opacity-80">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500/50"></div>
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">WARNING: REGIONAL INSTABILITY</span>
                     <span className="text-[9px] font-mono text-muted-foreground">T-0:14:22</span>
                   </div>
                   <p className="text-xs font-mono text-muted-foreground">Unusual cluster of 40,000 retail deposit withdrawals in District 9 over past 2 hours. Driven by social media panic markers.</p>
                 </div>
                 
                 <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-md relative overflow-hidden opacity-60">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500/50"></div>
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">ELEVATED: MSME DEFAULT CLUSTER</span>
                     <span className="text-[9px] font-mono text-muted-foreground">T-1:02:40</span>
                   </div>
                   <p className="text-xs font-mono text-muted-foreground">Correlated defaults predicted across 450 textile MSMEs due to delayed upstream payments from major retailer.</p>
                 </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
