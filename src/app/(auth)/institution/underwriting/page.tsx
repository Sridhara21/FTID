"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ShieldCheck, Banknote, Briefcase, ChevronRight, BarChart3, Fingerprint, History, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function SmartUnderwritingPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Underwriting Engine</h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            <Activity className="h-4 w-4 text-green-500" /> AI-Powered Credit Intelligence
          </p>
        </div>
        <div className="flex gap-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest text-[9px] font-bold h-7">
              AUTO-APPROVAL MODE: ON
            </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">SME Reliability Index</CardTitle>
            <ShieldCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-primary">A+</div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Average applicant tier</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Approval Velocity</CardTitle>
            <Banknote className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-green-500">12ms</div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Per digital application</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Revenue Stability</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">92%</div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">GST vs Bank alignment</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Active Profiles</CardTitle>
            <Briefcase className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">4,192</div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Undergoing analysis</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
         {/* Live Processing Queue */}
         <Card className="lg:col-span-1 border-border/50 bg-secondary/10 flex flex-col h-[550px]">
            <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 <History className="h-4 w-4 text-muted-foreground" /> Ingestion Queue
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-4 space-y-3">
               {[
                 { id: "APL-902", type: "MSME Overdraft", name: "Rajat Textiles", risk: "Low", status: "Analyzing" },
                 { id: "APL-903", type: "Invoice Factoring", name: "Global Exports", risk: "Med", status: "Pending GST" },
                 { id: "APL-904", type: "Equipment Loan", name: "AgriTech Solutions", risk: "High", status: "Flagged" },
                 { id: "APL-905", type: "Working Capital", name: "Nexus Manufacturing", risk: "Low", status: "Approved" },
                 { id: "APL-906", type: "Supply Chain", name: "Delta Traders", risk: "Low", status: "Approved" },
               ].map((app, i) => (
                  <div key={i} className="p-3 border border-border/50 bg-background/50 rounded-lg group hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                         <span className="font-bold text-xs">{app.name}</span>
                         <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                             app.status === 'Approved' ? 'bg-green-500/10 text-green-500 border-green-500/30' : 
                             app.status === 'Flagged' ? 'bg-red-500/10 text-red-500 border-red-500/30' : 
                             'bg-primary/10 text-primary border-primary/30'
                         }`}>
                            {app.status}
                         </Badge>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground">
                         <span>{app.id} | {app.type}</span>
                         <span className="uppercase font-bold">RISK: {app.risk}</span>
                      </div>
                  </div>
               ))}
            </CardContent>
         </Card>

         {/* Detailed Application View */}
         <Card className="lg:col-span-2 border-primary/20 bg-card/40 flex flex-col h-[550px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>
            <CardHeader className="pb-4 border-b border-border/50 relative z-10 flex flex-row items-center justify-between">
               <div>
                   <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                     <Search className="h-4 w-4 text-primary" /> Active Dossier: APL-902 (Rajat Textiles)
                   </CardTitle>
               </div>
               <Button size="sm" className="h-7 text-[10px] uppercase font-bold tracking-widest gap-2 bg-green-500 hover:bg-green-600 text-white">
                   <ShieldCheck className="h-3 w-3" /> Execute Approval
               </Button>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto pt-6 space-y-8 relative z-10">
               
               {/* Top Metrics Summary */}
               <div className="grid grid-cols-3 gap-4">
                   <div className="p-4 rounded-lg bg-secondary/20 border border-border/50 text-center">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Requested Limit</p>
                       <p className="text-2xl font-mono font-black text-foreground">₹2.5 Cr</p>
                   </div>
                   <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-green-500 mb-1">Operational Trust Score</p>
                       <p className="text-2xl font-mono font-black text-green-500">920 / 1000</p>
                   </div>
                   <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">Dynamic Risk Category</p>
                       <p className="text-2xl font-mono font-black text-blue-500">TIER-1 (Low)</p>
                   </div>
               </div>

               {/* Intelligence Vectors */}
               <div className="space-y-6">
                  <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 border-b border-border/50 pb-2">Intelligence Vectors</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                              <div className="space-y-2">
                                  <div className="flex justify-between text-[10px] font-bold uppercase">
                                      <span>Behavioral Repayment</span>
                                      <span className="text-green-500">98% (Excellent)</span>
                                  </div>
                                  <Progress value={98} className="h-1.5 [&>div]:bg-green-500" />
                                  <p className="text-[9px] font-mono text-muted-foreground">Zero defaults in 5 yrs. Avg DPD: 0.</p>
                              </div>
                              <div className="space-y-2">
                                  <div className="flex justify-between text-[10px] font-bold uppercase">
                                      <span>GST & Tax Compliance</span>
                                      <span className="text-green-500">100% (Verified)</span>
                                  </div>
                                  <Progress value={100} className="h-1.5 [&>div]:bg-green-500" />
                                  <p className="text-[9px] font-mono text-muted-foreground">GSTR-3B filed on time consistently.</p>
                              </div>
                          </div>
                          
                          <div className="space-y-4">
                              <div className="space-y-2">
                                  <div className="flex justify-between text-[10px] font-bold uppercase">
                                      <span>Cashflow Intelligence</span>
                                      <span className="text-primary">85% (Stable)</span>
                                  </div>
                                  <Progress value={85} className="h-1.5 [&>div]:bg-primary" />
                                  <p className="text-[9px] font-mono text-muted-foreground">DSCR: 2.4x. Steady inflow from 12 tier-1 vendors.</p>
                              </div>
                              <div className="space-y-2">
                                  <div className="flex justify-between text-[10px] font-bold uppercase">
                                      <span>Sector Macro Risk</span>
                                      <span className="text-orange-500">60% (Moderate)</span>
                                  </div>
                                  <Progress value={40} className="h-1.5 [&>div]:bg-orange-500" />
                                  <p className="text-[9px] font-mono text-muted-foreground">Textile exports facing mild supply chain headwinds.</p>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>

               {/* AI Conclusion */}
               <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                      <Fingerprint className="h-4 w-4 text-primary" />
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">FTID AI Conclusion</h4>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                      Entity exhibits exceptional operational hygiene. Revenue stability prediction over next 12 months is highly favorable (94% confidence). Suggested limit of ₹2.5 Cr is well within acceptable DSCR thresholds. <strong className="text-green-400">Approval Highly Recommended.</strong>
                  </p>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}