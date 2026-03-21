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
import { FileText, Eye, CheckCircle, AlertTriangle, ShieldCheck, Landmark, ArrowRight } from "lucide-react";
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

export function DetailedTaxCalculator() {
  const [showGovView, setShowGovView] = useState(false);
  
  const totalIncome = autoCapturedIncome.sources.reduce((sum, item) => sum + item.amount, 0);
  const totalDeductions = autoCapturedIncome.deductions.reduce((sum, item) => sum + item.amount, 0);
  const taxableIncome = Math.max(0, totalIncome - totalDeductions);

  /**
   * FY 2026-27 New Tax Regime (AY 2027-28) Logic:
   * 0-3L: NIL
   * 3L-7L: 5%
   * 7L-10L: 10%
   * 10L-12L: 15%
   * 12L-15L: 20%
   * Above 15L: 30%
   * Standard Deduction: ₹75,000 (Already included in autoCapturedIncome.deductions)
   * 87A Rebate: No tax if taxable income <= ₹7,00,000.
   */
  const calculateTax = (income: number) => {
    if (income <= 700000) return 0;

    let tax = 0;
    if (income > 300000) tax += Math.min(income - 300000, 400000) * 0.05;
    if (income > 700000) tax += Math.min(income - 700000, 300000) * 0.10;
    if (income > 1000000) tax += Math.min(income - 1000000, 200000) * 0.15;
    if (income > 1200000) tax += Math.min(income - 1200000, 300000) * 0.20;
    if (income > 1500000) tax += (income - 1500000) * 0.30;
    
    return tax * 1.04; // 4% Cess
  };

  const estimatedTax = calculateTax(taxableIncome);
  const formatCurrency = (value: number) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
                <CardTitle className="flex items-center gap-2 text-xl">
                <FileText className="h-6 w-6 text-primary" />
                Sovereign Tax Statement (FY 2026-27)
                </CardTitle>
                <CardDescription className="max-w-2xl mt-1 text-xs">
                FTID direct flow intelligence for AY 2027-28. Pre-compiled using verified sovereign transaction streams.
                <span className="block mt-1 font-bold text-primary italic uppercase tracking-widest text-[10px]">Flow-based Taxation • Institutional Integrity</span>
                </CardDescription>
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 font-bold text-[10px] uppercase tracking-widest bg-secondary/20" onClick={() => setShowGovView(!showGovView)}>
                            <Eye className="mr-2 h-3.5 w-3.5" />
                            {showGovView ? "EXIT AUDIT VIEW" : "SIMULATE AUDIT VIEW"}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-[10px]">Read-only simulation of a Revenue Officer's audit view.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {showGovView && (
            <div className="mb-6 p-3 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                <AlertTriangle className="h-4 w-4" />
                <span>RESTRICTED: Government Auditor Simulation Active • All Actions Logged</span>
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <Landmark className="h-3.5 w-3.5" /> Verified Income Streams
                    </h3>
                    <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="h-8 hover:bg-transparent">
                                <TableHead className="text-[10px] uppercase font-bold">Source</TableHead>
                                <TableHead className="text-[10px] uppercase font-bold text-center">Audit</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-bold">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {autoCapturedIncome.sources.map(item => (
                                <TableRow key={item.source} className="h-10 hover:bg-secondary/10 border-b last:border-0">
                                    <TableCell className="py-2 text-xs font-bold">{item.source}</TableCell>
                                    <TableCell className="py-2 text-center">
                                        <div className="flex justify-center">
                                            {item.verified ? (
                                                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 h-5 px-1.5 text-[9px] uppercase font-bold">Verified</Badge>
                                            ) : (
                                                <Badge variant="outline" className="text-yellow-400 border-yellow-500/30 h-5 px-1.5 text-[9px] uppercase font-bold">Pending</Badge>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-2 text-right font-mono text-xs tabular-nums">{formatCurrency(item.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className="bg-transparent border-t-2">
                            <TableRow className="h-10 hover:bg-transparent">
                                <TableHead colSpan={2} className="text-[10px] uppercase font-bold">Gross Income</TableHead>
                                <TableHead className="text-right font-mono text-xs tabular-nums text-foreground">{formatCurrency(totalIncome)}</TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5" /> Flow-Based Deductions
                    </h3>
                    <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="h-8 hover:bg-transparent">
                                <TableHead className="text-[10px] uppercase font-bold">Section</TableHead>
                                <TableHead className="text-[10px] uppercase font-bold text-center">Status</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-bold">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {autoCapturedIncome.deductions.map(item => (
                                <TableRow key={item.section} className="h-10 hover:bg-secondary/10 border-b last:border-0">
                                    <TableCell className="py-2 text-xs font-bold">{item.section}</TableCell>
                                    <TableCell className="py-2 text-center">
                                        <Badge className="bg-primary/10 text-primary border-primary/20 h-5 px-1.5 text-[9px] uppercase font-bold">Auto-Routed</Badge>
                                    </TableCell>
                                    <TableCell className="py-2 text-right font-mono text-xs tabular-nums text-red-400">-{formatCurrency(item.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                         <TableFooter className="bg-transparent border-t-2">
                            <TableRow className="h-10 hover:bg-transparent">
                                <TableHead colSpan={2} className="text-[10px] uppercase font-bold">Total Deductions</TableHead>
                                <TableHead className="text-right font-mono text-xs tabular-nums text-foreground">{formatCurrency(totalDeductions)}</TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
            <div className="lg:col-span-5">
                <Card className="bg-secondary/20 border-border/50 h-full">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-base font-bold">Tax Compliance</CardTitle>
                            <Badge className="bg-green-500/10 text-green-400 border-green-500/30 h-6 px-2 text-[10px] uppercase font-bold tracking-widest">Compliant</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3 bg-background/40 p-4 rounded-md border border-border/30">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground uppercase font-bold tracking-widest">Taxable Income</span>
                                <span className="font-mono font-bold tabular-nums">{formatCurrency(taxableIncome)}</span>
                            </div>
                             <Separator />
                             <div className="flex flex-col items-center py-4 text-center">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Estimated Liability (FY26-27)</p>
                                <p className="text-4xl font-black font-mono tracking-tighter tabular-nums text-primary">{formatCurrency(estimatedTax)}</p>
                                <p className="text-[9px] text-muted-foreground mt-4 font-medium uppercase tracking-wider italic">Institutional assessment complete • No manual filing required</p>
                            </div>
                        </div>
                        <Button className="w-full h-10 font-bold uppercase tracking-widest text-[11px] group">
                            Authorize Settlement <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
