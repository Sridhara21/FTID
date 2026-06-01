"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Building2, FileCheck, AlertTriangle, ShieldCheck, Calculator, ArrowRight } from "lucide-react";

export function UnderwritingSimulator() {
  // Inputs
  const [turnover, setTurnover] = useState<number>(50); // In Lakhs
  const [gstScore, setGstScore] = useState<number>(85); // 0-100
  const [defaultHistory, setDefaultHistory] = useState<number>(5); // Years since last default

  // Outputs
  const [approvalProb, setApprovalProb] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [maxLimit, setMaxLimit] = useState<number>(0); // In Lakhs

  useEffect(() => {
    // Math Engine
    let baseProb = 50;
    let baseRate = 12.0;
    let baseLimit = turnover * 0.2; // Max limit is 20% of turnover baseline

    // Turnover Impact
    if (turnover > 200) baseProb += 15;
    else if (turnover < 20) baseProb -= 10;
    baseRate -= (turnover / 100) * 0.5;

    // GST Score Impact
    const gstDelta = gstScore - 50;
    baseProb += gstDelta * 0.4;
    baseRate -= (gstDelta / 50) * 1.5;

    // Default History Impact
    if (defaultHistory === 0) {
      baseProb -= 60; // Just defaulted
      baseRate += 5.0;
      baseLimit *= 0.1;
    } else {
      baseProb += defaultHistory * 3;
      baseRate -= defaultHistory * 0.2;
    }

    setApprovalProb(Math.min(99, Math.max(5, baseProb)));
    setInterestRate(Number(Math.max(7.5, baseRate).toFixed(2)));
    setMaxLimit(Math.floor(baseLimit));

  }, [turnover, gstScore, defaultHistory]);

  const isApproved = approvalProb >= 65;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Inputs */}
      <Card className="bg-[#05101a] border-cyan-900/30">
        <CardHeader>
          <CardTitle className="text-cyan-400 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            MSME Risk Scoring Engine
          </CardTitle>
          <CardDescription className="text-slate-400">Real-time parameters for automated underwriting</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-slate-200 font-bold">Annual Turnover (Verified)</span>
                <p className="text-[10px] text-slate-500">Pulled from GSTN</p>
              </div>
              <span className="text-lg text-cyan-400 font-mono font-bold bg-cyan-900/20 px-3 py-1 rounded-md">₹{turnover}L</span>
            </div>
            <Slider value={[turnover]} min={10} max={500} step={10} onValueChange={(v) => setTurnover(v[0])} className="w-full" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-slate-200 font-bold">GST Compliance Score</span>
                <p className="text-[10px] text-slate-500">Filing consistency & accuracy</p>
              </div>
              <span className="text-lg text-cyan-400 font-mono font-bold bg-cyan-900/20 px-3 py-1 rounded-md">{gstScore}/100</span>
            </div>
            <Slider value={[gstScore]} min={10} max={100} step={1} onValueChange={(v) => setGstScore(v[0])} className="w-full" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-slate-200 font-bold">Time Since Last Default</span>
                <p className="text-[10px] text-slate-500">Pulled from Account Aggregator</p>
              </div>
              <span className="text-lg text-cyan-400 font-mono font-bold bg-cyan-900/20 px-3 py-1 rounded-md">{defaultHistory} Yrs</span>
            </div>
            <Slider value={[defaultHistory]} min={0} max={10} step={1} onValueChange={(v) => setDefaultHistory(v[0])} className="w-full" />
          </div>

        </CardContent>
      </Card>

      {/* Outputs */}
      <Card className="bg-[#020810] border-slate-800 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] pointer-events-none ${isApproved ? 'bg-emerald-900/20' : 'bg-rose-900/20'}`}></div>
        
        <CardContent className="p-8 space-y-6 relative z-10 flex flex-col justify-between h-full">
          
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">Automated Decision</h3>
              <div className={`px-3 py-1 rounded border text-xs font-bold flex items-center gap-2 ${isApproved ? 'bg-emerald-900/20 border-emerald-500/30 text-emerald-400' : 'bg-rose-900/20 border-rose-500/30 text-rose-400'}`}>
                {isApproved ? <><ShieldCheck className="h-4 w-4" /> APPROVED</> : <><AlertTriangle className="h-4 w-4" /> REJECTED</>}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Approval Probability</p>
                <div className="flex items-end gap-3">
                  <span className={`text-5xl font-black ${isApproved ? 'text-emerald-400' : 'text-rose-400'}`}>{approvalProb.toFixed(0)}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${isApproved ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: `${approvalProb}%` }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">Recommended Rate</p>
                  <span className="text-2xl font-black text-white">{interestRate}% <span className="text-xs font-normal text-slate-500">APR</span></span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">Max Facility Limit</p>
                  <span className="text-2xl font-black text-white">₹{maxLimit} <span className="text-xs font-normal text-slate-500">Lakhs</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-cyan-900/10 border border-cyan-900/30 rounded-xl">
             <div className="flex items-center gap-3">
               <FileCheck className="h-5 w-5 text-cyan-500" />
               <div>
                 <p className="text-xs font-bold text-cyan-400">Smart Contract Execution</p>
                 <p className="text-[10px] text-cyan-200/50 mt-1">If approved, funds are automatically disbursed via CBDC programmable triggers.</p>
               </div>
             </div>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}
