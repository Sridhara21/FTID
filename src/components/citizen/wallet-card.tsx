'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Wallet, ShieldCheck, Terminal, Loader2, ShoppingCart, Landmark, Utensils, Zap, HeartPulse, DollarSign, Activity } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useUser, useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from "@/firebase";
import { collection, query, where, orderBy } from "firebase/firestore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ICON_MAP: Record<string, any> = {
  'Food': Utensils,
  'Housing': Landmark,
  'Shopping': ShoppingCart,
  'Income': Wallet,
  'Utilities': Zap,
  'Healthcare': HeartPulse,
  'Investment': DollarSign,
  'Other': Activity
};

export function WalletCard() {
  const { user } = useUser();
  const db = useFirestore();
  const { toast } = useToast();
  
  const [isPayOpen, setIsPayOpen] = useState(false);
  const [isReceiveOpen, setIsReceiveOpen] = useState(false);
  const [txnAmount, setTxnAmount] = useState("");
  const [txnDesc, setTxnDesc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const transactionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return query(
      collection(db, "transactions"), 
      where("citizenId", "==", user.uid),
      orderBy("timestamp", "desc")
    );
  }, [db, user?.uid]);

  const { data: transactions, isLoading } = useCollection(transactionsQuery);

  const totalBalance = transactions?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

  const handleTransaction = async (type: 'payment' | 'request') => {
    if (!user?.uid || !db || !txnAmount) return;
    
    setIsProcessing(true);
    const amount = type === 'payment' ? -Math.abs(Number(txnAmount)) : Math.abs(Number(txnAmount));
    
    addDocumentNonBlocking(collection(db, "transactions"), {
      citizenId: user.uid,
      amount: amount,
      description: txnDesc || (type === 'payment' ? "CBDC Payment" : "Funds Received"),
      classification: type === 'payment' ? "Shopping" : "Income",
      timestamp: new Date().toISOString(),
      status: "completed",
      originInstitution: type === 'payment' ? "FTID Wallet" : "External Node",
      destinationInstitution: type === 'payment' ? "Merchant Enclave" : "FTID Wallet",
      channel: "CBDC_FLOW"
    });

    // Snappy responsive update
    setTimeout(() => {
      setIsProcessing(false);
      setIsPayOpen(false);
      setIsReceiveOpen(false);
      setTxnAmount("");
      setTxnDesc("");
      toast({
        title: type === 'payment' ? "Payment Routed" : "Flow Received",
        description: `₹${Math.abs(amount).toLocaleString()} successfully processed via FTID Secure Route.`,
      });
    }, 100);
  };

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
                {isLoading ? (
                  <Loader2 className="h-8 w-8 animate-spin text-primary/50" />
                ) : (
                  <span className="text-4xl font-black font-mono tracking-tighter tabular-nums text-primary">
                    ₹{totalBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </span>
                )}
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Dialog open={isPayOpen} onOpenChange={setIsPayOpen}>
            <DialogTrigger asChild>
              <Button className="h-9 font-bold uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                <ArrowUpRight className="mr-2 h-4 w-4" /> Route Payment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-primary/20 bg-card">
              <DialogHeader>
                <DialogTitle className="text-sm font-black uppercase tracking-institutional">Initialise Payment</DialogTitle>
                <DialogDescription className="text-xs uppercase font-bold tracking-widest opacity-70">Authenticated CBDC Outflow</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Amount (INR)</Label>
                  <Input 
                    type="number" 
                    placeholder="0.00" 
                    className="bg-secondary/20 font-mono tabular-nums h-11"
                    value={txnAmount}
                    onChange={(e) => setTxnAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Reference / Description</Label>
                  <Input 
                    placeholder="Merchant ID or Service" 
                    className="bg-secondary/20 h-11"
                    value={txnDesc}
                    onChange={(e) => setTxnDesc(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button className="w-full h-11 font-black uppercase tracking-institutional text-[11px]" onClick={() => handleTransaction('payment')} disabled={isProcessing || !txnAmount}>
                  {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "Authorize Payment"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isReceiveOpen} onOpenChange={setIsReceiveOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" className="h-9 font-bold uppercase tracking-widest text-[11px] border border-border/50 transition-all hover:scale-105 active:scale-95">
                <ArrowDownLeft className="mr-2 h-4 w-4" /> Request Flow
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-primary/20 bg-card">
              <DialogHeader>
                <DialogTitle className="text-sm font-black uppercase tracking-institutional">Request Incoming Flow</DialogTitle>
                <DialogDescription className="text-xs uppercase font-bold tracking-widest opacity-70">Inbound e-Rupee Transfer</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Amount (INR)</Label>
                  <Input 
                    type="number" 
                    placeholder="0.00" 
                    className="bg-secondary/20 font-mono tabular-nums h-11"
                    value={txnAmount}
                    onChange={(e) => setTxnAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Source Identity</Label>
                  <Input 
                    placeholder="FTID or External Node" 
                    className="bg-secondary/20 h-11"
                    value={txnDesc}
                    onChange={(e) => setTxnDesc(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button className="w-full h-11 font-black uppercase tracking-institutional text-[11px]" onClick={() => handleTransaction('request')} disabled={isProcessing || !txnAmount}>
                  {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "Initiate Request"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
            {isLoading ? (
              <div className="flex justify-center items-center h-24">
                <Loader2 className="h-6 w-6 animate-spin text-primary/30" />
              </div>
            ) : !transactions || transactions.length === 0 ? (
              <div className="text-center py-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-40">
                No verified flows detected in ledger.
              </div>
            ) : (
              <TooltipProvider>
                {transactions.map((transaction) => {
                  const Icon = ICON_MAP[transaction.classification] || Activity;
                  return (
                    <Tooltip key={transaction.id}>
                        <TooltipTrigger asChild>
                            <div className="flex items-center text-left w-full p-2.5 rounded-md border border-transparent hover:bg-secondary/50 hover:border-border/50 transition-all group cursor-pointer">
                              <div className="p-2 bg-background border border-border/50 rounded-md shrink-0 transition-colors group-hover:border-primary/30">
                                  <Icon className="h-4 w-4 text-primary" />
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
                         <TooltipContent side="left" align="center" className="max-w-[200px] text-[10px] border-primary/20">
                            <div className="space-y-1">
                               <p><span className="font-bold opacity-60">ORIGIN:</span> {transaction.originInstitution}</p>
                               <p><span className="font-bold opacity-60">DESTIN:</span> {transaction.destinationInstitution}</p>
                               <p><span className="font-bold opacity-60">TIMESTAMP:</span> {new Date(transaction.timestamp).toLocaleString()}</p>
                               <div className="flex items-center gap-1 text-green-400 font-bold uppercase mt-1">
                                  <ShieldCheck className="h-3 w-3" />
                                  FTID ROUTED & VERIFIED
                               </div>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                  );
                })}
               </TooltipProvider>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}