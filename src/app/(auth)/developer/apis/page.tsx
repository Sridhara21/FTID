"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Server, Lock, Search, Webhook, Box, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DeveloperApisPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-indigo-500 uppercase flex items-center gap-3">
              <Server className="h-8 w-8" />
              API Marketplace
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Institutional Integration Endpoints
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[400px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Lock className="h-4 w-4 text-emerald-500" /> Trust & Compliance APIs
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                 
                 <div className="p-3 bg-background border border-border/50 rounded-lg">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Entity Trust Score</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/50">GET</Badge>
                     </div>
                     <p className="text-[9px] font-mono text-muted-foreground">Retrieve the unified operational trust score for a registered GSTIN or PAN.</p>
                     <div className="mt-2 text-[9px] font-mono text-cyan-400">/v1/trust/score?gstin=...</div>
                 </div>

                 <div className="p-3 bg-background border border-border/50 rounded-lg">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Sanction Match</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-amber-500/10 text-amber-500 border-amber-500/50">POST</Badge>
                     </div>
                     <p className="text-[9px] font-mono text-muted-foreground">Fuzzy match entity name against unified OFAC/UN/MHA lists.</p>
                     <div className="mt-2 text-[9px] font-mono text-cyan-400">/v2/compliance/screen</div>
                 </div>

             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[400px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Search className="h-4 w-4 text-blue-500" /> Verification APIs
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                 
                 <div className="p-3 bg-background border border-border/50 rounded-lg">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Invoice Hash Validate</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-amber-500/10 text-amber-500 border-amber-500/50">POST</Badge>
                     </div>
                     <p className="text-[9px] font-mono text-muted-foreground">Verify if a given invoice hash exists in the national immutable ledger.</p>
                     <div className="mt-2 text-[9px] font-mono text-cyan-400">/v1/invoice/verify</div>
                 </div>

                 <div className="p-3 bg-background border border-border/50 rounded-lg">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Aadhaar Status</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/50">GET</Badge>
                     </div>
                     <p className="text-[9px] font-mono text-muted-foreground">Check if Aadhaar is active, locked, or seeded to NPCI mapper.</p>
                     <div className="mt-2 text-[9px] font-mono text-cyan-400">/v1/identity/aadhaar/status</div>
                 </div>

             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[400px] lg:col-span-1 md:col-span-2">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Webhook className="h-4 w-4 text-purple-500" /> Event Webhooks
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                 
                 <div className="p-3 border border-purple-500/30 bg-purple-500/5 rounded-lg">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Consent Revoked</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-purple-500/10 text-purple-500 border-purple-500/50">WSS</Badge>
                     </div>
                     <p className="text-[9px] font-mono text-muted-foreground">Fired when a citizen revokes Account Aggregator data access.</p>
                     <div className="mt-2 text-[9px] font-mono text-cyan-400">event.consent.revoked</div>
                 </div>

                 <div className="p-3 border border-purple-500/30 bg-purple-500/5 rounded-lg">
                     <div className="flex justify-between items-start mb-2">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Settlement Complete</h4>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-purple-500/10 text-purple-500 border-purple-500/50">WSS</Badge>
                     </div>
                     <p className="text-[9px] font-mono text-muted-foreground">Fired when CBDC programmable transfer conditions are met and funds settle.</p>
                     <div className="mt-2 text-[9px] font-mono text-cyan-400">event.cbdc.settled</div>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
