"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Umbrella, Activity, ShieldCheck, HeartPulse, Landmark, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RISK_VECTORS = [
    { id: "health", label: "Bio-Risk", value: 8, icon: HeartPulse, color: "text-rose-700" },
    { id: "market", label: "Market Volatility", value: 45, icon: Activity, color: "text-blue-400" },
    { id: "macro", label: "Macro Economic", value: 62, icon: Landmark, color: "text-slate-900/60" },
];

export function RiskHedgingWidget() {
    const { toast } = useToast();
    const [isHedging, setIsHedging] = useState(false);
    const [hedged, setHedged] = useState(false);
    
    const [currentRisk, setCurrentRisk] = useState(38);
    
    useEffect(() => {
        if (hedged) return;
        const interval = setInterval(() => {
            setCurrentRisk(prev => {
                const fluctuation = Math.floor(Math.random() * 5) - 2;
                return Math.max(10, Math.min(90, prev + fluctuation));
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [hedged]);

    const handleDeployHedge = () => {
        setIsHedging(true);
        setTimeout(() => {
            setIsHedging(false);
            setHedged(true);
            setCurrentRisk(5); // Risk mitigated
            toast({
                title: "Glass Shield Deployed",
                description: "Smart contracts activated. Exposure minimized.",
            });
        }, 2000);
    };

    return (
        <div className="w-full relative overflow-hidden rounded-3xl glass-panel group shadow-2xl">
            {/* Liquid Glow Inside */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/60 rounded-[100%] blur-[60px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                
                {/* Header Section */}
                <div className="flex-1 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-white/60 text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                        {hedged ? <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" /> : <ShieldAlert className="h-3.5 w-3.5 animate-pulse text-rose-700" />}
                        {hedged ? 'Shield Active' : 'System Exposed'}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-widest text-slate-900 flex items-center gap-3 ">
                        <Umbrella className="h-7 w-7 text-slate-900/80" /> Command Center
                    </h2>
                    <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-slate-900/60 max-w-md leading-relaxed">
                        Dynamic Algorithmic Risk Mitigation & Exposure Control Panel
                    </p>
                </div>

                {/* Risk Gauge & Vectors */}
                <div className="flex-1 flex items-center justify-center gap-8 w-full">
                    <div className="relative flex items-center justify-center">
                        <svg className="w-24 h-24 -rotate-90 drop-shadow-sm">
                            <circle cx="48" cy="48" r="44" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                            <circle 
                                cx="48" cy="48" r="44" 
                                fill="none" 
                                stroke={hedged ? "#6ee7b7" : currentRisk > 50 ? "#fda4af" : "#93c5fd"}
                                strokeWidth="6" 
                                className="transition-all duration-1000 ease-out"
                                strokeDasharray="276" 
                                strokeDashoffset={276 - (276 * currentRisk) / 100}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-headline font-bold text-slate-900 ">{currentRisk}%</span>
                            <span className="text-[9px] uppercase tracking-widest text-slate-900/50 font-bold mt-1">Risk</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 flex-1">
                        {RISK_VECTORS.map(v => (
                            <div key={v.id} className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 border border-white/50 hover:bg-white/70 transition-colors shadow-sm">
                                <div className="flex items-center gap-2">
                                    <v.icon className={`h-3.5 w-3.5 ${hedged ? 'text-emerald-700' : v.color}`} />
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-900/70">{v.label}</span>
                                </div>
                                <span className={`text-[11px] font-headline font-bold ${hedged ? 'text-emerald-700' : 'text-slate-900'}`}>
                                    {hedged ? 2 : v.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Button */}
                <div className="w-full md:w-auto">
                    <Button 
                        onClick={handleDeployHedge}
                        disabled={isHedging || hedged}
                        className={`w-full md:w-64 h-14 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl backdrop-blur-md relative overflow-hidden ${hedged ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-slate-900 text-white hover:bg-slate-800 border-none'}`}
                    >
                        {!hedged && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>}
                        {isHedging ? (
                            <span className="flex items-center gap-2 relative z-10"><Zap className="h-4 w-4 animate-spin text-white" /> Initializing...</span>
                        ) : hedged ? (
                            <span className="flex items-center gap-2 relative z-10 text-emerald-700"><ShieldCheck className="h-5 w-5" /> Shield Active</span>
                        ) : (
                            <span className="relative z-10 flex items-center gap-2"><Umbrella className="h-4 w-4" /> Deploy Shield (₹42/d)</span>
                        )}
                    </Button>
                </div>

            </div>
        </div>
    );
}
