"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, ShieldCheck, Landmark, ArrowRight, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table";
import { autoCapturedIncome } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GlobalRoutingMap } from "@/components/citizen/global-routing-map";

export function DetailedTaxCalculator() {
  const [showGovView, setShowGovView] = useState(false);
  
  const totalIncome = autoCapturedIncome.sources.reduce((sum, item) => sum + item.amount, 0);
  const totalDeductions = autoCapturedIncome.deductions.reduce((sum, item) => sum + item.amount, 0);
  const taxableIncome = Math.max(0, totalIncome - totalDeductions);

  const calculateTax = (income: number) => {
    if (income <= 700000) return 0;
    let tax = 0;
    if (income > 300000) tax += Math.min(income - 300000, 400000) * 0.05;
    if (income > 700000) tax += Math.min(income - 700000, 300000) * 0.10;
    if (income > 1000000) tax += Math.min(income - 1000000, 200000) * 0.15;
    if (income > 1200000) tax += Math.min(income - 1200000, 300000) * 0.20;
    if (income > 1500000) tax += (income - 1500000) * 0.30;
    return tax * 1.04;
  };

  const estimatedTax = calculateTax(taxableIncome);
  const formatCurrency = (value: number) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });

  return (
    <div className="relative min-h-[800px]">
      <GlobalRoutingMap />

      <div className="relative z-10 p-4 md:p-8">
        <Card className="glass-panel shadow-2xl max-w-6xl mx-auto rounded-3xl border-white/60">
            <CardHeader className="pb-6 border-b border-white/50">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold uppercase tracking-[0.2em] text-slate-900">
                    <div className="p-2 bg-white/70 rounded-xl backdrop-blur-md shadow-sm border border-white/60"><FileText className="h-6 w-6 text-slate-900" /></div>
                    Tax Statement (FY 2026-27)
                    </CardTitle>
                    <CardDescription className="max-w-2xl mt-3 text-[11px] uppercase font-semibold tracking-widest text-slate-900/60">
                    Auto-calculated from your connected accounts and investments.
                    </CardDescription>
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="sm" className="h-10 font-bold text-[10px] uppercase tracking-widest bg-white/70 border-white/60 text-slate-900 hover:bg-white/80 hover:text-slate-900 transition-all shadow-sm rounded-xl backdrop-blur-md" onClick={() => setShowGovView(!showGovView)}>
                                <Eye className="mr-2 h-4 w-4" />
                                {showGovView ? "EXIT OFFICIAL VIEW" : "VIEW OFFICIAL FORMAT"}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-[10px] bg-white/70 backdrop-blur-2xl border-white/60 text-slate-900 rounded-lg p-3">Read-only view of the official tax department layout.</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            </CardHeader>
            
            <CardContent className="pt-8">
            {showGovView && (
                <div className="mb-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 backdrop-blur-md shadow-inner">
                    <AlertTriangle className="h-5 w-5 text-slate-500" />
                    <span>Official Format View • Read-Only • Formatted for Tax Authority</span>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-7 space-y-10">
                    <div>
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-4 flex items-center gap-2">
                            <Landmark className="h-4 w-4 text-slate-900/80" /> Income Intelligence
                        </h3>
                        <div className="border border-white/50 rounded-2xl overflow-x-auto bg-white/60 shadow-inner backdrop-blur-sm">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b border-white/50 hover:bg-transparent">
                                        <TableHead className="text-[10px] uppercase font-bold tracking-widest text-slate-900/50 py-4">Source</TableHead>
                                        <TableHead className="text-[10px] uppercase font-bold tracking-widest text-slate-900/50 text-center py-4">Audit</TableHead>
                                        <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest text-slate-900/50 py-4">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {autoCapturedIncome.sources.map(item => (
                                        <TableRow key={item.source} className="border-b border-white/40 hover:bg-white/60 transition-colors">
                                            <TableCell className="py-4 text-sm font-semibold text-slate-900/90">{item.source}</TableCell>
                                            <TableCell className="py-4 text-center">
                                                <div className="flex justify-center">
                                                    {item.verified ? (
                                                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 h-6 px-3 text-[9px] uppercase font-bold tracking-widest shadow-sm">Verified</Badge>
                                                    ) : (
                                                        <Badge variant="outline" className="text-slate-900/60 border-white/60 bg-white/60 h-6 px-3 text-[9px] uppercase font-bold tracking-widest shadow-sm">Pending</Badge>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 text-right font-headline text-sm tabular-nums font-bold text-slate-900">{formatCurrency(item.amount)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter className="bg-white/60">
                                    <TableRow className="hover:bg-transparent border-t border-white/50">
                                        <TableHead colSpan={2} className="text-[11px] uppercase font-bold tracking-widest text-slate-900/80 py-4">Gross Revenue</TableHead>
                                        <TableHead className="text-right font-headline text-base tabular-nums text-slate-900 font-bold py-4 ">{formatCurrency(totalIncome)}</TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-4 flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-emerald-700" /> Flow Deductions
                        </h3>
                        <div className="border border-white/50 rounded-2xl overflow-x-auto bg-white/60 shadow-inner backdrop-blur-sm">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b border-white/50 hover:bg-transparent">
                                        <TableHead className="text-[10px] uppercase font-bold tracking-widest text-slate-900/50 py-4">Section</TableHead>
                                        <TableHead className="text-[10px] uppercase font-bold tracking-widest text-slate-900/50 text-center py-4">Protocol</TableHead>
                                        <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest text-slate-900/50 py-4">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {autoCapturedIncome.deductions.map(item => (
                                        <TableRow key={item.section} className="border-b border-white/40 hover:bg-white/60 transition-colors">
                                            <TableCell className="py-4 text-sm font-semibold text-slate-900/90">{item.section}</TableCell>
                                            <TableCell className="py-4 text-center">
                                                <Badge className="bg-white/70 text-slate-900/80 border-white/60 h-6 px-3 text-[9px] uppercase font-bold tracking-widest shadow-sm">Auto-Routed</Badge>
                                            </TableCell>
                                            <TableCell className="py-4 text-right font-headline text-sm tabular-nums text-emerald-700 font-bold">-{formatCurrency(item.amount)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter className="bg-emerald-50/50">
                                    <TableRow className="hover:bg-transparent border-t border-emerald-200">
                                        <TableHead colSpan={2} className="text-[11px] uppercase font-bold tracking-widest text-emerald-700 py-4">Total Deductions</TableHead>
                                        <TableHead className="text-right font-headline text-base tabular-nums text-emerald-700 font-bold py-4 ">{formatCurrency(totalDeductions)}</TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </div>
                </div>
                
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <Card className="glass-panel h-fit sticky top-24 shadow-2xl rounded-3xl border-white/60">
                        <CardHeader className="pb-4 border-b border-white/50">
                            <div className="flex items-center justify-between mb-2">
                                <CardTitle className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Tax Compliance</CardTitle>
                                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 h-7 px-3 text-[10px] uppercase font-bold tracking-widest shadow-[0_0_10px_rgba(16,185,129,0.3)]">SECURE</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-6">
                            <div className="space-y-4 bg-white/60 p-6 rounded-2xl border border-white/50 shadow-inner">
                                <div className="flex justify-between items-center">
                                    <span className="text-[11px] text-slate-900/50 uppercase font-bold tracking-widest">Taxable Net</span>
                                    <span className="font-headline text-base font-bold tabular-nums text-slate-900/90">{formatCurrency(taxableIncome)}</span>
                                </div>
                                <Separator className="bg-white/70" />
                                <div className="flex flex-col items-center py-6 text-center">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900/50 mb-4">Estimated Liability (FY26-27)</p>
                                    <p className="text-4xl md:text-5xl font-headline font-bold tracking-tighter tabular-nums text-slate-900 ">{formatCurrency(estimatedTax)}</p>
                                    <p className="text-[9px] text-slate-900/70 mt-8 font-bold uppercase tracking-[0.2em] bg-white/70 px-4 py-2 rounded-full border border-white/60 shadow-sm text-center">Auto-calculated • Ready for e-filing</p>
                                </div>
                            </div>
                            <Button className="w-full h-14 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] bg-slate-900 text-white hover:bg-slate-800 border-none shadow-xl transition-all">
                                Authorize Settlement <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
