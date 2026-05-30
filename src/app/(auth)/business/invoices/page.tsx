"use client";

import { useState, useEffect } from "react";
import { Receipt, Search, Filter, AlertCircle, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function SmartInvoices() {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await fetch('/api/v1/business/invoices');
        const json = await res.json();
        if (json.success) {
          setInvoices(json.data.invoices);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Receipt className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Invoice Intelligence</h1>
        </div>
        <p className="text-slate-400 font-mono text-sm max-w-2xl">
          AI-powered invoice monitoring. Detects GST mismatches, circular trading, and over-invoicing anomalies before clearing payments.
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-[#0a1520] border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input type="text" placeholder="Search by Vendor or ID..." className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white font-mono focus:border-emerald-500 focus:outline-none" />
            </div>
            <button className="p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
              <Filter className="h-4 w-4" />
            </button>
          </div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hidden md:block">Connected to FTID Trust Network</span>
        </div>

        {isLoading ? (
          <div className="w-full h-64 flex flex-col items-center justify-center border border-emerald-900/20 bg-emerald-950/10 rounded-lg border-dashed gap-3">
            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Running ML Anomaly Detection...</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] text-slate-400 uppercase tracking-widest bg-slate-900/50 border-y border-slate-800">
                <tr>
                  <th className="px-4 py-3 font-medium">Invoice ID</th>
                  <th className="px-4 py-3 font-medium">Vendor</th>
                  <th className="px-4 py-3 font-medium">Value (₹)</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium text-center">Risk Score</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="px-4 py-4 font-mono text-white">{inv.id}</td>
                    <td className="px-4 py-4 text-slate-300 font-medium">{inv.vendor}</td>
                    <td className="px-4 py-4 font-mono text-emerald-400 tabular-nums">{inv.value.toLocaleString()}</td>
                    <td className="px-4 py-4 font-mono text-slate-500">{inv.date}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest font-mono ${inv.riskScore > 50 ? 'bg-rose-950/50 text-rose-400 border border-rose-500/20' : 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/20'}`}>
                        {inv.riskScore}/100
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      {inv.status === 'Flagged' ? (
                        <span className="flex items-center gap-1.5 text-rose-400 font-bold text-xs uppercase tracking-wide">
                          <AlertCircle className="w-4 h-4" /> Flagged
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4" /> Cleared
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="mt-6 flex flex-col gap-4">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-violet-400" /> AI Explanations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {invoices.map((inv) => (
                  <div key={inv.id} className={`p-4 rounded-lg border ${inv.status === 'Flagged' ? 'border-rose-900/30 bg-rose-950/10' : 'border-emerald-900/30 bg-emerald-950/10'}`}>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-2" style={{ color: inv.status === 'Flagged' ? '#fb7185' : '#34d399' }}>{inv.id} Analysis</span>
                    <p className="text-xs text-slate-400 font-mono leading-relaxed">{inv.aiSummary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
