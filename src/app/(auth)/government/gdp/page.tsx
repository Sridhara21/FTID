"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, ArrowRight, Activity, TrendingUp, AlertTriangle, CheckCircle2, Factory, MonitorSmartphone, Tractor } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

const sectorData = [
  { name: 'Services', value: 45, color: '#3b82f6', trend: '+4.2%' },
  { name: 'Manufacturing', value: 22, color: '#f59e0b', trend: '-1.8%' },
  { name: 'Agriculture', value: 18, color: '#10b981', trend: '+2.1%' },
  { name: 'Construction', value: 15, color: '#8b5cf6', trend: '+0.5%' },
];

export default function GovernmentGdpPage() {
  const [stimulusInjected, setStimulusInjected] = useState(false);

  const handleStimulus = () => {
    setStimulusInjected(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'SUBSIDY_RELEASED',
        entity: 'MINISTRY_OF_FINANCE',
        msg: 'Emergency PLI Stimulus (₹15,000 Cr) injected into Manufacturing Sector.',
        impact: ['Bank SME Underwriting', 'GDP Growth Tracker'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-amber-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-amber-900/30 text-amber-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Landmark className="h-3 w-3" />
            GOVERNMENT PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Live GDP Signals</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Which sector requires immediate fiscal stimulus to maintain target growth?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Live Growth Rate</div>
            <div className="text-3xl font-black text-white">6.8%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sector Contributions */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Sectoral Contribution (Live GST Proxy)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sectorData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                    <XAxis type="number" stroke="#475569" fontSize={12} tickFormatter={v => `${v}%`} />
                    <YAxis dataKey="name" type="category" stroke="#475569" fontSize={12} width={100} />
                    <Tooltip cursor={{ fill: '#0f172a' }} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
                <div className="p-3 bg-slate-900/50 rounded border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2"><MonitorSmartphone className="h-4 w-4 text-blue-500" /> <span className="text-xs font-medium text-slate-300">Services</span></div>
                  <span className="text-xs font-bold text-emerald-400">+4.2%</span>
                </div>
                <div className="p-3 bg-rose-950/20 rounded border border-rose-900/30 flex items-center justify-between">
                  <div className="flex items-center gap-2"><Factory className="h-4 w-4 text-amber-500" /> <span className="text-xs font-medium text-slate-300">Mfg</span></div>
                  <span className="text-xs font-bold text-rose-400">-1.8%</span>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2"><Tractor className="h-4 w-4 text-emerald-500" /> <span className="text-xs font-medium text-slate-300">Agri</span></div>
                  <span className="text-xs font-bold text-emerald-400">+2.1%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-amber-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Intervention Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Manufacturing output has contracted by 1.8% over the past 30 days based on live GST generation and e-Way bill velocity.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Trigger Production Linked Incentive (PLI) tranche of ₹15,000 Cr directly to Top 500 manufacturing MSMEs to stimulate immediate inventory production.</p>
              </div>

              {!stimulusInjected ? (
                <button onClick={handleStimulus} className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  Inject PLI Stimulus <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Stimulus Disbursed
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}