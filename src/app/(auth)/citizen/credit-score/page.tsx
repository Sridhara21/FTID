"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, ArrowRight, Zap, Target, BarChart3, Unlock, CheckCircle2, AlertTriangle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const scoreBreakdown = [
  { name: 'Repayment History', value: 35, color: '#10b981' },
  { name: 'Credit Utilization', value: 30, color: '#3b82f6' },
  { name: 'Alt Data (Utility/Tax)', value: 20, color: '#8b5cf6' },
  { name: 'Credit Age', value: 15, color: '#f59e0b' },
];

export default function CitizenCreditScorePage() {
  const [dataSynced, setDataSynced] = useState(false);

  const handleSync = () => {
    setDataSynced(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'ALT_DATA_SYNCED',
        entity: 'CITIZEN_CREDIT_BUREAU',
        msg: 'Citizen linked GST & Utility data. Trust Score upgraded +45 points.',
        impact: ['Bank Underwriting', 'Loan Eligibility'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-purple-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <ShieldCheck className="h-3 w-3" />
            CITIZEN PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Trust & Credit Intelligence</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"How do I maximize my borrowing capacity using alternative data?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">National Trust Score</div>
            <div className={`text-3xl font-black ${dataSynced ? 'text-emerald-400' : 'text-amber-400'}`}>
              {dataSynced ? '785' : '740'}
            </div>
            {dataSynced && <div className="text-[10px] text-emerald-500 font-bold mt-1">+45 pts (Alt Data)</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Score Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Score Composition
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={scoreBreakdown} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                      {scoreBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-black text-white">{dataSynced ? '785' : '740'}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500">Score</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {scoreBreakdown.map(item => (
                  <div key={item.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">{item.name}</span>
                      <span className="text-white font-mono">{item.value}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#05101a] border-slate-800">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-slate-800">
                <div className="p-6">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">Positive Drivers</div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" /> 100% on-time credit card payments (48 months)</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" /> Low credit utilization (12%)</li>
                  </ul>
                </div>
                <div className="p-6">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">Risk Factors</div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex gap-2 items-start"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" /> Thin file: No active mortgage or auto loan</li>
                    <li className="flex gap-2 items-start"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" /> High dependency on unsecured revolving credit</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-purple-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Score Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Your base score (740) restricts you from Tier-1 housing loan rates. However, you have 24 months of perfect utility and tax payment history unlinked to your bureau profile.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Inject alternative data (Utility/Tax via Account Aggregator) into your Trust Profile to immediately boost your score.</p>
              </div>

              {!dataSynced ? (
                <button onClick={handleSync} className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.2)]">
                  Inject Alternative Data <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Unlock className="h-4 w-4" /> Tier-1 Rates Unlocked
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}