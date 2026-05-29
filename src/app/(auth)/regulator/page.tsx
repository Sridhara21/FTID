"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Network, AlertTriangle, TrendingUp, Cpu, Activity, Globe, Building2, Zap, ArrowRight, Map } from "lucide-react";
import { FtidStatusLayer } from "@/components/shared/ftid-status-layer";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function RegulatorDashboard() {
  const [tickerOffset, setTickerOffset] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerOffset(prev => (prev - 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 500);
    }, 3000);
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      {/* Live National Transaction Ticker */}
      <div className="w-full bg-secondary/30 border border-border/50 rounded-lg overflow-hidden h-8 flex items-center relative">
        <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-background to-transparent w-8"></div>
        <div className="flex items-center whitespace-nowrap text-[10px] font-mono tracking-widest uppercase font-bold" style={{ transform: `translateX(${tickerOffset}px)` }}>
          <span className="text-green-400 mx-4">↑ ₹12,400 Cr (UPI)</span>
          <span className="text-primary mx-4">| RTGS Settlement Pending: 420 |</span>
          <span className="text-red-400 mx-4">⚠ Anomaly Detected: Node 4A (Mumbai)</span>
          <span className="text-muted-foreground mx-4">| CBDC Velocity: 4.2x |</span>
          <span className="text-green-400 mx-4">↑ ₹8,900 Cr (IMPS)</span>
          <span className="text-primary mx-4">| Forex Outflow Normal |</span>
          <span className="text-yellow-400 mx-4">⚠ Liquidity Drop: Sector 7</span>
          <span className="text-muted-foreground mx-4">| System Health: 99.99% |</span>
          <span className="text-green-400 mx-4">↑ ₹12,400 Cr (UPI)</span>
          <span className="text-primary mx-4">| RTGS Settlement Pending: 420 |</span>
        </div>
        <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-background to-transparent w-8"></div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Regulator Core</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary animate-pulse" /> National Macro-Financial Intelligence Terminal
          </p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest text-[9px] font-bold">
          LIVE TELEMETRY
        </Badge>
      </div>

      {/* Top Metrics Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/50 bg-secondary/10 relative overflow-hidden">
          <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-500 ${pulseActive ? 'opacity-100' : 'opacity-0'}`}></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Anomaly Pulse</CardTitle>
            <Zap className={`h-4 w-4 ${pulseActive ? 'text-primary' : 'text-muted-foreground'}`} />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter">142/s</div>
            <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> Baseline Normal
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10 relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Systemic Risk Score</CardTitle>
            <ShieldCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-green-400">18.4%</div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Stable Trajectory</p>
          </CardContent>
          <div className="absolute bottom-0 left-0 h-1 bg-green-400/50 w-[18.4%]"></div>
        </Card>

        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs uppercase font-bold tracking-widest text-red-400">Active High-Risk Threats</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">843</div>
            <p className="text-[10px] text-red-400/80 font-bold uppercase tracking-widest mt-1">Require Interception</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Inst. Health Monitor</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-primary">99.2%</div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Banks Liquid & Compliant</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Animated India Heatmap & Cross Border (Left Col) */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Card className="border-primary/20 bg-card/40 h-[400px] flex flex-col">
            <CardHeader className="pb-2 border-b border-white/5">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Map className="h-4 w-4 text-primary" /> National Sectoral Liquidity Map
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 relative overflow-hidden flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
                {/* Simulated Heatmap UI */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                  <div className="absolute top-[30%] left-[40%] w-32 h-32 bg-primary rounded-full filter blur-[60px] animate-pulse"></div>
                  <div className="absolute top-[60%] left-[60%] w-24 h-24 bg-green-500 rounded-full filter blur-[50px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-[20%] left-[20%] w-40 h-40 bg-red-500 rounded-full filter blur-[70px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   <div className="w-full max-w-sm aspect-square border border-primary/20 rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-4 border border-dashed border-primary/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                      <div className="absolute inset-12 border border-primary/10 rounded-full"></div>
                      <Map className="h-12 w-12 text-primary/40" />

                      {/* Mock Nodes */}
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-ping"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"></div>
                   </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> High Friction</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Optimal Flow</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400"></div> Excess Liquidity</span>
                </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10">
            <CardHeader className="pb-2 border-b border-white/5">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" /> Cross-Border Anomaly Feed
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { route: "IND → UAE", type: "Trade Misinvoicing", amt: "₹45 Cr", risk: "HIGH", time: "2m ago" },
                { route: "SGP → IND", type: "Layered FDI", amt: "₹120 Cr", risk: "CRITICAL", time: "12m ago" },
                { route: "IND → USA", type: "Remittance Burst", amt: "₹5 Cr", risk: "LOW", time: "18m ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-md bg-background/50 border border-border/30">
                  <div className="flex items-center gap-3">
                    <ArrowRight className={`h-4 w-4 ${item.risk === 'CRITICAL' ? 'text-red-500' : item.risk === 'HIGH' ? 'text-yellow-400' : 'text-muted-foreground'}`} />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider">{item.route}</p>
                      <p className="text-[9px] text-muted-foreground font-mono uppercase mt-0.5">{item.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono font-bold tabular-nums">{item.amt}</p>
                    <p className={`text-[9px] font-black uppercase tracking-widest ${item.risk === 'CRITICAL' ? 'text-red-500' : item.risk === 'HIGH' ? 'text-yellow-400' : 'text-green-400'}`}>{item.risk} RISK</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Streaming Consoles (Right Col) */}
        <div className="col-span-1 space-y-6">
          <Card className="border-primary/20 bg-primary/5 h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-primary/10">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                <Cpu className="h-4 w-4" /> AI National Risk Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex-1">
              <div className="prose prose-sm dark:prose-invert text-xs leading-relaxed text-muted-foreground space-y-4 font-mono">
                <p>
                  <strong className="text-foreground">OVERALL ASSESSMENT:</strong> Macro-economic indicators remain stable. Systemic risk index at <span className="text-green-400">18.4%</span>, well below the 35% threshold.
                </p>
                <p>
                  <strong className="text-foreground">KEY OBSERVATIONS:</strong>
                </p>
                <ul className="list-disc pl-4 space-y-2 marker:text-primary">
                  <li>Detected 4.2% spike in CBDC velocity in the agricultural sector (Normal seasonal behavior).</li>
                  <li><span className="text-red-400 font-bold">WARNING:</span> Intercepted layered laundering attempt involving 50 shell entities across 3 states. Enforcement node activated.</li>
                  <li>Institutional liquidity buffers are highly resilient (Avg LCR: 135%).</li>
                </ul>
                <p className="pt-2 border-t border-border/50 text-[9px] uppercase tracking-widest opacity-50 mt-4">
                  Generated by FTID Genesis Model • T-0s
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10">
            <CardHeader className="pb-2 border-b border-white/5">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Activity className="h-4 w-4 text-red-400" /> Streaming Suspicious Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                {[
                  { action: "Circular Pmt Detected", entity: "Entity-7B", score: 98 },
                  { action: "Account Mule Cluster", entity: "Node-4X", score: 94 },
                  { action: "Abnormal API Calls", entity: "Fintech-C", score: 88 },
                  { action: "Structuring Attempt", entity: "Acc-9921", score: 82 },
                ].map((log, i) => (
                  <div key={i} className="flex justify-between items-center text-xs p-2 bg-background border border-border/50 rounded group hover:border-red-500/50 transition-colors">
                    <div>
                      <span className="font-bold text-red-400 text-[10px] uppercase tracking-wider">{log.action}</span>
                      <p className="text-muted-foreground font-mono text-[9px] mt-0.5">{log.entity}</p>
                    </div>
                    <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 font-mono text-[10px]">
                      {log.score}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
