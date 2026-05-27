"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Network, AlertTriangle, TrendingUp, Cpu } from "lucide-react";
import { FtidStatusLayer } from "@/components/shared/ftid-status-layer";

export default function RegulatorDashboard() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Regulator Core</h1>
        <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1">
          National Macro-Financial Intelligence Terminal
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Nodes Tracked</CardTitle>
            <Network className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142.8M</div>
            <p className="text-xs text-muted-foreground">+24k today</p>
          </CardContent>
        </Card>
        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-red-600">Active Threats</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">843</div>
            <p className="text-xs text-red-600/80">Require immediate action</p>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Systemic Risk</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Low (12%)</div>
            <p className="text-xs text-muted-foreground">Stable trajectory</p>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-secondary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">AI Core Status</CardTitle>
            <Cpu className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Optimal</div>
            <p className="text-xs text-muted-foreground">0ms Latency</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Priority Action: AML Enforcement</CardTitle>
            <CardDescription>Detected layering syndicate across 50 shell companies.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-center justify-center rounded bg-background/50 border border-border/50 backdrop-blur-sm">
              <span className="text-muted-foreground text-sm flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Ready for account freeze
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Live AI Compliance Feed</CardTitle>
            <CardDescription>Global model output</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Intervention", target: "Bank XYZ", time: "Just now" },
                { action: "Rate Simulation", target: "Housing Sector", time: "5m ago" },
                { action: "Graph Analysis", target: "Supply Chain", time: "12m ago" },
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0">
                  <div>
                    <span className="font-semibold text-primary">{log.action}</span>
                    <span className="text-muted-foreground mx-2">-</span>
                    <span>{log.target}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{log.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
