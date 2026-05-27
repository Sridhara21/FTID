"use client";

import { Activity, AlertTriangle, Search, Lock, ShieldAlert, BarChart3, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const alerts = [
  { id: "SAR-9281", type: "Structuring", risk: "Critical", time: "2m ago", entity: "Entity A" },
  { id: "SAR-9280", type: "Velocity Limit", risk: "High", time: "15m ago", entity: "Entity B" },
  { id: "SAR-9279", type: "Dark Pattern", risk: "Medium", time: "1h ago", entity: "Entity C" },
];

export default function RegulatorDashboard() {
  return (
    <div className="grid gap-6 slide-up-fade">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Regulator Oversight Hub</h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-institutional mt-1">
            Central Bank & Compliance Control
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-primary/5 text-primary border-primary/20 text-xs">
            <Lock className="h-3 w-3 mr-2" />
            Lockdown Protocol
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-panel border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="h-24 w-24" /></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">System Liquidity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black tabular-nums tracking-tighter">₹4.2T</div>
            <p className="text-xs text-green-400 flex items-center mt-1"><TrendingUp className="h-3 w-3 mr-1" /> +1.2% Reserve Ratio</p>
          </CardContent>
        </Card>

        <Card className="glass-panel border-red-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldAlert className="h-24 w-24 text-red-500" /></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Active SARs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black tabular-nums tracking-tighter text-red-500">24</div>
            <p className="text-xs text-red-400 flex items-center mt-1"><AlertTriangle className="h-3 w-3 mr-1" /> Requires Review</p>
          </CardContent>
        </Card>

        <Card className="glass-panel border-blue-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Users className="h-24 w-24 text-blue-500" /></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Monitored Entities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black tabular-nums tracking-tighter">1,204</div>
            <p className="text-xs text-muted-foreground mt-1">Institutions & Nodes</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/30 pb-3">
            <CardTitle className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-red-400" /> High-Priority Compliance Queue
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border/50">
                  <TableHead className="text-[10px] uppercase font-black tracking-widest">ID</TableHead>
                  <TableHead className="text-[10px] uppercase font-black tracking-widest">Type</TableHead>
                  <TableHead className="text-[10px] uppercase font-black tracking-widest">Risk</TableHead>
                  <TableHead className="text-[10px] uppercase font-black tracking-widest text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow key={alert.id} className="border-b border-border/20 last:border-0 hover:bg-secondary/20">
                    <TableCell className="font-mono text-xs">{alert.id}</TableCell>
                    <TableCell className="text-xs">{alert.type}</TableCell>
                    <TableCell>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        alert.risk === 'Critical' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        alert.risk === 'High' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' :
                        'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                      }`}>
                        {alert.risk}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-6 text-[10px] uppercase tracking-widest">Review</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/30 pb-3">
            <CardTitle className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" /> Quick Simulations
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 grid gap-3">
            <Link href="/regulator/compliance" className="block p-3 rounded-md bg-secondary/30 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-background rounded-md shadow-sm border border-border/50 group-hover:text-primary transition-colors">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold">AML & Fraud Simulator</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Trigger alerts & SARs</p>
                </div>
              </div>
            </Link>
            <Link href="/regulator/policy" className="block p-3 rounded-md bg-secondary/30 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-background rounded-md shadow-sm border border-border/50 group-hover:text-primary transition-colors">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold">Policy & Rate Adjustment</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Simulate Economic Impact</p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
