"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, ChevronRight, BarChart3, Database, Building2, Zap, AlertTriangle } from "lucide-react";
import { useCitizen } from "@/hooks/use-citizen";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useFirestore, useUser, addDocumentNonBlocking } from "@/local";
import { collection } from "@/local/store";

const PRIVATE_ASSETS = [
    { id: "asset_ai_1", name: "Quantum Core Cluster Node", type: "Compute Rights", apy: "34.5%", min: 500000, risk: "High", icon: Database },
    { id: "asset_re_1", name: "Neo-Dubai Fractional Estate", type: "Real Estate", apy: "18.2%", min: 100000, risk: "Medium", icon: Building2 },
    { id: "asset_en_1", name: "Orbital Solar Grid", type: "Energy Infrastructure", apy: "22.0%", min: 250000, risk: "Low", icon: Zap },
];

export function PrivateEquityBoard() {
    const { citizenData, isLoading } = useCitizen();
    const { user } = useUser();
    const db = useFirestore();
    const { toast } = useToast();
    
    const [selectedAsset, setSelectedAsset] = useState<any>(null);
    const [investAmount, setInvestAmount] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const isElite = citizenData?.tier === 'Black';

    const handleInvest = async () => {
        if (!user?.uid || !db || !investAmount || !selectedAsset) return;
        
        const numAmount = Number(investAmount);
        if (isNaN(numAmount) || numAmount < selectedAsset.min) {
            toast({ variant: "destructive", title: "Allocation Failed", description: `Minimum allocation is ₹${selectedAsset.min.toLocaleString('en-IN')}.` });
            return;
        }

        setIsProcessing(true);

        addDocumentNonBlocking(collection(db, "transactions"), {
            citizenId: user.uid,
            amount: -Math.abs(numAmount),
            description: `Private Equity: ${selectedAsset.name}`,
            classification: "Investment",
            timestamp: new Date().toISOString(),
            status: "completed",
            originInstitution: "FTID Wallet",
            destinationInstitution: "FTID Black Syndicate Node",
            channel: "PRIVATE_EQUITY_LEDGER"
        });

        setTimeout(() => {
            setIsProcessing(false);
            setSelectedAsset(null);
            setInvestAmount("");
            toast({
                title: "Asset Allocated",
                description: `₹${numAmount.toLocaleString('en-IN')} deployed into ${selectedAsset.name}.`,
            });
        }, 1500);
    };

    if (isLoading) return null;

    if (!isElite) {
        return (
            <Card className="border-red-500/20 glass-panel relative overflow-hidden h-[300px] flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-red-500/5 opacity-50 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.03)_10px,rgba(255,0,0,0.03)_20px)] pointer-events-none"></div>
                <Lock className="h-16 w-16 text-red-500/50 mb-4 animate-pulse" />
                <h3 className="text-xl font-black uppercase tracking-institutional text-red-500 mb-2">Restricted Access</h3>
                <p className="text-xs font-mono text-muted-foreground max-w-md mx-auto mb-6 px-4">
                    The Private Equity Syndicate is restricted to FTID Black node holders. Upgrade your tier to access fractional off-market assets.
                </p>
                <Button variant="outline" className="border-red-500/50 text-red-500 hover:bg-red-500/10 font-bold uppercase tracking-widest text-[10px]">
                    Upgrade to FTID Black
                </Button>
            </Card>
        );
    }

    return (
        <Card className="border-primary/30 glass-panel relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg text-primary uppercase font-black tracking-institutional">
                    <BarChart3 className="h-5 w-5" /> Private Equity Syndicate
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold tracking-widest text-primary/70">
                    Off-Market Fractional Asset Acquisition Node
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-md mb-6 flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-[10px] font-mono text-primary leading-tight">Welcome, Syndicate Member. You have access to Level-4 classified sovereign assets bypassing public market regulations.</p>
                </div>
                
                <div className="space-y-3">
                    {PRIVATE_ASSETS.map(asset => (
                        <div key={asset.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-secondary/30 border border-border/50 rounded-lg hover:border-primary/40 transition-all group">
                            <div className="flex items-center gap-4 mb-3 md:mb-0">
                                <div className="p-3 bg-background border border-border/50 rounded-md group-hover:border-primary/50 transition-colors">
                                    <asset.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest">{asset.name}</h4>
                                    <p className="text-[10px] text-muted-foreground font-mono mt-1">{asset.type} &bull; Min: ₹{asset.min.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-6 justify-between md:justify-end">
                                <div className="text-right">
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Est. APY</p>
                                    <p className="text-sm font-black text-green-400 tabular-nums">{asset.apy}</p>
                                </div>
                                
                                <Dialog open={selectedAsset?.id === asset.id} onOpenChange={(open) => !open && setSelectedAsset(null)}>
                                    <DialogTrigger asChild>
                                        <Button size="sm" className="h-8 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-[9px]" onClick={() => setSelectedAsset(asset)}>
                                            Allocate <ChevronRight className="h-3 w-3 ml-1" />
                                        </Button>
                                    </DialogTrigger>
                                    {selectedAsset?.id === asset.id && (
                                        <DialogContent className="sm:max-w-[425px] border-primary/30 bg-card glass-panel shadow-[0_0_50px_rgba(255,215,0,0.15)]">
                                            <DialogHeader>
                                                <DialogTitle className="text-sm font-black uppercase tracking-institutional text-primary flex items-center gap-2">
                                                    <AlertTriangle className="h-4 w-4 text-primary" /> Acquire Syndicate Asset
                                                </DialogTitle>
                                                <DialogDescription className="text-[10px] uppercase font-bold tracking-widest text-primary/70">
                                                    Deploying CBDC to {asset.name}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="space-y-4 py-4">
                                                <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-md border border-border/50">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Target APY</span>
                                                    <span className="text-sm font-black text-green-400">{asset.apy}</span>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Allocation Amount (INR)</label>
                                                    <Input 
                                                        type="number" 
                                                        placeholder={`Min ₹${asset.min.toLocaleString('en-IN')}`}
                                                        className="bg-secondary/20 font-mono tabular-nums h-11 border-primary/30 focus-visible:ring-primary/50 text-primary"
                                                        value={investAmount}
                                                        onChange={(e) => setInvestAmount(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-institutional text-[11px]" onClick={handleInvest} disabled={isProcessing || !investAmount}>
                                                    {isProcessing ? "Deploying..." : "Execute Smart Contract"}
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    )}
                                </Dialog>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
