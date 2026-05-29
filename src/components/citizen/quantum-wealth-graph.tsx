"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function QuantumWealthGraph({ balance }: { balance: number }) {
    
    // Use state to avoid SSR hydration mismatch
    const [bars, setBars] = useState<Array<{height: number, delay: number}>>([]);

    useEffect(() => {
        setBars(Array.from({ length: 40 }).map(() => ({
            height: 20 + Math.random() * 80,
            delay: Math.random() * 2
        })));
    }, []);

    return (
        <Card className="border-primary/40 glass-panel shadow-[0_0_30px_rgba(255,215,0,0.1)] relative overflow-hidden h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            <CardHeader className="pb-2 border-b border-primary/20 bg-slate-50/40 z-10 relative">
                <CardTitle className="flex items-center gap-2 text-xs font-black uppercase tracking-institutional text-primary">
                    <Activity className="h-4 w-4" /> Live Wealth Graph
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-full relative flex flex-col justify-end">
                <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
                
                <div className="absolute top-6 left-6 z-10">
                    <p className="text-[10px] text-primary/70 uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                        <Zap className="h-3 w-3 text-primary animate-pulse" /> Live Global Liquidity
                    </p>
                    <p className="text-4xl font-black font-mono text-primary ">
                        ₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </p>
                </div>

                <div className="flex items-end justify-between px-2 pb-4 h-32 z-10 gap-1 opacity-80">
                    {bars.map((bar, i) => (
                        <div 
                            key={i} 
                            className="w-full bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-sm shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-1000 ease-in-out"
                            style={{ 
                                height: `${bar.height}%`,
                                animation: `pulse 2s infinite alternate ${bar.delay}s`
                            }}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
