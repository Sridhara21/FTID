"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Link as LinkIcon, Network, Globe, Activity, EyeOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GatewayCBDCPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-purple-500 uppercase flex items-center gap-3">
              <Coins className="h-8 w-8" />
              CBDC Settlement Rails
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Programmable e-Rupee Ledger Observability
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tokens in Circulation</CardTitle>
                <Coins className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">₹8.4T</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   Wholesale + Retail e-Rupee
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Offline Tx Settled</CardTitle>
                <EyeOff className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">1.2M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Last 24 hours (Sync on reconnect)
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Smart Contracts Executed</CardTitle>
                <LinkIcon className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">450k</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Conditional transfers
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Network className="h-4 w-4 text-purple-500" /> Programmable Transfer Feed
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Contract Hash</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Condition</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Value</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { hash: "0xc8a1...f9b2", cond: "Agri-Subsidy (Fertilizer Only)", value: "₹4,500", status: "Executed" },
                         { hash: "0xb2e4...a1d8", cond: "MSME Credit (Invoice Match)", value: "₹2.5L", status: "Pending" },
                         { hash: "0x1f7c...8a4e", cond: "Student DB (Tuition Only)", value: "₹18,000", status: "Executed" },
                         { hash: "0x9d3b...c7f1", cond: "Escrow Release (Delivery Proof)", value: "₹45,000", status: "Pending" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground">
                                {item.hash}
                             </td>
                             <td className="px-4 py-4 font-semibold text-[10px] text-foreground uppercase tracking-widest">
                                {item.cond}
                             </td>
                             <td className="px-4 py-4 text-right font-mono font-black text-purple-500">
                                {item.value}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     item.status === 'Executed' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
                                     'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                 }`}>
                                     {item.status}
                                 </Badge>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-500" /> Cross-Border Wholesale Settlement
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-6 space-y-6">
                 
                 <div className="p-4 border border-blue-500/30 bg-blue-500/10 rounded-lg">
                     <div className="flex justify-between items-center mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Project mBridge (UAE Corridor)</h4>
                         <Activity className="h-4 w-4 text-emerald-500" />
                     </div>
                     <div className="flex items-center gap-4 mt-4">
                         <div className="flex-1">
                             <p className="text-[9px] font-mono text-muted-foreground uppercase">Volume (24h)</p>
                             <p className="font-mono font-black text-white">₹850 Cr eqv.</p>
                         </div>
                         <div className="flex-1 border-l border-blue-500/30 pl-4">
                             <p className="text-[9px] font-mono text-muted-foreground uppercase">Avg Latency</p>
                             <p className="font-mono font-black text-white">2.4s</p>
                         </div>
                     </div>
                 </div>

                 <div className="p-4 border border-border/50 bg-background/50 rounded-lg">
                     <div className="flex justify-between items-center mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Project Nexus (Singapore Corridor)</h4>
                         <Activity className="h-4 w-4 text-emerald-500" />
                     </div>
                     <div className="flex items-center gap-4 mt-4">
                         <div className="flex-1">
                             <p className="text-[9px] font-mono text-muted-foreground uppercase">Volume (24h)</p>
                             <p className="font-mono font-black text-foreground">₹420 Cr eqv.</p>
                         </div>
                         <div className="flex-1 border-l border-border/50 pl-4">
                             <p className="text-[9px] font-mono text-muted-foreground uppercase">Avg Latency</p>
                             <p className="font-mono font-black text-foreground">1.8s</p>
                         </div>
                     </div>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
