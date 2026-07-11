"use client";

import { motion } from "framer-motion";
import { 
  User, Wallet, Receipt, FileText, ArrowRight, Activity, 
  ShieldCheck, BrainCircuit, LineChart, Users, CheckCircle2 
} from "lucide-react";

export function DecisionGraph() {
  const nodes = [
    { id: "identity", label: "Identity", icon: User, color: "text-cyan-400", bg: "bg-cyan-900/30", border: "border-cyan-500/30" },
    { id: "payment", label: "Payment Behaviour", icon: Wallet, color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30" },
    { id: "tax", label: "Tax Behaviour", icon: Receipt, color: "text-amber-400", bg: "bg-amber-900/30", border: "border-amber-500/30" },
    { id: "cashflow", label: "Cash Flow", icon: LineChart, color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30" },
    { id: "openfinance", label: "Open Finance", icon: FileText, color: "text-violet-400", bg: "bg-violet-900/30", border: "border-violet-500/30" }
  ];

  const engines = [
    { id: "risk", label: "Risk Engine", icon: Activity, color: "text-rose-400", bg: "bg-rose-900/30", border: "border-rose-500/30" },
    { id: "trust", label: "Trust Engine", icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30" }
  ];

  return (
    <div className="bg-[#030b14] border border-slate-800 rounded-xl p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-8">
        <BrainCircuit className="w-5 h-5 text-indigo-400" />
        <h3 className="text-white font-bold">Decision Support Graph</h3>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Source Nodes */}
        <div className="flex flex-col gap-3 w-full md:w-48 relative z-10">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 pl-1">Data Sources</div>
          {nodes.map((node, i) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={node.id}
              className={`flex items-center gap-3 p-2.5 rounded-lg border ${node.bg} ${node.border} bg-opacity-50`}
            >
              <node.icon className={`w-4 h-4 ${node.color}`} />
              <span className="text-xs font-medium text-slate-200">{node.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Connectors to Engines */}
        <div className="hidden md:flex flex-col items-center justify-center relative flex-grow min-w-[50px] z-0">
          <svg className="absolute w-full h-[200px]" style={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <path d="M 0 100 C 50 100, 50 50, 100 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
            <path d="M 0 100 C 50 100, 50 150, 100 150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Engine Nodes */}
        <div className="flex flex-col gap-6 w-full md:w-48 relative z-10">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 pl-1">Sovereign Intelligence Kernel</div>
          {engines.map((engine, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (i * 0.2) }}
              key={engine.id}
              className={`flex items-center gap-3 p-3 rounded-lg border ${engine.bg} ${engine.border} bg-opacity-50 shadow-lg`}
            >
              <engine.icon className={`w-5 h-5 ${engine.color}`} />
              <span className="text-sm font-bold text-white">{engine.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Connectors to Explainability */}
        <div className="hidden md:flex flex-col items-center justify-center relative flex-grow min-w-[50px] z-0">
           <svg className="absolute w-full h-[100px]" style={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <path d="M 0 25 C 50 25, 50 50, 100 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
            <path d="M 0 75 C 50 75, 50 50, 100 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Output Nodes */}
        <div className="flex flex-col gap-4 w-full md:w-56 relative z-10">
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 pl-1">Decision Support Layer</div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col gap-2 p-3 rounded-lg border border-indigo-500/30 bg-indigo-900/20 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-1 bg-indigo-500/20 rounded-bl-lg">
              <span className="text-[8px] uppercase tracking-widest text-indigo-300 font-bold px-1">Explainability Engine</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
               <BrainCircuit className="w-4 h-4 text-indigo-400" />
               <span className="text-sm font-bold text-white">Decision Support</span>
            </div>
            <p className="text-[10px] text-slate-400">Contextualizes signals into explainable insights for human review.</p>
          </motion.div>

          <div className="flex items-center justify-center text-slate-600 my-1">
            <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-3 p-3 rounded-lg border border-amber-500/30 bg-amber-900/20"
          >
             <Users className="w-5 h-5 text-amber-400" />
             <span className="text-sm font-bold text-amber-100">Human Decision</span>
          </motion.div>

          <div className="flex items-center justify-center text-slate-600 my-1">
            <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="flex items-center gap-3 p-3 rounded-lg border border-emerald-500/50 bg-emerald-900/40 shadow-lg shadow-emerald-900/20"
          >
             <CheckCircle2 className="w-5 h-5 text-emerald-400" />
             <span className="text-sm font-bold text-white">Final Outcome</span>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
