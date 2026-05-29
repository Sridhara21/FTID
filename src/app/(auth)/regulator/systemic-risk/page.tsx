"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Globe, Network, Waves, Link, Activity, Play, Zap, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function SystemicRiskPage() {
  const [simulationActive, setSimulationActive] = useState(false);
  const [shockWave, setShockWave] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simulationActive) {
      interval = setInterval(() => {
        setShockWave(prev => (prev + 1) % 4);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [simulationActive]);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Systemic Risk</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-primary" /> Macro-Financial Stability Observatory
          </p>
        </div>
        <Button 
            variant={simulationActive ? "destructive" : "outline"} 
            className={`gap-2 uppercase tracking-widest text-[10px] font-bold ${simulationActive ? 'animate-pulse' : 'border-primary/20 text-primary'}`}
            onClick={() => setSimulationActive(!simulationActive)}
        >
          {simulationActive ? <Zap className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {simulationActive ? 'Halt Simulation' : 'Run Shock Simulation'}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">National Contagion Risk</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-mono font-black tabular-nums tracking-tighter ${simulationActive ? 'text-red-500' : 'text-green-500'}`}>
                {simulationActive ? '42.8%' : '12.4%'}
            </div>
            <Progress value={simulationActive ? 42.8 : 12.4} className={`h-1 mt-2 ${simulationActive ? '[&>div]:bg-red-500' : '[&>div]:bg-green-500'}`} />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Shadow Banking Exposure</CardTitle>
            <Link className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-mono font-black tabular-nums tracking-tighter ${simulationActive ? 'text-orange-500' : 'text-primary'}`}>
                {simulationActive ? '₹8.4T' : '₹2.1T'}
            </div>
             <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">
              Estimated interconnectedness
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Liquidity Chain Integrity</CardTitle>
            <Waves className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
             <div className={`text-3xl font-mono font-black tabular-nums tracking-tighter ${simulationActive ? 'text-yellow-500' : 'text-blue-500'}`}>
                {simulationActive ? 'Degraded' : 'Nominal'}
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">
              Interbank lending flow
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contagion Simulation Engine / Graph */}
        <Card className="lg:col-span-2 border-primary/20 bg-card/40 flex flex-col h-[500px]">
          <CardHeader className="pb-2 border-b border-white/5 flex flex-row items-center justify-between">
            <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <Network className="h-4 w-4 text-primary" /> Sectoral Interconnectedness & Shock Propagation
            </CardTitle>
             {simulationActive && (
                 <Badge variant="destructive" className="animate-pulse text-[9px] uppercase font-mono">
                     Simulating 40% Housing Crash
                 </Badge>
             )}
          </CardHeader>
          <CardContent className="flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background p-0">
            <div className="absolute inset-0 flex items-center justify-center p-8">
               {/* Core Node: Real Estate */}
               <div className="absolute top-[40%] left-[30%] flex flex-col items-center z-20">
                   <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-500
                       ${simulationActive ? 'border-red-500 bg-red-500/20 shadow-red-500/50 animate-pulse' : 'border-orange-500 bg-orange-500/20 shadow-orange-500/20'}`}>
                       <span className="font-bold text-xs uppercase tracking-widest">REAL</span>
                   </div>
                   {simulationActive && shockWave > 0 && <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-ping opacity-50"></div>}
               </div>

               {/* Connected Node: NBFCs */}
               <div className="absolute top-[30%] left-[60%] flex flex-col items-center z-20">
                   <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-500
                       ${simulationActive && shockWave >= 1 ? 'border-red-400 bg-red-500/20 shadow-red-500/50' : 'border-yellow-500 bg-yellow-500/20'}`}>
                       <span className="font-bold text-xs uppercase tracking-widest">NBFC</span>
                   </div>
               </div>

               {/* Connected Node: Retail Banks */}
               <div className="absolute top-[70%] left-[45%] flex flex-col items-center z-20">
                   <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-500
                       ${simulationActive && shockWave >= 2 ? 'border-orange-500 bg-orange-500/20 shadow-orange-500/50' : 'border-green-500 bg-green-500/20'}`}>
                       <span className="font-bold text-xs uppercase tracking-widest">BANK</span>
                   </div>
               </div>

               {/* Connected Node: MSME */}
               <div className="absolute top-[60%] left-[80%] flex flex-col items-center z-20">
                   <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-500
                       ${simulationActive && shockWave >= 3 ? 'border-red-500 bg-red-500/20 shadow-red-500/50' : 'border-primary bg-primary/20'}`}>
                       <span className="font-bold text-xs uppercase tracking-widest">MSME</span>
                   </div>
               </div>

               {/* Edges */}
               <svg className="absolute inset-0 w-full h-full z-10" style={{ pointerEvents: 'none' }}>
                  {/* Real Estate to NBFC */}
                  <line x1="30%" y1="40%" x2="60%" y2="30%" stroke={simulationActive && shockWave >= 0 ? "rgba(239,68,68,0.8)" : "rgba(249,115,22,0.4)"} strokeWidth={simulationActive ? 4 : 2} className={simulationActive ? "animate-[dash_1s_linear_infinite]" : ""} strokeDasharray={simulationActive ? "8" : "0"} />
                  {/* NBFC to Bank */}
                  <line x1="60%" y1="30%" x2="45%" y2="70%" stroke={simulationActive && shockWave >= 1 ? "rgba(249,115,22,0.8)" : "rgba(168,162,158,0.3)"} strokeWidth={simulationActive ? 3 : 1} className={simulationActive ? "animate-[dash_1s_linear_infinite]" : ""} strokeDasharray={simulationActive ? "8" : "0"} />
                  {/* Real Estate to Bank */}
                  <line x1="30%" y1="40%" x2="45%" y2="70%" stroke={simulationActive && shockWave >= 1 ? "rgba(249,115,22,0.8)" : "rgba(168,162,158,0.3)"} strokeWidth={simulationActive ? 3 : 1} />
                  {/* NBFC to MSME */}
                  <line x1="60%" y1="30%" x2="80%" y2="60%" stroke={simulationActive && shockWave >= 2 ? "rgba(239,68,68,0.8)" : "rgba(59,130,246,0.4)"} strokeWidth={simulationActive ? 4 : 2} className={simulationActive ? "animate-[dash_1s_linear_infinite]" : ""} strokeDasharray={simulationActive ? "8" : "0"} />
                   {/* Bank to MSME */}
                  <line x1="45%" y1="70%" x2="80%" y2="60%" stroke={simulationActive && shockWave >= 3 ? "rgba(249,115,22,0.8)" : "rgba(59,130,246,0.4)"} strokeWidth={simulationActive ? 3 : 2} />
               </svg>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur border border-border/50 p-2 rounded text-[9px] font-mono uppercase text-muted-foreground">
                Dependency Graph: Weights represent exposure liquidity.
            </div>
          </CardContent>
        </Card>

        {/* Breakdown Panel */}
        <Card className="lg:col-span-1 flex flex-col h-[500px]">
          <CardHeader className="pb-2 border-b border-border/50">
            <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-muted-foreground" /> Liquidity Chain Breakdowns
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                        <span>Tier-2 NBFC Solvency</span>
                        <span className={simulationActive ? "text-red-500" : "text-green-500"}>{simulationActive ? "CRITICAL" : "STABLE"}</span>
                    </div>
                    <Progress value={simulationActive ? 15 : 85} className={`h-1 ${simulationActive ? '[&>div]:bg-red-500' : '[&>div]:bg-green-500'}`} />
                    {simulationActive && <p className="text-[9px] font-mono text-red-400">Capital buffers depleting rapidly.</p>}
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                        <span>Retail Bank LCR</span>
                        <span className={simulationActive ? "text-orange-500" : "text-primary"}>{simulationActive ? "105% (Falling)" : "135%"}</span>
                    </div>
                    <Progress value={simulationActive ? 40 : 85} className={`h-1 ${simulationActive ? '[&>div]:bg-orange-500' : '[&>div]:bg-primary'}`} />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                        <span>MSME Credit Flow</span>
                        <span className={simulationActive ? "text-red-500" : "text-primary"}>{simulationActive ? "FROZEN" : "OPTIMAL"}</span>
                    </div>
                    <Progress value={simulationActive ? 5 : 90} className={`h-1 ${simulationActive ? '[&>div]:bg-red-500' : '[&>div]:bg-primary'}`} />
                    {simulationActive && <p className="text-[9px] font-mono text-red-400">Interbank lending freeze cascading to SME tier.</p>}
                </div>
                
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                        <span>Sovereign Bond Yields</span>
                        <span className={simulationActive ? "text-yellow-500" : "text-green-500"}>{simulationActive ? "+45 bps" : "Stable"}</span>
                    </div>
                    <Progress value={simulationActive ? 60 : 20} className={`h-1 ${simulationActive ? '[&>div]:bg-yellow-500' : '[&>div]:bg-green-500'}`} />
                </div>
              </div>

              {simulationActive && (
                  <div className="mt-8 p-3 bg-red-500/10 border border-red-500/30 rounded-md animate-in slide-in-from-bottom-2">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">Recommended Action</h4>
                      <p className="text-[9px] font-mono text-muted-foreground">Inject ₹1.2T liquidity into Repo window immediately to prevent NBFC defaults.</p>
                      <Button variant="outline" size="sm" className="w-full mt-3 h-6 text-[9px] uppercase tracking-widest border-red-500/50 text-red-400 hover:bg-red-500/20">
                          Deploy Liquidity
                      </Button>
                  </div>
              )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
