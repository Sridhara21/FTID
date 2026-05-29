"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, TrendingDown, Activity, Globe, ArrowRightLeft, DollarSign } from "lucide-react";
import { useCitizen } from "@/hooks/use-citizen";

const MARKET_ASSETS = [
    { id: "AAPL", name: "Apple Inc.", type: "Stock", price: 185.92, change: "+1.2%", trend: "up", volume: "45M" },
    { id: "TSLA", name: "Tesla Motors", type: "Stock", price: 212.45, change: "-3.4%", trend: "down", volume: "89M" },
    { id: "RELIANCE", name: "Reliance Ind.", type: "Stock", price: 34.50, change: "+0.8%", trend: "up", volume: "12M" },
    { id: "NIFTY50", name: "Nifty 50 Index", type: "Index", price: 285.20, change: "+1.1%", trend: "up", volume: "5.2M" },
    { id: "US10Y", name: "US 10-Year T-Note", type: "Bond", price: 98.40, change: "-0.1%", trend: "down", volume: "N/A" },
];

export function MarketTerminal() {
    const { citizenData } = useCitizen();
    const { toast } = useToast();
    
    const [selectedAsset, setSelectedAsset] = useState<any>(null);
    const [tradeType, setTradeType] = useState<"BUY" | "SELL">("BUY");
    const [tradeAmount, setTradeAmount] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const isElite = citizenData?.tier === 'Black';

    const handleTrade = async () => {
        if (!tradeAmount || !selectedAsset) return;
        
        const numAmount = Number(tradeAmount);
        if (isNaN(numAmount) || numAmount <= 0) {
            toast({ variant: "destructive", title: "Trade Failed", description: "Invalid amount." });
            return;
        }

        setIsProcessing(true);

        // Simulate trade execution
        setTimeout(() => {
            setIsProcessing(false);
            setSelectedAsset(null);
            setTradeAmount("");
            toast({
                title: "Trade Executed",
                description: `${tradeType} order for ${numAmount} ${selectedAsset.id} filled at market price.`,
            });
        }, 800);
    };

    return (
        <Card className="border-primary/30 glass-panel relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
            <CardHeader className="pb-4 border-b border-primary/20">
                <CardTitle className="flex items-center gap-2 text-lg text-primary uppercase font-black tracking-institutional">
                    <Globe className="h-5 w-5" /> Global Markets Terminal
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold tracking-widest text-primary/70">
                    Live Institutional Liquidity Routing
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/50 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                                <th className="pb-3 pl-2">Asset</th>
                                <th className="pb-3 text-right">Price (USD)</th>
                                <th className="pb-3 text-right">24h Chg</th>
                                <th className="pb-3 text-right">Vol</th>
                                <th className="pb-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MARKET_ASSETS.map((asset) => (
                                <tr key={asset.id} className="border-b border-border/20 hover:bg-primary/5 transition-colors group">
                                    <td className="py-3 pl-2">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm text-primary group-hover:text-primary transition-colors">{asset.id}</span>
                                            <span className="text-[10px] text-muted-foreground uppercase">{asset.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-right font-mono text-sm font-bold">
                                        ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                    <td className={`py-3 text-right font-mono text-xs font-bold ${asset.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                        <div className="flex items-center justify-end gap-1">
                                            {asset.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                            {asset.change}
                                        </div>
                                    </td>
                                    <td className="py-3 text-right font-mono text-[10px] text-muted-foreground">{asset.volume}</td>
                                    <td className="py-3 text-center">
                                        <Dialog open={selectedAsset?.id === asset.id} onOpenChange={(open) => !open && setSelectedAsset(null)}>
                                            <DialogTrigger asChild>
                                                <Button size="sm" variant="outline" className="h-7 text-[9px] uppercase tracking-widest border-primary/20 hover:bg-primary/20 text-primary font-bold" onClick={() => setSelectedAsset(asset)}>
                                                    Trade
                                                </Button>
                                            </DialogTrigger>
                                            {selectedAsset?.id === asset.id && (
                                                <DialogContent className="sm:max-w-[400px] border-primary/30 bg-card glass-panel shadow-[0_0_50px_rgba(255,215,0,0.15)]">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-sm font-black uppercase tracking-institutional text-primary flex items-center gap-2">
                                                            <Activity className="h-4 w-4" /> Execute Market Order
                                                        </DialogTitle>
                                                        <DialogDescription className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                                                            {asset.name} ({asset.id})
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    
                                                    <div className="space-y-4 py-4">
                                                        <div className="flex gap-2 p-1 bg-secondary/30 rounded-md border border-border/50">
                                                            <Button 
                                                                variant="ghost" 
                                                                className={`flex-1 h-8 text-[10px] font-black uppercase tracking-widest ${tradeType === 'BUY' ? 'bg-green-500/20 text-green-400' : 'text-muted-foreground hover:text-foreground'}`}
                                                                onClick={() => setTradeType('BUY')}
                                                            >
                                                                Buy
                                                            </Button>
                                                            <Button 
                                                                variant="ghost" 
                                                                className={`flex-1 h-8 text-[10px] font-black uppercase tracking-widest ${tradeType === 'SELL' ? 'bg-red-500/20 text-red-400' : 'text-muted-foreground hover:text-foreground'}`}
                                                                onClick={() => setTradeType('SELL')}
                                                            >
                                                                Sell
                                                            </Button>
                                                        </div>

                                                        <div className="flex justify-between items-center p-3 bg-slate-50/40 rounded-md border border-border/50 font-mono">
                                                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Market Price</span>
                                                            <span className="text-sm font-black text-primary">${asset.price.toFixed(2)}</span>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Quantity ({asset.id})</label>
                                                            <Input 
                                                                type="number" 
                                                                placeholder="0.00"
                                                                className="bg-secondary/20 font-mono tabular-nums h-11 border-primary/30 focus-visible:ring-primary/50 text-primary text-lg"
                                                                value={tradeAmount}
                                                                onChange={(e) => setTradeAmount(e.target.value)}
                                                            />
                                                        </div>
                                                        
                                                        {tradeAmount && !isNaN(Number(tradeAmount)) && (
                                                            <div className="flex justify-between items-center px-1 font-mono text-[10px]">
                                                                <span className="text-muted-foreground uppercase tracking-widest">Est. Total</span>
                                                                <span className="font-bold text-primary">${(Number(tradeAmount) * asset.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                                    <DialogFooter>
                                                        <Button 
                                                            className={`w-full h-11 font-black uppercase tracking-institutional text-[11px] ${tradeType === 'BUY' ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-red-500 hover:bg-red-600 text-slate-900'}`} 
                                                            onClick={handleTrade} 
                                                            disabled={isProcessing || !tradeAmount}
                                                        >
                                                            {isProcessing ? "Routing to Exchange..." : `Confirm ${tradeType}`}
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            )}
                                        </Dialog>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
