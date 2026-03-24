"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { userProfileData } from "@/lib/placeholder-data";
import { ShieldCheck, Timer, User, Building, Landmark, CreditCard, Zap } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function FtidStatusLayer() {
    const pathname = usePathname();
    const isGovernment = pathname.startsWith('/government');

    const [mounted, setMounted] = useState(false);
    const [lastSyncTime] = useState(new Date());
    const [syncText, setSyncText] = useState('Syncing...');

    useEffect(() => {
        setMounted(true);
        const updateText = () => {
            setSyncText(formatDistanceToNow(lastSyncTime, { addSuffix: true }));
        };
        updateText();
        const interval = setInterval(updateText, 30000);
        return () => clearInterval(interval);
    }, [lastSyncTime]);

    const statusItemClass = "flex items-center gap-2.5 px-3 py-1.5 bg-secondary/40 border border-border/50 rounded-md transition-all hover:bg-secondary/60 hover:border-primary/30";

    if (!mounted) {
        return (
            <div className="flex items-center gap-4 text-[11px] font-bold text-muted-foreground tracking-tight opacity-50">
                <div className={statusItemClass}>
                    <Timer className="h-3.5 w-3.5 text-primary/70" />
                    <span className="tabular-nums uppercase font-mono tracking-tighter">Initialising FTID Core...</span>
                </div>
            </div>
        );
    }

    if (isGovernment) {
        return (
            <div className="flex items-center gap-4 text-[10px] font-black text-muted-foreground tracking-widest">
                <div className={statusItemClass}>
                    <Building className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase font-mono">FINANCE_MINISTRY_INDIA</span>
                </div>
                <div className={statusItemClass}>
                    <User className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase font-mono">ROLE: REGULATOR_DIU</span>
                </div>
                <div className={`${statusItemClass} hidden lg:flex`}>
                    <Timer className="h-3.5 w-3.5 text-primary/70" />
                    <span className="tabular-nums uppercase font-mono tracking-tighter">NETWORK_SYNC: {syncText.toUpperCase()}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-black text-muted-foreground tracking-widest">
             <div className="flex items-center gap-3">
                <div className={statusItemClass}>
                    <User className="h-3.5 w-3.5 text-primary/70" />
                    <span className="tabular-nums font-mono tracking-widest">FTID: {userProfileData.ftid}</span>
                </div>
                <div className={statusItemClass}>
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    <span className="uppercase text-accent font-mono">FLOW: VERIFIED</span>
                </div>
             </div>
             
             <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/20 rounded-md border border-border/50">
                <span className="text-[9px] uppercase tracking-widest opacity-60 mr-1">STREAMS:</span>
                <TooltipProvider>
                    <div className="flex items-center gap-3">
                        <Tooltip>
                            <TooltipTrigger><Landmark className="h-3.5 w-3.5 text-primary/60 hover:text-primary transition-colors" /></TooltipTrigger>
                            <TooltipContent className="text-[10px] bg-background border-primary/20">BANK_FLOW (HDFC, SBI)</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Zap className="h-3.5 w-3.5 text-primary/60 hover:text-primary transition-colors" /></TooltipTrigger>
                            <TooltipContent className="text-[10px] bg-background border-primary/20">UPI_ACTIVITY_SYNC</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><CreditCard className="h-3.5 w-3.5 text-primary/60 hover:text-primary transition-colors" /></TooltipTrigger>
                            <TooltipContent className="text-[10px] bg-background border-primary/20">SOVEREIGN_TAX_LEDGER</TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
             </div>

            <div className={`${statusItemClass} ml-auto hidden md:flex`}>
                <Timer className="h-3.5 w-3.5 text-primary/70" />
                <span className="tabular-nums uppercase font-mono tracking-tighter">LAST_SYNC: {syncText.toUpperCase()}</span>
            </div>
        </div>
    );
}
