import { EconomicIndicatorsCard } from "@/components/government/economic-indicators-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { SubsidyOptimizationCard } from "@/components/government/subsidy-optimization-card";
import { StatePerformanceSnapshotCard } from "@/components/government/state-performance-snapshot-card";
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
import { Scale, Info, Globe, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";


export default function GovernmentDashboard() {
  const totalReceipts = governmentBalanceSheetDataFy2526.assets.reduce((sum, item) => sum + item.value, 0);
  const totalExpenditure = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);
  const netPosition = totalReceipts - totalExpenditure;

  const formatCr = (val: number) => `₹${val.toLocaleString('en-IN')} Cr`;

  return (
    <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">FTID — Government Oversight System</h1>
                <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">
                        Institutional Intelligence
                    </Badge>
                    <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-widest">
                        Ministry of Finance • Data Intelligence Unit
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/30 border border-border/50 rounded-md">
                    <Globe className="h-3 w-3 text-primary/70" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Network Status: SYNCED</span>
                </div>
                <p className="text-[9px] text-muted-foreground italic font-medium">Indicative insights, not official statistics</p>
            </div>
        </div>
        
        <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-3">
            <ShieldAlert className="h-4 w-4 text-primary" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                Data Sovereignty: Based on anonymized FTID transaction aggregates from Citizen and Business flows.
            </p>
        </div>

        <EconomicIndicatorsCard />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
                <MultiMetricChart />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SectorActivityChart />
                    <EconomicHeatmap />
                </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
                <RevenueChartCard />
                <StatePerformanceSnapshotCard />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
                <Card>
                    <CardHeader className="pb-2 border-b border-border/30">
                        <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-institutional">
                            <Scale className="h-4 w-4 text-primary" /> Sovereign Ledger (Summary)
                        </CardTitle>
                        <CardDescription className="text-xs">Consolidated Receipts vs Expenditure FY 2026-27.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-institutional text-green-400/80 border-b border-green-400/10 pb-1">Receipts</h3>
                            <Table>
                                <TableHeader className="bg-secondary/20">
                                    <TableRow className="hover:bg-transparent h-8">
                                        <TableHead className="text-[9px] uppercase font-bold">Source Item</TableHead>
                                        <TableHead className="text-right text-[9px] uppercase font-bold">Value (Cr)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {governmentBalanceSheetDataFy2526.assets.map(asset => (
                                        <TableRow key={asset.name} className="h-8 hover:bg-secondary/10 border-b last:border-0">
                                            <TableCell className="py-2 text-[10px] font-bold">{asset.name}</TableCell>
                                            <TableCell className="py-2 text-right font-mono text-[10px] text-green-400 tabular-nums">
                                            {formatCr(asset.value)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter className="bg-transparent border-t-2 border-green-400/20">
                                    <TableRow className="h-10 hover:bg-transparent">
                                        <TableHead className="text-[10px] font-black uppercase text-foreground">Total Receipts</TableHead>
                                        <TableHead className="text-right font-mono font-black text-green-400 tabular-nums text-[10px]">
                                        {formatCr(totalReceipts)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-institutional text-red-400/80 border-b border-red-400/10 pb-1">Expenditure</h3>
                            <Table>
                                <TableHeader className="bg-secondary/20">
                                    <TableRow className="hover:bg-transparent h-8">
                                        <TableHead className="text-[9px] uppercase font-bold">Expenditure Item</TableHead>
                                        <TableHead className="text-right text-[9px] uppercase font-bold">Amount (Cr)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {governmentBalanceSheetDataFy2526.liabilities.map(liability => (
                                        <TableRow key={liability.name} className="h-8 hover:bg-secondary/10 border-b last:border-0">
                                            <TableCell className="py-2 text-[10px] font-bold">{liability.name}</TableCell>
                                            <TableCell className="py-2 text-right font-mono text-[10px] text-red-400 tabular-nums">
                                            {formatCr(liability.value)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter className="bg-transparent border-t-2 border-red-400/20">
                                    <TableRow className="h-10 hover:bg-transparent">
                                        <TableHead className="text-[10px] font-black uppercase text-foreground">Total Expenditure</TableHead>
                                        <TableHead className="text-right font-mono font-black text-red-400 tabular-nums text-[10px]">
                                        {formatCr(totalExpenditure)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-5">
                <SubsidyOptimizationCard />
            </div>
        </div>
        
        <div className="p-4 bg-secondary/20 rounded-lg border border-border/50 text-center">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-sovereign">
                System Analytics Powered by FTID Citizen and Business Transaction Flows
            </p>
        </div>
    </div>
  );
}
