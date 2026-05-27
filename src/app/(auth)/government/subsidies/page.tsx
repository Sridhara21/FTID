"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandCoins, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubsidyIntelligencePage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Subsidy Intelligence</h1>
          <p className="text-muted-foreground">
            End-to-end tracking of welfare disbursements and leakage detection.
          </p>
        </div>
        <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
          <HandCoins className="h-4 w-4" /> Trigger Disbursement
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-emerald-500/20 bg-emerald-500/5">
          <CardHeader>
            <CardTitle>Total Disbursed (FY26)</CardTitle>
            <CardDescription>Direct Benefit Transfers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-emerald-600">₹4.2 Lakh Cr</div>
            <div className="flex items-center gap-2 mt-4 text-sm text-emerald-600/80">
              <CheckCircle2 className="h-4 w-4" /> 99.8% Successful Delivery Rate
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader>
            <CardTitle>Leakage Intercepted</CardTitle>
            <CardDescription>Ghost beneficiaries blocked by AI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-red-600">₹1,420 Cr</div>
            <div className="flex items-center gap-2 mt-4 text-sm text-red-600/80">
              <ShieldAlert className="h-4 w-4" /> 1.2M fake accounts flagged
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Leakage Anomalies</CardTitle>
          <CardDescription>Potential friction points in the disbursement pipeline.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded border border-border/50 bg-secondary/10 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm">Aadhaar-PAN Mismatch Spikes</h4>
                <p className="text-xs text-muted-foreground mt-1">High rejection rate observed in District 14.</p>
              </div>
              <Button variant="outline" size="sm">Investigate</Button>
            </div>
            <div className="p-4 rounded border border-border/50 bg-secondary/10 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm">Duplicate Disbursement Claims</h4>
                <p className="text-xs text-muted-foreground mt-1">Agricultural subsidy claimed twice by 400 nodes.</p>
              </div>
              <Button variant="outline" size="sm">Block Payments</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
