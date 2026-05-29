"use client";

import { Landmark, TrendingUp, Activity, FileText, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const creditPredictionData = [
  { month: 'Q1', currentCashflow: 120, projectedCapacity: 150 },
  { month: 'Q2', currentCashflow: 140, projectedCapacity: 180 },
  { month: 'Q3', currentCashflow: 130, projectedCapacity: 190 },
  { month: 'Q4', currentCashflow: 180, projectedCapacity: 240 },
  { month: 'Q1 (Next)', currentCashflow: 0, projectedCapacity: 280 },
];

export default function BusinessCredit() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Landmark className="h-8 w-8 text-emerald-400" />
              Unified Lending Interface (ULI)
          </h1>
          <p className="text-emerald-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            CASHFLOW-BASED LENDING • FRICTIONLESS CREDIT ACCESS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <CheckCircle2 className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">ULI Ready: Approved</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-emerald-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60 mb-2">Available Credit Limit</p>
                      <p className="text-4xl font-bold text-white mb-3">₹4.5Cr</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> +₹50L <span className="text-emerald-500/40 ml-1">POST GST FILING</span>
                      </div>
                  </div>
                  <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-900/50">
                      <Landmark className="h-5 w-5 text-emerald-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-emerald-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60 mb-2">Current Utilization</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3">22.4%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">OPTIMAL HEALTH ZONE</span>
                      </div>
                  </div>
                  <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-900/50">
                      <Activity className="h-5 w-5 text-emerald-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-emerald-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60 mb-2">AA Consents Active</p>
                      <p className="text-4xl font-bold text-white mb-3">3</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-cyan-400">
                          <Lock className="h-3 w-3" /> <span className="text-cyan-500/40 ml-1">LENDER ACCESS OPEN</span>
                      </div>
                  </div>
                  <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-900/50">
                      <Lock className="h-5 w-5 text-emerald-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-emerald-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <TrendingUp className="h-5 w-5 text-emerald-500/70" /> AI Cashflow & Debt Capacity Projection
                    </CardTitle>
                    <p className="text-xs text-emerald-100/50">Derived dynamically from GST sales, e-Way bills, and banking streams.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={creditPredictionData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#064e3b" vertical={false} />
                        <XAxis dataKey="month" stroke="#10b981" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#10b981" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}L`} />
                        <Tooltip cursor={{stroke: '#064e3b'}} contentStyle={{backgroundColor: '#020810', borderColor: '#064e3b'}} />
                        <Line type="monotone" dataKey="currentCashflow" name="Realized Cashflow" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981' }} />
                        <Line type="monotone" dataKey="projectedCapacity" name="Debt Servicing Capacity" stroke="#34d399" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-emerald-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <FileText className="h-4 w-4 text-emerald-500/70" /> 1-Click ULI Offers
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-emerald-900/30 border-l-2 border-l-emerald-500 rounded-lg cursor-pointer hover:bg-emerald-900/20 transition-colors">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Working Capital (HDFC)</span>
                        <ChevronRight className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="text-xs text-emerald-100/60">
                            <p><strong>Pre-approved:</strong> ₹1.2Cr @ 8.5% p.a.</p>
                            <p className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-widest text-emerald-400/80"><CheckCircle2 className="h-3 w-3"/> Zero Collateral Required</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-emerald-900/30 border-l-2 border-l-emerald-500 rounded-lg cursor-pointer hover:bg-emerald-900/20 transition-colors">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Invoice Discounting (SBI)</span>
                        <ChevronRight className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="text-xs text-emerald-100/60">
                            <p><strong>Limit:</strong> ₹80L @ 1.2% / month</p>
                            <p className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-widest text-emerald-400/80"><CheckCircle2 className="h-3 w-3"/> Auto-settled via GSTN</p>
                        </div>
                    </div>
                </div>

                <button className="w-full mt-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    Trigger ULI Consent Flow
                </button>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
