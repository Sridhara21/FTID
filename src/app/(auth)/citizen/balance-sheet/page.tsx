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

export default function BalanceSheetPage() {
    const totalAssets = balanceSheetData.assets.reduce((sum, item) => sum + item.value, 0);
    const totalLiabilities = balanceSheetData.liabilities.reduce((sum, item) => sum + item.value, 0);
    const netWorth = totalAssets - totalLiabilities;
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Scale /> Personal Balance Sheet
                </CardTitle>
                <CardDescription>A snapshot of your assets and liabilities.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-400">Assets</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Asset</TableHead>
                                <TableHead className="text-right">Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {balanceSheetData.assets.map(asset => (
                                <TableRow key={asset.name}>
                                    <TableCell>{asset.name}</TableCell>
                                    <TableCell className="text-right font-mono text-green-400">
                                      {asset.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableHead>Total Assets</TableHead>
                                <TableHead className="text-right font-mono font-bold text-green-400">
                                  {totalAssets.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                </TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-red-400">Liabilities</h3>
                    <Table>
                         <TableHeader>
                            <TableRow>
                                <TableHead>Liability</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {balanceSheetData.liabilities.map(liability => (
                                <TableRow key={liability.name}>
                                    <TableCell>{liability.name}</TableCell>
                                    <TableCell className="text-right font-mono text-red-400">
                                      {liability.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableHead>Total Liabilities</TableHead>
                                <TableHead className="text-right font-mono font-bold text-red-400">
                                  {totalLiabilities.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                </TableHead>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                 <div className="md:col-span-2 pt-4 border-t">
                    <div className="flex justify-between items-center text-xl font-bold">
                        <span>Net Worth</span>
                        <span className={`font-mono ${netWorth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {netWorth.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
