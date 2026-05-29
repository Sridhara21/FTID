"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, BarChart4, Activity, ActivitySquare, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const gdpData = [
  { month: 'Jan', realTime: 7.2, projected: 7.1 },
  { month: 'Feb', realTime: 7.4, projected: 7.2 },
  { month: 'Mar', realTime: 7.6, projected: 7.2 },
  { month: 'Apr', realTime: 8.1, projected: 7.4 },
  { month: 'May', realTime: 8.4, projected: 7.5 },
  { month: 'Jun', realTime: 8.2, projected: 7.6 },
];

export default function GovernmentGDPPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-blue-500 uppercase flex items-center gap-3">
              <BarChart4 className="h-8 w-8" />
              Real-Time GDP Tracking
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Macroeconomic Output via GST & E-Way Bill Telemetry
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Current GDP Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">8.2%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Annualized (Real-time)
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">GVA Momentum</CardTitle>
                <Activity className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">7.9%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Gross Value Added
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Capex Deployment</CardTitle>
                <IndianRupee className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">₹2.4T</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   Govt spending utilized
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Index of Ind. Prod.</CardTitle>
                <ActivitySquare className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">5.4%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Core Sector Growth
               </p>
            </CardContent>
          </Card>
      </div>

      <Card className="bg-secondary/10 border-border/50 h-[450px] flex flex-col relative overflow-hidden">
         <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between">
             <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-foreground">
                <TrendingUp className="h-4 w-4 text-blue-500" /> Real-Time vs Projected GDP
             </CardTitle>
             <div className="flex gap-2">
                 <Badge variant="outline" className="font-mono text-[9px] uppercase bg-blue-500/10 text-blue-500 border-blue-500/30">
                     FTID Real-Time
                 </Badge>
                 <Badge variant="outline" className="font-mono text-[9px] uppercase bg-transparent text-muted-foreground border-border/50">
                     RBI Projections
                 </Badge>
             </div>
         </CardHeader>
         <CardContent className="flex-1 pt-6 pb-2 pl-0">
             <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={gdpData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                     <defs>
                         <linearGradient id="colorRealTime" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                         </linearGradient>
                         <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#64748b" stopOpacity={0.1}/>
                             <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                         </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.5} />
                     <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} className="font-mono uppercase" />
                     <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} className="font-mono" domain={['dataMin - 1', 'dataMax + 1']} />
                     <Tooltip cursor={{fill: 'hsl(var(--secondary))'}} contentStyle={{backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px', fontFamily: 'monospace'}} />
                     <Area type="monotone" dataKey="projected" stroke="#64748b" fillOpacity={1} fill="url(#colorProjected)" strokeDasharray="5 5" name="RBI Projection" />
                     <Area type="monotone" dataKey="realTime" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRealTime)" name="FTID Real-Time" />
                 </AreaChart>
             </ResponsiveContainer>
         </CardContent>
      </Card>
    </div>
  );
}
