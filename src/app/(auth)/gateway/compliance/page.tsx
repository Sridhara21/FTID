"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, Fingerprint, Ban, ActivitySquare, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function GatewayCompliancePage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-red-500 uppercase flex items-center gap-3">
              <ShieldAlert className="h-8 w-8" />
              Real-Time AML Interception
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Switch-Level Transaction Blocking & Screening
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Blocked Transactions</CardTitle>
                <Ban className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">1,204</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-red-500/80 flex items-center gap-1">
                   Interdicted at switch level (24h)
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Sanction Screenings</CardTitle>
                <Fingerprint className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">1.4B</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Live API hits vs OFAC/UN/MHA
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Hold & Review Queue</CardTitle>
                <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">412</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Pending FIU-IND clearance
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <ActivitySquare className="h-4 w-4 text-red-500" /> Live Interception Feed
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <tbody className="divide-y divide-border/50">
                       {[
                         { id: "TX-9981A", trigger: "Sanction Match (Fuzzy)", amt: "₹45.2L", action: "Blocked", time: "Just now" },
                         { id: "TX-9980B", trigger: "High-Velocity Mule Routing", amt: "₹2.4L", action: "Frozen", time: "2m ago" },
                         { id: "TX-9979C", trigger: "Crypto-Exchange Smurfing", amt: "₹95,000", action: "Hold", time: "14m ago" },
                         { id: "TX-9978D", trigger: "Terror Finance Corridor", amt: "₹1.1L", action: "Blocked", time: "22m ago" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground">
                                {item.id}<br/>{item.time}
                             </td>
                             <td className="px-4 py-4 font-semibold text-[10px] text-foreground uppercase tracking-widest">
                                {item.trigger}
                             </td>
                             <td className="px-4 py-4 text-right font-mono font-black text-foreground">
                                {item.amt}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     item.action === 'Blocked' ? 'bg-red-500/10 text-red-500 border-red-500/30' : 
                                     item.action === 'Frozen' ? 'bg-blue-500/10 text-blue-500 border-blue-500/30' :
                                     'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                 }`}>
                                     {item.action}
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
                    <ShieldAlert className="h-4 w-4 text-amber-500" /> Automated Risk Rules
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-6 space-y-4">
                 
                 <div className="p-4 border border-amber-500/30 bg-amber-500/10 rounded-lg">
                     <div className="flex justify-between items-center mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Mule Network Heuristic #42</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/50">Active</Badge>
                     </div>
                     <p className="text-[10px] font-mono text-muted-foreground">
                         If: New UPI VPA receives > 10 Tx from distinct geographies within 5 mins AND immediately routes to Crypto Exchange VPA.
                     </p>
                     <p className="text-[10px] font-bold text-amber-500/80 uppercase mt-2">Action: T+1 Settlement Hold</p>
                 </div>

                 <div className="p-4 border border-red-500/30 bg-red-500/10 rounded-lg">
                     <div className="flex justify-between items-center mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-500">Sanction Bypass Detect</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/50">Active</Badge>
                     </div>
                     <p className="text-[10px] font-mono text-muted-foreground">
                         If: Cross-border SWIFT MT103 originator matches fuzzy list (Levenshtein distance &lt; 2) of designated entities.
                     </p>
                     <p className="text-[10px] font-bold text-red-500/80 uppercase mt-2">Action: Instant Block & Alert FIU</p>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
