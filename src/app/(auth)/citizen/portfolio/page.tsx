
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
import { portfolioData, portfolioAiSuggestions } from "@/lib/placeholder-data";
import { Briefcase, CandlestickChart, Folders, Bitcoin, TrendingUp, TrendingDown, Shield, Gem, PiggyBank, Landmark, Bot, Lightbulb } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PortfolioPage() {
    const totalStocks = portfolioData.stocks.reduce((sum, item) => sum + item.value, 0);
    const totalMutualFunds = portfolioData.mutualFunds.reduce((sum, item) => sum + item.value, 0);
    const totalCrypto = portfolioData.crypto.reduce((sum, item) => sum + item.value, 0);
    const totalFixedDeposits = portfolioData.fixedDeposits.reduce((sum, item) => sum + item.value, 0);
    const totalDigitalGold = portfolioData.digitalGold.reduce((sum, item) => sum + item.value, 0);
    const totalBonds = portfolioData.bonds.reduce((sum, item) => sum + item.value, 0);
    const totalEmergencyFund = portfolioData.emergencyFund.reduce((sum, item) => sum + item.value, 0);

    const totalPortfolioValue = totalStocks + totalMutualFunds + totalCrypto + totalFixedDeposits + totalDigitalGold + totalBonds + totalEmergencyFund;

    const totalDayGain = 
        portfolioData.stocks.reduce((sum, item) => sum + item.changeValue, 0) +
        portfolioData.mutualFunds.reduce((sum, item) => sum + item.changeValue, 0) +
        portfolioData.crypto.reduce((sum, item) => sum + item.changeValue, 0);
    
    const dayGainPercentage = totalPortfolioValue > totalDayGain ? (totalDayGain / (totalPortfolioValue - totalDayGain)) * 100 : 0;

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 });
    };

    return (
        <div className="grid grid-cols-1 gap-8">
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
                        <Separator />

                        {/* Fixed Deposits Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><PiggyBank className="text-primary"/> Fixed Deposits</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Bank</TableHead>
                                        <TableHead className="text-right">Value</TableHead>
                                        <TableHead className="text-right">Interest Rate</TableHead>
                                        <TableHead className="text-right">Maturity Date</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {portfolioData.fixedDeposits.map(fd => (
                                        <TableRow key={fd.bank}>
                                            <TableCell>{fd.bank}</TableCell>
                                            <TableCell className="text-right font-mono">{formatCurrency(fd.value)}</TableCell>
                                            <TableCell className="text-right">{fd.interestRate}</TableCell>
                                            <TableCell className="text-right">{fd.maturityDate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead colSpan={1}>Total Fixed Deposit Value</TableHead>
                                        <TableHead className="text-right font-bold font-mono">{formatCurrency(totalFixedDeposits)}</TableHead>
                                        <TableHead colSpan={2} />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                        <Separator />

                        {/* Digital Gold, Bonds, Emergency Fund Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Gem className="text-primary"/> Digital Gold</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Grams</TableHead>
                                            <TableHead className="text-right">Value</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {portfolioData.digitalGold.map((gold, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{gold.grams}g</TableCell>
                                                <TableCell className="text-right font-mono">{formatCurrency(gold.value)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Landmark className="text-primary"/> Bonds</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead className="text-right">Value</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {portfolioData.bonds.map(bond => (
                                            <TableRow key={bond.name}>
                                                <TableCell>{bond.name}</TableCell>
                                                <TableCell className="text-right font-mono">{formatCurrency(bond.value)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Shield className="text-primary"/> Emergency Fund</h3>
                                 <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Account</TableHead>
                                            <TableHead className="text-right">Value</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {portfolioData.emergencyFund.map(fund => (
                                            <TableRow key={fund.account}>
                                                <TableCell>{fund.account}</TableCell>
                                                <TableCell className="text-right font-mono">{formatCurrency(fund.value)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bot className="text-primary" /> AI Portfolio Suggestions
                    </CardTitle>
                    <CardDescription>
                        Personalized insights to help you optimize your investment strategy.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {portfolioAiSuggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                            <div className="pt-1">
                                <Lightbulb className="h-5 w-5 text-primary flex-shrink-0"/>
                            </div>
                            <div>
                                <h4 className="font-semibold">{suggestion.title}</h4>
                                <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
