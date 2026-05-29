"use client";

import { useState, useEffect } from "react";
import { Briefcase, Target, BarChart, CheckCircle2, UserCheck, FileText, Activity, ChevronRight, Sliders, RefreshCw, Terminal as TerminalIcon, AlertTriangle, ShieldCheck, Ban } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const pipelineData = [
  { day: 'Mon', applications: 120, approved: 80 },
  { day: 'Tue', applications: 135, approved: 95 },
  { day: 'Wed', applications: 150, approved: 110 },
  { day: 'Thu', applications: 110, approved: 85 },
  { day: 'Fri', applications: 180, approved: 140 },
  { day: 'Sat', applications: 90, approved: 60 },
  { day: 'Sun', applications: 60, approved: 45 },
];

interface Applicant {
  name: string;
  request: string;
  amount: number; // in Lakhs
  dscr: number;
  collateral: number; // %
  gstScore: number; // %
}

const initialApplicants: Applicant[] = [
  { name: "TechVision Pvt Ltd", request: "Working Capital", amount: 120, dscr: 2.1, collateral: 80, gstScore: 95 },
  { name: "Shree Textiles", request: "Term Loan", amount: 45, dscr: 1.1, collateral: 40, gstScore: 70 },
  { name: "Organic Farms Co", request: "Agri Expansion", amount: 80, dscr: 1.8, collateral: 110, gstScore: 85 },
];

