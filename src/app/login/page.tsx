"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Bot, Building2, Landmark, Scale, ShieldCheck, FileText, Terminal, ArrowRightLeft, Target, Loader2 } from "lucide-react";

const ROLES = [
  { id: "citizen", label: "Citizen", icon: Bot, color: "text-cyan-400", bg: "bg-cyan-900/30", border: "border-cyan-500/20" },
  { id: "business", label: "Enterprise", icon: Building2, color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/20" },
  { id: "bank", label: "Bank", icon: Landmark, color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/20" },
  { id: "institution", label: "Institution", icon: Target, color: "text-violet-400", bg: "bg-violet-900/30", border: "border-violet-500/20" },
  { id: "government", label: "Government", icon: Scale, color: "text-amber-400", bg: "bg-amber-900/30", border: "border-amber-500/20" },
  { id: "regulator", label: "Regulator (RBI)", icon: ShieldCheck, color: "text-rose-400", bg: "bg-rose-900/30", border: "border-rose-500/20" },
  { id: "auditor", label: "Auditor", icon: FileText, color: "text-indigo-400", bg: "bg-indigo-900/30", border: "border-indigo-500/20" },
  { id: "developer", label: "Developer", icon: Terminal, color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/20" },
  { id: "gateway", label: "Gateway", icon: ArrowRightLeft, color: "text-sky-400", bg: "bg-sky-900/30", border: "border-sky-500/20" },
];

export default function Login() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleLogin = async (roleId: string) => {
    setIsLoading(roleId);
    await signIn("credentials", {
      role: roleId,
      callbackUrl: roleId === 'regulator' ? '/regulator/national-dashboard' : `/${roleId}`,
    });
  };

  return (
    <div className="min-h-screen bg-[#050a0f] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-8 w-8 text-white" />
            <span className="text-3xl font-black text-white tracking-tight">FTID</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-200">National Financial Network</h1>
          <p className="text-slate-500 font-mono text-sm max-w-lg">
            Secure authentication portal. Please select your authorized network node to instantiate a secure JWT session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ROLES.map((role) => (
            <button
              key={role.id}
              onClick={() => handleLogin(role.id)}
              disabled={isLoading !== null}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${role.bg} ${role.border} hover:bg-opacity-50 hover:border-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <div className={`p-3 rounded-lg bg-slate-950/50 border border-slate-800 ${role.color}`}>
                {isLoading === role.id ? <Loader2 className="w-6 h-6 animate-spin" /> : <role.icon className="w-6 h-6" />}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white font-bold">{role.label}</span>
                <span className={`text-[10px] uppercase tracking-widest font-mono ${role.color}`}>Initialize Node</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <p className="text-xs text-slate-600 font-mono text-center flex items-center gap-2">
            <Lock className="w-3 h-3" /> Protected by NextAuth.js JWT Middleware
          </p>
        </div>
      </div>
    </div>
  );
}

function Lock(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  )
}
