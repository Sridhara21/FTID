"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Users, Activity, ExternalLink, ShieldCheck, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BusinessVendorsPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <Users className="h-8 w-8" />
              Vendor Ecosystem
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Supply Chain Trust & Risk Monitoring
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="gap-2 border-emerald-500/20 text-emerald-500 uppercase tracking-widest text-[10px] font-bold">
                <Network className="h-4 w-4" /> Network Graph
            </Button>
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                + Onboard Vendor
            </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <Network className="h-4 w-4 text-emerald-500" /> Authorized Supply Chain Nodes
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Entity Name</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Category</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Trust Score</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Status</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { name: "TechCorp India Pvt Ltd", category: "IT Services", score: 98, status: "Verified", icon: <ShieldCheck className="h-3 w-3 text-emerald-500" /> },
                         { name: "Global Logistics Inc", category: "Logistics", score: 94, status: "Verified", icon: <ShieldCheck className="h-3 w-3 text-emerald-500" /> },
                         { name: "Apex Office Supplies", category: "Stationery", score: 62, status: "Review", icon: <ShieldAlert className="h-3 w-3 text-amber-500" /> },
                         { name: "Delta Manufacturing Co", category: "Raw Materials", score: 88, status: "Verified", icon: <ShieldCheck className="h-3 w-3 text-emerald-500" /> },
                         { name: "Rapid Delivery Partners", category: "Logistics", score: 45, status: "Suspended", icon: <ShieldAlert className="h-3 w-3 text-red-500" /> },
                       ].map((vendor, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-semibold text-xs text-foreground flex items-center gap-2">
                                {vendor.icon} {vendor.name}
                             </td>
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground uppercase">
                                {vendor.category}
                             </td>
                             <td className="px-4 py-4 text-center">
                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/50 bg-background font-mono font-bold text-[10px]">
                                    <span className={vendor.score > 80 ? 'text-emerald-500' : vendor.score > 50 ? 'text-amber-500' : 'text-red-500'}>{vendor.score}</span>
                                </div>
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     vendor.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
                                     vendor.status === 'Review' ? 'bg-amber-500/10 text-amber-500 border-amber-500/30' : 
                                     'bg-red-500/10 text-red-500 border-red-500/30'
                                 }`}>
                                     {vendor.status}
                                 </Badge>
                             </td>
                             <td className="px-4 py-4 text-right">
                                 <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-emerald-500">
                                     <ExternalLink className="h-3 w-3" />
                                 </Button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
            </CardContent>
         </Card>

         <Card className="col-span-1 border-emerald-500/20 bg-emerald-500/5 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
            <CardHeader className="pb-4 border-b border-emerald-500/20 relative z-10">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-emerald-500">
                 <Activity className="h-4 w-4" /> Deep-Tier Risk Radar
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-6 space-y-6 relative z-10">
               
               <div className="p-4 bg-background border border-emerald-500/20 rounded-lg">
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">Automated Due Diligence</h4>
                   <p className="text-xs font-mono text-muted-foreground mb-4">
                       FTID continuously monitors vendor GST filings, legal disputes, and interbank risk flags.
                   </p>
                   <div className="space-y-2">
                       <div className="flex items-center justify-between text-[10px] font-mono">
                           <span className="text-muted-foreground">GST Alignment</span>
                           <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="h-3 w-3"/> 98%</span>
                       </div>
                       <div className="flex items-center justify-between text-[10px] font-mono">
                           <span className="text-muted-foreground">Legal/NPA Flags</span>
                           <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="h-3 w-3"/> 0</span>
                       </div>
                   </div>
               </div>

               <div className="space-y-3">
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Risk Alerts</h4>
                   
                   <div className="p-3 border border-amber-500/30 bg-amber-500/10 rounded flex items-start gap-3">
                       <ShieldAlert className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                       <div>
                           <p className="text-[10px] font-bold text-amber-500 uppercase">Apex Office Supplies</p>
                           <p className="text-[9px] font-mono text-muted-foreground mt-1">Failed to file GSTR-1 for last month. Input Tax Credit (ITC) at risk.</p>
                       </div>
                   </div>

                   <div className="p-3 border border-red-500/30 bg-red-500/10 rounded flex items-start gap-3">
                       <ShieldAlert className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                       <div>
                           <p className="text-[10px] font-bold text-red-500 uppercase">Rapid Delivery Partners</p>
                           <p className="text-[9px] font-mono text-muted-foreground mt-1">Associated Director flagged in FTID network for willful default.</p>
                       </div>
                   </div>
               </div>
            </CardContent>
         </Card>
      </div>

    </div>
  );
}
