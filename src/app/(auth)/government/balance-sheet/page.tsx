
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
import { Scale, ChevronDown, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type BalanceSheetItem = {
    name: string;
    value: number;
    subItems?: { name: string; value: number }[];
};

const formatValue = (value: number) => {
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, notation: 'compact' });
};

const CollapsibleRow = ({ itemFy2526, itemProjected }: { itemFy2526: BalanceSheetItem, itemProjected: BalanceSheetItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const change = itemProjected.value - itemFy2526.value;
    const hasSubItems = itemFy2526.subItems && itemFy2526.subItems.length > 0;

    return (
        <>
            <TableRow 
                className={cn("font-semibold bg-secondary/30", hasSubItems && "cursor-pointer hover:bg-secondary/50")}
                onClick={() => hasSubItems && setIsOpen(!isOpen)}
            >
                <TableCell className="flex items-center gap-2">
                    {hasSubItems && (
                        isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                    )}
                    {itemFy2526.name}
                </TableCell>
                <TableCell className="text-right font-mono">{formatValue(itemFy2526.value)}</TableCell>
                <TableCell className="text-right font-mono">{formatValue(itemProjected.value)}</TableCell>
                <TableCell className={cn(
                    "text-right font-mono flex items-center justify-end gap-1",
                    change >= 0 ? "text-green-400" : "text-red-400"
                )}>
                    {change !== 0 && (change > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />)}
                    {formatValue(Math.abs(change))}
                </TableCell>
            </TableRow>
            {isOpen && hasSubItems && itemFy2526.subItems?.map((subItemFy2526, index) => {
                const subItemProjected = itemProjected.subItems?.[index];
                if (!subItemProjected) return null;
                const subChange = subItemProjected.value - subItemFy2526.value;

                return (
                    <TableRow key={subItemFy2526.name}>
                        <TableCell className="pl-12 text-muted-foreground">{subItemFy2526.name}</TableCell>
                        <TableCell className="text-right font-mono">{formatValue(subItemFy2526.value)}</TableCell>
                        <TableCell className="text-right font-mono">{formatValue(subItemProjected.value)}</TableCell>
                        <TableCell className={cn(
                            "text-right font-mono flex items-center justify-end gap-1",
                            subChange >= 0 ? "text-green-400" : "text-red-400"
                        )}>
                            {subChange !== 0 && (subChange > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />)}
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
    const totalExpenditureFy2526 = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);

    const totalReceiptsProjected = governmentBalanceSheetDataProjected.assets.reduce((sum, item) => sum + item.value, 0);
    const totalExpenditureProjected = governmentBalanceSheetDataProjected.liabilities.reduce((sum, item) => sum + item.value, 0);

    const receiptsChange = totalReceiptsProjected - totalReceiptsFy2526;
    const expenditureChange = totalExpenditureProjected - totalExpenditureFy2526;

    return (
        <div className="grid gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Scale /> National Balance Sheet
                    </CardTitle>
                    <CardDescription>A comparative snapshot of the nation's finances (values in INR Crores).</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary">Receipts</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead className="text-right">FY25-26</TableHead>
                                    <TableHead className="text-right">Projected</TableHead>
                                    <TableHead className="text-right">Change</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {governmentBalanceSheetDataFy2526.assets.map((item, index) => {
                                    const projectedItem = governmentBalanceSheetDataProjected.assets[index];
                                    if (!projectedItem) return null;
                                    return <CollapsibleRow key={item.name} itemFy2526={item} itemProjected={projectedItem} />;
                                })}
                            </TableBody>
                            <TableFooter>
                                <TableRow className="text-base">
                                    <TableHead>Total Receipts</TableHead>
                                    <TableHead className="text-right font-mono font-bold">{formatValue(totalReceiptsFy2526)}</TableHead>
                                    <TableHead className="text-right font-mono font-bold">{formatValue(totalReceiptsProjected)}</TableHead>
                                    <TableHead className={cn(
                                        "text-right font-mono font-bold flex items-center justify-end gap-1",
                                        receiptsChange >= 0 ? "text-green-400" : "text-red-400"
                                    )}>
                                        {receiptsChange !== 0 && (receiptsChange > 0 ? <TrendingUp /> : <TrendingDown />)}
                                        {formatValue(Math.abs(receiptsChange))}
                                    </TableHead>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary">Expenditure</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead className="text-right">FY25-26</TableHead>
                                    <TableHead className="text-right">Projected</TableHead>
                                    <TableHead className="text-right">Change</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                 {governmentBalanceSheetDataFy2526.liabilities.map((item, index) => {
                                    const projectedItem = governmentBalanceSheetDataProjected.liabilities[index];
                                    if (!projectedItem) return null;
                                    return <CollapsibleRow key={item.name} itemFy2526={item} itemProjected={projectedItem} />;
                                })}
                            </TableBody>
                            <TableFooter>
                                <TableRow className="text-base">
                                    <TableHead>Total Expenditure</TableHead>
                                    <TableHead className="text-right font-mono font-bold">{formatValue(totalExpenditureFy2526)}</TableHead>
                                    <TableHead className="text-right font-mono font-bold">{formatValue(totalExpenditureProjected)}</TableHead>
                                    <TableHead className={cn(
                                        "text-right font-mono font-bold flex items-center justify-end gap-1",
                                        expenditureChange > 0 ? "text-red-400" : "text-green-400" // More expense is "bad"
                                    )}>
                                        {expenditureChange !== 0 && (expenditureChange > 0 ? <TrendingUp /> : <TrendingDown />)}
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
