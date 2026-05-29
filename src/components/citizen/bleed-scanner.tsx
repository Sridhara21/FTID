"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Scissors, Terminal, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BLEED_SOURCES = [
    { id: "sub_1", name: "Netflix Premium", amount: 649, frequency: "Monthly", type: "Entertainment", status: "Active" },
    { id: "sub_2", name: "Anytime Fitness", amount: 2500, frequency: "Monthly", type: "Health", status: "Unused (45 days)" },
    { id: "sub_3", name: "Adobe Creative Cloud", amount: 4230, frequency: "Monthly", type: "Software", status: "Active" },
];

export function BleedScanner() {
    const { toast } = useToast();
    const [severingIds, setSeveringIds] = useState<string[]>([]);
    const [severedIds, setSeveredIds] = useState<string[]>([]);

    const handleSever = (id: string, name: string) => {
        setSeveringIds(prev => [...prev, id]);
        
        setTimeout(() => {
            setSeveredIds(prev => [...prev, id]);
            setSeveringIds(prev => prev.filter(x => x !== id));
            
            toast({
                title: "Smart Contract Severed",
                description: `Mandate for ${name} successfully revoked on-chain.`,
            });
        }, 1500);
    };

    const activeBleeds = BLEED_SOURCES.filter(s => !severedIds.includes(s.id));
    const totalBleed = activeBleeds.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <Card className="glass-panel relative overflow-hidden group shadow-2xl h-full rounded-3xl border-white/60">
            {/* Holographic blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            
            <CardHeader className="pb-4 border-b border-white/50">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-lg text-slate-900  uppercase font-bold tracking-[0.2em]">
                            <Terminal className="h-5 w-5 text-slate-900/80" /> Subscription Optimizer
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-semibold tracking-widest text-slate-900/60 mt-1">
                            Algorithmic Leakage Detection
                        </CardDescription>
                    </div>
                    <div className="p-2 bg-white/70 rounded-xl border border-white/60 shadow-sm">
                        <AlertCircle className="h-5 w-5 text-rose-700 animate-pulse" />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
                
                <div className="flex justify-between items-end p-6 border border-white/50 bg-white/60 rounded-2xl shadow-inner backdrop-blur-md">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-900/50 mb-1">Total Identified Bleed</p>
                        <p className="text-3xl font-headline font-bold text-slate-900 drop-shadow-sm">
                            ₹{totalBleed.toLocaleString('en-IN')} <span className="text-sm text-slate-900/50">/mo</span>
                        </p>
                    </div>
                    {activeBleeds.length === 0 && (
                        <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold uppercase tracking-widest bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200">
                            <CheckCircle2 className="h-4 w-4" /> Zero Bleed
                        </div>
                    )}
                </div>

                <div className="space-y-3">
                    {BLEED_SOURCES.map((source) => {
                        const isSevering = severingIds.includes(source.id);
                        const isSevered = severedIds.includes(source.id);
                        
                        if (isSevered) return null;

                        return (
                            <div key={source.id} className="flex items-center justify-between p-4 rounded-2xl border border-white/50 bg-white/60 hover:bg-white/70 transition-colors group/row relative overflow-hidden shadow-sm">
                                {isSevering && <div className="absolute inset-0 bg-white/80 animate-pulse pointer-events-none"></div>}
                                <div>
                                    <p className="text-sm font-semibold text-slate-900/90 flex items-center gap-2">
                                        {source.name}
                                        {source.status.includes('Unused') && (
                                            <span className="text-[9px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full border border-rose-200 font-bold uppercase tracking-widest">High Risk</span>
                                        )}
                                    </p>
                                    <p className="text-[10px] text-slate-900/50 font-medium uppercase tracking-widest mt-1">
                                        ₹{source.amount}/{source.frequency.substring(0, 2)} • {source.type}
                                    </p>
                                </div>
                                <Button 
                                    size="sm" 
                                    variant="outline" 
                                    onClick={() => handleSever(source.id, source.name)}
                                    disabled={isSevering}
                                    className="h-9 border-white/60 bg-white/60 text-slate-900 hover:bg-white/80 hover:text-slate-900 text-[10px] uppercase font-bold tracking-widest transition-all shadow-md rounded-xl backdrop-blur-sm"
                                >
                                    {isSevering ? "Severing..." : <><Scissors className="h-3.5 w-3.5 mr-1.5 text-slate-900/70" /> Sever</>}
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
