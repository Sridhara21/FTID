
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Wallet, Info, ShieldCheck, Terminal } from "lucide-react";
import { transactions } from "@/lib/placeholder-data";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export function WalletCard() {
  return (
    <Card className="flex flex-col h-full border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
            <Wallet className="h-5 w-5 text-primary" />
            CBDC E-Rupee Wallet (FTID Enabled)
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Digital Sovereign Currency</span>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 px-2 py-0.5 bg-accent/20 text-accent rounded-full cursor-pointer">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                            </span>
                            Offline Capable
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-[10px]">Offline CBDC mode is Active. Last sync: 5 minutes ago.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow pt-4">
        <div className="flex flex-col mb-6 bg-secondary/20 p-4 rounded-lg border border-border/50">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Total Available Balance</p>
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black font-mono tracking-tighter tabular-nums text-primary">₹85,250</span>
                <span className="text-xs font-bold text-green-400 font-mono tabular-nums">+₹15,000.00 (M-o-M)</span>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button className="h-9 font-bold uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            <ArrowUpRight className="mr-2 h-4 w-4" /> Route Payment
          </Button>
          <Button variant="secondary" className="h-9 font-bold uppercase tracking-widest text-[11px] border border-border/50 transition-all hover:scale-105 active:scale-95">
            <ArrowDownLeft className="mr-2 h-4 w-4" /> Request Flow
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-4 px-2 py-1.5 bg-secondary/40 rounded border border-border/50">
            <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-tighter">FTID-AUTH: READY-992-SECURE</span>
        </div>

        <Separator className="mb-4" />
        
        <div className="flex flex-col flex-grow min-h-0">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
            <ShieldCheck className="h-3 w-3" />
            Verified Transaction Flows
          </h3>
          <div className="flex-grow space-y-2 overflow-y-auto pr-2 custom-scrollbar">
            <TooltipProvider>
              {transactions.map((transaction) => (
                  <Tooltip key={transaction.id}>
                      <TooltipTrigger className="w-full">
                          <div className="flex items-center text-left w-full p-2.5 rounded-md border border-transparent hover:bg-secondary/50 hover:border-border/50 transition-all">
                            <div className="p-2 bg-background border border-border/50 rounded-md shrink-0">
                                <transaction.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="ml-3 flex-1 overflow-hidden">
                                <p className="text-xs font-bold leading-none truncate">{transaction.description}</p>
                                <p className="text-[10px] text-muted-foreground mt-1 font-medium uppercase tracking-tighter truncate">{transaction.classification}</p>
                            </div>
                            <div className={`text-sm font-black font-mono tabular-nums ${transaction.amount > 0 ? "text-green-400" : "text-red-400"}`}>
                                {transaction.amount > 0 ? `+` : ``}{transaction.amount.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}
                            </div>
                          </div>
                      </TooltipTrigger>
                       <TooltipContent side="left" align="center" className="max-w-[200px] text-[10px]">
                          <div className="space-y-1">
                             <p><span className="font-bold opacity-60">ORIGIN:</span> {transaction.originInstitution}</p>
                             <p><span className="font-bold opacity-60">DESTIN:</span> {transaction.destinationInstitution}</p>
                             <div className="flex items-center gap-1 text-green-400 font-bold uppercase">
                                <ShieldCheck className="h-3 w-3" />
                                FTID ROUTED & VERIFIED
                             </div>
                          </div>
                      </TooltipContent>
                  </Tooltip>
              ))}
             </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
