"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Landmark, ArrowLeft, ShieldCheck, FileText, Database, Settings } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function InstitutionPage() {
  const params = useParams();
  const id = params.id as string;
  
  // Format the ID for display
  const nameMap: Record<string, string> = {
    'hdfcbank': 'HDFC Bank',
    'icicibank': 'ICICI Bank',
    'incometaxdept': 'Income Tax Dept.'
  };
  
  const displayName = nameMap[id] || id?.toUpperCase();

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1000px] mx-auto text-slate-100">
      <div className="flex items-center gap-4 mb-4">
          <Link href="/citizen">
             <div className="p-2 bg-[#05101a] border border-cyan-900/50 rounded-lg hover:bg-cyan-900/30 transition-colors">
                 <ArrowLeft className="h-5 w-5 text-cyan-400" />
             </div>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
                <Landmark className="h-6 w-6 text-cyan-500" /> {displayName}
            </h1>
            <p className="text-cyan-500/70 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
              INSTITUTIONAL INTEGRATION PORTAL
            </p>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-cyan-900/30">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-cyan-500/60 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" /> Connection Status
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-2xl font-bold text-emerald-400">ACTIVE</p>
                  <p className="text-[10px] text-cyan-100/50 uppercase tracking-widest mt-1">Last synced 2 mins ago</p>
              </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-cyan-900/30 md:col-span-2">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-cyan-500/60 flex items-center gap-2">
                      <Database className="h-4 w-4" /> Data Streams
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-[#05101a] rounded-lg border border-cyan-900/20">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1">Accounts</p>
                          <p className="text-sm text-white">2 Linked Accounts</p>
                      </div>
                      <div className="p-3 bg-[#05101a] rounded-lg border border-cyan-900/20">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1">Transactions</p>
                          <p className="text-sm text-white">Real-time Sync On</p>
                      </div>
                  </div>
              </CardContent>
          </Card>
      </div>
      
      <Card className="bg-[#0a1520] border-cyan-900/30">
          <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <FileText className="h-4 w-4 text-cyan-500/70" /> Recent Activity
              </CardTitle>
          </CardHeader>
          <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Settings className="h-8 w-8 text-cyan-900 animate-spin-slow mb-4" />
                  <p className="text-sm font-semibold text-cyan-100">Fetching institutional ledger...</p>
                  <p className="text-[10px] text-cyan-500/60 uppercase tracking-widest mt-2">End-to-end encrypted connection established</p>
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
