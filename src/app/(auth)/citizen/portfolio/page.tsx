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
import { Briefcase, CandlestickChart, Folders, Gem, Landmark, Bot, Lightbulb, CheckCircle, PiggyBank, Shield } from "lucide-react";
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
                // Error handled by central UI state
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
                            <CardDescription>Consolidated view of all investments with compliance intelligence.</CardDescription>
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
                                    <p>Capital gains data reported to tax authorities via FTID.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
                        <div className="p-4 bg-secondary/50 rounded-lg">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Total Value</p>
                            <p className="text-2xl font-black font-mono tracking-tighter tabular-nums">{formatCurrency(totalPortfolioValue)}</p>
                        </div>
                         <div className="p-4 bg-secondary/50 rounded-lg">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Day's Gain/Loss</p>
                            <p className={`text-2xl font-black font-mono tracking-tighter tabular-nums ${totalDayGain >= 0 ? "text-green-400" : "text-red-400"}`}>
                                {totalDayGain >= 0 ? '+' : ''}{formatCurrency(totalDayGain)}
                            </p>
                        </div>
                         <div className="p-4 bg-secondary/50 rounded-lg">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Gain (%)</p>
                            <p className={`text-2xl font-black font-mono tracking-tighter tabular-nums ${dayGainPercentage >= 0 ? "text-green-400" : "text-red-400"}`}>
                                {dayGainPercentage.toFixed(2)}%
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-primary"><CandlestickChart className="h-4 w-4"/> Stocks</h3>
                            <Table>
                                <TableHeader className="bg-secondary/20">
                                    <TableRow className="h-8 hover:bg-transparent">
                                        <TableHead className="text-[10px] uppercase font-bold">Asset</TableHead>
                                        <TableHead className="text-[10px] uppercase font-bold text-center">Qty</TableHead>
                                        <TableHead className="text-[10px] uppercase font-bold text-center">Tax Class</TableHead>
                                        <TableHead className="text-right text-[10px] uppercase font-bold">Value</TableHead>
                                        <TableHead className="text-right text-[10px] uppercase font-bold">Change</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {portfolioData.stocks.map(stock => (
                                        <TableRow key={stock.symbol} className="h-10 hover:bg-secondary/10">
                                            <TableCell className="py-2 text-xs font-bold">
                                                {stock.name} <span className="text-muted-foreground ml-1">({stock.symbol})</span>
                                            </TableCell>
                                            <TableCell className="py-2 text-center text-xs font-mono">{stock.quantity}</TableCell>
                                            <TableCell className="py-2 text-center">
                                                <Badge variant="outline" className="text-[9px] px-1 h-4">{stock.taxClassification}</Badge>
                                            </TableCell>
                                            <TableCell className="py-2 text-right font-mono text-xs tabular-nums">{formatCurrency(stock.value)}</TableCell>
                                            <TableCell className={`py-2 text-right font-mono text-xs tabular-nums ${stock.changeValue >= 0 ? "text-green-400" : "text-red-400"}`}>
                                                {stock.change}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-primary"><Folders className="h-4 w-4"/> Mutual Funds</h3>
                            <Table>
                                <TableHeader className="bg-secondary/20">
                                    <TableRow className="h-8 hover:bg-transparent">
                                        <TableHead className="text-[10px] uppercase font-bold">Fund</TableHead>
                                        <TableHead className="text-[10px] uppercase font-bold text-center">Units</TableHead>
                                        <TableHead className="text-right text-[10px] uppercase font-bold">Value</TableHead>
                                        <TableHead className="text-right text-[10px] uppercase font-bold">Change</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {portfolioData.mutualFunds.map(mf => (
                                        <TableRow key={mf.name} className="h-10 hover:bg-secondary/10">
                                            <TableCell className="py-2 text-xs font-bold">{mf.name}</TableCell>
                                            <TableCell className="py-2 text-center text-xs font-mono">{mf.units.toFixed(2)}</TableCell>
                                            <TableCell className="py-2 text-right font-mono text-xs tabular-nums">{formatCurrency(mf.value)}</TableCell>
                                            <TableCell className={`py-2 text-right font-mono text-xs tabular-nums ${mf.changeValue >= 0 ? "text-green-400" : "text-red-400"}`}>
                                                {mf.change}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                        <Bot className="h-5 w-5 text-primary" /> AI Portfolio Suggestions
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                    {isLoading ? (
                         <div className="space-y-4">
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                        </div>
                    ) : suggestions?.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30">
                            <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5"/>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider">{suggestion.title}</h4>
                                <p className="text-xs text-muted-foreground mt-1">{suggestion.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}