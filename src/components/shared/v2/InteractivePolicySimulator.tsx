"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, AlertTriangle, TrendingUp, TrendingDown, Info, Activity } from "lucide-react";

export function InteractivePolicySimulator({ controls, outputs, purpose }: { controls?: string[], outputs?: string[], purpose?: string }) {
  // Inputs (Controls)
  const [gstRate, setGstRate] = useState<number>(18); // standard GST %
  const [subsidyAllocation, setSubsidyAllocation] = useState<number>(50); // in Thousands of Crores
  const [repoRate, setRepoRate] = useState<number>(6.5); // RBI Repo Rate %
  const [liquidityInjection, setLiquidityInjection] = useState<number>(10); // in Thousands of Crores

  // Outputs (Simulated metrics)
  const [gdpGrowth, setGdpGrowth] = useState<number>(7.2);
  const [inflation, setInflation] = useState<number>(5.1);
  const [taxRevenue, setTaxRevenue] = useState<number>(1.6); // in Lakh Crores
  const [creditGrowth, setCreditGrowth] = useState<number>(15.0); // %

  // Simulation Engine (Believable formulas)
  useEffect(() => {
    // Base Baseline
    let baseGdp = 7.0;
    let baseInf = 4.5;
    let baseTax = 1.4;
    let baseCredit = 12.0;

    // GST Impact: Higher GST = Higher Tax, Lower GDP, Higher Inflation
    const gstDelta = (gstRate - 18) * 0.1; 
    baseTax += (gstRate - 18) * 0.05;
    baseGdp -= gstDelta * 0.8;
    baseInf += gstDelta * 0.5;

    // Subsidy Impact: Higher Subsidy = Higher GDP (consumption), Higher Inflation
    const subDelta = (subsidyAllocation - 50) * 0.02;
    baseGdp += subDelta * 0.6;
    baseInf += subDelta * 0.4;
    baseTax -= subDelta * 0.1; // Subsidies drain net revenue slightly

    // Repo Rate Impact: Higher Rate = Lower Credit, Lower GDP, Lower Inflation
    const repoDelta = (repoRate - 6.5) * 1.5;
    baseCredit -= repoDelta * 2.0;
    baseGdp -= repoDelta * 0.4;
    baseInf -= repoDelta * 0.8;

    // Liquidity Impact: Higher Liquidity = Higher Credit, Higher GDP, Higher Inflation
    const liqDelta = (liquidityInjection - 10) * 0.05;
    baseCredit += liqDelta * 1.5;
    baseGdp += liqDelta * 0.3;
    baseInf += liqDelta * 0.5;

    // Add some random noise for realism
    const noise = () => (Math.random() * 0.1) - 0.05;

    setGdpGrowth(Number(Math.max(1.0, baseGdp + noise()).toFixed(2)));
    setInflation(Number(Math.max(2.0, baseInf + noise()).toFixed(2)));
    setTaxRevenue(Number(Math.max(0.5, baseTax + noise()).toFixed(2)));
    setCreditGrowth(Number(Math.max(2.0, baseCredit + noise()).toFixed(2)));

  }, [gstRate, subsidyAllocation, repoRate, liquidityInjection]);

  // Determine alert states
  const isHighInflation = inflation > 6.0;
  const isLowGrowth = gdpGrowth < 5.0;

  return (
    <div className="flex flex-col space-y-6">
      
      {/* Top Warning Banner */}
      {(isHighInflation || isLowGrowth) && (
        <div className="bg-rose-900/20 border border-rose-500/30 p-4 rounded-xl flex items-center gap-3">
          <AlertTriangle className="text-rose-500 h-5 w-5" />
          <div className="flex-1">
            <h4 className="text-rose-400 font-bold text-sm">Systemic Risk Warning</h4>
            <p className="text-rose-300/80 text-xs mt-1">
              {isHighInflation && "Inflation has breached the RBI upper tolerance band of 6.0%. "}
              {isLowGrowth && "GDP growth is critically sluggish, risking recessionary pressures. "}
              Adjust repo rate or liquidity controls to stabilize.
            </p>
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Controls Column */}
        <div className="xl:col-span-5 space-y-4">
          <Card className="bg-[#05101a]/80 border-amber-900/30 shadow-2xl backdrop-blur-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-amber-400 flex items-center gap-2 text-lg">
                <Activity className="h-5 w-5" />
                Macroeconomic Levers
              </CardTitle>
              <CardDescription className="text-slate-400">Adjust parameters to simulate national economic response (Digital Twin)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* GST */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-slate-200 font-bold">Standard GST Rate</span>
                    <p className="text-[10px] text-slate-500">Blended indirect tax rate</p>
                  </div>
                  <span className="text-lg text-amber-400 font-mono font-bold bg-amber-900/20 px-3 py-1 rounded-md">{gstRate.toFixed(1)}%</span>
                </div>
                <Slider value={[gstRate]} min={5} max={28} step={0.5} onValueChange={(v) => setGstRate(v[0])} className="w-full" />
              </div>

              {/* Repo Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-slate-200 font-bold">RBI Repo Rate</span>
                    <p className="text-[10px] text-slate-500">Cost of borrowing for banks</p>
                  </div>
                  <span className="text-lg text-amber-400 font-mono font-bold bg-amber-900/20 px-3 py-1 rounded-md">{repoRate.toFixed(2)}%</span>
                </div>
                <Slider value={[repoRate]} min={3.0} max={9.0} step={0.25} onValueChange={(v) => setRepoRate(v[0])} className="w-full" />
              </div>

              {/* Subsidy Allocation */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-slate-200 font-bold">DBT Subsidy Allocation</span>
                    <p className="text-[10px] text-slate-500">Direct benefit transfers to citizens</p>
                  </div>
                  <span className="text-lg text-amber-400 font-mono font-bold bg-amber-900/20 px-3 py-1 rounded-md">₹{subsidyAllocation}K Cr</span>
                </div>
                <Slider value={[subsidyAllocation]} min={10} max={200} step={5} onValueChange={(v) => setSubsidyAllocation(v[0])} className="w-full" />
              </div>

              {/* Liquidity Injection */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-slate-200 font-bold">Systemic Liquidity</span>
                    <p className="text-[10px] text-slate-500">Central bank liquidity injection (OMO)</p>
                  </div>
                  <span className="text-lg text-amber-400 font-mono font-bold bg-amber-900/20 px-3 py-1 rounded-md">₹{liquidityInjection}K Cr</span>
                </div>
                <Slider value={[liquidityInjection]} min={-50} max={100} step={5} onValueChange={(v) => setLiquidityInjection(v[0])} className="w-full" />
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Transformation visualization (Arrow) */}
        <div className="hidden xl:flex xl:col-span-1 items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-cyan-900/50">
             <div className="h-20 w-[1px] bg-cyan-900/30"></div>
             <ArrowRight className="h-8 w-8 animate-pulse text-cyan-600" />
             <div className="h-20 w-[1px] bg-cyan-900/30"></div>
          </div>
        </div>

        {/* Outputs Column */}
        <div className="xl:col-span-6 space-y-4">
          <Card className="bg-[#05101a]/80 border-cyan-900/30 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 blur-[80px] pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-cyan-900/20 mb-4">
              <CardTitle className="text-cyan-400 text-lg">Economic Digital Twin Output</CardTitle>
              <CardDescription className="text-slate-400">Projected impact across national vectors over 12 months</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 relative z-10">
              
              {/* GDP */}
              <div className="bg-[#020810] border border-cyan-900/40 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Real GDP Growth</span>
                  <Info className="h-3 w-3 text-cyan-700" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${gdpGrowth >= 7.0 ? 'text-emerald-400' : gdpGrowth < 5.0 ? 'text-rose-400' : 'text-amber-400'}`}>
                    {gdpGrowth.toFixed(1)}%
                  </span>
                  <span className="text-xs text-slate-500">YoY</span>
                </div>
              </div>

              {/* Inflation */}
              <div className="bg-[#020810] border border-cyan-900/40 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">CPI Inflation</span>
                  <Info className="h-3 w-3 text-cyan-700" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${inflation <= 4.0 ? 'text-emerald-400' : inflation > 6.0 ? 'text-rose-400' : 'text-amber-400'}`}>
                    {inflation.toFixed(1)}%
                  </span>
                  <span className="text-xs text-slate-500">YoY</span>
                </div>
              </div>

              {/* Revenue */}
              <div className="bg-[#020810] border border-cyan-900/40 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Monthly Tax Rev</span>
                  <Info className="h-3 w-3 text-cyan-700" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-cyan-300">
                    ₹{taxRevenue.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-500">Lakh Cr</span>
                </div>
              </div>

              {/* Credit Growth */}
              <div className="bg-[#020810] border border-cyan-900/40 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Bank Credit Growth</span>
                  <Info className="h-3 w-3 text-cyan-700" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${creditGrowth > 12.0 ? 'text-emerald-400' : creditGrowth < 8.0 ? 'text-rose-400' : 'text-amber-400'}`}>
                    {creditGrowth.toFixed(1)}%
                  </span>
                  <span className="text-xs text-slate-500">YoY</span>
                </div>
              </div>

            </CardContent>
            
            {/* Real-time causality map */}
            <div className="mt-6 mx-6 p-4 bg-cyan-900/10 border border-cyan-900/30 rounded-xl">
              <h5 className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3">Causality Flow Simulator</h5>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="text-amber-400">Action:</span> Rate Adjustment <ArrowRight className="h-3 w-3 inline" /> 
                  <span className="text-blue-400">Bank Lending:</span> Updates <ArrowRight className="h-3 w-3 inline" />
                  <span className="text-emerald-400">Business CapEx:</span> Shifts
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="text-amber-400">Action:</span> Subsidy Flow <ArrowRight className="h-3 w-3 inline" /> 
                  <span className="text-cyan-400">Citizen Wallets:</span> Funded <ArrowRight className="h-3 w-3 inline" />
                  <span className="text-rose-400">Retail Demand:</span> Surges
                </div>
              </div>
            </div>

          </Card>
        </div>

      </div>
    </div>
  );
}
