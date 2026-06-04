"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, ArrowRight, Activity, TrendingDown, Eye, MailWarning, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const discrepancyData = [
  { metric: "GST Declared", value: 12.5 },
  { metric: "e-Way Bill Transit", value: 45.2 },
  { metric: "Bank Deposits", value: 48.9 },
  { metric: "TDS Claimed", value: 11.2 },
];

export default function AuditorRiskPage() {
  const [noticeSent, setNoticeSent] = useState(false);

  const handleNotice = () => {
    setNoticeSent(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'E_NOTICE_DISPATCHED',
        entity: 'CBDT_AUDITOR',
        msg: 'Automated Section 133(6) scrutiny notice dispatched to Apex Manufacturing (GSTIN: 27AABCU9603R1Z4).',
        impact: ['Corporate Compliance Portal', 'Bank Statement Hold'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-teal-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-teal-900/30 text-teal-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Target className="h-3 w-3" />
            AUDITOR PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">AI Target Profiler</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Does this corporate entity show sufficient tax-revenue discrepancy to warrant an official audit notice?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-teal-950/40 border border-teal-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-teal-500 mb-1">Tax Evasion Probability</div>
            <div className="text-2xl font-black text-white">96.4%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Risk Profile */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Entity Triangulation: Apex Manufacturing (GSTIN: 27AABCU9603R1Z4)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={discrepancyData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                    <XAxis type="number" stroke="#475569" fontSize={12} tickFormatter={v => `₹${v}Cr`} />
                    <YAxis dataKey="metric" type="category" stroke="#94a3b8" fontSize={12} width={120} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} formatter={v => [`₹${v} Cr`, 'Volume']} />
                    <Bar dataKey="value" fill="#0d9488" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-rose-950/20 border border-rose-900/30 rounded-lg">
                  <div className="text-rose-500 mb-2"><TrendingDown className="h-5 w-5" /></div>
                  <div className="text-2xl font-bold text-white mb-1">3.8x</div>
                  <div className="text-xs text-slate-400">Mismatch: Bank Deposits vs GST Filed (Q3)</div>
                </div>
                <div className="p-4 bg-amber-950/20 border border-amber-900/30 rounded-lg">
                  <div className="text-amber-500 mb-2"><AlertCircle className="h-5 w-5" /></div>
                  <div className="text-2xl font-bold text-white mb-1">12</div>
                  <div className="text-xs text-slate-400">Ghost vendors mapped via e-Way bills</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-teal-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-teal-400 flex items-center gap-2">
                <MailWarning className="h-4 w-4" />
                Intervention Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Apex Manufacturing declared ₹12.5 Cr in GST revenue, yet e-Way bill physical transit data and commercial bank deposits confirm actual business volume exceeding ₹45 Cr. High risk of cash suppression.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Issue an automated Section 133(6) digital scrutiny notice and mandate submission of audited bank statements within 7 days.</p>
              </div>

              {!noticeSent ? (
                <button onClick={handleNotice} className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(13,148,136,0.3)]">
                  Dispatch e-Notice <Send className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Notice Dispatched
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
