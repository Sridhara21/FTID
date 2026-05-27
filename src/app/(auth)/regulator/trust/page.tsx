"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, CheckCircle2, Info } from "lucide-react";

export default function TrustIndexPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Financial Trust Index</h1>
        <p className="text-muted-foreground">
          National aggregate trust metric and institutional compliance scoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 flex items-center justify-center border-border/50 bg-gradient-to-br from-green-500/10 to-background p-12">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>
              <div className="relative p-8 rounded-full border-4 border-green-500 bg-background flex items-center justify-center">
                <span className="text-6xl font-black text-green-500">894</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">National Trust Score</h2>
              <p className="text-muted-foreground">Out of 1000. Exceptional Institutional Integrity.</p>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Compliant Banks</CardTitle>
            <CardDescription>Institutions leading in transparency.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['State Bank Core', 'HDFC Nexus', 'ICICI Prime', 'Axis Global'].map((bank, i) => (
                <div key={bank} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="font-medium text-sm">{bank}</span>
                  </div>
                  <span className="text-xs font-bold bg-green-500/20 text-green-600 px-2 py-1 rounded">
                    {99 - i}% Rating
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
