
'use client';

import { useState, useEffect } from "react";
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
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/placeholder-data";
import { getPortfolioSuggestions, PortfolioOutput } from "@/ai/flows/portfolio-suggestions-flow";
import { Briefcase, CandlestickChart, Folders, Gem, TrendingUp, Shield, PiggyBank, Landmark, Bot, Lightbulb, CheckCircle, HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export default function PortfolioPage() {
    const [suggestions, setSuggestions] = useState<PortfolioOutput | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const totalStocks = portfolioData.stocks.reduce((sum, item) => sum + item.value, 0);
    const totalMutualFunds = portfolioData.mutualFunds.reduce((sum, item) => sum + item.value, 0);
    const totalFixedDeposits = portfolioData.fixedDeposits.reduce((sum, item) => sum + item.value, 0);
    const totalDigitalGold = portfolioData.digitalGold.reduce((sum, item) => sum + item.value, 0);
    const totalBonds = portfolioData.bonds.reduce((sum, item) => sum + item.value, 0);
    const totalEmergencyFund = portfolioData.emergencyFund.reduce((sum, item) => sum + item.value, 0);

    const totalPortfolioValue = totalStocks + totalMutualFunds + totalFixedDeposits + totalDigitalGold + totalBonds + totalEmergencyFund;

    const totalStocksDayGain = portfolioData.stocks.reduce((sum, item) => sum + item.changeValue, 0);
    const totalMutualFundsDayGain = portfolioData.mutualFunds.reduce((sum, item) => sum + item.changeValue, 0);

    useEffect(() => {
        async function fetchSuggestions() {
            setIsLoading(true);
            try {
                const portfolioSnapshot = {
                    stocks: portfolioData.stocks,
                    mutualFunds: portfolioData.mutualFunds,
                    fixedDeposits: portfolioData.fixedDeposits,
                    digitalGold: portfolioData.digitalGold,
                    bonds: portfolioData.bonds,
                    emergencyFund: portfolioData.emergencyFund
                };
                const result = await getPortfolioSuggestions({
                    portfolio: JSON.stringify(portfolioSnapshot),
                    totalValue: totalPortfolioValue
                });
                setSuggestions(result);
            } catch (error) {
                console.error("Error fetching portfolio suggestions:", error);
            }
            setIsLoading(false);
        }
        fetchSuggestions();
    }, [totalPortfolioValue]);


    const totalDayGain = totalStocksDayGain + totalMutualFundsDayGain;
    
    const dayGainPercentage = totalPortfolioValue > totalDayGain ? (totalDayGain / (totalPortfolioValue - totalDayGain)) * 100 : 0;

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 });
    };

    return (
        <div className="grid grid-cols-1 gap-8">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <Briefcase /> Investment Portfolio
                            </CardTitle>
                            <CardDescription>A consolidated view of all your investments with compliance intelligence.</CardDescription>
                        </div>
                         <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Badge variant="outline" className="flex items-center gap-1.5 bg-green-500/20 text-green-400 border-green-500/20 cursor-help">
                                        <CheckCircle className="h-3 w-3" />
                                        Auto-Reporting Active
                                    </Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Capital gains data is automatically reported to tax authorities via FTID.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
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
                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><CandlestickChart className="text-primary"/> Stocks</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Qty</TableHead>
                                        <TableHead>Tax Classification</TableHead>
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
                                            <TableCell>
                                                <Badge variant="outline">{stock.taxClassification}</Badge>
                                            </TableCell>
                                            <TableCell className="text-right font-mono">{formatCurrency(stock.value)}</TableCell>
                                            <TableCell className={`text-right font-mono ${stock.changeValue >= 0 ? "text-green-400" : "text-red-400"}`}>
                                                {stock.change}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead colSpan={3}>Total Stocks</TableHead>
                                        <TableHead className="text-right font-mono font-bold">{formatCurrency(totalStocks)}</TableHead>
                                        <TableHead className={`text-right font-mono font-bold ${totalStocksDayGain >= 0 ? "text-green-400" : "text-red-400"}`}>
                                            {totalStocksDayGain >= 0 ? '+' : ''}{formatCurrency(totalStocksDayGain)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Folders className="text-primary"/> Mutual Funds</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Fund Name</TableHead>
                                        <TableHead>Units</TableHead>
                                        <TableHead>Tax Classification</TableHead>
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
                                            <TableCell>
                                                <Badge variant="outline">{mf.taxClassification}</Badge>
                                            </TableCell>
                                            <TableCell className="text-right font-mono">{formatCurrency(mf.value)}</TableCell>
                                            <TableCell className={`text-right font-mono ${mf.changeValue >= 0 ? "text-green-400" : "text-red-400"}`}>
                                                {mf.change}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead colSpan={3}>Total Mutual Funds</TableHead>
                                        <TableHead className="text-right font-mono font-bold">{formatCurrency(totalMutualFunds)}</TableHead>
                                        <TableHead className={`text-right font-mono font-bold ${totalMutualFundsDayGain >= 0 ? "text-green-400" : "text-red-400"}`}>
                                            {totalMutualFundsDayGain >= 0 ? '+' : ''}{formatCurrency(totalMutualFundsDayGain)}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>

                        <Separator />
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Landmark className="text-primary"/> Fixed Deposits</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Bank</TableHead>
                                        <TableHead>Interest Rate</TableHead>
                                        <TableHead>Maturity Date</TableHead>
                                        <TableHead className="text-right">Value</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {portfolioData.fixedDeposits.map((fd) => (
                                        <TableRow key={fd.bank}>
                                            <TableCell className="font-medium">{fd.bank}</TableCell>
                                            <TableCell>{fd.interestRate}</TableCell>
                                            <TableCell>{fd.maturityDate}</TableCell>
                                            <TableCell className="text-right font-mono">{formatCurrency(fd.value)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead colSpan={3}>Total Fixed Deposits</TableHead>
                                        <TableHead className="text-right font-mono font-bold">{formatCurrency(totalFixedDeposits)}</TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Shield className="text-primary"/> Bonds</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead className="text-right">Current Value</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {portfolioData.bonds.map(bond => (
                                        <TableRow key={bond.name}>
                                            <TableCell className="font-medium">{bond.name}</TableCell>
                                            <TableCell className="text-right font-mono">{formatCurrency(bond.value)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead>Total Bonds</TableHead>
                                        <TableHead className="text-right font-mono font-bold">{formatCurrency(totalBonds)}</TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>

                        <Separator />
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Gem className="text-primary"/> Digital Gold</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Grams</TableHead>
                                        <TableHead className="text-right">Current Value</TableHead>
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
                                <TableFooter>
                                    <TableRow>
                                        <TableHead>Total Digital Gold</TableHead>
                                        <TableHead className="text-right font-mono font-bold">{formatCurrency(totalDigitalGold)}</TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><PiggyBank className="text-primary"/> Emergency Fund</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Account</TableHead>
                                        <TableHead className="text-right">Value</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {portfolioData.emergencyFund.map((fund, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{fund.account}</TableCell>
                                            <TableCell className="text-right font-mono">{formatCurrency(fund.value)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead>Total Emergency Fund</TableHead>
                                        <TableHead className="text-right font-mono font-bold">{formatCurrency(totalEmergencyFund)}</TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
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
                    {isLoading && (
                         <div className="space-y-4">
                            <Skeleton className="h-16 w-full" />
                            <Skeleton className="h-16 w-full" />
                            <Skeleton className="h-16 w-full" />
                        </div>
                    )}
                    {!isLoading && suggestions && suggestions.suggestions.map((suggestion, index) => (
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
                    {!isLoading && !suggestions && (
                        <div className="flex items-center justify-center h-24 text-muted-foreground">
                            <p>Could not load AI suggestions.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
