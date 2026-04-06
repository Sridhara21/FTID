"use client";

import { EconomicIndicatorsCard } from "@/components/government/economic-indicators-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { MultiMetricChart } from "@/components/government/multi-metric-chart";
import { EconomicHeatmap } from "@/components/government/economic-heatmap";
import { SectorActivityChart } from "@/components/government/sector-activity-chart";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table";
import { governmentBalanceSheetDataFy2526 } from "@/lib/placeholder-data";
import { Scale, Globe, ShieldAlert, BadgeInfo, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collection } from "firebase/firestore";

export default function GovernmentDashboard() {
  const db = useFirestore();
  
  const transactionsQuery = useMemoFirebase(() => {
    if (!db) return null;
    return collection(db, "transactions");
  }, [db]);

  const { data: allTransactions, isLoading: isTxnLoading } = useCollection(transactionsQuery);

  const totalReceipts = governmentBalanceSheetDataFy2526.assets.reduce((sum, item) => sum + item.value, 0);
  const totalExpenditure = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);

  const formatCr = (val: number) => `₹${val.toLocaleString('en-IN')} Cr`;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header Layer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">FTID — Government Oversight System</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[9px] font-bold uppercase tracking-institutional px-2 py-0.5">
              Institutional Intelligence
            </Badge>
            <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-widest">
              Ministry of Finance • Data Intelligence Unit
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/30 border border-border/50 rounded-md">
            <Globe className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Network Status: {isTxnLoading ? "SYNCING..." : "SYNCED"}</span>
          </div>
          <p className="text-[9px] text-muted-foreground italic font-medium uppercase tracking-widest">Indicative insights, not official statistics</p>
        </div>
      </div>
      
      {/* Sovereign Integrity Banner */}
      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg flex items-center justify-between gap-4 group hover:bg-primary/10 transition-colors">
        <div className="flex items-center gap-3">
            <ShieldAlert className="h-4 w-4 text-primary shrink-0 animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-sovereign text-primary/90 leading-tight">
                Anonymized Aggregates: Based on multi-node FTID verification protocols across Citizen and Business flows.
            </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
            <BadgeInfo className="h-3 w-3" />
            Integrity Verification {isTxnLoading ? <Loader2 className="h-2 w-2 animate-spin ml-1" /> : "Active"}
        </div>
      </div>

      {/* Row 1: Macro Indicators */}
      <div className="w-full">
        <EconomicIndicatorsCard />
      </div>
      
      {/* Row 2: Analytics Core */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
        <div className="lg:col-span-8">
          <MultiMetricChart />
        </div>
        <div className="lg:col-span-4">
          <RevenueChartCard />
        </div>
      </div>

      {/* Row 3: Sector & State activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
        <SectorActivityChart />
        <EconomicHeatmap />
      </div>

      {/* Row 4: Sovereign Ledger */}
      <div className="w-full">
          <Card className="border-border/50 bg-card/50 overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/30 bg-secondary/10">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2 text-[10px] font-black uppercase tracking-institutional">
                    <Scale className="h-4 w-4 text-primary" /> Sovereign Ledger (Union Budget Summary)
                  </CardTitle>
                  <CardDescription className="text-[10px] uppercase tracking-widest font-bold mt-1">Consolidated Estimates for FY 2026-27</CardDescription>
                </div>
                <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest border-primary/20 text-primary">Budget Estimates</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-0">
              <div className="p-6 border-r border-border/30">
                <h3 className="text-[10px] font-black uppercase tracking-institutional text-green-400/80 mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400" /> Revenue & Capital Receipts
                </h3>
                <Table>
                  <TableHeader className="bg-secondary/20">
                    <TableRow className="hover:bg-transparent h-10">
                      <TableHead className="text-[9px] uppercase font-black tracking-widest py-2">Stream Source</TableHead>
                      <TableHead className="text-right text-[9px] uppercase font-black tracking-widest py-2">Value (Cr)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {governmentBalanceSheetDataFy2526.assets.map(asset => (
                      <TableRow key={asset.name} className="h-10 hover:bg-secondary/10 border-b last:border-0 group">
                        <TableCell className="py-2 text-[10px] font-bold uppercase truncate">{asset.name}</TableCell>
                        <TableCell className="py-2 text-right font-mono text-[10px] text-green-400 tabular-nums">
                          {formatCr(asset.value)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter className="bg-transparent border-t-2 border-green-400/20">
                    <TableRow className="h-10 hover:bg-transparent">
                      <TableHead className="text-[10px] font-black uppercase text-foreground py-2">Gross Receipts</TableHead>
                      <TableHead className="text-right font-mono font-black text-green-400 tabular-nums text-[10px] py-2">
                        {formatCr(totalReceipts)}
                      </TableHead>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              <div className="p-6">
                <h3 className="text-[10px] font-black uppercase tracking-institutional text-red-400/80 mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400" /> Consolidated Outlay
                </h3>
                <Table>
                  <TableHeader className="bg-secondary/20">
                    <TableRow className="hover:bg-transparent h-10">
                      <TableHead className="text-[9px] uppercase font-black tracking-widest py-2">Sectoral Allocation</TableHead>
                      <TableHead className="text-right text-[9px] uppercase font-black tracking-widest py-2">Value (Cr)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {governmentBalanceSheetDataFy2526.liabilities.map(liability => (
                      <TableRow key={liability.name} className="h-10 hover:bg-secondary/10 border-b last:border-0 group">
                        <TableCell className="py-2 text-[10px] font-bold uppercase truncate">{liability.name}</TableCell>
                        <TableCell className="py-2 text-right font-mono text-[10px] text-red-400 tabular-nums">
                          {formatCr(liability.value)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter className="bg-transparent border-t-2 border-red-400/20">
                    <TableRow className="h-10 hover:bg-transparent">
                      <TableHead className="text-[10px] font-black uppercase text-foreground py-2">Total Expenditure</TableHead>
                      <TableHead className="text-right font-mono font-black text-red-400 tabular-nums text-[10px] py-2">
                        {formatCr(totalExpenditure)}
                      </TableHead>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </CardContent>
          </Card>
      </div>
      
      {/* Footer Branding */}
      <div className="p-4 bg-secondary/20 rounded-lg border border-border/50 text-center">
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-sovereign">
          Macro-Economic Analytics Powered by FTID Sovereign Data Streams — Ministry of Finance Authorization Level 4
        </p>
      </div>
    </div>
  );
}
