"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Activity, Network, ShieldCheck } from "lucide-react";

export default function PageComponent() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Developer Hub</h1>
        <p className="text-muted-foreground">
          Build the Future of Finance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 border-border/50 bg-secondary/10 flex flex-col justify-center items-center min-h-[300px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50"></div>
          <div className="z-10 text-center flex flex-col items-center">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-pulse">
              <Code className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Developer Hub Module</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm">Initializing AI processing models and securely connecting to the FTID network...</p>
          </div>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>System Diagnostics</CardTitle>
            <CardDescription>Live telemetry</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
              <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-green-500"/> Node Status</span>
              <span className="text-green-500 font-bold">Online</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
              <span className="flex items-center gap-2"><Network className="h-4 w-4 text-primary"/> Latency</span>
              <span className="font-bold">14ms</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary"/> Security</span>
              <span className="font-bold">Enforced</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}