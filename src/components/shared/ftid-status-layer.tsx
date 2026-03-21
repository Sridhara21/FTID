"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { userProfileData } from "@/lib/placeholder-data";
import { ShieldCheck, Timer, User, Building } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

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

    const statusItemClass = "flex items-center gap-2 px-3 py-1 bg-secondary/40 border border-border/50 rounded-md transition-colors hover:bg-secondary/60";

    if (!mounted) {
        return (
            <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground tracking-tight opacity-50">
                <div className={statusItemClass}>
                    <Timer className="h-3.5 w-3.5 text-primary/70" />
                    <span className="tabular-nums uppercase font-mono tracking-tighter">Initialising System...</span>
                </div>
            </div>
        );
    }

    if (isGovernment) {
        return (
            <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground tracking-tight">
                <div className={statusItemClass}>
                    <Building className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase font-mono">Ministry of Finance</span>
                </div>
                <div className={statusItemClass}>
                    <User className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase font-mono">Role: Regulator</span>
                </div>
                <div className={statusItemClass}>
                    <Timer className="h-3.5 w-3.5 text-primary/70" />
                    <span className="tabular-nums uppercase font-mono tracking-tighter">SYNC: {syncText}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground tracking-tight">
             <div className={statusItemClass}>
                <User className="h-3.5 w-3.5 text-primary/70" />
                <span className="tabular-nums font-mono tracking-widest">FTID: {userProfileData.ftid}</span>
             </div>
            <div className={statusItemClass}>
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span className="uppercase text-accent font-mono">Consent: Verified</span>
            </div>
            <div className={statusItemClass}>
                <Timer className="h-3.5 w-3.5 text-primary/70" />
                <span className="tabular-nums uppercase font-mono tracking-tighter">SYNC: {syncText}</span>
            </div>
        </div>
    );
}
