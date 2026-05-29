"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock, FileSignature, GitCommit, CheckCircle2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AuditorLedgerPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-blue-500 uppercase flex items-center gap-3">
              <Lock className="h-8 w-8" />
              Immutable Ledger Verification
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Cryptographic Integrity & Tamper Evidence
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Ledger Integrity</CardTitle>
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">Intact</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   Cryptographic proofs validated
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Blocks Verified</CardTitle>
                <GitCommit className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">14.2M</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   Since network genesis
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Digital Signatures</CardTitle>
                <FileSignature className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-purple-500">100%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/80 flex items-center gap-1">
                   Signatures Validated
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <GitCommit className="h-4 w-4 text-blue-500" /> Transaction Lineage Graph
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-6">
                 
                 <div className="relative border-l-2 border-blue-500/30 ml-4 space-y-8">
                     <div className="relative pl-6">
                         <div className="absolute w-4 h-4 bg-background border-2 border-blue-500 rounded-full -left-[9px] top-0 flex items-center justify-center">
                             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                         </div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Invoice Generated</h4>
                         <p className="text-[10px] font-mono text-muted-foreground mt-1">Hash: <span className="text-foreground">0x3a9f...b42c</span></p>
                         <p className="text-[9px] font-mono text-blue-500/60 mt-1">Signed by: Vendor A (PAN: ABCDE1234F)</p>
                     </div>

                     <div className="relative pl-6">
                         <div className="absolute w-4 h-4 bg-background border-2 border-blue-500 rounded-full -left-[9px] top-0 flex items-center justify-center">
                             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                         </div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500">E-Way Bill Linked</h4>
                         <p className="text-[10px] font-mono text-muted-foreground mt-1">Hash: <span className="text-foreground">0x9c42...f1a8</span></p>
                         <p className="text-[9px] font-mono text-blue-500/60 mt-1">Logistics: SafeTrans Ltd.</p>
                     </div>

                     <div className="relative pl-6">
                         <div className="absolute w-4 h-4 bg-background border-2 border-emerald-500 rounded-full -left-[9px] top-0 flex items-center justify-center">
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                         </div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Payment Settled (CBDC)</h4>
                         <p className="text-[10px] font-mono text-muted-foreground mt-1">Hash: <span className="text-foreground">0x71be...d934</span></p>
                         <p className="text-[9px] font-mono text-emerald-500/60 mt-1">Confirmed in Block #1428522</p>
                     </div>
                     
                     <div className="relative pl-6">
                         <div className="absolute w-4 h-4 bg-background border-2 border-purple-500 rounded-full -left-[9px] top-0 flex items-center justify-center">
                             <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping"></div>
                         </div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Audit Proof Generated</h4>
                         <p className="text-[10px] font-mono text-muted-foreground mt-1">Merkle Root: <span className="text-foreground">0xff1a...cc42</span></p>
                         <p className="text-[9px] font-mono text-purple-500/60 mt-1">Zero-Knowledge Proof Validated</p>
                     </div>
                 </div>

             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Tamper Evidence Checks
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-6 space-y-4">
                 
                 <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 rounded-lg flex items-center justify-between">
                     <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">State Merkle Root</h4>
                         <p className="text-xs font-mono text-muted-foreground">Matched with Regulator Node</p>
                     </div>
                     <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/50">Verified</Badge>
                 </div>

                 <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 rounded-lg flex items-center justify-between">
                     <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Historical Sequence</h4>
                         <p className="text-xs font-mono text-muted-foreground">No fork detected in ledger history</p>
                     </div>
                     <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/50">Verified</Badge>
                 </div>

                 <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 rounded-lg flex items-center justify-between">
                     <div>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Signature Integrity</h4>
                         <p className="text-xs font-mono text-muted-foreground">All Ed25519 signatures valid</p>
                     </div>
                     <Badge variant="outline" className="font-mono text-[8px] uppercase bg-emerald-500/10 text-emerald-500 border-emerald-500/50">Verified</Badge>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
