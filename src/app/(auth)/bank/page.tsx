"use client";

import {
  Landmark,
  TrendingDown,
  ShieldCheck,
  AlertTriangle,
  Network,
  Activity,
  FileText
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const liquidityData = [
  { time: '09:00', inflow: 120, outflow: 80 },
  { time: '10:00', inflow: 150, outflow: 100 },
  { time: '11:00', inflow: 180, outflow: 250 },
  { time: '12:00', inflow: 220, outflow: 190 },
  { time: '13:00', inflow: 300, outflow: 280 },
  { time: '14:00', inflow: 250, outflow: 320 },
];

const riskAlerts = [
  { entity: 'Node 44A (Retail)', risk: 'Mule Activity Suspected', level: 'High' },
  { entity: 'Sector: Real Estate', risk: 'Liquidity Squeeze Detected', level: 'Medium' },
  { entity: 'SME Cluster B', risk: 'Abnormal Velocity Spike', level: 'Low' },
];

export default function BankDashboard() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Landmark className="h-8 w-8 text-blue-400" />
              FTID — Institutional Risk Intelligence
          </h1>
          <p className="text-blue-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            SME UNDERWRITING, FRAUD DETECTION & NETWORK ANALYSIS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-blue-900/50 rounded-full">
            <Activity className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Node Status: Healthy</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Total CBDC Reserves</p>
                      <p className="text-4xl font-bold text-white mb-3">₹84.5B</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-blue-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-blue-500/40 ml-1">FULLY COLLATERALIZED</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <Landmark className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Active Mule Alerts</p>
                      <p className="text-4xl font-bold text-rose-400 mb-3">1,245</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-rose-400">
                          <TrendingDown className="h-3 w-3" /> -5.2% <span className="text-rose-500/40 ml-1">VS LAST WEEK</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <AlertTriangle className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">SME Loan Approvals (Auto)</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3">8,430</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <FileText className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">VIA FTID CONSENT</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <FileText className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Real-time Retail Liquidity Flow */}
          <Card className="lg:col-span-8 bg-[#0a1520] border-blue-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Activity className="h-5 w-5 text-blue-500/70" /> Real-Time Liquidity Flow
                    </CardTitle>
                    <p className="text-xs text-blue-100/50">Intraday inflow vs outflow velocity (Millions).</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={liquidityData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} />
                        <XAxis dataKey="time" stroke="#3b82f6" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#3b82f6" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip cursor={{fill: '#0f172a'}} contentStyle={{backgroundColor: '#020810', borderColor: '#1e3a8a'}} />
                        <Line type="monotone" dataKey="inflow" stroke="#3b82f6" strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="outflow" stroke="#f43f5e" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Dynamic Risk Engine */}
          <Card className="lg:col-span-4 bg-[#0a1520] border-blue-900/30">
             <CardHeader>
                 <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-blue-500/70" /> Dynamic Risk Engine
                 </CardTitle>
             </CardHeader>
             <CardContent>
                 <div className="space-y-4">
                     {riskAlerts.map((alert, i) => (
                         <div key={i} className="flex flex-col gap-1 p-3 bg-[#020810] border border-blue-900/30 rounded-lg border-l-2 border-l-rose-500">
                             <div className="flex justify-between">
                                 <span className="text-sm font-bold text-white">{alert.entity}</span>
                                 <span className="text-[9px] font-bold uppercase tracking-widest text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded">{alert.level}</span>
                             </div>
                             <p className="text-xs text-blue-100/60">{alert.risk}</p>
                         </div>
                     ))}
                 </div>
                 <div className="mt-4 p-3 bg-blue-900/10 border border-blue-900/30 rounded-lg text-center cursor-pointer hover:bg-blue-900/20">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Open Network Analyst</p>
                 </div>
             </CardContent>
          </Card>
      </div>
    </div>
  );
}
