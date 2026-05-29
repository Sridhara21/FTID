"use client";

import { useState } from "react";
import { Map, Activity, ShieldAlert, TrendingDown, Network, ShieldCheck, AlertTriangle, RefreshCw, Send, Plus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ComplianceZone {
  id: string;
  name: string;
  car: number; // Capital Adequacy Ratio %
  lcr: number; // Liquidity Coverage Ratio %
  npa: number; // Net NPA %
  risk: "Stable" | "Warning" | "Critical";
  volume: string;
}

const initialZones: ComplianceZone[] = [
  { id: "Z_WEST", name: "Western Zone (Mumbai)", car: 16.4, lcr: 142, npa: 1.8, risk: "Stable", volume: "₹18,500Cr" },
  { id: "Z_NORTH", name: "Northern Zone (Delhi)", car: 15.1, lcr: 128, npa: 2.4, risk: "Stable", volume: "₹14,200Cr" },
  { id: "Z_SOUTH", name: "Southern Zone (Bengaluru)", car: 14.8, lcr: 118, npa: 3.1, risk: "Warning", volume: "₹12,800Cr" },
  { id: "Z_EAST", name: "Eastern Zone (Kolkata)", car: 11.2, lcr: 104, npa: 5.6, risk: "Critical", volume: "₹6,400Cr" },
  { id: "Z_CENTRAL", name: "Central Zone (Bhopal)", car: 13.9, lcr: 122, npa: 2.9, risk: "Stable", volume: "₹5,800Cr" }
];

export default function RegulatorHeatmap() {
  const [zones, setZones] = useState<ComplianceZone[]>(initialZones);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [stressImpact, setStressImpact] = useState(-4.2);
  const [logs, setLogs] = useState<string[]>([]);
  const [isInjecting, setIsInjecting] = useState(false);

  const activeZone = zones[selectedIdx];

  const handleInjectLiquidity = async () => {
    setIsInjecting(true);
    setLogs([]);
    const steps = [
      `[REGULATOR] Initiating emergency Liquidity Coverage Ratio (LCR) injection request for ${activeZone.name}...`,
      `[CHECK] Verifying sovereign vault reserves allocation availability...`,
      `[HSM] Authorizing ₹1,500Cr liquidity release via RBI wholesale CBDC net settlement...`,
      `[LEDGER] Applied netting buffer. LCR boosted by +15% on target node. Status: Stable`
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 200 + Math.random() * 200));
      setLogs(prev => [...prev, steps[i]]);
    }

    setZones(prev => prev.map((z, idx) => {
      if (idx === selectedIdx) {
        return {
          ...z,
          lcr: z.lcr + 15,
          risk: z.lcr + 15 >= 115 ? "Stable" : "Warning"
        };
      }
      return z;
    }));

    setStressImpact(prev => Math.min(0, prev + 0.4));
    setIsInjecting(false);
  };

  const stressTestTimeline = [
    { time: 'T-0', systemLiquidity: 100, shockImpact: 100 },
    { time: 'T+1', systemLiquidity: 98, shockImpact: 85 },
    { time: 'T+2', systemLiquidity: 94, shockImpact: 70 },
    { time: 'T+3', systemLiquidity: 92, shockImpact: 60 },
    { time: 'T+4', systemLiquidity: 90, shockImpact: 55 },
    { time: 'T+5', systemLiquidity: 91, shockImpact: 54 + (stressImpact * -1) },
  ];

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Map className="h-8 w-8 text-rose-400" />
              Systemic Stress Heatmap
          </h1>
          <p className="text-rose-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            LIQUIDITY DRAIN SCENARIOS • LIVE BANKING SIMULATIONS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <ShieldCheck className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">System Resilience: High</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-rose-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500/60 mb-2">Live Stress Scenarios</p>
                      <p className="text-4xl font-bold text-white mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>14</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-rose-400">
                          <Activity className="h-3 w-3" /> <span className="text-rose-500/40 ml-1">RUNNING IN BACKGROUND</span>
                      </div>
                  </div>
                  <div className="p-3 bg-rose-900/20 rounded-xl border border-rose-900/50">
                      <Activity className="h-5 w-5 text-rose-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-rose-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500/60 mb-2">Simulated Bank Run Impact</p>
                      <p className="text-4xl font-bold text-rose-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {stressImpact.toFixed(1)}%
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingDown className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">RESERVES WILL HOLD</span>
                      </div>
                  </div>
                  <div className="p-3 bg-rose-900/20 rounded-xl border border-rose-900/50">
                      <TrendingDown className="h-5 w-5 text-rose-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-rose-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500/60 mb-2">Vulnerable Nodes</p>
                      <p className="text-4xl font-bold text-amber-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {zones.filter(z => z.risk !== "Stable").length}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-amber-400">
                          <AlertTriangle className="h-3 w-3" /> <span className="text-amber-500/60 ml-1">TIER-2 CO-OP BANKS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-rose-900/20 rounded-xl border border-rose-900/50">
                      <Network className="h-5 w-5 text-rose-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-rose-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <ShieldAlert className="h-5 w-5 text-rose-500/70" /> Macro Liquidity Shock Simulation (T+5)
                    </CardTitle>
                    <p className="text-xs text-rose-100/50">Modeling systemic resilience against a simulated 30% sudden liquidity drain.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stressTestTimeline} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#881337" vertical={false} />
                        <XAxis dataKey="time" stroke="#f43f5e" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#f43f5e" fontSize={12} tickLine={false} axisLine={false} domain={[40, 100]} />
                        <Tooltip cursor={{stroke: '#881337'}} contentStyle={{backgroundColor: '#020810', borderColor: '#881337'}} />
                        <Line type="monotone" dataKey="systemLiquidity" name="Base Liquidity Index" stroke="#10b981" strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="shockImpact" name="Post-Shock Trajectory" stroke="#f43f5e" strokeWidth={3} strokeDasharray="5 5" dot={{ fill: '#f43f5e' }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Interactive grid zones */}
          <Card className="lg:col-span-4 bg-[#0a1520] border-rose-900/30">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Map className="h-4 w-4 text-rose-500/70" /> Systemic Zones selector
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {zones.map((zone, idx) => (
                <div 
                  key={zone.id} 
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-3 rounded border cursor-pointer transition-all flex justify-between items-center ${
                    idx === selectedIdx 
                      ? "bg-rose-950/20 border-rose-400" 
                      : "bg-[#020810] border-rose-900/20 hover:border-rose-950"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">{zone.name}</span>
                    <span className="text-[9px] font-mono text-rose-100/40 uppercase mt-0.5">Vol: {zone.volume}</span>
                  </div>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold ${
                    zone.risk === "Stable"
                      ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30"
                      : zone.risk === "Warning"
                      ? "bg-amber-950/40 text-amber-400 border border-amber-900/30"
                      : "bg-rose-950/40 text-rose-400 border border-rose-900/30"
                  }`}>
                    {zone.risk}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
      </div>

      {/* Zone telemetry card & action */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
        <Card className="lg:col-span-6 bg-[#0a1520] border-rose-900/30">
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-white">Zone Telemetry details: {activeZone.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 bg-[#020810] border border-rose-900/30 rounded text-center">
                <span className="text-[9px] text-rose-500/55 uppercase block">CAR Ratio</span>
                <span className="text-sm font-mono font-bold text-white mt-1 block">{activeZone.car}%</span>
              </div>
              <div className="p-3 bg-[#020810] border border-rose-900/30 rounded text-center">
                <span className="text-[9px] text-rose-500/55 uppercase block">LCR Coverage</span>
                <span className={`text-sm font-mono font-bold mt-1 block ${activeZone.lcr < 115 ? "text-amber-400" : "text-emerald-400"}`}>{activeZone.lcr}%</span>
              </div>
              <div className="p-3 bg-[#020810] border border-rose-900/30 rounded text-center">
                <span className="text-[9px] text-rose-500/55 uppercase block">Net NPA</span>
                <span className="text-sm font-mono font-bold text-white mt-1 block">{activeZone.npa}%</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleInjectLiquidity}
                disabled={isInjecting || activeZone.lcr >= 150}
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 disabled:bg-rose-900/20 text-white font-bold text-xs uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <Plus className="h-4 w-4" /> Deploy Liquidity Injection Buffer
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Logs console */}
        <Card className="lg:col-span-6 bg-[#0a1520] border-rose-900/30 flex flex-col justify-between">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-rose-500/60 flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> Systemic Intervention Logs
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="bg-[#020810] border border-rose-900/50 rounded-lg p-3 font-mono text-[9px] text-cyan-400/90 h-[90px] overflow-y-auto custom-scrollbar flex flex-col gap-0.5">
              {logs.length === 0 ? (
                <span className="text-rose-500/40 italic text-center block mt-6">Ready to log systemic interventions...</span>
              ) : (
                logs.map((l, i) => <div key={i}>{l}</div>)
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
