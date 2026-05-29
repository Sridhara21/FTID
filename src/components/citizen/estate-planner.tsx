"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Lock, FileText, CheckCircle2, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export function EstatePlanner() {
    const { toast } = useToast();
    const [isSealing, setIsSealing] = useState(false);
    const [isSealed, setIsSealed] = useState(false);
    
    const [beneficiary, setBeneficiary] = useState("Aarav Iyer (Son)");
    const [allocation, setAllocation] = useState("100");

    const handleSealWill = () => {
        setIsSealing(true);
        
        setTimeout(() => {
            setIsSealing(false);
            setIsSealed(true);
            toast({
                title: "Smart Will Sealed",
                description: "Generational Wealth bound to FTID mortality oracle.",
            });
        }, 2000);
    };

    return (
        <div className="w-full glass-panel rounded-3xl p-5 flex flex-col lg:flex-row items-center gap-6 shadow-2xl relative overflow-hidden border-white/60">
            {/* Holographic Glow */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[200px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2"></div>
            
            <div className="flex items-center gap-4 min-w-[250px] relative z-10">
                {isSealed ? (
                    <div className="p-3 bg-emerald-100 rounded-xl border border-emerald-200 shadow-sm backdrop-blur-md">
                        <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                    </div>
                ) : (
                    <div className="p-3 bg-white/70 rounded-xl border border-white/60 shadow-sm backdrop-blur-md">
                        <Lock className="h-5 w-5 text-slate-900/90 animate-pulse" />
                    </div>
                )}
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">Algorithmic Estate</h2>
                    <p className="text-[10px] uppercase font-medium tracking-widest text-slate-900/50 mt-0.5">Generational Transfer</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full relative z-10">
                <div className="flex-1 w-full space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900/50 flex items-center gap-1.5 ml-1">
                        <UserCheck className="h-3 w-3 text-slate-900/40" /> Beneficiary
                    </label>
                    <Input 
                        value={beneficiary}
                        onChange={(e) => setBeneficiary(e.target.value)}
                        disabled={isSealed || isSealing}
                        className="bg-white/60 border-white/50 h-10 text-xs font-semibold text-slate-900 focus-visible:ring-white/30 backdrop-blur-sm rounded-xl"
                    />
                </div>
                <div className="w-full md:w-32 space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900/50 flex items-center gap-1.5 ml-1">
                        <FileText className="h-3 w-3 text-slate-900/40" /> Share (%)
                    </label>
                    <Input 
                        type="number"
                        value={allocation}
                        onChange={(e) => setAllocation(e.target.value)}
                        disabled={isSealed || isSealing}
                        className="bg-white/60 border-white/50 h-10 text-xs font-headline font-bold text-slate-900 focus-visible:ring-white/30 backdrop-blur-sm rounded-xl"
                    />
                </div>
            </div>

            <div className="w-full lg:w-auto relative z-10 mt-2 lg:mt-0">
                <Button 
                    onClick={handleSealWill}
                    disabled={isSealing || isSealed}
                    className={`w-full lg:w-48 h-12 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg backdrop-blur-md ${isSealed ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-slate-900 text-white hover:bg-slate-800 border-none'}`}
                >
                    {isSealing ? (
                        <span className="flex items-center gap-2"><Lock className="h-4 w-4 animate-spin" /> Sealing...</span>
                    ) : isSealed ? (
                        <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Sealed On-Chain</span>
                    ) : (
                        "Seal Smart Will"
                    )}
                </Button>
            </div>
        </div>
    );
}
