
import { EconomicIndicatorsCard } from "@/components/government/economic-indicators-card";
import { GdpChartCard } from "@/components/government/gdp-chart-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { SubsidyDistributionChart } from "@/components/government/subsidy-distribution-chart";
import { SubsidyOptimizationCard } from "@/components/government/subsidy-optimization-card";
import { DonationTrackerCard } from "@/components/government/donation-tracker-card";
import { LatestSchemesCard } from "@/components/government/latest-schemes-card";
import { StatePerformanceSnapshotCard } from "@/components/government/state-performance-snapshot-card";
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
import { Scale } from "lucide-react";


export default function GovernmentDashboard() {
  const totalReceipts = governmentBalanceSheetDataFy2526.assets.reduce((sum, item) => sum + item.value, 0);
  const totalExpenditure = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);
  const netPosition = totalReceipts - totalExpenditure;

  const formatCr = (val: number) => `₹${val.toLocaleString('en-IN')} Cr`;

  return (
    <div className="grid gap-6">
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-tight">FTID — Government Oversight System</h1>
            <p className="text-muted-foreground text-sm">
                National Financial Infrastructure Dashboard
            </p>
        </div>
        
        <EconomicIndicatorsCard />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GdpChartCard />
            <RevenueChartCard />
        </div>

        <StatePerformanceSnapshotCard />

        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Scale className="h-5 w-5 text-primary" /> National Balance Sheet (Summary)
                </CardTitle>
                <CardDescription>Consolidated view of receipts and expenditure (FY 2025-26 Estimates).</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-400/80 border-b border-green-400/20 pb-1">Receipts</h3>
                    <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="hover:bg-transparent h-8">
                                <TableHead className="text-[10px] uppercase font-bold">Source Item</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-bold">Value (Cr)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {governmentBalanceSheetDataFy2526.assets.map(asset => (
                                <TableRow key={asset.name} className="h-9 hover:bg-secondary/10 border-b last:border-0">
                                    <TableCell className="py-2 text-xs font-medium">{asset.name}</TableCell>
                                    <TableCell className="py-2 text-right font-mono text-xs text-green-400 tabular-nums">
                                      {formatCr(asset.value)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className="bg-transparent border-t-2 border-green-400/30">
                            <TableRow className="h-10 hover:bg-transparent">
                                <TableHead className="text-xs font-bold text-foreground">Total Receipts</TableHead>
                                <TableHead className="text-right font-mono font-bold text-green-400 tabular-nums">
                                  {formatCr(totalReceipts)}
                                </TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-400/80 border-b border-red-400/20 pb-1">Expenditure</h3>
                    <Table>
                         <TableHeader className="bg-secondary/20">
                            <TableRow className="hover:bg-transparent h-8">
                                <TableHead className="text-[10px] uppercase font-bold">Expenditure Item</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-bold">Amount (Cr)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {governmentBalanceSheetDataFy2526.liabilities.map(liability => (
                                <TableRow key={liability.name} className="h-9 hover:bg-secondary/10 border-b last:border-0">
                                    <TableCell className="py-2 text-xs font-medium">{liability.name}</TableCell>
                                    <TableCell className="py-2 text-right font-mono text-xs text-red-400 tabular-nums">
                                      {formatCr(liability.value)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className="bg-transparent border-t-2 border-red-400/30">
                            <TableRow className="h-10 hover:bg-transparent">
                                <TableHead className="text-xs font-bold text-foreground">Total Expenditure</TableHead>
                                <TableHead className="text-right font-mono font-bold text-red-400 tabular-nums">
                                  {formatCr(totalExpenditure)}
                                </TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                 <div className="md:col-span-2 pt-4 border-t-4 border-double border-border/50">
                    <div className="flex justify-between items-center bg-secondary/20 p-4 rounded-md">
                        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">National Net Position (Fiscal Balance)</span>
                        <span className={`text-xl font-bold font-mono tabular-nums ${netPosition >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {formatCr(netPosition)}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SubsidyDistributionChart />
            <SubsidyOptimizationCard />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DonationTrackerCard />
            <LatestSchemesCard />
        </div>
    </div>
  );
}
