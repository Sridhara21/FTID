"use client";

import { Database, Network, Share2, CheckCircle2, ShieldAlert, ShieldCheck, Activity, FileCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const consentConversionData = [
  { step: 'Init', count: 12500 },
  { step: 'OTP', count: 11200 },
  { step: 'Select', count: 10500 },
  { step: 'Approve', count: 9800 },
  { step: 'Fetch', count: 9650 },
];

export default function DeveloperConsent() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Database className="h-8 w-8 text-purple-400" />
              Consent Infrastructure (AA)
          </h1>
          <p className="text-purple-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            ACCOUNT AGGREGATOR • FIU DATA FETCH LOGS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <CheckCircle2 className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">AA Bridge: Online</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Consent Conversion</p>
                      <p className="text-4xl font-bold text-white mb-3">78.4%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3" /> <span className="text-purple-500/40 ml-1">INIT TO FETCH RATIO</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <Share2 className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Webhook Delivery</p>
                      <p className="text-4xl font-bold text-purple-400 mb-3">99.9%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-purple-400">
                          <Network className="h-3 w-3" /> <span className="text-purple-500/40 ml-1">EVENT PUSH SUCCESS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <Network className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-purple-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 mb-2">Revocation Rate</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3">1.2%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">WITHIN EXPECTED NORMS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-900/50">
                      <ShieldAlert className="h-5 w-5 text-purple-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-purple-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Activity className="h-5 w-5 text-purple-500/70" /> Consent Funnel Conversion
                    </CardTitle>
                    <p className="text-xs text-purple-100/50">User drop-off tracking across the Account Aggregator authorization flow.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={consentConversionData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4c1d95" vertical={false} />
                        <XAxis dataKey="step" stroke="#a855f7" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#a855f7" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                        <Tooltip cursor={{fill: '#4c1d95', opacity: 0.4}} contentStyle={{backgroundColor: '#020810', borderColor: '#a855f7', fontSize: '12px'}} />
                        <Bar dataKey="count" name="Users in Step" fill="#a855f7" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-purple-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-purple-500/70" /> Live Webhook Feed
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-2 p-3 bg-[#020810] border border-purple-900/30 border-l-2 border-l-emerald-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-emerald-400">CONSENT_ACTIVE</span>
                        <span className="text-[9px] text-slate-500 font-mono">Just now</span>
                    </div>
                    <div className="text-[10px] text-purple-100/60 font-mono">
                        req_id: 8f2a...91bc<br/>
                        fip: HDFC Bank (Cashflow)
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-[#020810] border border-purple-900/30 border-l-2 border-l-rose-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-rose-400">CONSENT_REVOKED</span>
                        <span className="text-[9px] text-slate-500 font-mono">2m ago</span>
                    </div>
                    <div className="text-[10px] text-purple-100/60 font-mono">
                        req_id: 2c4x...18zt<br/>
                        fip: Zerodha (Equities)
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-[#020810] border border-purple-900/30 border-l-2 border-l-emerald-500 rounded-lg opacity-70">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-emerald-400">DATA_READY</span>
                        <span className="text-[9px] text-slate-500 font-mono">15m ago</span>
                    </div>
                    <div className="text-[10px] text-purple-100/60 font-mono">
                        req_id: 9v1m...44px<br/>
                        status: Encrypted Payload Available
                    </div>
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
