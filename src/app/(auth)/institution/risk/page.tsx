"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowRight, ShieldAlert, BarChart3, AlertTriangle, Crosshair, Building2, TrendingDown } from "lucide-react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const bankRiskData = [
  { subject: 'NPA Ratio', A: 85, fullMark: 100 },
  { subject: 'Liquidity Coverage', A: 40, fullMark: 100 },
  { subject: 'Capital Adequacy', A: 55, fullMark: 100 },
  { subject: 'Wholesale Funding', A: 90, fullMark: 100 },
  { subject: 'Retail Deposits', A: 30, fullMark: 100 },
];

export default function InstitutionRiskPage() {
  const [adjusted, setAdjusted] = useState(false);

  const handleAdjust = () => {
    setAdjusted(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'EXPOSURE_LIMIT_REDUCED',
        entity: 'COMMERCIAL_BANK_CRO',
        msg: 'Interbank overnight exposure limit to YES Bank reduced from ₹1,200 Cr to ₹400 Cr.',
        impact: ['Interbank Lending Market', 'RBI Systemic Risk Node'],
        risk: 'HIGH'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-orange-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-orange-900/30 text-orange-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Building2 className="h-3 w-3" />
            INSTITUTIONAL PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">Alternative Credit Portfolio Risk</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Should we tighten lending criteria for the SME sector?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right p-3 rounded-lg bg-orange-950/40 border border-orange-900/50">
            <div className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-1">Total Counterparty Exposure</div>
            <div className="text-2xl font-black text-white">₹14,250 Cr</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Risk Radar */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Counterparty Risk Profile: YES Bank (Tier-1)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={bankRiskData}>
                      <PolarGrid stroke="#1e293b" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name="YES Bank" dataKey="A" stroke="#f97316" fill="#f97316" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-rose-950/20 rounded-lg border border-rose-900/50">
                    <div className="text-rose-500 mb-2 flex items-center gap-2"><TrendingDown className="h-4 w-4" /> Portfolio Stress</div>
                    <div className="text-2xl font-bold text-white mb-1">Elevated</div>
                    <div className="text-xs text-slate-400">Retail supply chain stress (30 Days)</div>
                  </div>

                  <div className="p-4 bg-orange-950/20 rounded-lg border border-orange-900/50">
                    <div className="text-orange-500 mb-2 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> NPA Forecast</div>
                    <div className="text-2xl font-bold text-white mb-1">6.8%</div>
                    <div className="text-xs text-slate-400">Expected SME default rate for Q4</div>
                  </div>
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
                <Crosshair className="h-4 w-4" />
                Exposure Adjustment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">YES Bank is exhibiting a severe divergence: shedding retail deposits while dramatically increasing reliance on overnight wholesale funding. This creates extreme liquidity vulnerability.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Adjust risk distribution: Tighten SME lending criteria in Tier-2 regions and increase collateral requirements by 15% to offset forecasted NPA spike.</p>
              </div>

              {!adjusted ? (
                <button onClick={handleAdjust} className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                  Adjust Risk Distribution <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <ShieldAlert className="h-4 w-4" /> Limit Reduced Successfully
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}