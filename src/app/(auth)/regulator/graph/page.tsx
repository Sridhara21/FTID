"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Database, Layers, GitMerge, Search, Filter, Play, Download, Building, User, Building2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function FinancialGraphPage() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Relationship Engine</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <Network className="h-4 w-4 text-blue-500" /> National Entity Interdependency Graph
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
             <Input placeholder="Search Entity PAN / LEI / UID..." className="w-[300px] pl-9 bg-secondary/20 border-border/50 text-xs font-mono uppercase focus-visible:ring-primary/50 h-9" />
          </div>
          <Button variant="outline" className="h-9 px-3 border-border/50 bg-secondary/20 hover:bg-secondary/40">
             <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-0">
        {/* Left Toolbar / Context */}
        <Card className="lg:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-full">
          <CardHeader className="pb-4 border-b border-border/50 shrink-0">
             <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
               <Database className="h-4 w-4 text-muted-foreground" /> Graph Explorer
             </CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex-1 overflow-auto space-y-6">
             <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Active Cluster</h4>
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                   <h5 className="text-xs font-bold text-primary mb-1">Mule Swarm #442</h5>
                   <p className="text-[10px] font-mono text-muted-foreground mb-3">12 Shells • 450 Retail Accounts • 3 Banks</p>
                   <div className="flex justify-between items-center text-[10px] uppercase font-bold text-muted-foreground">
                      <span>Velocity:</span>
                      <span className="text-red-400">High (₹45Cr/hr)</span>
                   </div>
                </div>
             </div>

             <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Entity Types</h4>
                <div className="space-y-2">
                   <div className="flex items-center gap-3 text-xs">
                       <div className="w-6 h-6 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                           <User className="h-3 w-3 text-blue-500" />
                       </div>
                       <span className="font-mono text-muted-foreground">Citizen (Retail)</span>
                   </div>
                   <div className="flex items-center gap-3 text-xs">
                       <div className="w-6 h-6 rounded bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center">
                           <Building className="h-3 w-3 text-orange-500" />
                       </div>
                       <span className="font-mono text-muted-foreground">Business (SME/Corp)</span>
                   </div>
                   <div className="flex items-center gap-3 text-xs">
                       <div className="w-6 h-6 rounded-lg bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                           <Building2 className="h-3 w-3 text-green-500" />
                       </div>
                       <span className="font-mono text-muted-foreground">Institution (Bank)</span>
                   </div>
                   <div className="flex items-center gap-3 text-xs">
                       <div className="w-6 h-6 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                           <Globe className="h-3 w-3 text-purple-500" />
                       </div>
                       <span className="font-mono text-muted-foreground">Offshore / Foreign</span>
                   </div>
                </div>
             </div>

             <div className="space-y-3 pt-4 border-t border-border/50">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Selected Node</h4>
                {activeNode ? (
                    <div className="p-3 bg-background border border-border/50 rounded-lg animate-in slide-in-from-left-4">
                        <div className="flex justify-between items-start mb-2">
                            <h5 className="text-xs font-bold text-foreground">Entity {activeNode}</h5>
                            <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30 text-[9px] uppercase font-mono">High Risk</Badge>
                        </div>
                        <div className="space-y-1 font-mono text-[9px] text-muted-foreground">
                            <p>KYC Level: Tier 1 (Aadhaar)</p>
                            <p>Est: 14 Months Ago</p>
                            <p>Outbound: ₹1.2Cr (7d)</p>
                            <p>Inbound: ₹1.19Cr (7d)</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3 h-6 text-[9px] uppercase font-bold border-primary/50 text-primary">Isolate Node</Button>
                    </div>
                ) : (
                    <div className="p-4 border border-dashed border-border/50 rounded-lg text-center">
                        <p className="text-[10px] text-muted-foreground font-mono uppercase">Click a node on the graph to view details.</p>
                    </div>
                )}
             </div>
          </CardContent>
        </Card>

        {/* Main Graph Area */}
        <Card className="lg:col-span-3 border-primary/20 bg-black flex flex-col h-full relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_black_100%)]"></div>
           
           <div className="absolute top-4 right-4 z-20 flex gap-2">
               <Button variant="outline" size="icon" className="h-8 w-8 bg-black/50 border-border/50 backdrop-blur">
                  <Play className="h-3 w-3 text-primary" />
               </Button>
               <Button variant="outline" size="icon" className="h-8 w-8 bg-black/50 border-border/50 backdrop-blur">
                  <Download className="h-3 w-3 text-muted-foreground" />
               </Button>
               <Button variant="outline" size="icon" className="h-8 w-8 bg-black/50 border-border/50 backdrop-blur">
                  <Layers className="h-3 w-3 text-muted-foreground" />
               </Button>
           </div>

           {/* Simulated Graph Workspace */}
           <div className="absolute inset-0 z-10 w-full h-full p-12">
               <svg className="w-full h-full overflow-visible">
                   {/* Defs for gradients/markers */}
                   <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(239,68,68,0.5)" />
                      </marker>
                      <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(59,130,246,0.5)" />
                      </marker>
                   </defs>

                   {/* Edges */}
                   {/* Bank to Shell 1 */}
                   <line x1="20%" y1="50%" x2="45%" y2="30%" stroke="rgba(59,130,246,0.4)" strokeWidth="3" markerEnd="url(#arrow-blue)" />
                   {/* Bank to Shell 2 */}
                   <line x1="20%" y1="50%" x2="45%" y2="70%" stroke="rgba(59,130,246,0.4)" strokeWidth="3" markerEnd="url(#arrow-blue)" />
                   
                   {/* Shell 1 to Citizens */}
                   <line x1="45%" y1="30%" x2="65%" y2="15%" stroke="rgba(239,68,68,0.6)" strokeWidth="1" className="animate-[dash_1s_linear_infinite]" strokeDasharray="4" markerEnd="url(#arrow)" />
                   <line x1="45%" y1="30%" x2="70%" y2="30%" stroke="rgba(239,68,68,0.6)" strokeWidth="1" className="animate-[dash_1s_linear_infinite]" strokeDasharray="4" markerEnd="url(#arrow)" />
                   <line x1="45%" y1="30%" x2="65%" y2="45%" stroke="rgba(239,68,68,0.6)" strokeWidth="1" className="animate-[dash_1s_linear_infinite]" strokeDasharray="4" markerEnd="url(#arrow)" />
                   
                   {/* Shell 2 to Citizens */}
                   <line x1="45%" y1="70%" x2="65%" y2="55%" stroke="rgba(239,68,68,0.6)" strokeWidth="1" className="animate-[dash_1.2s_linear_infinite]" strokeDasharray="4" markerEnd="url(#arrow)" />
                   <line x1="45%" y1="70%" x2="70%" y2="70%" stroke="rgba(239,68,68,0.6)" strokeWidth="1" className="animate-[dash_1.2s_linear_infinite]" strokeDasharray="4" markerEnd="url(#arrow)" />
                   <line x1="45%" y1="70%" x2="65%" y2="85%" stroke="rgba(239,68,68,0.6)" strokeWidth="1" className="animate-[dash_1.2s_linear_infinite]" strokeDasharray="4" markerEnd="url(#arrow)" />

                   {/* Citizens to Offshore */}
                   <line x1="65%" y1="15%" x2="85%" y2="50%" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
                   <line x1="70%" y1="30%" x2="85%" y2="50%" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
                   <line x1="65%" y1="45%" x2="85%" y2="50%" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
                   <line x1="65%" y1="55%" x2="85%" y2="50%" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
                   <line x1="70%" y1="70%" x2="85%" y2="50%" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
                   <line x1="65%" y1="85%" x2="85%" y2="50%" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
               </svg>

               {/* Nodes (HTML Overlay for interactivity) */}
               {/* Institutional Node */}
               <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2" onClick={() => setActiveNode('Bank-Alpha')}>
                   <div className="w-16 h-16 rounded-lg bg-green-500/10 border-2 border-green-500 flex items-center justify-center relative cursor-pointer hover:bg-green-500/20 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                       <Building2 className="h-8 w-8 text-green-500" />
                   </div>
                   <div className="mt-2 text-center">
                       <span className="bg-background/80 px-2 py-0.5 border border-border/50 rounded text-[9px] font-mono font-bold text-foreground whitespace-nowrap">Origin Bank</span>
                   </div>
               </div>

               {/* Shell Nodes */}
               <div className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2" onClick={() => setActiveNode('Shell-1')}>
                   <div className="w-12 h-12 rounded bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center relative cursor-pointer hover:bg-orange-500/20 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                       <Building className="h-6 w-6 text-orange-500" />
                       {pulse && <div className="absolute inset-0 border border-orange-500/50 rounded animate-ping"></div>}
                   </div>
                   <div className="mt-2 text-center">
                       <span className="bg-background/80 px-2 py-0.5 border border-border/50 rounded text-[9px] font-mono font-bold text-orange-400 whitespace-nowrap">Distributor 1</span>
                   </div>
               </div>

               <div className="absolute top-[70%] left-[45%] -translate-x-1/2 -translate-y-1/2" onClick={() => setActiveNode('Shell-2')}>
                   <div className="w-12 h-12 rounded bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center relative cursor-pointer hover:bg-orange-500/20 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                       <Building className="h-6 w-6 text-orange-500" />
                   </div>
                   <div className="mt-2 text-center">
                       <span className="bg-background/80 px-2 py-0.5 border border-border/50 rounded text-[9px] font-mono font-bold text-orange-400 whitespace-nowrap">Distributor 2</span>
                   </div>
               </div>

               {/* Retail Mule Nodes */}
               {[
                 { top: '15%', left: '65%', id: 'M-1' },
                 { top: '30%', left: '70%', id: 'M-2' },
                 { top: '45%', left: '65%', id: 'M-3' },
                 { top: '55%', left: '65%', id: 'M-4' },
                 { top: '70%', left: '70%', id: 'M-5' },
                 { top: '85%', left: '65%', id: 'M-6' },
               ].map((pos, i) => (
                  <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: pos.top, left: pos.left }} onClick={() => setActiveNode(`Retail-${pos.id}`)}>
                     <div className="w-8 h-8 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center relative cursor-pointer hover:bg-blue-500/30 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                         <User className="h-4 w-4 text-blue-500" />
                     </div>
                  </div>
               ))}

               {/* Offshore Collection Node */}
               <div className="absolute top-[50%] left-[85%] -translate-x-1/2 -translate-y-1/2" onClick={() => setActiveNode('Offshore-Target')}>
                   <div className="w-20 h-20 rounded-full bg-purple-500/10 border-[3px] border-purple-500 flex items-center justify-center relative cursor-pointer hover:bg-purple-500/20 transition-colors shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                       <Globe className="h-10 w-10 text-purple-500" />
                       <div className="absolute -inset-4 border border-purple-500/30 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                   </div>
                   <div className="mt-4 text-center">
                       <span className="bg-background/80 px-2 py-0.5 border border-border/50 rounded text-[9px] font-mono font-bold text-purple-400 whitespace-nowrap text-center">Target Jurisdiction</span>
                       <p className="text-[10px] font-mono font-black text-red-500 mt-1">₹140.2M Accrued</p>
                   </div>
               </div>
           </div>

           <div className="absolute bottom-4 left-4 z-20 flex gap-2">
               <Badge variant="outline" className="bg-black/80 backdrop-blur text-muted-foreground border-border/50 text-[9px] font-mono uppercase">
                   Showing 10 of 450 Nodes
               </Badge>
               <Badge variant="outline" className="bg-red-500/10 backdrop-blur text-red-500 border-red-500/30 text-[9px] font-mono uppercase">
                   Suspicious Edge Weight > ₹1L
               </Badge>
           </div>
        </Card>
      </div>
    </div>
  );
}
