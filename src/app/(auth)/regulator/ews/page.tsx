"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, AlertTriangle, TrendingDown } from "lucide-react";

export default function EarlyWarningSystemPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Early Warning System</h1>
        <p className="text-muted-foreground">
          Predictive alerts for fraud outbreaks and liquidity collapse.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-red-600 dark:text-red-400">Critical Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">12</div>
            <p className="text-xs text-red-600/80 dark:text-red-400/80">+3 since last hour</p>
          </CardContent>
        </Card>
        <Card className="border-orange-500/20 bg-orange-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-orange-600 dark:text-orange-400">Liquidity Stress</CardTitle>
            <TrendingDown className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">4 Banks</div>
            <p className="text-xs text-orange-600/80 dark:text-orange-400/80">LCR below threshold</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-primary">System Pulse</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Stable</div>
            <p className="text-xs text-primary/80">98.2% Nodes Operational</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Live Threat Feed</CardTitle>
          <CardDescription>Real-time anomaly detection logs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors cursor-pointer">
                <div className="p-2 rounded-full bg-red-500/10">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Coordinated Withdrawal Anomaly</h4>
                  <p className="text-xs text-muted-foreground mt-1">High volume of withdrawals detected across 3 regional cooperative banks.</p>
                </div>
                <div className="text-xs text-muted-foreground">{i * 2} mins ago</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
