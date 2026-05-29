"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, Crosshair, Network, FileSearch, RefreshCw, GitCommit, GitMerge, ArrowRight, UserX, Building, Search, Eye, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export default function AMLIntelligencePage() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">AML Core</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-red-500" /> Anti-Money Laundering Intelligence Engine
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="gap-2 border-primary/20 text-primary uppercase tracking-widest text-[10px] font-bold">
            <FileSearch className="h-4 w-4" /> Export Dossier
            </Button>
            <Button variant="destructive" className="gap-2 uppercase tracking-widest text-[10px] font-bold shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            <Crosshair className="h-4 w-4" /> Global Freeze
            </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-red-400">Mule Swarms Detected</CardTitle>
            <UserX className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">14,204</div>
            <p className="text-[10px] text-red-400/80 font-bold uppercase tracking-widest mt-1">Across 8 states</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-500/20 bg-orange-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-orange-400">High-Prob Shell Entities</CardTitle>
            <Building className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-orange-500">2,841</div>
            <p className="text-[10px] text-orange-400/80 font-bold uppercase tracking-widest mt-1">Matched common directors</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Suspicious Invoice Chains</CardTitle>
            <GitMerge className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-yellow-500">42.8K</div>
            <p className="text-[10px] text-yellow-400/80 font-bold uppercase tracking-widest mt-1">Circular routing detected</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-primary">Hawala-Style Routing</CardTitle>
            <RefreshCw className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-primary">₹840 Cr</div>
            <p className="text-[10px] text-primary/80 font-bold uppercase tracking-widest mt-1">Intercepted today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Force-Directed Graph UI Simulation */}
        <Card className="col-span-1 md:col-span-2 border-primary/20 bg-card/40 flex flex-col h-[500px]">
           <CardHeader className="pb-2 border-b border-white/5 flex flex-row items-center justify-between">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Network className="h-4 w-4 text-primary" /> Layered Laundering Analysis Graph
              </CardTitle>
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[9px] font-mono">
                CASE: AML-992-DELTA
              </Badge>
           </CardHeader>
           <CardContent className="flex-1 relative overflow-hidden flex items-center justify-center p-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
               {/* Simulated Nodes & Edges */}
               <div className="relative w-full h-full p-8">
                   <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                      <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="rgba(239,68,68,0.4)" strokeWidth="2" strokeDasharray="4" className="animate-[dash_2s_linear_infinite]" />
                      <line x1="40%" y1="50%" x2="60%" y2="40%" stroke="rgba(239,68,68,0.4)" strokeWidth="2" strokeDasharray="4" className="animate-[dash_2s_linear_infinite]" />
                      <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="rgba(239,68,68,0.4)" strokeWidth="2" strokeDasharray="4" className="animate-[dash_2s_linear_infinite]" />
                      
                      <line x1="30%" y1="70%" x2="40%" y2="50%" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" />
                      <line x1="60%" y1="40%" x2="70%" y2="20%" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" />
                      <line x1="80%" y1="60%" x2="20%" y2="30%" stroke="rgba(59,130,246,0.3)" strokeWidth="1" className="opacity-50" />
                      <line x1="40%" y1="50%" x2="40%" y2="50%" stroke="white" strokeWidth="1" />
                   </svg>

                   <div className="absolute top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center relative shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                          <UserX className="h-5 w-5 text-red-500" />
                          <div className={`absolute -inset-2 border border-red-500/50 rounded-full ${pulse ? 'animate-ping' : ''}`}></div>
                      </div>
                      <span className="text-[9px] font-mono font-bold mt-2 bg-background px-1 border border-border/50 rounded text-red-400">ORIGIN: MULE CLUSTER</span>
                   </div>

                   <div className="absolute top-[50%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-md bg-orange-500/10 border border-orange-500/50 flex items-center justify-center relative">
                          <Building className="h-6 w-6 text-orange-500" />
                      </div>
                      <span className="text-[9px] font-mono font-bold mt-2 bg-background px-1 border border-border/50 rounded text-orange-400">LAYER 1: SHELL CORP</span>
                   </div>

                   <div className="absolute top-[70%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-muted/20 border border-muted-foreground/30 flex items-center justify-center">
                          <UserX className="h-3 w-3 text-muted-foreground" />
                      </div>
                   </div>

                   <div className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-md bg-orange-500/10 border border-orange-500/50 flex items-center justify-center relative">
                          <Building className="h-6 w-6 text-orange-500" />
                      </div>
                      <span className="text-[9px] font-mono font-bold mt-2 bg-background px-1 border border-border/50 rounded text-orange-400">LAYER 2: FAKE INVOICER</span>
                   </div>

                   <div className="absolute top-[20%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-muted/20 border border-muted-foreground/30 flex items-center justify-center">
                          <Building className="h-3 w-3 text-muted-foreground" />
                      </div>
                   </div>

                   <div className="absolute top-[60%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center relative shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                          <Globe className="h-7 w-7 text-primary" />
                      </div>
                      <span className="text-[9px] font-mono font-bold mt-2 bg-background px-1 border border-border/50 rounded text-primary">ENDPOINT: OFFSHORE</span>
                   </div>
               </div>

               <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm border border-border/50 p-3 rounded-lg flex items-center justify-between text-xs">
                 <div className="flex gap-4">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> Proven Fraud</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-orange-500"></div> Suspected Shell</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full border border-dashed border-primary"></div> Offshore Account</span>
                 </div>
                 <div className="font-mono text-[10px] text-muted-foreground">
                    Nodes: 24 | Edges: 108 | Hop Depth: 5
                 </div>
               </div>
           </CardContent>
        </Card>

        {/* Suspicious Entities List */}
        <Card className="col-span-1 flex flex-col h-[500px]">
          <CardHeader className="pb-2 border-b border-border/50">
            <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
               <Eye className="h-4 w-4 text-muted-foreground" /> Targeted Entities
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
             {[
               { name: "Alpha Trading Pvt Ltd", type: "Shell Probability: 99.8%", role: "Layering Node", risk: 99, color: "text-red-500", bg: "bg-red-500" },
               { name: "Global Exports LLC", type: "Hawala Router", role: "Integration", risk: 94, color: "text-red-400", bg: "bg-red-500" },
               { name: "Mule Cluster 4A", type: "140 Linked Accts", role: "Placement", risk: 88, color: "text-orange-500", bg: "bg-orange-500" },
               { name: "Omega Logistics", type: "Invoice Fabricator", role: "Layering Node", risk: 82, color: "text-orange-400", bg: "bg-orange-500" },
               { name: "Director R. Sharma", type: "Matches 14 Shells", role: "Beneficial Owner", risk: 75, color: "text-yellow-500", bg: "bg-yellow-500" },
             ].map((entity, i) => (
                <div key={i} className="p-3 bg-secondary/10 border border-border/50 rounded-lg group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`font-bold text-sm ${entity.color}`}>{entity.name}</span>
                    <Badge variant="outline" className={`font-mono text-[9px] ${entity.color.replace('text', 'border')}`}>
                      RISK {entity.risk}
                    </Badge>
                  </div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">{entity.type}</p>
                  <div className="mt-2 flex items-center justify-between">
                     <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground opacity-70">ROLE: {entity.role}</span>
                     <Search className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
             ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
