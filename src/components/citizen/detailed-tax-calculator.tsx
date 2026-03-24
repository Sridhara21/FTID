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
    <Card className="border-primary/20 bg-card/50">
      <CardHeader className="pb-4 border-b border-border/30">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <FileText className="h-6 w-6 text-primary" />
                Tax Statement (FY 2026-27)
                </CardTitle>
                <CardDescription className="max-w-2xl mt-1 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                Verified sovereign transaction streams via FTID direct-routing.
                </CardDescription>
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" className="h-9 font-black text-[10px] uppercase tracking-widest bg-secondary/20" onClick={() => setShowGovView(!showGovView)}>
                            <Eye className="mr-2 h-3.5 w-3.5" />
                            {showGovView ? "EXIT AUDIT MODE" : "SIMULATE AUDIT"}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="text-[10px] bg-background">Read-only simulation of Revenue Officer view.</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        {showGovView && (
            <div className="mb-6 p-3 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-[10px] font-black uppercase tracking-sovereign flex items-center gap-3">
                <AlertTriangle className="h-4 w-4" />
                <span>RESTRICTED: Government Auditor Simulation • Actions Logged</span>
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-institutional text-muted-foreground mb-4 flex items-center gap-2">
                        <Landmark className="h-4 w-4 text-primary" /> Income Intelligence
                    </h3>
                    <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="h-10 hover:bg-transparent border-b">
                                <TableHead className="text-[10px] uppercase font-black py-2">Source</TableHead>
                                <TableHead className="text-[10px] uppercase font-black text-center py-2">Audit</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-black py-2">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {autoCapturedIncome.sources.map(item => (
                                <TableRow key={item.source} className="h-12 hover:bg-secondary/10 border-b last:border-0 group">
                                    <TableCell className="py-2.5 text-xs font-bold">{item.source}</TableCell>
                                    <TableCell className="py-2.5 text-center">
                                        <div className="flex justify-center">
                                            {item.verified ? (
                                                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 h-5 px-2 text-[9px] uppercase font-black tracking-widest">Verified</Badge>
                                            ) : (
                                                <Badge variant="outline" className="text-yellow-400 border-yellow-500/30 h-5 px-2 text-[9px] uppercase font-black tracking-widest">Pending</Badge>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-2.5 text-right font-mono text-xs tabular-nums font-bold">{formatCurrency(item.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className="bg-transparent border-t-2">
                            <TableRow className="h-12 hover:bg-transparent">
                                <TableHead colSpan={2} className="text-[10px] uppercase font-black">Gross Revenue</TableHead>
                                <TableHead className="text-right font-mono text-xs tabular-nums text-foreground font-black">{formatCurrency(totalIncome)}</TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-institutional text-muted-foreground mb-4 flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-accent" /> Flow Deductions
                    </h3>
                    <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="h-10 hover:bg-transparent border-b">
                                <TableHead className="text-[10px] uppercase font-black py-2">Section</TableHead>
                                <TableHead className="text-[10px] uppercase font-black text-center py-2">Protocol</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-black py-2">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {autoCapturedIncome.deductions.map(item => (
                                <TableRow key={item.section} className="h-12 hover:bg-secondary/10 border-b last:border-0 group">
                                    <TableCell className="py-2.5 text-xs font-bold">{item.section}</TableCell>
                                    <TableCell className="py-2.5 text-center">
                                        <Badge className="bg-primary/10 text-primary border-primary/20 h-5 px-2 text-[9px] uppercase font-black tracking-widest">Auto-Routed</Badge>
                                    </TableCell>
                                    <TableCell className="py-2.5 text-right font-mono text-xs tabular-nums text-red-400 font-bold">-{formatCurrency(item.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                         <TableFooter className="bg-transparent border-t-2">
                            <TableRow className="h-12 hover:bg-transparent">
                                <TableHead colSpan={2} className="text-[10px] uppercase font-black">Total Deductions</TableHead>
                                <TableHead className="text-right font-mono text-xs tabular-nums text-foreground font-black">{formatCurrency(totalDeductions)}</TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
            <div className="lg:col-span-5">
                <Card className="bg-secondary/30 border-primary/20 h-fit sticky top-24">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-sm font-black uppercase tracking-institutional">Tax Compliance</CardTitle>
                            <Badge className="bg-green-500/10 text-green-400 border-green-500/30 h-6 px-3 text-[10px] uppercase font-black tracking-widest">SECURE</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4 bg-background/40 p-5 rounded-md border border-border/30">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground uppercase font-black tracking-widest opacity-60">Taxable Net</span>
                                <span className="font-mono font-black tabular-nums">{formatCurrency(taxableIncome)}</span>
                            </div>
                             <Separator className="bg-border/30" />
                             <div className="flex flex-col items-center py-6 text-center">
                                <p className="text-[10px] font-black uppercase tracking-sovereign text-primary mb-3">Estimated Liability (FY26-27)</p>
                                <p className="text-5xl font-black font-mono tracking-tighter tabular-nums text-primary">{formatCurrency(estimatedTax)}</p>
                                <p className="text-[9px] text-muted-foreground mt-6 font-bold uppercase tracking-institutional italic">Institutional assessment — No filing required</p>
                            </div>
                        </div>
                        <Button className="w-full h-11 font-black uppercase tracking-institutional text-[11px] group shadow-xl shadow-primary/10">
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
