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

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Scale /> National Balance Sheet
                </CardTitle>
                <CardDescription>A comparative snapshot of the nation's assets and liabilities (in INR Crores).</CardDescription>
            </CardHeader>
            <CardContent>
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
                                {governmentBalanceSheetDataFy2526.assets.map(asset => (
                                    <TableRow key={asset.name}>
                                        <TableCell>{asset.name}</TableCell>
                                        <TableCell className="text-right font-mono text-green-400">
                                          {formatValue(asset.value)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableHead>Total Assets</TableHead>
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
                                {governmentBalanceSheetDataProjected.assets.map(asset => (
                                    <TableRow key={asset.name}>
                                        <TableCell>{asset.name}</TableCell>
                                        <TableCell className="text-right font-mono text-green-400">
                                          {formatValue(asset.value)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableHead>Total Assets</TableHead>
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
                                {governmentBalanceSheetDataFy2526.liabilities.map(liability => (
                                    <TableRow key={liability.name}>
                                        <TableCell>{liability.name}</TableCell>
                                        <TableCell className="text-right font-mono text-red-400">
                                          {formatValue(liability.value)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableHead>Total Liabilities</TableHead>
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
                                {governmentBalanceSheetDataProjected.liabilities.map(liability => (
                                    <TableRow key={liability.name}>
                                        <TableCell>{liability.name}</TableCell>
                                        <TableCell className="text-right font-mono text-red-400">
                                          {formatValue(liability.value)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableHead>Total Liabilities</TableHead>
                                    <TableHead className="text-right font-mono font-bold text-red-400">
                                      {formatValue(totalLiabilitiesProjected)}
                                    </TableHead>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>

                <div className="pt-8 border-t mt-8">
                     <div className="grid grid-cols-2 gap-8 text-center">
                        <div>
                             <p className="text-muted-foreground">Net Position (FY25-26)</p>
                             <p className={`text-2xl font-bold font-mono ${netPositionFy2526 >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {formatValue(netPositionFy2526)}
                            </p>
                        </div>
                        <div>
                             <p className="text-muted-foreground">Net Position (Projected)</p>
                             <p className={`text-2xl font-bold font-mono ${netPositionProjected >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {formatValue(netPositionProjected)}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

    