"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, ArrowRight, Activity, Zap, ShieldAlert, Timer, Ban } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";

const velocityData = [
  { time: "14:00", tps: 4500 },
  { time: "14:05", tps: 4800 },
  { time: "14:10", tps: 4200 },
  { time: "14:15", tps: 5100 },
  { time: "14:20", tps: 18500 }, // Abnormal spike
  { time: "14:25", tps: 22400 }, // Severe burst
];

export default function GatewayVelocityPage() {
  const [throttled, setThrottled] = useState(false);

  const handleThrottle = () => {
    setThrottled(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'VELOCITY_THROTTLED',
        entity: 'NPCI_SWITCH',
        msg: 'API throttle (100 TPS max) applied to Node YES-01 due to anomalous burst indicating potential coordinated attack.',
        impact: ['Bank UPI Gateway', 'Merchant Settlements'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-indigo-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Zap className="h-3 w-3" />
            GATEWAY PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Velocity Intelligence</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Does this burst in transaction speed indicate a bank run or a coordinated fraud attack?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-rose-950/40 border border-rose-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-rose-500 mb-1">Peak TPS</div>
            <div className="text-2xl font-black text-white">22,400</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Burst Graph */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Live Switch Telemetry (TPS)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={velocityData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="time" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                  <ReferenceLine y={10000} label={{ position: 'top', value: 'System Threshold', fill: '#f59e0b', fontSize: 10 }} stroke="#f59e0b" strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="tps" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, fill: '#ef4444' }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-rose-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-rose-400 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" />
                Burst Intervention
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Transaction velocity on <span className="font-mono text-rose-400">Node YES-01</span> spiked by 412% over 10 minutes, breaching the 10,000 TPS safe threshold. Pattern matches coordinated API enumeration/fraud.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Apply a hard API throttle (Max 100 TPS) to Node YES-01 to contain the blast radius while the AML engine investigates.</p>
              </div>

              {!throttled ? (
                <button onClick={handleThrottle} className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                  Engage TPS Throttle <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Ban className="h-4 w-4" /> Node Throttled Successfully
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}