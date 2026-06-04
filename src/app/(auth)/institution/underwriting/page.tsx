"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, ArrowRight, TrendingUp, CheckCircle2, FileText, Landmark, FileSpreadsheet, Box } from "lucide-react";

export default function InstitutionUnderwritingPage() {
  const [approved, setApproved] = useState(false);

  const handleApprove = () => {
    setApproved(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'SME_CREDIT_APPROVED',
        entity: 'COMMERCIAL_BANK_UNDERWRITER',
        msg: 'Working capital limit expanded by ₹50L for Apex Manufacturing based on real-time GST and e-Way bill velocity.',
        impact: ['Business Capital Portal', 'Central Credit Registry'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-orange-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-orange-900/30 text-orange-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Landmark className="h-3 w-3" />
            INSTITUTIONAL PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Alternative Data Underwriting</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Should we expand this SME's working capital limit based on real-time supply chain data rather than historical CIBIL scores?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">CIBIL MSME Rank</div>
            <div className="text-2xl font-black text-white">CMR-3 (Good)</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Alternative Data Signals */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                Live Alternative Data Signals: Apex Manufacturing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-900/40 rounded-full"><TrendingUp className="h-5 w-5 text-emerald-500" /></div>
                  <div>
                    <div className="text-white font-bold mb-1">GST GSTR-1 Filings (Sales Velocity)</div>
                    <div className="text-xs text-slate-400">Month-over-month growth in declared outward supplies.</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-500 font-bold text-lg">+14.2% YoY</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Verified via GSTN</div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-900/40 rounded-full"><Box className="h-5 w-5 text-emerald-500" /></div>
                  <div>
                    <div className="text-white font-bold mb-1">e-Way Bill Generation (Physical Goods)</div>
                    <div className="text-xs text-slate-400">Active movement of goods matching invoice values.</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-500 font-bold text-lg">98% Match</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Verified via NIC</div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-800 rounded-full"><FileText className="h-5 w-5 text-slate-400" /></div>
                  <div>
                    <div className="text-white font-bold mb-1">TReDS Invoice Discounting</div>
                    <div className="text-xs text-slate-400">Payment realization cycle from enterprise buyers.</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-lg">14 Days</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Avg. DSO</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-orange-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-orange-400 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Credit Decision
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">Apex Manufacturing's CIBIL score hasn't updated to reflect their recent government contract wins. However, live GST and e-Way bill data show a massive 14.2% surge in verified physical sales this month.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Approve a ₹50 Lakh working capital line expansion to capture this low-risk credit opportunity before competitors do.</p>
              </div>

              {!approved ? (
                <button onClick={handleApprove} className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                  Approve Limit Expansion <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Limit Expanded
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}