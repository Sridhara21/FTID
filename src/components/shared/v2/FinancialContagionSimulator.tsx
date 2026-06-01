"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Activity, AlertOctagon, TrendingDown, Clock, Building2, Network } from "lucide-react";

export function FinancialContagionSimulator() {
  const [shockType, setShockType] = useState<'bank_failure' | 'liquidity_shock' | 'fraud'>('bank_failure');
  const [severity, setSeverity] = useState<number>(3); // 1 to 5
  
  // Outputs
  const [institutionsAffected, setInstitutionsAffected] = useState<number>(0);
  const [economicImpact, setEconomicImpact] = useState<number>(0);
  const [recoveryTime, setRecoveryTime] = useState<number>(0);

  // Simulation Logic
  useEffect(() => {
    let baseInstitutions = 0;
    let baseImpact = 0.0;
    let baseRecovery = 0;

    if (shockType === 'bank_failure') {
      baseInstitutions = severity * 12; // Cascade to 12 banks per severity
      baseImpact = severity * 0.4;      // GDP contraction %
      baseRecovery = severity * 4;      // Months to recover
    } else if (shockType === 'liquidity_shock') {
      baseInstitutions = severity * 25; // Broad impact
      baseImpact = severity * 0.2;      
      baseRecovery = severity * 2;
    } else if (shockType === 'fraud') {
      baseInstitutions = severity * 5;  // Localized but severe trust loss
      baseImpact = severity * 0.1;
      baseRecovery = severity * 6;
    }

    // Add slight non-linear scaling for high severity
    if (severity >= 4) {
      baseInstitutions *= 1.5;
      baseImpact *= 1.8;
      baseRecovery *= 1.5;
    }

    setInstitutionsAffected(Math.floor(baseInstitutions));
    setEconomicImpact(Number(baseImpact.toFixed(2)));
    setRecoveryTime(Math.floor(baseRecovery));

  }, [shockType, severity]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Controls */}
      <div className="lg:col-span-4 space-y-4">
        <Card className="bg-[#05101a] border-rose-900/30">
          <CardHeader>
            <CardTitle className="text-rose-400 flex items-center gap-2">
              <AlertOctagon className="h-5 w-5" />
              Contagion Triggers
            </CardTitle>
            <CardDescription className="text-slate-400">Inject macro shocks to test network resilience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-200">Shock Vector</label>
              <div className="grid grid-cols-1 gap-2">
                <button 
                  onClick={() => setShockType('bank_failure')}
                  className={`p-3 rounded border text-left flex flex-col ${shockType === 'bank_failure' ? 'bg-rose-900/20 border-rose-500/50 text-rose-300' : 'bg-[#020810] border-slate-800 text-slate-400'}`}
                >
                  <span className="font-bold text-sm">Tier-1 Bank Failure</span>
                  <span className="text-[10px]">Capital inadequacy leading to insolvency</span>
                </button>
                <button 
                  onClick={() => setShockType('liquidity_shock')}
                  className={`p-3 rounded border text-left flex flex-col ${shockType === 'liquidity_shock' ? 'bg-amber-900/20 border-amber-500/50 text-amber-300' : 'bg-[#020810] border-slate-800 text-slate-400'}`}
                >
                  <span className="font-bold text-sm">Systemic Liquidity Freeze</span>
                  <span className="text-[10px]">Interbank lending markets stall</span>
                </button>
                <button 
                  onClick={() => setShockType('fraud')}
                  className={`p-3 rounded border text-left flex flex-col ${shockType === 'fraud' ? 'bg-purple-900/20 border-purple-500/50 text-purple-300' : 'bg-[#020810] border-slate-800 text-slate-400'}`}
                >
                  <span className="font-bold text-sm">Massive Scale Fraud</span>
                  <span className="text-[10px]">Erosion of trust across multiple NBFCs</span>
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-200">Shock Severity Level</span>
                <span className="text-lg font-black font-mono text-rose-400">Lvl {severity}</span>
              </div>
              <input 
                type="range" 
                min="1" max="5" 
                value={severity} 
                onChange={(e) => setSeverity(parseInt(e.target.value))}
                className="w-full accent-rose-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                <span>Contained</span>
                <span>Catastrophic</span>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>

      {/* Outputs */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Cascade Visualizer */}
        <Card className="bg-[#020810] border-slate-800 overflow-hidden relative">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(244, 63, 94, 0.4) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
           <CardHeader className="relative z-10">
             <CardTitle className="text-slate-200 text-sm tracking-widest uppercase">Network Cascade Simulation</CardTitle>
           </CardHeader>
           <CardContent className="h-[200px] flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-md">
                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                   <AlertTriangle className={`h-12 w-12 ${severity > 3 ? 'text-rose-500 animate-ping' : 'text-amber-500'}`} />
                 </div>
                 {/* Visual representation of affected nodes based on institutionsAffected */}
                 {Array.from({ length: Math.min(24, institutionsAffected) }).map((_, i) => {
                   const angle = (i / Math.min(24, institutionsAffected)) * Math.PI * 2;
                   const radius = severity > 3 ? 120 : 80;
                   const x = Math.cos(angle) * radius;
                   const y = Math.sin(angle) * radius;
                   return (
                     <div 
                       key={i} 
                       className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-rose-500/80 blur-[1px] animate-pulse"
                       style={{ 
                         transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                         animationDelay: `${i * 0.1}s`
                       }}
                     />
                   )
                 })}
                 {/* Connecting lines conceptually */}
                 {severity > 2 && <Network className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 text-rose-500/20" />}
              </div>
           </CardContent>
        </Card>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-[#05101a] border-cyan-900/30">
            <CardContent className="p-6 flex flex-col justify-between">
              <Building2 className="h-5 w-5 text-cyan-500 mb-4" />
              <p className="text-xs text-slate-400 font-bold uppercase mb-1">Institutions Affected</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-black text-white">{institutionsAffected}</h3>
                <span className="text-xs text-slate-500">Entities</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#05101a] border-rose-900/30 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-rose-900/20 blur-xl"></div>
            <CardContent className="p-6 flex flex-col justify-between relative z-10">
              <TrendingDown className="h-5 w-5 text-rose-500 mb-4" />
              <p className="text-xs text-slate-400 font-bold uppercase mb-1">GDP Contraction</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-black text-rose-400">-{economicImpact}%</h3>
                <span className="text-xs text-slate-500">Est.</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#05101a] border-amber-900/30">
            <CardContent className="p-6 flex flex-col justify-between">
              <Clock className="h-5 w-5 text-amber-500 mb-4" />
              <p className="text-xs text-slate-400 font-bold uppercase mb-1">Time to Recovery</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-black text-amber-400">{recoveryTime}</h3>
                <span className="text-xs text-slate-500">Months</span>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
