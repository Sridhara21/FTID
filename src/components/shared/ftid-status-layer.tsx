"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { userProfileData } from "@/lib/placeholder-data";
import { ShieldCheck, Timer, User, Building, Globe } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

export function FtidStatusLayer() {
    const pathname = usePathname();
    const isGovernment = pathname.startsWith('/government');
    const isBank = pathname.startsWith('/bank');
    const isBusiness = pathname.startsWith('/business');

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

    if (isGovernment || isBank) {
        return (
            <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground tracking-tight">
                <div className={statusItemClass}>
                    <Building className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase">{isBank ? 'Institutional Portal' : 'Ministry of Finance'}</span>
                </div>
                <div className={statusItemClass}>
                    <User className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase">Role: {isBank ? 'Analyst' : 'Regulator'}</span>
                </div>
                <div className={statusItemClass}>
                    <Globe className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase">Jurisdiction: National</span>
                </div>
            </div>
        )
    }

    if (isBusiness) {
        return (
            <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground tracking-tight">
                <div className={statusItemClass}>
                    <Building className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase">Entity: FTID-CORP-992</span>
                </div>
                <div className={statusItemClass}>
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    <span className="uppercase text-accent">Compliance: Active</span>
                </div>
                <div className={statusItemClass}>
                    <Timer className="h-3.5 w-3.5 text-primary/70" />
                    <span className="tabular-nums uppercase">SYNC: {mounted ? syncText : 'Initialising'}</span>
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
                <span className="uppercase text-accent">Consent: Verified</span>
            </div>
            <div className={statusItemClass}>
                <Timer className="h-3.5 w-3.5 text-primary/70" />
                <span className="tabular-nums uppercase font-mono tracking-tighter">SYNC: {mounted ? syncText : 'Initialising'}</span>
            </div>
        </div>
    );
}
