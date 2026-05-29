"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, CheckCircle2, FlaskConical, Target, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function GovernmentPolicyPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-blue-500 uppercase flex items-center gap-3">
              <Scale className="h-8 w-8" />
              Policy Sandbox & Impact Simulation
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            AI-Driven Macroeconomic War-Gaming
          </p>
        </div>
        <div className="flex gap-2">
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <FlaskConical className="h-4 w-4" /> Run New Simulation
            </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <BrainCircuit className="h-4 w-4 text-blue-500" /> Active Policy Simulations
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Scenario Name</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Target Variable</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Confidence</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Proj. GDP Impact</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { name: "GST Cut on EVs (12% -> 5%)", target: "Auto Sector Demand", conf: "92%", impact: "+0.15%" },
                         { name: "Export Subsidy: Semiconductors", target: "FDI Inflow", conf: "84%", impact: "+0.30%" },
                         { name: "Repo Rate Hike (+25 bps)", target: "Inflation Control", conf: "89%", impact: "-0.10%" },
                         { name: "Universal Basic Income (Pilot)", target: "Rural Consumption", conf: "71%", impact: "+0.45%" },
                       ].map((sim, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 font-semibold text-xs text-foreground flex items-center gap-2">
                                <FlaskConical className="h-3 w-3 text-blue-500" /> {sim.name}
                             </td>
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground uppercase">
                                {sim.target}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className="font-mono text-[9px] uppercase bg-blue-500/10 text-blue-500 border-blue-500/30">
                                     {sim.conf}
                                 </Badge>
                             </td>
                             <td className={`px-4 py-4 text-right font-mono font-black ${sim.impact.startsWith('+') ? 'text-emerald-500' : 'text-amber-500'}`}>
                                 {sim.impact}
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
            </CardContent>
         </Card>

         <Card className="col-span-1 border-blue-500/20 bg-blue-500/5 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
            <CardHeader className="pb-4 border-b border-blue-500/20 relative z-10">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-blue-500">
                 <Target className="h-4 w-4" /> AI Policy Analyst
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pt-6 space-y-6 relative z-10">
               
               <div className="p-4 bg-background border border-blue-500/20 rounded-lg">
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">Recommendation</h4>
                   <p className="text-xs font-mono text-muted-foreground mb-4">
                       Based on real-time E-Way bill velocity, the logistics sector is facing a temporary bottleneck in the Western corridor.
                   </p>
                   <div className="flex items-center gap-3">
                       <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                       <p className="text-[10px] font-mono text-emerald-500/80">
                           Action: Temporarily waive toll limits for heavy cargo.
                       </p>
                   </div>
               </div>
               
               <Button variant="outline" className="w-full text-[10px] font-bold uppercase tracking-widest border-blue-500/50 text-blue-500 hover:bg-blue-500/20">
                   Generate Cabinet Report
               </Button>

            </CardContent>
         </Card>
      </div>

    </div>
  );
}
