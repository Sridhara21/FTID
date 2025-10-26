import { GdpChartCard } from "@/components/government/gdp-chart-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { SubsidyDistributionChart } from "@/components/government/subsidy-distribution-chart";
import { SubsidyOptimizationCard } from "@/components/government/subsidy-optimization-card";
import { DonationTrackerCard } from "@/components/government/donation-tracker-card";
import { LatestSchemesCard } from "@/components/government/latest-schemes-card";
import { EconomicIndicatorsCard } from "@/components/government/economic-indicators-card";
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
  const totalAssets = governmentBalanceSheetDataFy2526.assets.reduce((sum, item) => sum + item.value, 0);
  const totalLiabilities = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);
  const netPosition = totalAssets - totalLiabilities;
  return (
    <div className="grid gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Government Dashboard</h1>
            <p className="text-muted-foreground">
                Oversee national finances and economic indicators.
            </p>
        </div>
        <EconomicIndicatorsCard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <GdpChartCard />
            <RevenueChartCard />
        </div>
        <StatePerformanceSnapshotCard />
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Scale /> National Balance Sheet (FY25-26)
                </CardTitle>
                <CardDescription>A snapshot of the nation's assets and liabilities (in INR Crores).</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-400">Assets & Incomes</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead className="text-right">Value (Cr)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {governmentBalanceSheetDataFy2526.assets.map(asset => (
                                <TableRow key={asset.name}>
                                    <TableCell>{asset.name}</TableCell>
                                    <TableCell className="text-right font-mono text-green-400">
                                      {asset.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, notation: 'compact' })}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableHead>Total Assets</TableHead>
                                <TableHead className="text-right font-mono font-bold text-green-400">
                                  {totalAssets.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, notation: 'compact' })}
                                </TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-red-400">Liabilities & Expenses</h3>
                    <Table>
                         <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead className="text-right">Amount (Cr)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {governmentBalanceSheetDataFy2526.liabilities.map(liability => (
                                <TableRow key={liability.name}>
                                    <TableCell>{liability.name}</TableCell>
                                    <TableCell className="text-right font-mono text-red-400">
                                      {liability.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, notation: 'compact' })}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableHead>Total Liabilities</TableHead>
                                <TableHead className="text-right font-mono font-bold text-red-400">
                                  {totalLiabilities.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, notation: 'compact' })}
                                </TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                 <div className="md:col-span-2 pt-4 border-t">
                    <div className="flex justify-between items-center text-xl font-bold">
                        <span>Net Position</span>
                        <span className={`font-mono ${netPosition >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {netPosition.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, notation: 'compact' })}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <SubsidyDistributionChart />
            <SubsidyOptimizationCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <DonationTrackerCard />
            <LatestSchemesCard />
        </div>
    </div>
  );
}
