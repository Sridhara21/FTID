"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock, ShieldCheck, Download, Trash2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const connections = [
  { name: "HDFC Bank (Primary)", type: "Account Aggregator", status: "Active", date: "Oct 12, 2025" },
  { name: "Income Tax Dept", type: "Tax Verification", status: "Active", date: "Sep 01, 2025" },
  { name: "Zerodha Broking", type: "Portfolio Sync", status: "Active", date: "Jan 15, 2026" },
];

export function DataPrivacyCenter() {
  return (
    <Card className="glass-panel h-full">
      <CardHeader className="pb-4 border-b border-white/40">
        <CardTitle className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900/90 flex items-center gap-2">
            <Lock className="h-4 w-4 text-slate-900/70" /> Privacy & Data
          </span>
          <ShieldCheck className="h-4 w-4 text-emerald-700" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 flex flex-col h-[calc(100%-60px)]">
        
        <div className="flex-1 space-y-4">
          <p className="text-[10px] font-bold text-slate-900/60 uppercase tracking-widest mb-2">Connected Institutions</p>
          
          <div className="space-y-3">
            {connections.map(conn => (
              <div key={conn.name} className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-white/50">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{conn.name}</p>
                  <p className="text-[10px] text-slate-900/60 uppercase tracking-widest font-medium mt-0.5">{conn.type} • Since {conn.date}</p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-bold text-rose-700 hover:bg-rose-100 hover:text-rose-800">
                  Revoke
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/40 flex gap-2">
          <Button variant="outline" className="flex-1 h-10 text-[10px] uppercase font-bold tracking-widest bg-white/60 border-white/50 text-slate-900 hover:bg-white/80">
            <Download className="h-3.5 w-3.5 mr-2" /> Export Data
          </Button>
          <Button variant="outline" className="flex-1 h-10 text-[10px] uppercase font-bold tracking-widest bg-white/60 border-white/50 text-rose-700 hover:bg-rose-100 hover:border-rose-200">
            <Trash2 className="h-3.5 w-3.5 mr-2" /> Delete Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
