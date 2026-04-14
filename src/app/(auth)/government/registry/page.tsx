"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { sovereignRegistry } from "@/lib/sovereign-seed";
import { Database, Search, ShieldCheck, UserCheck, TrendingUp, TrendingDown, Minus, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function RegistryAuditPage() {
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const filteredRegistry = sovereignRegistry.filter(p => 
    p.fullName.toLowerCase().includes(search.toLowerCase()) ||
    p.pan.toLowerCase().includes(search.toLowerCase()) ||
    p.aadhaar.includes(search)
  );

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Tier1': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Tier2': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Tier3_Rural': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default: return '';
    }
  };

  const handleExport = () => {
    toast({
      title: "Master Ledger Exported",
      description: `JSON dataset for ${filteredRegistry.length} personas generated. Check downloads enclave.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sovereign Registry Audit</h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-institutional mt-1">
            Real-Time Identity & Flow Intelligence Ledger (100 Active Nodes)
          </p>
        </div>
        <div className="flex items-center gap-3">
            <div className="relative w-full md:w-72">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                    placeholder="Search by Name, PAN, or Aadhaar..." 
                    className="pl-8 h-9 text-xs bg-secondary/20 border-border/50"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <Button variant="outline" size="sm" className="h-9 font-bold text-[10px] uppercase tracking-widest border-border/50" onClick={handleExport}>
                <Download className="mr-2 h-3.5 w-3.5" /> Export Data
            </Button>
        </div>
      </div>

      <Card className="border-primary/20 bg-card/50 overflow-hidden">
        <CardHeader className="bg-secondary/10 border-b border-border/30 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-sm font-black uppercase tracking-institutional">
              <Database className="h-4 w-4 text-primary" /> Institutional Node Explorer
            </CardTitle>
            <Badge variant="outline" className="text-[9px] font-black tracking-widest border-green-500/30 text-green-400">
              <ShieldCheck className="mr-1 h-3 w-3" /> DIRECT_ROUTING_ACTIVE
            </Badge>
          </div>
          <CardDescription className="text-xs">
            Viewing authenticated data streams for {filteredRegistry.length} verified sovereign identities in the national mesh.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-secondary/20">
              <TableRow className="h-10 hover:bg-transparent">
                <TableHead className="text-[10px] uppercase font-black tracking-widest">Citizen Identity</TableHead>
                <TableHead className="text-[10px] uppercase font-black tracking-widest">ID Vectors (PAN/AAD)</TableHead>
                <TableHead className="text-[10px] uppercase font-black tracking-widest">Economic Tier</TableHead>
                <TableHead className="text-right text-[10px] uppercase font-black tracking-widest">Annual Yield (Est)</TableHead>
                <TableHead className="text-right text-[10px] uppercase font-black tracking-widest">Flow Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRegistry.map((persona) => (
                <TableRow key={persona.pan} className="hover:bg-secondary/10 border-b last:border-0 group">
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-primary/10 rounded border border-primary/20">
                        <UserCheck className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none">{persona.fullName}</p>
                        <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tight">{persona.persona}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono tabular-nums text-primary/80">PAN: {persona.pan}</p>
                      <p className="text-[10px] font-mono tabular-nums text-muted-foreground">AAD: {persona.aadhaar}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <Badge className={`${getTierColor(persona.tier)} text-[9px] font-black tracking-widest h-5 px-2`}>
                      {persona.tier}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-3 text-right">
                    <p className="text-xs font-mono font-bold tabular-nums">
                      ₹{persona.incomeAnnual.toLocaleString('en-IN')}
                    </p>
                  </TableCell>
                  <TableCell className="py-3 text-right">
                    <div className="flex flex-col items-end">
                      <p className="text-sm font-black font-mono tracking-tighter text-primary">
                        {persona.creditScore}
                      </p>
                      <div className="flex items-center gap-1 opacity-60">
                        {persona.flowHistory[0] > persona.creditScore ? (
                          <TrendingDown className="h-2.5 w-2.5 text-red-400" />
                        ) : persona.flowHistory[0] < persona.creditScore ? (
                          <TrendingUp className="h-2.5 w-2.5 text-green-400" />
                        ) : (
                          <Minus className="h-2.5 w-2.5" />
                        )}
                        <span className="text-[8px] font-bold uppercase tracking-widest">Dynamic</span>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="p-4 bg-secondary/20 rounded-lg border border-border/50 text-center">
        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-sovereign">
          Audit Layer Protocol — Ministry of Finance Authorization Required for Detailed Transaction Decryption
        </p>
      </div>
    </div>
  );
}