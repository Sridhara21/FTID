"use client";

import { useState } from "react";
import { HeartPulse, TrendingUp, Activity, CheckCircle2, ShieldCheck, FileText, AlertTriangle, ShieldAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const creditHistory = [
  { month: 'Jan', score: 720 },
  { month: 'Feb', score: 725 },
  { month: 'Mar', score: 740 },
  { month: 'Apr', score: 745 },
  { month: 'May', score: 735 },
  { month: 'Jun', score: 780 },
];

export default function CitizenCreditScore() {
  // Simulator States
  const [utilization, setUtilization] = useState(12);
  const [paymentOnTime, setPaymentOnTime] = useState(100);
  
  // Checklist States
  const [task1, setTask1] = useState(false);
  const [task2, setTask2] = useState(false);
  const [task3, setTask3] = useState(false);

  // Recalculate credit score based on inputs
  const getSimulatedScore = () => {
    let score = 750;
    
    // Utilization effect (optimal is <30%, high utilization hurts score)
    if (utilization > 30) {
      score -= Math.round((utilization - 30) * 1.5);
    } else {
      score += Math.round((30 - utilization) * 0.8);
    }

    // Payment on time effect (100% is perfect, drops hurt heavily)
    score += Math.round((paymentOnTime - 90) * 4);

    // Checklist increments
    if (task1) score += 15;
    if (task2) score += 10;
    if (task3) score += 5;

    return Math.min(900, Math.max(300, score));
  };

  const simulatedScore = getSimulatedScore();

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <HeartPulse className="h-8 w-8 text-cyan-400" />
              Financial Health & Credit
          </h1>
          <p className="text-cyan-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            CIBIL / EQUIFAX SYNC • AI CREDIT OPTIMIZATION
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-cyan-900/50 rounded-full">
            <ShieldCheck className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">
              Credit Profile: {simulatedScore >= 750 ? "Healthy" : simulatedScore >= 650 ? "Medium Risk" : "High Risk"}
            </span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Simulated Credit Score</p>
                      <p className="text-4xl font-bold text-white mb-3">{simulatedScore}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> +{simulatedScore - 720} Points <span className="text-cyan-500/40 ml-1">VS BASELINE</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <HeartPulse className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Credit Utilization</p>
                      <p className={`text-4xl font-bold mb-3 ${utilization > 30 ? "text-rose-400" : "text-emerald-400"}`}>{utilization}%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" /> <span className="text-cyan-500/40 ml-1">{utilization > 30 ? "WARNING: LIMIT EXCEEDED" : "OPTIMAL RANGE (< 30%)"}</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <Activity className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">On-time Payments</p>
                      <p className="text-4xl font-bold text-white mb-3">{paymentOnTime}%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-cyan-400">
                          <FileText className="h-3 w-3" /> <span className="text-cyan-500/40 ml-1">RBI LEDGER RECONCILED</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <FileText className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      {/* Interactive Simulator and Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-6 bg-[#0a1520] border-cyan-900/30">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Activity className="h-4 w-4 text-cyan-500/70" /> Credit Factor Simulator Sandbox
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
                <div>
                    <div className="flex justify-between text-xs mb-2 font-mono">
                        <span>Simulate Credit Card Utilization</span>
                        <span className={utilization > 30 ? "text-rose-400 font-bold" : "text-cyan-400"}>{utilization}%</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={utilization}
                        onChange={(e) => setUtilization(Number(e.target.value))}
                        className="w-full h-1 bg-cyan-950 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                    {utilization > 30 && (
                        <p className="text-[10px] text-rose-400 mt-2 flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> High utilization drops credit scores due to elevated leverage risk.</p>
                    )}
                </div>

                <div>
                    <div className="flex justify-between text-xs mb-2 font-mono">
                        <span>Simulate On-time Payment Ratio</span>
                        <span className={paymentOnTime < 95 ? "text-rose-400 font-bold" : "text-cyan-400"}>{paymentOnTime}%</span>
                    </div>
                    <input
                        type="range"
                        min="50"
                        max="100"
                        step="1"
                        value={paymentOnTime}
                        onChange={(e) => setPaymentOnTime(Number(e.target.value))}
                        className="w-full h-1 bg-cyan-950 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                    {paymentOnTime < 100 && (
                        <p className="text-[10px] text-amber-500 mt-2 flex items-center gap-1"><ShieldAlert className="h-3 w-3" /> A single missed payment heavily impacts credit history.</p>
                    )}
                </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-6 bg-[#0a1520] border-cyan-900/30">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500/70" /> AI Credit Builder Planner
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4 text-xs">
                <div className="flex items-center justify-between p-3 bg-[#020810] border border-cyan-900/30 rounded-lg">
                    <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-white">Pay off active card balance</span>
                        <span className="text-[9px] text-cyan-500/60 uppercase tracking-widest">+15 Points Potential</span>
                    </div>
                    <input
                        type="checkbox"
                        checked={task1}
                        onChange={() => setTask1(!task1)}
                        className="w-4 h-4 rounded text-cyan-600 bg-cyan-950 border-cyan-900 focus:ring-cyan-500 focus:ring-2 accent-cyan-500"
                    />
                </div>

                <div className="flex items-center justify-between p-3 bg-[#020810] border border-cyan-900/30 rounded-lg">
                    <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-white">Link utility autopay to FTID Ledger</span>
                        <span className="text-[9px] text-cyan-500/60 uppercase tracking-widest">+10 Points Potential</span>
                    </div>
                    <input
                        type="checkbox"
                        checked={task2}
                        onChange={() => setTask2(!task2)}
                        className="w-4 h-4 rounded text-cyan-600 bg-cyan-950 border-cyan-900 focus:ring-cyan-500 focus:ring-2 accent-cyan-500"
                    />
                </div>

                <div className="flex items-center justify-between p-3 bg-[#020810] border border-cyan-900/30 rounded-lg">
                    <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-white">Request HDFC credit limit increase</span>
                        <span className="text-[9px] text-cyan-500/60 uppercase tracking-widest">+5 Points Potential</span>
                    </div>
                    <input
                        type="checkbox"
                        checked={task3}
                        onChange={() => setTask3(!task3)}
                        className="w-4 h-4 rounded text-cyan-600 bg-cyan-950 border-cyan-900 focus:ring-cyan-500 focus:ring-2 accent-cyan-500"
                    />
                </div>
            </CardContent>
          </Card>
      </div>

      {/* Credit Trajectory */}
      <Card className="bg-[#0a1520] border-cyan-900/30 mt-6 h-[350px]">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
                <CardTitle className="text-lg flex items-center gap-2 text-white">
                    <TrendingUp className="h-5 w-5 text-cyan-500/70" /> Credit Score Trajectory
                </CardTitle>
                <p className="text-xs text-cyan-100/50">Aggregated from 4 primary bureaus via Account Aggregator.</p>
            </div>
        </CardHeader>
        <CardContent className="h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={creditHistory} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#164e63" vertical={false} />
                    <XAxis dataKey="month" stroke="#06b6d4" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis domain={[600, 900]} stroke="#06b6d4" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{stroke: '#164e63'}} contentStyle={{backgroundColor: '#020810', borderColor: '#164e63'}} />
                    <Area type="monotone" dataKey="score" name="Credit Score" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                </AreaChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

