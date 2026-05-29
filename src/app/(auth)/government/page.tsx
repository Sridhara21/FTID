"use client";

import {
  Scale,
  TrendingUp,
  Map,
  Activity,
  Database,
  PieChart as PieChartIcon
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const sectorData = [
  { month: 'Jan', tech: 4000, retail: 2400, manufacturing: 2400 },
  { month: 'Feb', tech: 3000, retail: 1398, manufacturing: 2210 },
  { month: 'Mar', tech: 2000, retail: 9800, manufacturing: 2290 },
  { month: 'Apr', tech: 2780, retail: 3908, manufacturing: 2000 },
  { month: 'May', tech: 1890, retail: 4800, manufacturing: 2181 },
  { month: 'Jun', tech: 2390, retail: 3800, manufacturing: 2500 },
];

const formalizationData = [
  { name: 'Digitized/Formal', value: 65, color: '#fbbf24' },
  { name: 'Transitioning', value: 20, color: '#f59e0b' },
  { name: 'Informal/Cash', value: 15, color: '#b45309' },
];

export default function GovernmentDashboard() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Scale className="h-8 w-8 text-amber-400" />
              FTID — Macro-Economic Intelligence
          </h1>
          <p className="text-amber-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            REAL-TIME MSME ECONOMY MONITOR & POLICY ANALYTICS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-amber-900/50 rounded-full">
            <Database className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Tax Intelligence: Active</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">Total GST Collected (Daily)</p>
                      <p className="text-4xl font-bold text-white mb-3">₹4,892 Cr</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> +4.1% <span className="text-emerald-500/40 ml-1">VS YESTERDAY</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <TrendingUp className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">MSME Liquidity Index</p>
                      <p className="text-4xl font-bold text-amber-400 mb-3">114.2</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-amber-400">
                          <Activity className="h-3 w-3" /> <span className="text-amber-500/60 ml-1">HEALTHY ZONE</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <Activity className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">Regional Slowdown Alerts</p>
                      <p className="text-4xl font-bold text-rose-400 mb-3">2</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-rose-400">
                          <Map className="h-3 w-3" /> <span className="text-rose-500/40 ml-1">MAHARASHTRA, TAMIL NADU</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <Map className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sector Growth Tracking */}
          <Card className="lg:col-span-8 bg-[#0a1520] border-amber-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <TrendingUp className="h-5 w-5 text-amber-500/70" /> Sector Growth Velocity
                    </CardTitle>
                    <p className="text-xs text-amber-100/50">Comparative liquidity inflows by key industry sectors.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sectorData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorTech" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorRetail" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f87171" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#451a03" vertical={false} />
                        <XAxis dataKey="month" stroke="#d97706" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#d97706" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip cursor={{stroke: '#78350f'}} contentStyle={{backgroundColor: '#020810', borderColor: '#451a03'}} />
                        <Area type="monotone" dataKey="tech" stroke="#fbbf24" fillOpacity={1} fill="url(#colorTech)" />
                        <Area type="monotone" dataKey="retail" stroke="#f87171" fillOpacity={1} fill="url(#colorRetail)" />
                    </AreaChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-center gap-4 mt-2 text-[10px] font-bold uppercase">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-amber-400 rounded-sm"></div> <span className="text-amber-500/60">Tech/IT</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-rose-400 rounded-sm"></div> <span className="text-amber-500/60">Retail</span></div>
                </div>
            </CardContent>
          </Card>

          {/* Formalization Index */}
          <Card className="lg:col-span-4 bg-[#0a1520] border-amber-900/30">
             <CardHeader className="text-center pb-2">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center justify-center gap-2 mb-1">
                    <PieChartIcon className="h-4 w-4 text-amber-500/70" /> Formalization Index
                 </p>
                 <p className="text-[9px] text-amber-100/40 uppercase tracking-widest">National Digitization Metrics</p>
             </CardHeader>
             <CardContent className="h-[300px] flex flex-col items-center justify-center relative">
                 <div className="h-[180px] w-[180px] relative">
                     <ResponsiveContainer width="100%" height="100%">
                         <PieChart>
                             <Pie data={formalizationData} innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value" stroke="none">
                                 {formalizationData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                             </Pie>
                         </PieChart>
                     </ResponsiveContainer>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className="text-2xl font-bold text-white">65%</span>
                         <span className="text-[9px] font-bold text-amber-500/60 uppercase tracking-widest">Formal Economy</span>
                     </div>
                 </div>
                 <div className="grid grid-cols-1 gap-y-3 mt-6 w-full">
                     {formalizationData.map(item => (
                         <div key={item.name} className="flex items-center justify-between gap-4">
                             <div className="flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                                 <span className="text-[10px] font-bold text-amber-100/70 uppercase tracking-wider">{item.name}</span>
                             </div>
                             <span className="text-[10px] font-bold text-white">{item.value}%</span>
                         </div>
                     ))}
                 </div>
             </CardContent>
          </Card>
      </div>
    </div>
  );
}
