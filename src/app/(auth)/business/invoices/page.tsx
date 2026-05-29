"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt, Search, Filter, ShieldCheck, AlertTriangle, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BusinessInvoicesPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-500 uppercase flex items-center gap-3">
              <Receipt className="h-8 w-8" />
              Smart Invoicing
          </h1>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs mt-1 flex items-center gap-2">
            AI-Verified Invoice Lifecycle Management
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="gap-2 border-emerald-500/20 text-emerald-500 uppercase tracking-widest text-[10px] font-bold">
                <Search className="h-4 w-4" /> Scan New
            </Button>
            <Button className="gap-2 uppercase tracking-widest text-[10px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                + Generate E-Invoice
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Accounts Receivable</CardTitle>
                <ArrowDownRight className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-emerald-500">₹18.4L</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-500/80 flex items-center gap-1">
                   From 42 Invoices
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Accounts Payable</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-amber-500">₹4.2L</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-amber-500/80 flex items-center gap-1">
                   Due within 15 days
               </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">GST Alignment</CardTitle>
                <ShieldCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-black tabular-nums tracking-tighter text-blue-500">100%</div>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-500/80 flex items-center gap-1">
                   All matched with GSTR-2B
               </p>
            </CardContent>
          </Card>
      </div>

      <Card className="bg-secondary/10 border-border/50 h-[500px] flex flex-col">
         <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between">
             <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Receipt className="h-4 w-4 text-muted-foreground" /> Invoice Ledger
             </CardTitle>
             <Button variant="ghost" size="sm" className="h-6 text-[10px] uppercase font-bold tracking-widest text-muted-foreground gap-2">
                 <Filter className="h-3 w-3" /> Filter
             </Button>
         </CardHeader>
         <CardContent className="flex-1 overflow-auto p-0">
             <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-background/50 border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm">
                   <tr>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Inv ID</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Vendor/Client</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Type</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-right">Amount</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">Status</th>
                     <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground text-center">GST Match</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                   {[
                     { id: "INV-2024-081", name: "Global Logistics", type: "Payable", amount: "₹42,000", status: "Overdue", gst: "Matched" },
                     { id: "INV-2024-082", name: "TechCorp India", type: "Receivable", amount: "₹1,45,000", status: "Paid", gst: "Matched" },
                     { id: "INV-2024-083", name: "Apex Supplies", type: "Payable", amount: "₹12,400", status: "Pending", gst: "Mismatch" },
                     { id: "INV-2024-084", name: "Nexus Manufacturing", type: "Receivable", amount: "₹8,50,000", status: "Draft", gst: "Pending" },
                     { id: "INV-2024-085", name: "City Utilities", type: "Payable", amount: "₹18,200", status: "Paid", gst: "Matched" },
                   ].map((inv, i) => (
                      <tr key={i} className="hover:bg-background/40 transition-colors cursor-pointer group">
                         <td className="px-4 py-4 text-xs font-mono font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                            {inv.id}
                         </td>
                         <td className="px-4 py-4 font-semibold text-xs text-muted-foreground">
                            {inv.name}
                         </td>
                         <td className="px-4 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                             <div className="flex items-center gap-1">
                                 {inv.type === 'Payable' ? <ArrowUpRight className="h-3 w-3 text-amber-500" /> : <ArrowDownRight className="h-3 w-3 text-emerald-500" />}
                                 {inv.type}
                             </div>
                         </td>
                         <td className="px-4 py-4 text-right font-mono font-black text-foreground">
                            {inv.amount}
                         </td>
                         <td className="px-4 py-4 text-center">
                             <Badge variant="outline" className={`font-mono text-[9px] uppercase ${
                                 inv.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 
                                 inv.status === 'Overdue' ? 'bg-red-500/10 text-red-500 border-red-500/30' : 
                                 inv.status === 'Draft' ? 'bg-background text-muted-foreground border-border/50' :
                                 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                             }`}>
                                 {inv.status}
                             </Badge>
                         </td>
                         <td className="px-4 py-4 text-center">
                             {inv.gst === 'Matched' ? (
                                 <ShieldCheck className="h-4 w-4 text-blue-500 mx-auto" />
                             ) : inv.gst === 'Mismatch' ? (
                                 <AlertTriangle className="h-4 w-4 text-red-500 mx-auto" />
                             ) : (
                                 <Clock className="h-4 w-4 text-muted-foreground mx-auto" />
                             )}
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
         </CardContent>
      </Card>
    </div>
  );
}
