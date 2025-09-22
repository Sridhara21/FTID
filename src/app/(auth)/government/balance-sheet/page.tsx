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
import { Scale } from "lucide-react";

type BalanceSheetItem = {
    name: string;
    value: number;
    subItems?: { name: string; value: number }[];
};

type BalanceSheetData = {
    assets: BalanceSheetItem[];
    liabilities: BalanceSheetItem[];
};


export default function GovernmentBalanceSheetPage() {
    const totalAssetsFy2526 = governmentBalanceSheetDataFy2526.assets.reduce((sum, item) => sum + item.value, 0);
    const totalLiabilitiesFy2526 = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);
    const netPositionFy2526 = totalAssetsFy2526 - totalLiabilitiesFy2526;
    
    const totalAssetsProjected = governmentBalanceSheetDataProjected.assets.reduce((sum, item) => sum + item.value, 0);
    const totalLiabilitiesProjected = governmentBalanceSheetDataProjected.liabilities.reduce((sum, item) => sum + item.value, 0);
    const netPositionProjected = totalAssetsProjected - totalLiabilitiesProjected;
    
    const formatValue = (value: number) => {
        return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, notation: 'compact' })
    };

     const formatDeficit = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value/100000) + 'L Cr';
    };
    
    const renderTableRows = (items: BalanceSheetItem[]) => {
        return items.flatMap(item => [
            <TableRow key={item.name} className="font-bold bg-secondary/50">
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right font-mono">{formatValue(item.value)}</TableCell>
            </TableRow>,
            ...(item.subItems ?? []).map(subItem => (
                <TableRow key={subItem.name}>
                    <TableCell className="pl-8 text-muted-foreground">{subItem.name}</TableCell>
                    <TableCell className="text-right font-mono">{formatValue(subItem.value)}</TableCell>
                </TableRow>
            ))
        ]);
    };

    return (
        <div className="grid gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Scale /> National Balance Sheet
                    </CardTitle>
                    <CardDescription>A comparative snapshot of the nation's assets and liabilities (in INR Crores).</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-8">
                        <div>
                             <p className="text-muted-foreground">Fiscal Deficit / Surplus (FY25-26)</p>
                             <p className={`text-2xl font-bold font-mono ${netPositionFy2526 >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {formatDeficit(netPositionFy2526)}
                            </p>
                        </div>
                        <div>
                             <p className="text-muted-foreground">Fiscal Deficit / Surplus (Projected)</p>
                             <p className={`text-2xl font-bold font-mono ${netPositionProjected >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {formatValue(netPositionProjected)}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-green-400">Assets & Incomes (FY25-26)</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead className="text-right">Value (Cr)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {renderTableRows(governmentBalanceSheetDataFy2526.assets)}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead>Total Receipts</TableHead>
                                        <TableHead className="text-right font-mono font-bold text-green-400">
                                          {formatValue(totalAssetsFy2526)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-green-400">Assets & Incomes (Projected)</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead className="text-right">Value (Cr)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {renderTableRows(governmentBalanceSheetDataProjected.assets)}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead>Total Receipts</TableHead>
                                        <TableHead className="text-right font-mono font-bold text-green-400">
                                          {formatValue(totalAssetsProjected)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-red-400">Liabilities & Expenses (FY25-26)</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead className="text-right">Amount (Cr)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {renderTableRows(governmentBalanceSheetDataFy2526.liabilities)}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead>Total Expenditure</TableHead>
                                        <TableHead className="text-right font-mono font-bold text-red-400">
                                          {formatValue(totalLiabilitiesFy2526)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-red-400">Liabilities & Expenses (Projected)</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead className="text-right">Amount (Cr)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {renderTableRows(governmentBalanceSheetDataProjected.liabilities)}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead>Total Expenditure</TableHead>
                                        <TableHead className="text-right font-mono font-bold text-red-400">
                                          {formatValue(totalLiabilitiesProjected)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
