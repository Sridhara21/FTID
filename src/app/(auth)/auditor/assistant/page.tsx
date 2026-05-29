"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, MessageSquare, AlertTriangle, FileText, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AuditorAssistantPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <Bot className="h-8 w-8" />
              AI Audit Copilot
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Automated Inconsistency Resolution
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 border-border/50 bg-secondary/10 flex flex-col h-[600px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-emerald-500">
                    <MessageSquare className="h-4 w-4" /> Interactive Analysis
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-6 space-y-6 flex flex-col bg-[#020810]">
                 
                 <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0 border border-border/50">
                         <span className="text-xs font-bold">You</span>
                     </div>
                     <div className="bg-secondary/30 p-3 rounded-lg border border-border/50 text-sm font-mono text-muted-foreground">
                         Analyze the discrepancy in GSTR-2A for "Apex Merchants" during Q3.
                     </div>
                 </div>

                 <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                         <Bot className="h-4 w-4 text-emerald-500" />
                     </div>
                     <div className="bg-emerald-500/5 p-4 rounded-lg border border-emerald-500/20 text-sm font-mono text-emerald-100 flex-1">
                         <p className="mb-4">I found a <strong className="text-emerald-400">₹4.2L discrepancy</strong> between claimed Input Tax Credit (ITC) and supplier filings.</p>
                         <p className="mb-4 font-bold text-emerald-500 uppercase tracking-widest text-[10px]">Root Cause Detection:</p>
                         <ul className="list-disc pl-5 space-y-2 text-xs mb-4 text-emerald-100/70">
                             <li>Supplier "Oasis Trade" canceled 3 high-value invoices post-filing.</li>
                             <li>Invoice numbers: INV-882, INV-884, INV-885.</li>
                             <li>Oasis Trade has a low Trust Score (41/100) and history of circular billing.</li>
                         </ul>
                         <div className="flex gap-2">
                             <Button size="sm" variant="outline" className="h-7 text-[9px] font-bold uppercase tracking-widest border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/20">
                                 Generate Notice
                             </Button>
                             <Button size="sm" variant="outline" className="h-7 text-[9px] font-bold uppercase tracking-widest border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/20">
                                 Flag Supplier
                             </Button>
                         </div>
                     </div>
                 </div>

             </CardContent>
             <div className="p-4 border-t border-border/50 bg-background/50">
                 <div className="flex gap-2">
                     <input type="text" placeholder="Ask Copilot about ledgers, discrepancies, or entities..." className="flex-1 bg-secondary/20 border border-border/50 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-emerald-500/50" />
                     <Button className="bg-emerald-600 hover:bg-emerald-700 text-white"><MessageSquare className="h-4 w-4" /></Button>
                 </div>
             </div>
          </Card>

          <div className="flex flex-col gap-6">
              <Card className="border-border/50 bg-secondary/10 flex flex-col flex-1">
                 <CardHeader className="pb-4 border-b border-border/50">
                     <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" /> Suspicious Accounting Alerts
                     </CardTitle>
                 </CardHeader>
                 <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                     
                     <div className="p-3 border border-amber-500/30 bg-amber-500/5 rounded-lg">
                         <div className="flex justify-between items-start mb-1">
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Unexplained Asset Growth</h4>
                             <Badge variant="outline" className="font-mono text-[8px] uppercase bg-amber-500/10 text-amber-500 border-amber-500/30">Investigate</Badge>
                         </div>
                         <p className="text-[10px] font-mono text-muted-foreground mt-2">
                             "Global Trade Corp" shows 300% inventory spike with no matching outward supply.
                         </p>
                     </div>

                     <div className="p-3 border border-red-500/30 bg-red-500/5 rounded-lg">
                         <div className="flex justify-between items-start mb-1">
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-500">Related Party Loop</h4>
                             <Badge variant="outline" className="font-mono text-[8px] uppercase bg-red-500/10 text-red-500 border-red-500/30">Critical</Badge>
                         </div>
                         <p className="text-[10px] font-mono text-muted-foreground mt-2">
                             Detected circular transfer of ₹12L between 4 entities sharing the same director PAN.
                         </p>
                     </div>

                 </CardContent>
              </Card>

              <Card className="border-border/50 bg-secondary/10 flex flex-col flex-1">
                 <CardHeader className="pb-4 border-b border-border/50">
                     <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" /> Smart Reconciliation
                     </CardTitle>
                 </CardHeader>
                 <CardContent className="flex-1 pt-4 flex flex-col justify-center items-center text-center space-y-3">
                     <CheckCircle2 className="h-10 w-10 text-blue-500 opacity-50" />
                     <p className="text-xs font-mono text-muted-foreground">
                         Upload Bank Statement & Cash Book. Copilot will auto-match and highlight un-reconciled items.
                     </p>
                     <Button size="sm" variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-blue-500/50 text-blue-500 hover:bg-blue-500/20">
                         Upload Documents
                     </Button>
                 </CardContent>
              </Card>
          </div>
      </div>

    </div>
  );
}
