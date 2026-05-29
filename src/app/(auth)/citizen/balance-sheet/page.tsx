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
import { balanceSheetData } from "@/lib/placeholder-data";
import { Scale } from "lucide-react";
import { BleedScanner } from "@/components/citizen/bleed-scanner";
import { MonthlyBudgetTracking } from "@/components/citizen/monthly-budget-tracking";

export default function BalanceSheetPage() {
    const totalAssets = balanceSheetData.assets.reduce((sum, item) => sum + item.value, 0);
    const totalLiabilities = balanceSheetData.liabilities.reduce((sum, item) => sum + item.value, 0);
    const netWorth = totalAssets - totalLiabilities;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative min-h-screen">
            {/* Apple OS Glass UI Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-slate-50">
                <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-purple-300/40 rounded-full blur-[180px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-300/40 rounded-[100%] blur-[150px]"></div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
                <MonthlyBudgetTracking />
                <BleedScanner />
            </div>

            <div className="lg:col-span-8">
                <Card className="glass-panel shadow-2xl h-full rounded-3xl border-white/60">
                    <CardHeader className="border-b border-white/50">
                        <CardTitle className="flex items-center gap-2 text-slate-900 uppercase tracking-[0.2em] font-bold text-lg ">
                            <Scale className="h-5 w-5 text-slate-900/80" /> Financial Overview
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-semibold tracking-widest text-slate-900/60">
                            Cryptographically Verified Terminal Snapshot
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        <div>
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-emerald-700 flex items-center gap-2 bg-emerald-100 w-fit px-4 py-2 rounded-xl border border-emerald-200 shadow-sm backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse"></span> Assets
                            </h3>
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b border-white/50 hover:bg-transparent">
                                        <TableHead className="text-[10px] text-slate-900/50 uppercase font-bold tracking-widest">Asset</TableHead>
                                        <TableHead className="text-right text-[10px] text-slate-900/50 uppercase font-bold tracking-widest">Value</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {balanceSheetData.assets.map(asset => (
                                        <TableRow key={asset.name} className="border-b border-white/40 hover:bg-white/60 transition-colors">
                                            <TableCell className="font-semibold text-xs text-slate-900/90">{asset.name}</TableCell>
                                            <TableCell className="text-right font-headline text-emerald-700 text-sm font-bold">
                                              {asset.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter className="bg-emerald-50/50">
                                    <TableRow className="hover:bg-transparent border-t border-emerald-200">
                                        <TableHead className="text-[11px] uppercase font-bold tracking-widest text-emerald-700">Total Assets</TableHead>
                                        <TableHead className="text-right font-headline font-bold text-emerald-700 text-base ">
                                          {totalAssets.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                        <div>
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-rose-700 flex items-center gap-2 bg-rose-100 w-fit px-4 py-2 rounded-xl border border-rose-200 shadow-sm backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-300 animate-pulse"></span> Liabilities
                            </h3>
                            <Table>
                                 <TableHeader>
                                    <TableRow className="border-b border-white/50 hover:bg-transparent">
                                        <TableHead className="text-[10px] text-slate-900/50 uppercase font-bold tracking-widest">Liability</TableHead>
                                        <TableHead className="text-right text-[10px] text-slate-900/50 uppercase font-bold tracking-widest">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {balanceSheetData.liabilities.map(liability => (
                                        <TableRow key={liability.name} className="border-b border-white/40 hover:bg-white/60 transition-colors">
                                            <TableCell className="font-semibold text-xs text-slate-900/90">{liability.name}</TableCell>
                                            <TableCell className="text-right font-headline text-rose-700 text-sm font-bold">
                                              {liability.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter className="bg-rose-50/50">
                                    <TableRow className="hover:bg-transparent border-t border-rose-200">
                                        <TableHead className="text-[11px] uppercase font-bold tracking-widest text-rose-700">Total Liabilities</TableHead>
                                        <TableHead className="text-right font-headline font-bold text-rose-700 text-base ">
                                          {totalLiabilities.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                         <div className="md:col-span-2 pt-8 mt-6 border-t border-white/50">
                            <div className="flex justify-between items-center bg-white/60 p-6 rounded-2xl border border-white/50 shadow-inner backdrop-blur-md flex-col md:flex-row gap-4">
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900/70">Live Net Worth</span>
                                <span className={`text-3xl md:text-4xl font-headline font-bold ${netWorth >= 0 ? 'text-emerald-700 ' : 'text-rose-700 '}`}>
                                  {netWorth.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
