
"use client";

import { useState } from 'react';
import { ftidSystemStatus } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronUp, Link, Power, ShieldCheck, Timer } from "lucide-react";
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
    const [isOpen, setIsOpen] = useState(false);
    const lastSyncTime = new Date(ftidSystemStatus.lastSync);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/20';
            case 'Limited': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
            case 'Suspended': return 'bg-red-500/20 text-red-400 border-red-500/20';
            default: return 'bg-secondary text-secondary-foreground';
        }
    }

     const getHealthColor = (health: string) => {
        switch (health) {
            case 'Healthy': return 'text-green-400';
            default: return 'text-yellow-400';
        }
    }

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-auto px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex items-center gap-2">
                             <Power className={cn("h-4 w-4", getStatusColor(ftidSystemStatus.status).replace(/bg-.*/, ''))} />
                            <span className="hidden md:inline">FTID Status:</span>
                            <Badge variant="outline" className={cn("text-xs", getStatusColor(ftidSystemStatus.status))}>
                                {ftidSystemStatus.status}
                            </Badge>
                        </div>
                        <div className="hidden lg:flex items-center gap-2">
                            <ShieldCheck className={cn("h-4 w-4", getHealthColor(ftidSystemStatus.complianceHealth))} />
                            <span>Compliance: <span className={getHealthColor(ftidSystemStatus.complianceHealth)}>{ftidSystemStatus.complianceHealth}</span></span>
                        </div>
                         <div className="hidden xl:flex items-center gap-2">
                            <Timer className="h-4 w-4 text-muted-foreground" />
                            <span>Last Sync: {formatDistanceToNow(lastSyncTime, { addSuffix: true })}</span>
                        </div>
                    </div>
                     {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
                <DropdownMenuLabel>FTID System Layer</DropdownMenuLabel>
                <DropdownMenuSeparator />
                 <DropdownMenuItem className="flex flex-col items-start gap-1 focus:bg-transparent cursor-default">
                    <p className="text-xs text-muted-foreground">FTID Status</p>
                     <div className="flex items-center gap-2">
                        <Power className={cn("h-4 w-4", getStatusColor(ftidSystemStatus.status).replace(/bg-.*/, ''))} />
                        <span className={cn("font-semibold", getStatusColor(ftidSystemStatus.status).replace(/bg-.*/, ''))}>{ftidSystemStatus.status}</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start gap-1 focus:bg-transparent cursor-default">
                    <p className="text-xs text-muted-foreground">Compliance Health</p>
                     <div className="flex items-center gap-2">
                         <ShieldCheck className={cn("h-4 w-4", getHealthColor(ftidSystemStatus.complianceHealth))} />
                        <span className={cn("font-semibold", getHealthColor(ftidSystemStatus.complianceHealth))}>{ftidSystemStatus.complianceHealth}</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Linked Identifiers</DropdownMenuLabel>
                {ftidSystemStatus.linkedIdentifiers.map(item => (
                    <DropdownMenuItem key={item.name} className="focus:bg-transparent cursor-default">
                        <Link className="mr-2 h-4 w-4"/>
                        <span>{item.name}</span>
                        <Badge variant="outline" className="ml-auto text-xs">{item.status}</Badge>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                 <DropdownMenuItem className="flex flex-col items-start gap-1 focus:bg-transparent cursor-default">
                    <p className="text-xs text-muted-foreground">Last Data Sync</p>
                     <div className="flex items-center gap-2">
                         <Timer className="h-4 w-4" />
                        <span className="font-semibold">{formatDistanceToNow(lastSyncTime, { addSuffix: true })}</span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
