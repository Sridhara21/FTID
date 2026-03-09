"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { userProfileData } from "@/lib/placeholder-data";
import { ShieldCheck, Timer, User, Building, Globe } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

export function FtidStatusLayer() {
    const pathname = usePathname();
    const isGovernment = pathname.startsWith('/government');

    const [lastSyncTime, setLastSyncTime] = useState(new Date());
    const [, setNow] = useState(new Date());

    useEffect(() => {
        const rerenderInterval = setInterval(() => setNow(new Date()), 30 * 1000);
        const syncInterval = setInterval(() => setLastSyncTime(new Date()), 15 * 60 * 1000);

        return () => {
            clearInterval(rerenderInterval);
            clearInterval(syncInterval);
        };
    }, []);

    const statusItemClass = "flex items-center gap-2 px-3 py-1 bg-secondary/40 border border-border/50 rounded-md transition-colors hover:bg-secondary/60";

    if (isGovernment) {
        return (
            <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground tracking-tight">
                <div className={statusItemClass}>
                    <Building className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase">Ministry of Finance</span>
                </div>
                <div className={statusItemClass}>
                    <User className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase">Role: Regulator</span>
                </div>
                <div className={statusItemClass}>
                    <Globe className="h-3.5 w-3.5 text-primary/70" />
                    <span className="uppercase">Jurisdiction: National</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground tracking-tight">
             <div className={statusItemClass}>
                <User className="h-3.5 w-3.5 text-primary/70" />
                <span className="tabular-nums">FTID: {userProfileData.ftid}</span>
             </div>
            <div className={statusItemClass}>
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span className="uppercase text-accent">Consent: Active</span>
            </div>
            <div className={statusItemClass}>
                <Timer className="h-3.5 w-3.5 text-primary/70" />
                <span className="tabular-nums">SYNC: {formatDistanceToNow(lastSyncTime, { addSuffix: true })}</span>
            </div>
        </div>
    );
}