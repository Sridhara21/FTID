"use client";

import Link from "next/link";
import {
  Heart,
  Wallet,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Send,
  FileText,
  Lock,
  Briefcase,
  AlertTriangle,
  Target,
  Landmark,
  ArrowRightLeft,
  PieChart,
  User
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from "recharts";
import { useCitizen } from "@/hooks/use-citizen";
import { Button } from "@/components/ui/button";

const barData = [
  { name: 'Jan', income: 75000, expense: 42000 },
  { name: 'Feb', income: 78000, expense: 45000 },
  { name: 'Mar', income: 82000, expense: 49000 },
  { name: 'Apr', income: 80000, expense: 41000 },
  { name: 'May', income: 85000, expense: 44000 },
  { name: 'Jun', income: 89000, expense: 50000 },
];

const pieData = [
  { name: 'Housing', value: 35000, color: '#22c55e' },
  { name: 'Transport', value: 8000, color: '#a855f7' },
  { name: 'Utilities', value: 5000, color: '#ec4899' },
  { name: 'Groceries', value: 12500, color: '#3b82f6' },
  { name: 'Leisure', value: 15000, color: '#f97316' },
];

const quickFlows = [
  { title: "CBDC Transfer", desc: "ROUTE VIA FTID FLOW", icon: Send },
  { title: "Tax Statement", desc: "REVIEW PRE-FILLED DATA", icon: FileText },
  { title: "Consent Hub", desc: "AUTHORIZE ACCESS", icon: Lock },
  { title: "Investments", desc: "ANALYZE RISK/TAX", icon: Briefcase },
];

const connectedSystems = [
  { name: "HDFC Bank", type: "BANK", status: "ACTIVE" },
  { name: "ICICI Bank", type: "BANK", status: "ACTIVE" },
  { name: "Income Tax Dept.", type: "REGULATOR", status: "ACTIVE" }
];

const activeConsents = [
  { name: "SpendWise AI", access: "READ-ONLY" },
  { name: "TaxSaver Pro", access: "ANALYTICS" }
];

export default function CitizenDashboard() {
  const { citizenData } = useCitizen();
  const flowScore = citizenData?.currentCreditScore || 820;

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <User className="h-8 w-8 text-cyan-400" />
              FTID — Citizen Dashboard
          </h1>
          <p className="text-cyan-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            UNIFIED FINANCIAL CONTROL & FLOW INTELLIGENCE
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-cyan-900/50 rounded-full">
            <ShieldCheck className="h-4 w-4 text-cyan-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60">System Health: Secure</span>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Flow Score</p>
                      <p className="text-4xl font-bold text-white mb-3">{flowScore}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> +15 <span className="text-cyan-500/40 ml-1">VERY STRONG</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <Heart className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Total Balance</p>
                      <p className="text-4xl font-bold text-white mb-3">₹85,250</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> +₹15k <span className="text-cyan-500/40 ml-1">IN E-RUPEE WALLET</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <Wallet className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      {/* Main Charts & Quick Flows Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-5 bg-[#0a1520] border-cyan-900/30 h-[400px]">
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-white">
                    <TrendingUp className="h-5 w-5 text-cyan-500/70" /> Financial Analysis
                </CardTitle>
                <p className="text-xs text-cyan-100/50">Income vs. Expense for the last 6 months.</p>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                        <Tooltip cursor={{fill: '#0f172a'}} contentStyle={{backgroundColor: '#020810', borderColor: '#1e293b'}} />
                        <Bar dataKey="income" fill="#22c55e" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expense" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-center gap-4 mt-2 text-[10px] font-bold uppercase">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> <span className="text-cyan-500/60">Income</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> <span className="text-cyan-500/60">Expense</span></div>
                </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-cyan-900/30 h-[400px]">
             <CardHeader className="text-center pb-2">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center justify-center gap-2 mb-1">
                    <PieChart className="h-4 w-4 text-cyan-500/70" /> Spending Breakdown
                 </p>
                 <p className="text-[9px] text-cyan-100/40 uppercase tracking-widest">Monthly Outflow Analysis</p>
             </CardHeader>
             <CardContent className="h-[300px] flex flex-col items-center justify-center relative">
                 <div className="h-[180px] w-[180px] relative">
                     <ResponsiveContainer width="100%" height="100%">
                         <RechartsPieChart>
                             <Pie data={pieData} innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value" stroke="none">
                                 {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                             </Pie>
                         </RechartsPieChart>
                     </ResponsiveContainer>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className="text-lg font-bold text-white">₹75.5k</span>
                         <span className="text-[9px] font-bold text-cyan-500/60 uppercase tracking-widest">Total Out</span>
                     </div>
                 </div>
                 <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6">
                     {pieData.map(item => (
                         <div key={item.name} className="flex items-center justify-between gap-4">
                             <div className="flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                                 <span className="text-[10px] font-bold text-cyan-100/70 uppercase tracking-wider">{item.name}</span>
                             </div>
                             <span className="text-[10px] font-bold text-white">₹{item.value.toLocaleString()}</span>
                         </div>
                     ))}
                 </div>
             </CardContent>
          </Card>

          <Card className="lg:col-span-3 bg-transparent border-none shadow-none flex flex-col gap-4">
              <div className="flex items-center gap-2 px-2 pb-2">
                  <ArrowRightLeft className="h-4 w-4 text-cyan-500/70" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Quick Flows</span>
              </div>
              {quickFlows.map(flow => (
                  <Link key={flow.title} href="#">
                      <div className="p-4 bg-[#0a1520] border border-cyan-900/30 rounded-xl hover:bg-cyan-900/20 transition-colors flex items-center gap-4">
                          <div className="p-2 bg-[#020810] rounded-lg border border-cyan-900/50">
                              <flow.icon className="h-4 w-4 text-cyan-400" />
                          </div>
                          <div>
                              <p className="text-sm font-bold text-white">{flow.title}</p>
                              <p className="text-[9px] text-cyan-500/60 uppercase tracking-widest mt-1">{flow.desc}</p>
                          </div>
                      </div>
                  </Link>
              ))}
          </Card>
      </div>

      {/* Predictive Flow Insights */}
      <Card className="bg-[#0a1520] border-cyan-900/30">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                      <Target className="h-4 w-4 text-cyan-500/70" /> Predictive Flow Insights
                  </CardTitle>
                  <p className="text-xs text-cyan-100/50 mt-1">Behavioral analysis of projected end-of-cycle positions.</p>
              </div>
              <div className="px-3 py-1 bg-cyan-900/30 rounded-md border border-cyan-900/50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">AI Generated</span>
              </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-cyan-900/20">
              <div className="p-4 bg-[#05101a] rounded-xl border border-cyan-900/20">
                  <div className="flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-widest text-cyan-500/60">
                      <TrendingDown className="h-3 w-3 text-cyan-400" /> End-of-month Projection
                  </div>
                  <p className="text-2xl font-bold text-white mb-2">₹24,800</p>
                  <p className="text-xs text-cyan-100/50">Based on historical average spend in the last 10 days of the month.</p>
              </div>
              <div className="p-4 bg-[#05101a] rounded-xl border border-amber-900/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 blur-2xl rounded-full"></div>
                  <div className="flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-widest text-amber-500/80">
                      <AlertTriangle className="h-3 w-3 text-amber-500" /> Risk Alert: Subscriptions
                  </div>
                  <p className="text-lg font-bold text-white mb-2">Action Recommended</p>
                  <p className="text-xs text-amber-100/60">Detected 3 redundant streaming services. Possible ₹1,200/mo savings.</p>
              </div>
              <div className="p-4 bg-[#05101a] rounded-xl border border-emerald-900/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 blur-2xl rounded-full"></div>
                  <div className="flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-widest text-emerald-500/80">
                      <Target className="h-3 w-3 text-emerald-500" /> Smart Savings Target
                  </div>
                  <p className="text-2xl font-bold text-emerald-400 mb-2">+₹4,500</p>
                  <p className="text-xs text-emerald-100/60">Transfer to Debt-fund recommended for high-liquidity tax efficiency.</p>
              </div>
          </CardContent>
      </Card>

      {/* Connected Systems & Consents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#0a1520] border-cyan-900/30">
              <CardHeader className="pb-4">
                  <CardTitle className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                      <Link href="#" className="h-4 w-4" /> Connected Systems
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="w-full">
                      <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-cyan-500/40 mb-4 px-2">
                          <span>Institution</span>
                          <span>System</span>
                          <span>Status</span>
                      </div>
                      <div className="space-y-2">
                          {connectedSystems.map(sys => (
                              <Link key={sys.name} href={`/institution/${sys.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-[#05101a] transition-colors border border-transparent hover:border-cyan-900/30 group">
                                      <div className="flex items-center gap-3 w-1/3">
                                          <Landmark className="h-4 w-4 text-cyan-500/50 group-hover:text-cyan-400" />
                                          <span className="text-sm font-semibold text-white">{sys.name}</span>
                                      </div>
                                      <span className="text-[10px] font-medium tracking-widest text-cyan-100/50 w-1/3 text-center">{sys.type}</span>
                                      <div className="flex items-center justify-end gap-1.5 w-1/3">
                                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                          <span className="text-[10px] font-bold text-emerald-500">{sys.status}</span>
                                      </div>
                                  </div>
                              </Link>
                          ))}
                      </div>
                  </div>
              </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-cyan-900/30 flex flex-col">
              <CardHeader className="pb-4">
                  <CardTitle className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                      <Lock className="h-4 w-4 text-cyan-500/70" /> Active 3rd Party Consents
                  </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                      {activeConsents.map(consent => (
                          <div key={consent.name} className="flex justify-between items-center p-4 bg-[#05101a] rounded-xl border border-cyan-900/20">
                              <span className="text-sm font-semibold text-white">{consent.name}</span>
                              <div className="flex items-center gap-2">
                                  <span className="text-[9px] font-bold tracking-widest text-cyan-500/60">{consent.access}</span>
                                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                              </div>
                          </div>
                      ))}
                  </div>
                  <Button className="w-full mt-6 bg-[#05101a] hover:bg-cyan-900/20 text-white border border-cyan-900/50 h-12 text-[10px] font-bold uppercase tracking-widest">
                      Manage Hub Access <ArrowRightLeft className="ml-2 h-3 w-3" />
                  </Button>
              </CardContent>
          </Card>
      </div>

      <div className="text-center mt-6">
          <p className="text-[9px] font-bold uppercase tracking-widest text-cyan-500/30">
              Data Stream Powered By FTID Flow Intelligence — Secure Institutional Linkage
          </p>
      </div>

    </div>
  );
}
