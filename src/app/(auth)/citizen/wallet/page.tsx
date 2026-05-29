"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wallet, Settings2, ReceiptText, ArrowDownLeft, ArrowUpRight, Zap, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CitizenWalletPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-cyan-500 uppercase flex items-center gap-3">
              <Wallet className="h-8 w-8" />
              CBDC & Smart Wallet
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            Programmable e-Rupee & Subsidy Tokens
          </p>
        </div>
        <div className="flex gap-2">
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <ArrowUpRight className="h-4 w-4" /> Send CBDC
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50 bg-gradient-to-br from-cyan-500/10 to-transparent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-cyan-500">e-Rupee Balance</CardTitle>
                <Wallet className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-white">₹15,000</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-cyan-500/60 flex items-center gap-1">
                   Unrestricted Retail CBDC
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50 bg-gradient-to-br from-purple-500/10 to-transparent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-purple-500">Programmable Vouchers</CardTitle>
                <Settings2 className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-white">₹4,500</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-purple-500/60 flex items-center gap-1">
                   Education & Health restricted
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Recent Velocity</CardTitle>
                <Zap className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">Normal</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   No suspicious spikes detected
               </p>
            </CardContent>
          </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <ReceiptText className="h-4 w-4 text-cyan-500" /> Smart Ledger
                 </CardTitle>
                 <Button variant="ghost" size="icon" className="h-6 w-6 text-cyan-500 hover:text-cyan-400">
                     <RefreshCw className="h-3 w-3" />
                 </Button>
             </CardHeader>
             <CardContent className="flex-1 overflow-auto p-0">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                       <tr>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">TxHash (Trun)</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Type</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Amount</th>
                         <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                       {[
                         { hash: "0x8f...2a1b", type: "P2M - Groceries", amount: "-₹850", status: "Settled", dir: "out" },
                         { hash: "0x4c...9d3e", type: "DBT - PM KISAN", amount: "+₹2,000", status: "Settled", dir: "in" },
                         { hash: "0x1a...5b7c", type: "P2P - Rajesh M.", amount: "-₹4,500", status: "Settled", dir: "out" },
                         { hash: "0x7e...3f8d", type: "Programmed Voucher", amount: "-₹1,200", status: "Settled", dir: "out" },
                         { hash: "0x9b...1c4a", type: "Bank Top-up", amount: "+₹5,000", status: "Pending", dir: "in" },
                       ].map((tx, i) => (
                          <tr key={i} className="hover:bg-background/40 transition-colors">
                             <td className="px-4 py-4 text-[10px] font-mono text-muted-foreground">
                                {tx.hash}
                             </td>
                             <td className="px-4 py-4 font-semibold text-xs text-foreground flex items-center gap-2">
                                {tx.dir === 'in' ? <ArrowDownLeft className="h-3 w-3 text-emerald-500" /> : <ArrowUpRight className="h-3 w-3 text-cyan-500" />}
                                {tx.type}
                             </td>
                             <td className={`px-4 py-4 text-right font-mono font-black ${tx.dir === 'in' ? 'text-emerald-500' : 'text-foreground'}`}>
                                 {tx.amount}
                             </td>
                             <td className="px-4 py-4 text-center">
                                 <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                     tx.status === 'Settled' ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500/30' : 
                                     'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                 }`}>
                                     {tx.status}
                                 </Badge>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
             </CardContent>
          </Card>

          <Card className="border-border/50 bg-secondary/10 flex flex-col h-[500px]">
             <CardHeader className="pb-4 border-b border-border/50">
                 <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    <Settings2 className="h-4 w-4 text-purple-500" /> Conditional Voucher Status
                 </CardTitle>
             </CardHeader>
             <CardContent className="flex-1 pt-6 overflow-auto space-y-6">
                 
                 <div className="p-4 border border-purple-500/30 bg-purple-500/10 rounded-lg relative overflow-hidden group">
                     <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-500/20 to-transparent"></div>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Ayushman Bharat Token</h4>
                     <div className="mt-2 text-2xl font-mono font-black text-white">₹3,500</div>
                     <p className="text-[10px] font-mono text-muted-foreground mt-2">
                         Valid ONLY at registered clinics & pharmacies. 
                     </p>
                     <div className="mt-4 flex gap-2">
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-purple-500/20 text-purple-300 border-purple-500/50">Hospital/Medical</Badge>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-red-500/10 text-red-400 border-red-500/50">Expires: Dec 31</Badge>
                     </div>
                 </div>

                 <div className="p-4 border border-blue-500/30 bg-blue-500/10 rounded-lg relative overflow-hidden group">
                     <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-500/20 to-transparent"></div>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Education Subsidy Token</h4>
                     <div className="mt-2 text-2xl font-mono font-black text-white">₹1,000</div>
                     <p className="text-[10px] font-mono text-muted-foreground mt-2">
                         Valid ONLY for school fees & textbook vendors.
                     </p>
                     <div className="mt-4 flex gap-2">
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-blue-500/20 text-blue-300 border-blue-500/50">Education</Badge>
                         <Badge variant="outline" className="font-mono text-[8px] uppercase bg-red-500/10 text-red-400 border-red-500/50">Expires: Mar 31</Badge>
                     </div>
                 </div>

             </CardContent>
          </Card>
      </div>

    </div>
  );
}
