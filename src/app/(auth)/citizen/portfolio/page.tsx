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
    TableFooter,
} from "@/components/ui/table";
import { portfolioData } from "@/lib/placeholder-data";
import { Briefcase, CandlestickChart, Folders, Bitcoin, TrendingUp, TrendingDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PortfolioPage() {
    const totalStocks = portfolioData.stocks.reduce((sum, item) => sum + item.value, 0);
    const totalMutualFunds = portfolioData.mutualFunds.reduce((sum, item) => sum + item.value, 0);
    const totalCrypto = portfolioData.crypto.reduce((sum, item) => sum + item.value, 0);
    const totalPortfolioValue = totalStocks + totalMutualFunds + totalCrypto;

    const totalDayGain = 
        portfolioData.stocks.reduce((sum, item) => sum + item.changeValue, 0) +
        portfolioData.mutualFunds.reduce((sum, item) => sum + item.changeValue, 0) +
        portfolioData.crypto.reduce((sum, item) => sum + item.changeValue, 0);
    
    const dayGainPercentage = (totalDayGain / (totalPortfolioValue - totalDayGain)) * 100;

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Briefcase /> Investment Portfolio
                </CardTitle>
                <CardDescription>A consolidated view of all your investments.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Total Investment Value</p>
                        <p className="text-2xl font-bold">{formatCurrency(totalPortfolioValue)}</p>
                    </div>
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Day's Gain / Loss</p>
                        <p className={`text-2xl font-bold ${totalDayGain >= 0 ? "text-green-400" : "text-red-400"}`}>
                            {totalDayGain >= 0 ? '+' : ''}{formatCurrency(totalDayGain)}
                        </p>
                    </div>
                     <div className="p-4 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Day's Gain / Loss (%)</p>
                        <p className={`text-2xl font-bold ${dayGainPercentage >= 0 ? "text-green-400" : "text-red-400"}`}>
                            {dayGainPercentage.toFixed(2)}%
                        </p>
                    </div>
                </div>
                
                <div className="space-y-8">
                    {/* Stocks Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><CandlestickChart className="text-primary"/> Stocks</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Qty</TableHead>
                                    <TableHead className="text-right">Current Value</TableHead>
                                    <TableHead className="text-right">Day's Change</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {portfolioData.stocks.map(stock => (
                                    <TableRow key={stock.symbol}>
                                        <TableCell>
                                            <p className="font-medium">{stock.name}</p>
                                            <p className="text-xs text-muted-foreground">{stock.symbol}</p>
                                        </TableCell>
                                        <TableCell>{stock.quantity}</TableCell>
                                        <TableCell className="text-right font-mono">{formatCurrency(stock.value)}</TableCell>
                                        <TableCell className={`text-right font-mono ${stock.changeValue >= 0 ? "text-green-400" : "text-red-400"}`}>
                                            {stock.change}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableHead colSpan={2}>Total Stock Value</TableHead>
                                    <TableHead className="text-right font-bold font-mono">{formatCurrency(totalStocks)}</TableHead>
                                    <TableHead />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>

                    <Separator />

                    {/* Mutual Funds Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Folders className="text-primary"/> Mutual Funds</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Fund Name</TableHead>
                                    <TableHead>Units</TableHead>
                                    <TableHead className="text-right">Current Value</TableHead>
                                    <TableHead className="text-right">Day's Change</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {portfolioData.mutualFunds.map(mf => (
                                    <TableRow key={mf.name}>
                                        <TableCell>
                                            <p className="font-medium">{mf.name}</p>
                                            <p className="text-xs text-muted-foreground">NAV: {formatCurrency(mf.nav)}</p>
                                        </TableCell>
                                        <TableCell>{mf.units.toFixed(2)}</TableCell>
                                        <TableCell className="text-right font-mono">{formatCurrency(mf.value)}</TableCell>
                                        <TableCell className={`text-right font-mono ${mf.changeValue >= 0 ? "text-green-400" : "text-red-400"}`}>
                                            {mf.change}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                             <TableFooter>
                                <TableRow>
                                    <TableHead colSpan={2}>Total Mutual Fund Value</TableHead>
                                    <TableHead className="text-right font-bold font-mono">{formatCurrency(totalMutualFunds)}</TableHead>
                                    <TableHead />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>

                    <Separator />

                    {/* Crypto Section */}
                     <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Bitcoin className="text-primary"/> Cryptocurrency</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead className="text-right">Current Value</TableHead>
                                    <TableHead className="text-right">Day's Change</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {portfolioData.crypto.map(c => (
                                    <TableRow key={c.symbol}>
                                        <TableCell>
                                            <p className="font-medium">{c.name}</p>
                                            <p className="text-xs text-muted-foreground">{c.symbol}</p>
                                        </TableCell>
                                        <TableCell>{c.quantity}</TableCell>
                                        <TableCell className="text-right font-mono">{formatCurrency(c.value)}</TableCell>
                                        <TableCell className={`text-right font-mono ${c.changeValue >= 0 ? "text-green-400" : "text-red-400"}`}>
                                            {c.change}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                             <TableFooter>
                                <TableRow>
                                    <TableHead colSpan={2}>Total Crypto Value</TableHead>
                                    <TableHead className="text-right font-bold font-mono">{formatCurrency(totalCrypto)}</TableHead>
                                    <TableHead />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
