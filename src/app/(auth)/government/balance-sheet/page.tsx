"use client";

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
import { governmentBalanceSheetDataFy2526, governmentBalanceSheetDataProjected } from "@/lib/placeholder-data";
import { Scale, ChevronDown, ChevronRight, TrendingUp, TrendingDown, BadgeInfo } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type BalanceSheetItem = {
    name: string;
    value: number;
    subItems?: { name: string; value: number }[];
};

const formatValue = (value: number) => {
    return `₹${value.toLocaleString('en-IN')} Cr`;
};

const CollapsibleRow = ({ itemFy2526, itemProjected }: { itemFy2526: BalanceSheetItem, itemProjected: BalanceSheetItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const change = itemProjected.value - itemFy2526.value;
    const hasSubItems = itemFy2526.subItems && itemFy2526.subItems.length > 0;

    return (
        <>
            <TableRow 
                className={cn("font-semibold hover:bg-secondary/10 transition-colors", hasSubItems && "cursor-pointer")}
                onClick={() => hasSubItems && setIsOpen(!isOpen)}
            >
                <TableCell className="flex items-center gap-2 py-3">
                    {hasSubItems && (
                        isOpen ? <ChevronDown className="h-4 w-4 text-primary" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="text-xs font-bold uppercase tracking-tight">{itemFy2526.name}</span>
                </TableCell>
                <TableCell className="text-right font-mono text-xs tabular-nums">{formatValue(itemFy2526.value)}</TableCell>
                <TableCell className="text-right font-mono text-xs tabular-nums font-bold text-primary">{formatValue(itemProjected.value)}</TableCell>
                <TableCell className={cn(
                    "text-right font-mono text-[10px] tabular-nums flex items-center justify-end gap-1 py-3",
                    change >= 0 ? "text-green-400" : "text-red-400"
                )}>
                    {change !== 0 && (change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />)}
                    {formatValue(Math.abs(change))}
                </TableCell>
            </TableRow>
            {isOpen && hasSubItems && itemFy2526.subItems?.map((subItemFy2526, index) => {
                const subItemProjected = itemProjected.subItems?.[index];
                if (!subItemProjected) return null;
                const subChange = subItemProjected.value - subItemFy2526.value;

                return (
                    <TableRow key={subItemFy2526.name} className="bg-secondary/5 border-l-2 border-primary/20">
                        <TableCell className="pl-12 text-[10px] font-medium text-muted-foreground uppercase py-2">{subItemFy2526.name}</TableCell>
                        <TableCell className="text-right font-mono text-[10px] tabular-nums opacity-80">{formatValue(subItemFy2526.value)}</TableCell>
                        <TableCell className="text-right font-mono text-[10px] tabular-nums font-bold">{formatValue(subItemProjected.value)}</TableCell>
                        <TableCell className={cn(
                            "text-right font-mono text-[9px] tabular-nums flex items-center justify-end gap-1 py-2",
                            subChange >= 0 ? "text-green-400" : "text-red-400"
                        )}>
                            {formatValue(Math.abs(subChange))}
                        </TableCell>
                    </TableRow>
                );
            })}
        </>
    );
};

export default function GovernmentBalanceSheetPage() {
    const totalReceiptsFy2526 = governmentBalanceSheetDataFy2526.assets.reduce((sum, item) => sum + item.value, 0);
    const totalReceiptsProjected = governmentBalanceSheetDataProjected.assets.reduce((sum, item) => sum + item.value, 0);
    const receiptsChange = totalReceiptsProjected - totalReceiptsFy2526;

    const totalExpenditureFy2526 = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);
    const totalExpenditureProjected = governmentBalanceSheetDataProjected.liabilities.reduce((sum, item) => sum + item.value, 0);
    const expenditureChange = totalExpenditureProjected - totalExpenditureFy2526;

    return (
        <div className="grid gap-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight">National Balance Sheet</h1>
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Financial Year 2026-27 (Estimates & Projections)</p>
            </div>

            <Card className="border-primary/20 bg-card/50">
                <CardHeader className="border-b border-border/50 pb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Scale className="text-primary" /> Sovereign Ledger Summary
                        </CardTitle>
                        <CardDescription className="text-xs">Comparative assessment of Union budget estimates.</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-bold uppercase text-[10px] tracking-widest px-3 py-1">
                        Institutional Grade Verification Active
                      </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-8 pt-6">
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-institutional text-green-400/80 flex items-center gap-2">
                          <BadgeInfo className="h-4 w-4" /> Consolidated Receipts
                        </h3>
                        <Table>
                            <TableHeader className="bg-secondary/30">
                                <TableRow className="hover:bg-transparent border-b-2">
                                    <TableHead className="text-[10px] uppercase font-bold tracking-widest">Revenue Item</TableHead>
                                    <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest">FY26 Est (Cr)</TableHead>
                                    <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest">FY27 Proj (Cr)</TableHead>
                                    <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest">Delta (Cr)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {governmentBalanceSheetDataFy2526.assets.map((item, index) => {
                                    const projectedItem = governmentBalanceSheetDataProjected.assets[index];
                                    if (!projectedItem) return null;
                                    return <CollapsibleRow key={item.name} itemFy2526={item} itemProjected={projectedItem} />;
                                })}
                            </TableBody>
                            <TableFooter className="bg-transparent border-t-2 border-green-400/30">
                                <TableRow className="hover:bg-transparent">
                                    <TableHead className="text-xs font-black uppercase text-foreground">Total Receipts</TableHead>
                                    <TableHead className="text-right font-mono text-xs tabular-nums opacity-60">{formatValue(totalReceiptsFy2526)}</TableHead>
                                    <TableHead className="text-right font-mono text-sm tabular-nums font-black text-green-400">{formatValue(totalReceiptsProjected)}</TableHead>
                                    <TableHead className={cn(
                                        "text-right font-mono text-[10px] tabular-nums font-bold flex items-center justify-end gap-1",
                                        receiptsChange >= 0 ? "text-green-400" : "text-red-400"
                                    )}>
                                        {formatValue(Math.abs(receiptsChange))}
                                    </TableHead>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>

                    <div>
                        <h3 className="text-xs font-black uppercase tracking-institutional text-red-400/80 flex items-center gap-2">
                          <BadgeInfo className="h-4 w-4" /> Consolidated Expenditure
                        </h3>
                        <Table>
                            <TableHeader className="bg-secondary/30">
                                <TableRow className="hover:bg-transparent border-b-2">
                                    <TableHead className="text-[10px] uppercase font-bold tracking-widest">Expenditure Item</TableHead>
                                    <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest">FY26 Est (Cr)</TableHead>
                                    <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest">FY27 Proj (Cr)</TableHead>
                                    <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest">Delta (Cr)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                 {governmentBalanceSheetDataFy2526.liabilities.map((item, index) => {
                                    const projectedItem = governmentBalanceSheetDataProjected.liabilities[index];
                                    if (!projectedItem) return null;
                                    return <CollapsibleRow key={item.name} itemFy2526={item} itemProjected={projectedItem} />;
                                })}
                            </TableBody>
                            <TableFooter className="bg-transparent border-t-2 border-red-400/30">
                                <TableRow className="hover:bg-transparent">
                                    <TableHead className="text-xs font-black uppercase text-foreground">Total Expenditure</TableHead>
                                    <TableHead className="text-right font-mono text-xs tabular-nums opacity-60">{formatValue(totalExpenditureFy2526)}</TableHead>
                                    <TableHead className="text-right font-mono text-sm tabular-nums font-black text-red-400">{formatValue(totalExpenditureProjected)}</TableHead>
                                    <TableHead className={cn(
                                        "text-right font-mono text-[10px] tabular-nums font-bold flex items-center justify-end gap-1",
                                        expenditureChange > 0 ? "text-red-400" : "text-green-400"
                                    )}>
                                        {formatValue(Math.abs(expenditureChange))}
                                    </TableHead>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}