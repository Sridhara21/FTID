"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Terminal, Code2, Network, Braces, PlayCircle, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DeveloperPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-300 uppercase flex items-center gap-3">
              <Terminal className="h-8 w-8 text-cyan-500" />
              Developer Ecosystem
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            API Gateways & Integration Telemetry
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Active Webhooks</CardTitle>
                <Network className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">142</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Listening endpoints
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">API Latency (p99)</CardTitle>
                <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">42ms</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Across all endpoints
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Error Rate</CardTitle>
                <Braces className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">0.01%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   HTTP 5xx responses
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Connected Apps</CardTitle>
                <Code2 className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">18</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   OIDC integrated
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-cyan-500" /> API Usage Telemetry
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Endpoint</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Calls (24h)</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { ep: "POST /v1/auth/consent/request", calls: "1.2M", status: "Healthy" },
                         { ep: "GET /v1/trust/institution/{id}", calls: "850k", status: "Healthy" },
                         { ep: "POST /v2/invoice/verify/hash", calls: "2.4M", status: "Healthy" },
                         { ep: "GET /v1/kyc/status", calls: "4.8M", status: "Degraded" },
                       ].map((item, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-mono text-[10px] text-cyan-400">
                                {item.ep}
                             </td>
                             <td className="px-4 py-4 text-right font-mono font-black text-foreground">
                                {item.calls}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     item.status === 'Healthy' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
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
                    <PlayCircle className="h-4 w-4 text-purple-500" /> Quick Start Integration
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-6 space-y-6">
                 
                 <div className="p-4 border border-border/50 bg-background/50 rounded-lg">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-2">Initialize Node.js SDK</h4>
                     <div className="bg-[#020810] p-3 rounded border border-border/50 font-mono text-[10px] text-muted-foreground">
                         <span className="text-emerald-500">npm</span> install @ftid/node-sdk<br/><br/>
                         <span className="text-purple-400">import</span> {'{'} FTIDClient {'}'} <span className="text-purple-400">from</span> <span className="text-amber-400">'@ftid/node-sdk'</span>;<br/><br/>
                         <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> FTIDClient(process.env.<span className="text-cyan-400">FTID_API_KEY</span>);
                     </div>
                 </div>

                 <div className="p-4 border border-purple-500/30 bg-purple-500/5 rounded-lg flex items-center justify-between">
                     <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-1">Sandbox Environment</h4>
                         <p className="text-xs font-mono text-muted-foreground">Mock AA flows and CBDC payments.</p>
                     </div>
                     <Button size="sm" variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-purple-500/50 text-purple-500 hover:bg-purple-500/20">
                         Access Sandbox
                     </Button>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
