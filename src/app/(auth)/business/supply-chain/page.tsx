"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GitBranch, Link, AlertTriangle, Route, ArrowRightLeft, ShieldCheck, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function BusinessSupplyChainPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <Route className="h-8 w-8" />
              Supply Chain Finance
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Multi-tier supplier intelligence & liquidity mapping
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Network Depth</CardTitle>
                <GitBranch className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">Tier 3</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80">
                   Visibility unlocked
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Concentration Risk</CardTitle>
                <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">24%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80">
                   Reliance on single vendor
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">SCF Limit</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">₹8 Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80">
                   Approved by Partner Bank
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Active Discounting</CardTitle>
                <ArrowRightLeft className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">₹1.2 Cr</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80">
                   Liquidity injected
               </p>
            </CardContent>
          </Card>
      </div>

      <Card className="bg-secondary/10 border-border/50 h-[450px] flex flex-col relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-50"></div>
         <CardHeader className="pb-4 border-b border-border/50 relative z-10">
             <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Link className="h-4 w-4 text-emerald-500" /> End-to-End Supply Chain Mapping
             </CardTitle>
             <CardDescription className="text-[10px] font-mono text-muted-foreground mt-1">
                 Visualizing Tier 1 and Tier 2 dependencies via E-Way Bill and GST data intersections.
             </CardDescription>
         </CardHeader>
         <CardContent className="flex-1 overflow-auto pt-6 space-y-6 relative z-10 flex items-center justify-center">
             
             {/* Mock visual supply chain graph layout */}
             <div className="w-full max-w-4xl flex items-center justify-between">
                
                {/* TIER 2 */}
                <div className="flex flex-col gap-4">
                    <div className="p-3 border border-border/50 bg-background/50 rounded-lg text-center w-32 relative">
                        <div className="absolute right-0 top-1/2 w-8 border-t-2 border-dashed border-emerald-500/50 translate-x-full"></div>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase">Tier 2</p>
                        <p className="text-[10px] font-bold text-emerald-400 mt-1">Steel Works Ltd</p>
                    </div>
                    <div className="p-3 border border-border/50 bg-background/50 rounded-lg text-center w-32 relative">
                        <div className="absolute right-0 top-1/2 w-8 border-t-2 border-dashed border-emerald-500/50 translate-x-full"></div>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase">Tier 2</p>
                        <p className="text-[10px] font-bold text-emerald-400 mt-1">Polymer Supply</p>
                    </div>
                </div>

                {/* TIER 1 */}
                <div className="flex flex-col gap-6 ml-8">
                    <div className="p-4 border border-emerald-500/30 bg-emerald-500/10 rounded-lg text-center w-40 relative">
                        <div className="absolute right-0 top-1/2 w-12 border-t-2 border-solid border-emerald-500 translate-x-full"></div>
                        <ShieldCheck className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                        <p className="text-[9px] font-bold text-emerald-500/80 uppercase">Tier 1 Supplier</p>
                        <p className="text-xs font-bold text-emerald-500 mt-1">Delta Manufacturing</p>
                    </div>
                </div>

                {/* ANCHOR */}
                <div className="ml-12">
                    <div className="p-6 border-2 border-emerald-500 bg-[#0a1520] rounded-xl text-center w-48 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500/80 mb-2">Anchor Corporate</p>
                        <p className="text-lg font-black text-white">FTID Node</p>
                        <p className="text-[10px] font-mono text-emerald-400 mt-2">Treasury Active</p>
                    </div>
                </div>

             </div>

         </CardContent>
      </Card>
    </div>
  );
}
