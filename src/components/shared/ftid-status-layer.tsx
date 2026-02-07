
"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ftidSystemStatus, userProfileData } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronUp, Link, Power, ShieldCheck, Timer, User, Building, Globe } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';


export function FtidStatusLayer() {
    const pathname = usePathname();
    const isGovernment = pathname.startsWith('/government');

    const [isOpen, setIsOpen] = useState(false);
    const [lastSyncTime, setLastSyncTime] = useState(new Date());
    const [, setNow] = useState(new Date());

    useEffect(() => {
        const rerenderInterval = setInterval(() => setNow(new Date()), 30 * 1000); // Re-render every 30s
        const syncInterval = setInterval(() => setLastSyncTime(new Date()), 15 * 60 * 1000); // Reset sync time every 15m

        return () => {
            clearInterval(rerenderInterval);
            clearInterval(syncInterval);
        };
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/20';
            case 'Limited': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
            case 'Suspended': return 'bg-red-500/20 text-red-400 border-red-500/20';
            default: return 'bg-secondary text-secondary-foreground';
        }
    }

    if (isGovernment) {
        return (
            <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5" />
                    <span>Ministry of Finance</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-1.5">
                     <User className="h-3.5 w-3.5" />
                    <span>Role: Regulator</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Jurisdiction: National</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
             <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                <span>FTID: {userProfileData.ftid}</span>
             </div>
             <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                <span>Consent: All Active</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5">
                <Timer className="h-3.5 w-3.5" />
                <span>Last Sync: {formatDistanceToNow(lastSyncTime, { addSuffix: true })}</span>
            </div>
        </div>
    );
}
