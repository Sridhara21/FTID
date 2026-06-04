"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, ArrowRight, Activity, SmartphoneNfc, Fingerprint, DatabaseZap, CheckCircle2, AlertTriangle, Coins } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const syncData = [
  { time: "09:00", retail: 450, wholesale: 2200 },
  { time: "10:00", retail: 680, wholesale: 3100 },
  { time: "11:00", retail: 1200, wholesale: 2800 },
  { time: "12:00", retail: 1450, wholesale: 4500 },
  { time: "13:00", retail: 890, wholesale: 1200 },
];

export default function GatewayCbdcPage() {
  const [synced, setSynced] = useState(false);

  const handleSync = () => {
    setSynced(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'CBDC_BATCH_SYNC',
        entity: 'NPCI_GATEWAY',
        msg: 'Force-synced 1.2M offline e₹ retail transactions to the master RBI ledger.',
        impact: ['RBI Ledger', 'Commercial Bank Nodes'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-indigo-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Coins className="h-3 w-3" />
            GATEWAY PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">e₹ (CBDC) Flows</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Is the offline retail CBDC ledger safely synchronizing with the central bank node?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-indigo-950/40 border border-indigo-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-1">e₹ Circulation</div>
            <div className="text-2xl font-black text-white">₹1.42 Trillion</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Ledger Sync Status */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[#05101a] border-slate-800">
              <CardHeader className="border-b border-slate-800 pb-4">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">e₹-W (Wholesale)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-black text-indigo-400">₹1.15T</div>
                  <div className="px-2 py-1 bg-emerald-950/50 text-emerald-500 text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Real-time</div>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><Activity className="h-3 w-3 text-slate-500" /> Interbank Settlement: 14 Active Nodes</div>
              </CardContent>
            </Card>

            <Card className="bg-[#05101a] border-slate-800">
              <CardHeader className="border-b border-slate-800 pb-4">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">e₹-R (Retail)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-black text-cyan-400">₹0.27T</div>
                  <div className="px-2 py-1 bg-amber-950/50 text-amber-500 text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> Deferred Sync</div>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-2"><SmartphoneNfc className="h-3 w-3 text-slate-500" /> Offline Transactions: 1.2M Pending</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <DatabaseZap className="h-4 w-4" />
                Ledger Synchronization Velocity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={syncData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorWholesale" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRetail" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="time" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={v => `${v/1000}k`} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="wholesale" stroke="#6366f1" fillOpacity={1} fill="url(#colorWholesale)" name="Wholesale Syncs/min" />
                  <Area type="monotone" dataKey="retail" stroke="#06b6d4" fillOpacity={1} fill="url(#colorRetail)" name="Retail Syncs/min" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-indigo-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Ledger Discrepancy
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">1.2 Million retail offline e₹ transactions accumulated over the past 4 hours in low-connectivity zones. Local device ledgers are drifting from the master RBI node.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Force a batch settlement of all pending e₹-R offline transactions to reconcile the central ledger and prevent double-spending risks.</p>
              </div>

              {!synced ? (
                <button onClick={handleSync} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                  Force Batch Sync <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <DatabaseZap className="h-4 w-4" /> 1.2M Records Synced
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}