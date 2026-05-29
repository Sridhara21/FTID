"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, ShieldAlert, AlertTriangle, Eye, Flame, AlertOctagon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GovernmentFraudHeatmapsPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-red-500 uppercase flex items-center gap-3">
              <Flame className="h-8 w-8" />
              National Fraud Heatmaps
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Geospatial AML & Synthetic Identity Tracking
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Active Clusters</CardTitle>
                <MapPin className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-red-500">14</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-red-500/80 flex items-center gap-1">
                   High-risk zones identified
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Synthetic IDs Detected</CardTitle>
                <ShieldAlert className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-orange-500">1,402</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-orange-500/80 flex items-center gap-1">
                   Cross-linked Aadhaar PAN
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Hawala Nodes</CardTitle>
                <AlertOctagon className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">89</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   Unregistered Remittance
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-red-500" /> Geospatial Alert Map
                 </CardTitle>
                 <CardDescription className="text-[10px] font-mono text-muted-foreground">
                     Live view of transaction velocity anomalies.
                 </CardDescription>
             </CardHeader>
             <CardContent className="flex-1 relative flex items-center justify-center p-0 overflow-hidden bg-[#020810]">
                 {/* Fake Map Background */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/41/India_location_map.svg')] bg-center bg-no-repeat bg-contain"></div>
                 
                 {/* Pulse animations simulating heat */}
                 <div className="absolute top-[40%] left-[30%]">
                     <div className="relative">
                         <div className="w-12 h-12 bg-red-500/20 rounded-full animate-ping absolute -inset-6"></div>
                         <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)]"></div>
                     </div>
                 </div>
                 <div className="absolute top-[60%] left-[45%]">
                     <div className="relative">
                         <div className="w-8 h-8 bg-orange-500/20 rounded-full animate-ping absolute -inset-4"></div>
                         <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]"></div>
                     </div>
                 </div>
                 <div className="absolute top-[30%] left-[60%]">
                     <div className="relative">
                         <div className="w-16 h-16 bg-red-500/20 rounded-full animate-ping absolute -inset-8 animation-delay-500"></div>
                         <div className="w-5 h-5 bg-red-500 rounded-full shadow-[0_0_25px_rgba(239,68,68,1)]"></div>
                     </div>
                 </div>

             </CardContent>
          </Card>

          <Card className="md:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" /> High-Risk Corridors
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <div className="divide-y divide-border/50">
                     {[
                         { region: "NCR - Dubai", type: "Trade Misinvoicing", severity: "Critical", score: 98 },
                         { region: "Surat - HK", type: "Diamond Round-Tripping", severity: "High", score: 92 },
                         { region: "Kerala - Gulf", type: "Hawala / Unregistered", severity: "High", score: 88 },
                         { region: "Bengaluru - SG", type: "Tech Shells", severity: "Medium", score: 74 },
                     ].map((item, i) => (
                         <div key={i} className="p-4 hover:bg-background/40 transition-colors">
                             <div className="flex justify-between items-start mb-2">
                                 <h4 className="text-[10px] font-bold uppercase text-foreground">{item.region}</h4>
                                 <Badge variant="outline" className={`font-mono text-[8px] uppercase px-1 py-0 ${
                                     item.severity === 'Critical' ? 'bg-red-500/10 text-red-500 border-red-500/30' :
                                     item.severity === 'High' ? 'bg-orange-500/10 text-orange-500 border-orange-500/30' :
                                     'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                 }`}>
                                     {item.severity}
                                 </Badge>
                             </div>
                             <p className="text-[9px] font-mono text-muted-foreground uppercase">{item.type}</p>
                             <div className="mt-3 flex items-center gap-2">
                                 <div className="h-1 flex-1 bg-background rounded-full overflow-hidden">
                                     <div className={`h-full ${item.severity === 'Critical' ? 'bg-red-500' : item.severity === 'High' ? 'bg-orange-500' : 'bg-amber-500'}`} style={{ width: `${item.score}%` }}></div>
                                 </div>
                                 <span className="text-[9px] font-mono font-bold">{item.score}</span>
                             </div>
                         </div>
                     ))}
                 </div>
             </CardContent>
          </Card>
      </div>

    </div>
  );
}
