"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, Code2, BookOpen, Terminal, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DeveloperSdkPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-blue-500 uppercase flex items-center gap-3">
              <Code2 className="h-8 w-8" />
              SDKs & Integration Tooling
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Accelerated Institution Onboarding
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[400px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Download className="h-4 w-4 text-emerald-500" /> Official SDKs
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto pt-4 space-y-4">
                 
                 <div className="p-4 border border-border/50 bg-background/50 rounded-lg flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <Terminal className="h-5 w-5 text-blue-400" />
                         <div>
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Node.js SDK</h4>
                             <p className="text-[9px] font-mono text-muted-foreground mt-1">v2.4.1 (Stable)</p>
                         </div>
                     </div>
                     <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-400 hover:text-blue-300">
                         <Download className="h-4 w-4" />
                     </Button>
                 </div>

                 <div className="p-4 border border-border/50 bg-background/50 rounded-lg flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <Terminal className="h-5 w-5 text-yellow-400" />
                         <div>
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Python SDK</h4>
                             <p className="text-[9px] font-mono text-muted-foreground mt-1">v1.8.0 (Stable)</p>
                         </div>
                     </div>
                     <Button size="icon" variant="ghost" className="h-8 w-8 text-yellow-400 hover:text-yellow-300">
                         <Download className="h-4 w-4" />
                     </Button>
                 </div>

                 <div className="p-4 border border-border/50 bg-background/50 rounded-lg flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <Terminal className="h-5 w-5 text-red-500" />
                         <div>
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Java Enterprise SDK</h4>
                             <p className="text-[9px] font-mono text-muted-foreground mt-1">v3.0.2 (Bank Grade)</p>
                         </div>
                     </div>
                     <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:text-red-400">
                         <Download className="h-4 w-4" />
                     </Button>
                 </div>

             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[400px] md:col-span-2">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500" /> Authentication Examples
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-6">
                 
                 <div className="bg-[#020810] p-4 rounded-lg border border-border/50 font-mono text-[10px] text-muted-foreground h-full">
                     <div className="flex justify-between items-center mb-4">
                         <span className="text-muted-foreground uppercase tracking-widest text-[9px] font-bold">Python Example (JWT Auth)</span>
                         <Badge variant="outline" className="bg-background text-muted-foreground border-border/50 uppercase text-[8px]">Copy</Badge>
                     </div>
                     <span className="text-purple-400">import</span> jwt<br/>
                     <span className="text-purple-400">import</span> time<br/><br/>
                     <span className="text-green-500"># Generate a signed JWT using your institutional private key</span><br/>
                     <span className="text-purple-400">def</span> <span className="text-blue-400">generate_client_assertion</span>(client_id, private_key):<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;payload = {'{'}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">"iss"</span>: client_id,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">"sub"</span>: client_id,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">"aud"</span>: <span className="text-amber-400">"https://api.ftid.gov.in/v1/token"</span>,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">"exp"</span>: <span className="text-cyan-400">int</span>(time.time()) + <span className="text-cyan-400">300</span>,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">"jti"</span>: <span className="text-cyan-400">str</span>(uuid.uuid4())<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> jwt.encode(payload, private_key, algorithm=<span className="text-amber-400">"RS256"</span>)<br/><br/>
                     <span className="text-green-500"># Use this assertion to exchange for an access token</span><br/>
                     <span className="text-cyan-400">print</span>(generate_client_assertion(<span className="text-amber-400">"bank_hdfc_prod"</span>, key_material))
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
