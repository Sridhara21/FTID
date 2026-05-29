"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Receipt,
  Network,
  AlertTriangle,
  ArrowRightLeft,
  FileText,
  Activity,
  Box
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const vendorTrustData = [
  { name: 'TechCorp India', score: 98, status: 'Verified', color: 'text-emerald-500' },
  { name: 'Global Logistics', score: 94, status: 'Verified', color: 'text-emerald-500' },
  { name: 'Apex Supplies', score: 62, status: 'Review Needed', color: 'text-amber-500' },
];

export default function BusinessDashboard() {
  const [pulse, setPulse] = useState(false);
  const [cashFlowData, setCashFlowData] = useState([
    { name: 'Mon', in: 125000, out: 42000 },
    { name: 'Tue', in: 178000, out: 145000 },
    { name: 'Wed', in: 82000, out: 49000 },
    { name: 'Thu', in: 280000, out: 241000 },
    { name: 'Fri', in: 85000, out: 94000 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
      // Simulate real-time cashflow updates on the last day
      setCashFlowData(prev => {
        const newData = [...prev];
        const last = newData[4];
        newData[4] = {
            ...last,
            in: last.in + Math.floor(Math.random() * 1000),
            out: last.out + Math.floor(Math.random() * 500)
        };
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <Building2 className="h-8 w-8" />
              Enterprise Command Center
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <Activity className="h-4 w-4 text-emerald-500" /> Real-time Compliance & Financial Ops
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Node Secure: Compliance 99.8%</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/10 border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Operating Treasury</CardTitle>
                <Building2 className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">₹4.2M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   <TrendingUp className="h-3 w-3" /> +12% this quarter
               </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/10 border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Pending GST Payables</CardTitle>
                <Receipt className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">₹142k</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   <AlertTriangle className="h-3 w-3" /> Due in 4 days
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Credit Readiness Score</CardTitle>
                <ShieldCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">890</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Lender Ready (Tier 1)
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Supply Chain Resilience</CardTitle>
                <Network className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">92%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   Zero critical disruptions
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Smart Invoice Intelligence */}
          <Card className="lg:col-span-2 bg-secondary/10 border-border/50 h-[450px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-border/50">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Receipt className="h-4 w-4 text-emerald-500" /> Cashflow Intelligence Matrix
                </CardTitle>
                <Badge variant="outline" className={`font-mono text-[9px] uppercase transition-colors ${pulse ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-transparent text-muted-foreground border-border/50'}`}>
                    AI Active
                </Badge>
            </CardHeader>
            <CardContent className="flex-1 pt-6 pb-2 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cashFlowData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.5} />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} className="font-mono uppercase" />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v/1000}k`} className="font-mono" />
                        <Tooltip cursor={{fill: 'hsl(var(--secondary))'}} contentStyle={{backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px', fontFamily: 'monospace'}} />
                        <Bar dataKey="in" fill="#10b981" radius={[4, 4, 0, 0]} name="Inflow" />
                        <Bar dataKey="out" fill="#059669" radius={[4, 4, 0, 0]} name="Outflow" opacity={0.6} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Vendor Trust Network */}
          <Card className="lg:col-span-1 bg-secondary/10 border-border/50 flex flex-col h-[450px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Network className="h-4 w-4 text-muted-foreground" /> Vendor Trust Network
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                 
                 <div className="space-y-3">
                     {vendorTrustData.map((vendor, i) => (
                         <div key={i} className="flex justify-between items-center p-3 bg-background border border-border/50 rounded-lg group hover:border-emerald-500/50 transition-colors cursor-pointer">
                             <div>
                                 <p className="text-[10px] font-bold text-foreground">{vendor.name}</p>
                                 <div className="flex items-center gap-2 mt-1">
                                     <Badge variant="outline" className={`font-mono text-[8px] uppercase px-1 py-0 ${vendor.score > 80 ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 'bg-amber-500/10 text-amber-500 border-amber-500/30'}`}>
                                         {vendor.status}
                                     </Badge>
                                 </div>
                             </div>
                             <div className={`text-lg font-mono font-black ${vendor.color}`}>
                                 {vendor.score}
                             </div>
                         </div>
                     ))}
                 </div>
                 
                 <div className="pt-4 mt-2 border-t border-border/50">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Live Network Events</p>
                     <div className="space-y-3 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
                            </div>
                            <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-2 rounded border border-border/50 bg-background">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500">Invoice Paid</span>
                                    <span className="text-[8px] font-mono text-muted-foreground">Just now</span>
                                </div>
                                <p className="text-[9px] font-mono text-muted-foreground">₹42k to Global Logistics cleared.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-amber-500 bg-amber-500/20 text-amber-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-2 rounded border border-border/50 bg-background">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500">GST Alert</span>
                                    <span className="text-[8px] font-mono text-muted-foreground">1hr ago</span>
                                </div>
                                <p className="text-[9px] font-mono text-muted-foreground">GSTR-1 mismatch detected.</p>
                            </div>
                        </div>
                     </div>
                 </div>
             </CardContent>
          </Card>
      </div>

    </div>
  );
}
