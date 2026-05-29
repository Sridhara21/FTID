"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Box, Play, CheckCircle2, RotateCcw, Activity, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DeveloperSandboxPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-purple-500 uppercase flex items-center gap-3">
              <Box className="h-8 w-8" />
              Integration Sandbox
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Simulate Flows & Webhooks
          </p>
        </div>
        <div className="flex gap-2">
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <RotateCcw className="h-4 w-4" /> Reset Environment
            </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-purple-500">
                    <Activity className="h-4 w-4" /> Account Aggregator Mock Flow
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-6 space-y-6">
                 
                 <div className="space-y-4">
                     <div className="p-4 border border-border/50 bg-background/50 rounded-lg">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-2">1. Request Consent</h4>
                         <p className="text-[10px] font-mono text-muted-foreground mb-3">Simulate an app requesting data from a citizen.</p>
                         <Button size="sm" variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-purple-500/50 text-purple-500 hover:bg-purple-500/20">
                             <Play className="h-3 w-3 mr-2" /> Execute POST /v1/consent
                         </Button>
                     </div>

                     <div className="p-4 border border-border/50 bg-background/50 rounded-lg">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-2">2. Simulate User Approval</h4>
                         <p className="text-[10px] font-mono text-muted-foreground mb-3">Trigger the webhook for successful authorization.</p>
                         <Button size="sm" variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/20">
                             <Play className="h-3 w-3 mr-2" /> Fire Webhook: consent.approved
                         </Button>
                     </div>

                     <div className="p-4 border border-border/50 bg-background/50 rounded-lg">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-2">3. Fetch FI Data</h4>
                         <p className="text-[10px] font-mono text-muted-foreground mb-3">Retrieve mock bank statements (JSON format).</p>
                         <Button size="sm" variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-blue-500/50 text-blue-500 hover:bg-blue-500/20">
                             <Play className="h-3 w-3 mr-2" /> Execute GET /v1/fi/fetch
                         </Button>
                     </div>
                 </div>

             </CardContent>
          </Card>

          <Card className="border-border/50 bg-[#020810] flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-cyan-500">
                    <Terminal className="h-4 w-4" /> Sandbox Terminal Output
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 p-4 font-mono text-[10px] overflow-auto text-muted-foreground space-y-2">
                 <div><span className="text-emerald-500">➜</span> System: Sandbox Env 'dev-mock-881' initialized.</div>
                 <div><span className="text-emerald-500">➜</span> API: Listening for incoming mock requests on port 8080...</div>
                 <div className="text-cyan-500/50">Waiting for events...</div>
             </CardContent>
          </Card>
      </div>

    </div>
  );
}
