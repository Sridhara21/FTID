"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, CheckCircle2, AlertTriangle, Building2, Map, ShieldAlert, BarChart3, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function TrustIndexPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Trust Engine</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-green-500" /> National Trust Intelligence Engine
          </p>
        </div>
        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 uppercase tracking-widest text-[9px] font-bold">
          LIVE SCORING ACTIVE
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 flex items-center justify-center border-border/50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-background to-background relative overflow-hidden h-[250px]">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="flex items-center gap-12 z-10 w-full max-w-2xl justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
              <div className="relative w-40 h-40 rounded-full border-[6px] border-green-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.3)] bg-background">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="74" cy="74" r="71" fill="transparent" stroke="rgba(34,197,94,1)" strokeWidth="6" strokeDasharray="446" strokeDashoffset="44.6" className="animate-[spin_4s_ease-in-out_infinite_alternate]" />
                </svg>
                <div className="text-center">
                    <span className="text-5xl font-black font-mono tracking-tighter text-green-500">894</span>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Score / 1000</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
               <div>
                  <h2 className="text-xl font-black uppercase tracking-widest">National Trust Aggregate</h2>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase mt-1">High Institutional Integrity • Stable</p>
               </div>
               
               <div className="space-y-3 mt-2">
                 <div className="flex items-center gap-4">
                     <span className="text-[9px] font-bold uppercase tracking-widest w-24">Compliance Qlty</span>
                     <Progress value={92} className="h-1.5 w-32 [&>div]:bg-green-500" />
                     <span className="text-[10px] font-mono font-bold text-green-500">92%</span>
                 </div>
                 <div className="flex items-center gap-4">
                     <span className="text-[9px] font-bold uppercase tracking-widest w-24">Fraud Resilience</span>
                     <Progress value={85} className="h-1.5 w-32 [&>div]:bg-primary" />
                     <span className="text-[10px] font-mono font-bold text-primary">85%</span>
                 </div>
                 <div className="flex items-center gap-4">
                     <span className="text-[9px] font-bold uppercase tracking-widest w-24">Data Accuracy</span>
                     <Progress value={98} className="h-1.5 w-32 [&>div]:bg-blue-400" />
                     <span className="text-[10px] font-mono font-bold text-blue-400">98%</span>
                 </div>
               </div>
            </div>
          </div>
        </Card>

        <Card className="border-border/50 bg-secondary/10 flex flex-col h-[250px]">
          <CardHeader className="pb-2 border-b border-border/50">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <TrendingDown className="h-3 w-3 text-red-500" /> Trust Decay Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 flex-1 space-y-3">
             {[
               { target: "Sector: NBFC", decay: "-42 pts", reason: "Elevated Defaults" },
               { target: "Region: East", decay: "-18 pts", reason: "Mule Activity" },
               { target: "Bank: Co-op 9", decay: "-85 pts", reason: "AML Audit Fail" },
             ].map((alert, i) => (
                <div key={i} className="flex justify-between items-center p-2 rounded bg-background/50 border border-border/50">
                   <div>
                       <span className="text-[10px] font-bold uppercase text-foreground">{alert.target}</span>
                       <p className="text-[9px] font-mono text-muted-foreground mt-0.5">{alert.reason}</p>
                   </div>
                   <span className="text-xs font-mono font-bold text-red-400">{alert.decay}</span>
                </div>
             ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[400px]">
           <CardHeader className="pb-2 border-b border-border/50">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" /> Institutional Trust Leaderboard
              </CardTitle>
           </CardHeader>
           <CardContent className="flex-1 overflow-auto p-0">
             <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                   <tr>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Institution</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Trust Score</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Compliance Qty</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Fraud Exposure</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                   {[
                     { name: "State Bank Core", score: 994, compliance: "A+", exposure: "0.01%", color: "text-green-500" },
                     { name: "HDFC Nexus", score: 982, compliance: "A+", exposure: "0.02%", color: "text-green-500" },
                     { name: "ICICI Prime", score: 975, compliance: "A", exposure: "0.04%", color: "text-green-400" },
                     { name: "Axis Global", score: 960, compliance: "A-", exposure: "0.08%", color: "text-primary" },
                     { name: "National Rural Bank", score: 810, compliance: "B", exposure: "1.20%", color: "text-yellow-500" },
                     { name: "Co-op Bank Delta", score: 640, compliance: "C-", exposure: "4.80%", color: "text-red-400" },
                   ].map((bank, i) => (
                      <tr key={i} className="hover:bg-background/40 transition-colors">
                         <td className="px-4 py-3 font-semibold text-xs flex items-center gap-2">
                             {bank.score > 900 ? <CheckCircle2 className="h-3 w-3 text-green-500" /> : <ShieldAlert className="h-3 w-3 text-orange-500" />}
                             {bank.name}
                         </td>
                         <td className="px-4 py-3">
                            <span className={`font-mono font-bold text-xs ${bank.color}`}>{bank.score}</span>
                         </td>
                         <td className="px-4 py-3 text-xs font-mono font-bold text-muted-foreground">
                            {bank.compliance}
                         </td>
                         <td className="px-4 py-3 text-right">
                             <Badge variant="outline" className={`font-mono text-[9px] border-border/50 ${parseFloat(bank.exposure) > 1 ? 'bg-red-500/10 text-red-400' : 'text-muted-foreground'}`}>
                                 {bank.exposure}
                             </Badge>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
           </CardContent>
        </Card>

        <Card className="lg:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[400px]">
           <CardHeader className="pb-2 border-b border-border/50">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Map className="h-4 w-4 text-muted-foreground" /> Regional Trust Map
              </CardTitle>
           </CardHeader>
           <CardContent className="flex-1 relative overflow-hidden flex flex-col pt-4 space-y-4">
              <div className="relative flex-1 bg-background border border-border/50 rounded-lg overflow-hidden flex items-center justify-center p-4 group">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                  
                  {/* Mock Map visualization */}
                  <div className="w-full h-full relative">
                      {/* South */}
                      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-green-500">920</span>
                      </div>
                      {/* West */}
                      <div className="absolute top-1/2 left-4 w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-primary">880</span>
                      </div>
                      {/* North */}
                      <div className="absolute top-10 left-1/3 w-14 h-14 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-yellow-500">810</span>
                      </div>
                      {/* East */}
                      <div className="absolute top-1/3 right-4 w-20 h-20 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center animate-pulse">
                          <span className="text-[10px] font-bold text-orange-500">650</span>
                      </div>
                  </div>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                     <span>Sector Trust Variation</span>
                     <span className="text-muted-foreground">Spread: 340 pts</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="text-[9px] font-mono text-muted-foreground w-12">RETAIL</span>
                     <Progress value={95} className="h-1.5 flex-1 [&>div]:bg-green-500" />
                     <span className="text-[9px] font-mono text-green-500">950</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="text-[9px] font-mono text-muted-foreground w-12">CORP</span>
                     <Progress value={85} className="h-1.5 flex-1 [&>div]:bg-primary" />
                     <span className="text-[9px] font-mono text-primary">850</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="text-[9px] font-mono text-muted-foreground w-12">CO-OP</span>
                     <Progress value={61} className="h-1.5 flex-1 [&>div]:bg-orange-500" />
                     <span className="text-[9px] font-mono text-orange-500">610</span>
                 </div>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
