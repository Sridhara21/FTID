
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
import { FileText, Eye, CheckCircle, AlertTriangle } from "lucide-react";
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
  const taxableIncome = totalIncome - totalDeductions;
  // Simplified tax calculation for demo
  const estimatedTax = taxableIncome * 0.15 - 25000; 

  const formatCurrency = (value: number) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Pre-compiled Tax Statement
                </CardTitle>
                <CardDescription>
                FTID enables flow-based taxation, not form-based filing. This is a preview of your auto-compiled tax data.
                </CardDescription>
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" onClick={() => setShowGovView(!showGovView)}>
                            <Eye className="mr-2 h-4 w-4" />
                            {showGovView ? "Exit Government View" : "Simulate Government View"}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>This is a read-only simulation of what a tax officer sees.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent>
        {showGovView && (
            <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                You are now in read-only Government View simulation. No actions can be taken.
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Auto-Captured Income Sources</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Source</TableHead>
                                <TableHead>Verification</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {autoCapturedIncome.sources.map(item => (
                                <TableRow key={item.source}>
                                    <TableCell>{item.source}</TableCell>
                                    <TableCell>
                                        {item.verified ? <CheckCircle className="h-4 w-4 text-green-400" /> : <AlertTriangle className="h-4 w-4 text-yellow-400" />}
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{formatCurrency(item.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableHead colSpan={2}>Total Gross Income</TableHead>
                                <TableHead className="text-right font-bold font-mono">{formatCurrency(totalIncome)}</TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold mb-2">Auto-Captured Deductions</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Section</TableHead>
                                 <TableHead>Verification</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {autoCapturedIncome.deductions.map(item => (
                                <TableRow key={item.section}>
                                    <TableCell>{item.section}</TableCell>
                                    <TableCell>
                                        {item.verified ? <CheckCircle className="h-4 w-4 text-green-400" /> : <AlertTriangle className="h-4 w-4 text-yellow-400" />}
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{formatCurrency(item.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                         <TableFooter>
                            <TableRow>
                                <TableHead colSpan={2}>Total Deductions</TableHead>
                                <TableHead className="text-right font-bold font-mono">{formatCurrency(totalDeductions)}</TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
            <div className="space-y-6">
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle>Tax Summary</CardTitle>
                        <div className="flex items-center justify-between">
                         <CardDescription>Based on data captured by FTID.</CardDescription>
                         <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/20">
                            <CheckCircle className="mr-1 h-3 w-3"/>
                            Compliant
                         </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b">
                            <p className="text-muted-foreground">Total Gross Income</p>
                            <p className="font-mono font-semibold">{formatCurrency(totalIncome)}</p>
                        </div>
                         <div className="flex justify-between items-center py-2 border-b">
                            <p className="text-muted-foreground">Total Deductions</p>
                            <p className="font-mono font-semibold">- {formatCurrency(totalDeductions)}</p>
                        </div>
                         <div className="flex justify-between items-center py-2">
                            <p className="text-muted-foreground">Net Taxable Income</p>
                            <p className="font-mono font-semibold">{formatCurrency(taxableIncome)}</p>
                        </div>
                        <Separator />
                         <div className="flex justify-between items-center text-lg pt-2">
                            <p className="font-semibold">Estimated Tax Liability</p>
                            <p className="font-mono font-bold text-primary">{formatCurrency(estimatedTax)}</p>
                        </div>
                         <p className="text-xs text-muted-foreground pt-4">*This is a pre-compiled estimate for AY 2025-26. No filing is required if all data sources are verified.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