export default function BankUnderwriting() {
  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants);
  const [selectedIdx, setSelectedIdx] = useState(0);
  
  // Sandbox Sliders
  const [amount, setAmount] = useState(120);
  const [dscr, setDscr] = useState(2.1);
  const [collateral, setCollateral] = useState(80);
  const [gstScore, setGstScore] = useState(95);

  const [score, setScore] = useState(840);
  const [logs, setLogs] = useState<string[]>([]);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [newApplicantName, setNewApplicantName] = useState("");
  const [newApplicantAmount, setNewApplicantAmount] = useState(50);

  // Sync inputs with selected applicant
  useEffect(() => {
    const current = applicants[selectedIdx];
    if (current) {
      setAmount(current.amount);
      setDscr(current.dscr);
      setCollateral(current.collateral);
      setGstScore(current.gstScore);
    }
  }, [selectedIdx, applicants]);

  // Recalculate credit score dynamically on slider changes
  useEffect(() => {
    // Formula: DSCR (max 350 pts), Collateral (max 250 pts), GST Compliance (max 300 pts)
    const dscrPoints = Math.min(350, Math.max(0, ((dscr - 0.5) / 2.5) * 350));
    const collateralPoints = Math.min(250, Math.max(0, (collateral / 150) * 250));
    const gstPoints = Math.min(300, Math.max(0, ((gstScore - 50) / 50) * 300));
    
    setScore(Math.round(dscrPoints + collateralPoints + gstPoints));
  }, [dscr, collateral, gstScore]);

  const handleCreateApplicant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApplicantName) return;
    const newApp: Applicant = {
      name: newApplicantName,
      request: "SME Credit Pull",
      amount: newApplicantAmount,
      dscr: 1.5,
      collateral: 60,
      gstScore: 80,
    };
    setApplicants((prev) => [...prev, newApp]);
    setSelectedIdx(applicants.length); // Switch to the new applicant
    setNewApplicantName("");
  };

  const handleEvaluate = async () => {
    setIsEvaluating(true);
    setLogs([]);
    const applicant = applicants[selectedIdx];

    const steps = [
      `[INGEST] Requesting Account Aggregator (AA) data share for ${applicant.name}...`,
      `[AA] Consent token validated. Fetching 12-month consolidated bank statements...`,
      `[ANALYSIS] Ingested 480 transactions. Calculating monthly cashflow delta...`,
      `[GSTN] Cross-referencing e-invoices against bank deposits (matching score: ${gstScore}%)...`,
      `[ULI] Calculating Debt Service Coverage Ratio (DSCR: ${dscr}x)...`,
      `[SCORING] Running risk scoring metrics. Weights applied: [DSCR 40% | Collateral 30% | GST 30%]`,
      `[EVALUATION] Final calculated credit rating: ${score} / 900.`,
      score >= 750 
        ? `[STP] Score above auto-approval threshold. Initiating digital CBDC smart contract for ₹${amount}L...`
        : score >= 600
        ? `[REVIEW] Score in gray zone (${score}). Dispatching notification to Risk Committee for manual sign-off.`
        : `[REJECT] Decision: Decline. Insufficient cashflow security or compliance metrics.`
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 150 + Math.random() * 150));
      setLogs(prev => [...prev, steps[i]]);
    }
    setIsEvaluating(false);
  };

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-blue-400" />
              Algorithmic Underwriting (ULI)
          </h1>
          <p className="text-blue-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            ACCOUNT AGGREGATOR (AA) INGESTION • GST CASHFLOW ANALYSIS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <Activity className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">ULI Engine: Active</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Avg Time to Decision</p>
                      <p className="text-4xl font-bold text-white mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>4.2s</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Target className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">98% REDUCTION</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <Target className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Auto-Approval Rate</p>
                      <p className="text-4xl font-bold text-blue-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>72.5%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-blue-400">
                          <CheckCircle2 className="h-3 w-3" /> <span className="text-blue-500/40 ml-1">STP PIPELINE</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <BarChart className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Total Disbursed (Week)</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>₹142Cr</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <FileText className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">TO 4,500 MSMEs</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <FileText className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-blue-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Activity className="h-5 w-5 text-blue-500/70" /> ULI Application Pipeline
                    </CardTitle>
                    <p className="text-xs text-blue-100/50">Real-time loan applications processed via the Unified Lending Interface.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={pipelineData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorApprove" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} />
                        <XAxis dataKey="day" stroke="#3b82f6" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#3b82f6" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip cursor={{stroke: '#1e3a8a'}} contentStyle={{backgroundColor: '#020810', borderColor: '#1e3a8a'}} />
                        <Area type="monotone" dataKey="applications" name="Applications Received" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorApps)" />
                        <Area type="monotone" dataKey="approved" name="STP Approved" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorApprove)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-blue-900/30">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-blue-500/70" /> ULI Application Queue
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2 max-h-[170px] overflow-y-auto pr-1">
                  {applicants.map((app, idx) => {
                    const appScore = idx === selectedIdx ? score : 
                      Math.round(
                        Math.min(350, Math.max(0, ((app.dscr - 0.5) / 2.5) * 350)) +
                        Math.min(250, Math.max(0, (app.collateral / 150) * 250)) +
                        Math.min(300, Math.max(0, ((app.gstScore - 50) / 50) * 300))
                      );
                    
                    const appStatus = appScore >= 750 ? "STP Approved" : appScore >= 600 ? "Referral" : "Decline";
                    
                    return (
                      <div 
                        key={app.name} 
                        onClick={() => setSelectedIdx(idx)}
                        className={`flex flex-col gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                          idx === selectedIdx 
                            ? 'bg-blue-900/30 border-blue-400' 
                            : 'bg-[#020810] border-blue-900/30 hover:border-blue-800'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-white">{app.name}</span>
                          <span className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded ${
                            appStatus === "STP Approved" 
                              ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-900/40' 
                              : appStatus === "Referral"
                              ? 'text-amber-400 bg-amber-950/40 border border-amber-900/40'
                              : 'text-rose-400 bg-rose-950/40 border border-rose-900/40'
                          }`}>
                            {appStatus}
                          </span>
                        </div>
                        <div className="flex justify-between text-[11px] text-blue-100/50">
                          <span>{app.request}: ₹{app.amount}L</span>
                          <span className="font-mono text-blue-400">Score: {appScore}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Add Applicant Form */}
                <form onSubmit={handleCreateApplicant} className="border-t border-blue-900/30 pt-3 mt-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500/60 mb-2">Simulate New Ingestion</p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Company Name"
                      value={newApplicantName}
                      onChange={(e) => setNewApplicantName(e.target.value)}
                      className="flex-1 bg-[#020810] border border-blue-900/50 rounded p-1.5 text-xs text-white placeholder-blue-900/40 focus:outline-none focus:border-blue-400"
                    />
                    <input 
                      type="number" 
                      placeholder="₹Lakhs"
                      value={newApplicantAmount}
                      onChange={(e) => setNewApplicantAmount(Number(e.target.value))}
                      className="w-16 bg-[#020810] border border-blue-900/50 rounded p-1.5 text-xs text-white placeholder-blue-900/40 focus:outline-none focus:border-blue-400"
                      min="1"
                    />
                    <button type="submit" className="px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase rounded">
                      Add
                    </button>
                  </div>
                </form>
            </CardContent>
          </Card>
      </div>

      {/* Credit Decision Sandbox & Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
          {/* Sandbox Controls */}
          <Card className="lg:col-span-6 bg-[#0a1520] border-blue-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-blue-400" /> SME Credit Decision Sandbox
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="p-3 bg-blue-950/20 border border-blue-900/30 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs text-blue-100/60 uppercase">Currently Adjusting:</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{applicants[selectedIdx]?.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-blue-500 uppercase tracking-widest">Recalculated ULI Score</span>
                    <p className={`text-2xl font-bold tracking-tighter ${
                      score >= 750 ? "text-emerald-400" : score >= 600 ? "text-amber-400" : "text-rose-400"
                    }`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {score} <span className="text-xs text-blue-100/40">/ 900</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-bold text-blue-100/70">DEBT SERVICE COVERAGE RATIO (DSCR)</span>
                      <span className="font-mono text-blue-400 font-bold">{dscr}x</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="3.0" 
                      step="0.1" 
                      value={dscr} 
                      onChange={(e) => setDscr(parseFloat(e.target.value))}
                      className="w-full h-1 bg-[#020810] rounded-lg appearance-none cursor-pointer accent-blue-400"
                    />
                    <div className="flex justify-between text-[9px] text-blue-100/30 uppercase mt-1">
                      <span>0.5x (Critical Risk)</span>
                      <span>1.5x (Target)</span>
                      <span>3.0x (Optimal)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-bold text-blue-100/70">COLLATERAL COVERAGE</span>
                      <span className="font-mono text-blue-400 font-bold">{collateral}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="150" 
                      value={collateral} 
                      onChange={(e) => setCollateral(parseInt(e.target.value))}
                      className="w-full h-1 bg-[#020810] rounded-lg appearance-none cursor-pointer accent-blue-400"
                    />
                    <div className="flex justify-between text-[9px] text-blue-100/30 uppercase mt-1">
                      <span>0% (Unsecured)</span>
                      <span>100% (Fully Secured)</span>
                      <span>150% (Over-Collateralized)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-bold text-blue-100/70">GST COMPLIANCE SCORE</span>
                      <span className="font-mono text-blue-400 font-bold">{gstScore}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="100" 
                      value={gstScore} 
                      onChange={(e) => setGstScore(parseInt(e.target.value))}
                      className="w-full h-1 bg-[#020810] rounded-lg appearance-none cursor-pointer accent-blue-400"
                    />
                    <div className="flex justify-between text-[9px] text-blue-100/30 uppercase mt-1">
                      <span>50% (High Mismatch)</span>
                      <span>85% (Average)</span>
                      <span>100% (Perfect Reconciliation)</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleEvaluate} 
                    disabled={isEvaluating}
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900/40 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <RefreshCw className={`h-4 w-4 ${isEvaluating ? "animate-spin" : ""}`} /> 
                    {isEvaluating ? "Analyzing Ledger data..." : "Evaluate via ULI Engine"}
                  </button>
                </div>
            </CardContent>
          </Card>

          {/* Underwriting Console logs */}
          <Card className="lg:col-span-6 bg-[#0a1520] border-blue-900/30 flex flex-col justify-between">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <TerminalIcon className="h-4 w-4 text-blue-400" /> ULI Execution Terminal
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
                <div className="bg-[#020810] border border-blue-900/50 rounded-lg p-4 font-mono text-[10px] text-cyan-400/90 h-[210px] overflow-y-auto custom-scrollbar flex flex-col gap-1">
                    {logs.length === 0 ? (
                        <div className="text-blue-500/40 italic flex items-center gap-2 h-full justify-center">
                            <span>Ready to execute automated credit verification...</span>
                        </div>
                    ) : (
                        logs.map((log, index) => {
                          let color = "text-cyan-400/90";
                          if (log.includes("[STP]")) color = "text-emerald-400 font-bold";
                          if (log.includes("[REVIEW]")) color = "text-amber-400 font-bold";
                          if (log.includes("[REJECT]")) color = "text-rose-400 font-bold";
                          return (
                            <div key={index} className={`leading-relaxed ${color}`}>
                                {log}
                            </div>
                          );
                        })
                    )}
                </div>

                <div className="mt-4 p-3 rounded-lg border flex items-center gap-3 bg-[#020810] border-blue-900/30">
                  {score >= 750 ? (
                    <>
                      <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
                      <div className="text-xs">
                        <p className="font-bold text-white">AUTO-APPROVAL APPROVED (STP)</p>
                        <p className="text-blue-100/50 mt-0.5">Risk metrics fully clear. Funds ready for Smart Contract CBDC routing.</p>
                      </div>
                    </>
                  ) : score >= 600 ? (
                    <>
                      <AlertTriangle className="h-6 w-6 text-amber-400 shrink-0" />
                      <div className="text-xs">
                        <p className="font-bold text-white">REFERRED TO RISK COMMITTEE</p>
                        <p className="text-blue-100/50 mt-0.5">DSCR or GST reconciliation requires senior compliance review.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Ban className="h-6 w-6 text-rose-400 shrink-0" />
                      <div className="text-xs">
                        <p className="font-bold text-white">AUTO-DECLINE STATUS</p>
                        <p className="text-blue-100/50 mt-0.5">Score falls below minimum credit risk requirements of 600.</p>
                      </div>
                    </>
                  )}
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
