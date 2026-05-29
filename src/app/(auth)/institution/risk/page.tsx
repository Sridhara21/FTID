"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, Activity, AlertTriangle, Crosshair, TrendingDown, Layers, Waves, ArrowDownRight, Target, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function InstitutionalRiskPage() {
  const [stressTestActive, setStressTestActive] = useState(false);
  const [npaTick, setNpaTick] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (stressTestActive) {
      interval = setInterval(() => {
        setNpaTick(prev => prev + 1);
      }, 800);
    } else {
        setNpaTick(0);
    }
    return () => clearInterval(interval);
  }, [stressTestActive]);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Risk Management</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-orange-500" /> Portfolio Stress & Asset Quality
          </p>
        </div>
        <Button 
            variant={stressTestActive ? "destructive" : "outline"} 
            className={`gap-2 uppercase tracking-widest text-[10px] font-bold ${stressTestActive ? 'animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'border-orange-500/20 text-orange-500'}`}
            onClick={() => setStressTestActive(!stressTestActive)}
        >
          {stressTestActive ? <Activity className="h-4 w-4" /> : <Crosshair className="h-4 w-4" />}
          {stressTestActive ? 'Halt Stress Test' : 'Run Scenario: 15% rate hike'}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className={`border-border/50 bg-secondary/10 transition-colors duration-500 ${stressTestActive ? 'border-red-500/50 bg-red-500/5' : ''}`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Predicted NPA Ratio</CardTitle>
            <TrendingDown className={`h-4 w-4 ${stressTestActive ? 'text-red-500 animate-bounce' : 'text-primary'}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-mono font-black tabular-nums tracking-tighter ${stressTestActive ? 'text-red-500' : 'text-primary'}`}>
                {stressTestActive ? (4.2 + (npaTick * 0.1)).toFixed(1) + '%' : '3.8%'}
            </div>
            <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${stressTestActive ? 'text-red-400' : 'text-muted-foreground'}`}>
                Next 90 Days forecast
            </p>
          </CardContent>
        </Card>

        <Card className={`border-border/50 bg-secondary/10 transition-colors duration-500 ${stressTestActive ? 'border-orange-500/50 bg-orange-500/5' : ''}`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Capital Adequacy (CAR)</CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-mono font-black tabular-nums tracking-tighter ${stressTestActive ? 'text-orange-500' : 'text-green-500'}`}>
                {stressTestActive ? Math.max(12.4, 16.8 - (npaTick * 0.2)).toFixed(1) + '%' : '16.8%'}
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Tier 1 + Tier 2</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Sector Limit Breaches</CardTitle>
            <Target className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-orange-500">
                {stressTestActive ? '2' : '0'}
            </div>
            <p className="text-[10px] text-orange-400/80 font-bold uppercase tracking-widest mt-1">Concentration Risk</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Value at Risk (VaR)</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
             <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">
                ₹{stressTestActive ? (1200 + (npaTick * 50)) : '480'} Cr
            </div>
            <p className="text-[10px] text-red-400/80 font-bold uppercase tracking-widest mt-1">99% Confidence, 10-day</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {/* Sector Exposure Limits */}
         <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[450px]">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <Layers className="h-4 w-4 text-primary" /> Sector Exposure & Limits Tracking
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-6 space-y-8">
                {[
                  { sector: "Real Estate (Commercial)", exposure: 42000, limit: 40000, color: "text-red-500", bg: "bg-red-500" },
                  { sector: "NBFC Lending", exposure: 28000, limit: 30000, color: "text-orange-500", bg: "bg-orange-500" },
                  { sector: "Infrastructure", exposure: 35000, limit: 50000, color: "text-primary", bg: "bg-primary" },
                  { sector: "Retail Unsecured", exposure: 45000, limit: 45000, color: "text-yellow-500", bg: "bg-yellow-500" },
                  { sector: "Agriculture", exposure: 18000, limit: 30000, color: "text-green-500", bg: "bg-green-500" },
                ].map((item, i) => {
                    const pct = Math.min(100, (item.exposure / item.limit) * 100);
                    const isBreach = item.exposure >= item.limit;
                    const displayPct = stressTestActive && isBreach ? Math.min(100, pct + npaTick * 2) : pct;

                    return (
                        <div key={i} className="space-y-3 relative">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${isBreach ? 'text-red-500' : 'text-foreground'}`}>{item.sector}</span>
                                    <p className="text-[9px] text-muted-foreground font-mono uppercase mt-0.5">Limit: ₹{item.limit.toLocaleString()} Cr</p>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[10px] font-mono font-bold ${isBreach ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}>
                                        Exposure: ₹{item.exposure.toLocaleString()} Cr
                                    </span>
                                    {isBreach && <p className="text-[9px] text-red-500 font-bold uppercase mt-0.5">BREACH DETECTED</p>}
                                </div>
                            </div>
                            
                            <div className="relative h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                                <div className={`absolute top-0 left-0 h-full ${isBreach ? 'bg-red-500' : item.bg.replace('bg-', '')} transition-all duration-1000`} style={{ width: `${displayPct}%` }}></div>
                                {/* Limit Marker */}
                                <div className="absolute top-0 bottom-0 w-0.5 bg-foreground z-10" style={{ left: '90%' }}></div>
                            </div>
                            <span className="absolute -bottom-4 right-[10%] text-[8px] font-mono text-muted-foreground translate-x-1/2">Internal Limit</span>
                        </div>
                    );
                })}
            </CardContent>
         </Card>

         {/* Asset Quality / Early Warning */}
         <Card className="lg:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[450px]">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <Waves className="h-4 w-4 text-muted-foreground" /> Early Warning Signals (SMA)
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                
                <div className="grid grid-cols-3 gap-2 text-center mb-6">
                    <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
                        <p className="text-[9px] font-bold uppercase text-yellow-500">SMA-0 (1-30d)</p>
                        <p className="text-lg font-mono font-black text-yellow-500 mt-1">{stressTestActive ? 14 + npaTick : 14}%</p>
                    </div>
                    <div className="p-2 bg-orange-500/10 border border-orange-500/20 rounded">
                        <p className="text-[9px] font-bold uppercase text-orange-500">SMA-1 (31-60d)</p>
                        <p className="text-lg font-mono font-black text-orange-500 mt-1">{stressTestActive ? 8 + Math.floor(npaTick/2) : 8}%</p>
                    </div>
                    <div className="p-2 bg-red-500/10 border border-red-500/20 rounded">
                        <p className="text-[9px] font-bold uppercase text-red-500">SMA-2 (61-90d)</p>
                        <p className="text-lg font-mono font-black text-red-500 mt-1">{stressTestActive ? 3 + Math.floor(npaTick/3) : 3}%</p>
                    </div>
                </div>

                <div className="space-y-3">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">High-Risk Accounts Migrating</h4>
                   {[
                     { name: "Omega Steel Corp", from: "SMA-1", to: "SMA-2", risk: "Critical" },
                     { name: "Retail Batch #8812", from: "Standard", to: "SMA-0", risk: "Medium" },
                     { name: "Agri-Coop North", from: "SMA-2", to: "NPA", risk: "Default Imminent" },
                   ].map((acct, i) => (
                       <div key={i} className="p-3 bg-background border border-border/50 rounded-lg flex items-center justify-between">
                          <div>
                              <span className="text-[10px] font-bold text-foreground">{acct.name}</span>
                              <div className="flex items-center gap-2 mt-1 text-[9px] font-mono text-muted-foreground">
                                  <span>{acct.from}</span>
                                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                                  <span className="text-red-400">{acct.to}</span>
                              </div>
                          </div>
                          <Badge variant="outline" className={`font-mono text-[9px] uppercase ${acct.risk === 'Critical' || acct.risk.includes('Default') ? 'bg-red-500/10 text-red-500 border-red-500/30' : 'bg-orange-500/10 text-orange-500 border-orange-500/30'}`}>
                              {acct.risk}
                          </Badge>
                       </div>
                   ))}
                </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}