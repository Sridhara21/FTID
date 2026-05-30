"use client";

import { useAuth } from "@/lib/auth-context";
import { Bot, Building2, Landmark, Scale, ShieldCheck, FileSignature, Terminal, ArrowRightLeft } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const roles = [
  { id: "citizen", icon: Bot, label: "Citizen", color: "text-cyan-400" },
  { id: "business", icon: Building2, label: "Enterprise", color: "text-emerald-400" },
  { id: "bank", icon: Landmark, label: "Bank Node", color: "text-blue-400" },
  { id: "institution", icon: Landmark, label: "Institution", color: "text-violet-400" },
  { id: "government", icon: Scale, label: "Government", color: "text-amber-400" },
  { id: "regulator", icon: ShieldCheck, label: "RBI Regulator", color: "text-rose-400" },
  { id: "auditor", icon: FileSignature, label: "Auditor", color: "text-indigo-400" },
  { id: "developer", icon: Terminal, label: "Developer", color: "text-purple-400" },
  { id: "gateway", icon: ArrowRightLeft, label: "Gateway", color: "text-sky-400" }
];

export default function LoginPage() {
  const { login, role, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && role) {
      if (role === "regulator") router.push("/regulator/national-dashboard");
      else router.push(`/${role}`);
    }
  }, [role, isLoading, router]);

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-[#020810] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 pointer-events-none z-0"></div>
      
      <div className="z-10 text-center mb-12">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 font-sans tracking-tight">
          FTID Network Login
        </h1>
        <p className="text-slate-400 font-mono text-sm">Select your institutional role to access the infrastructure.</p>
      </div>

      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {roles.map((r) => (
          <button
            key={r.id}
            onClick={() => login(r.id as any)}
            className="p-6 bg-[#0a1520]/80 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-cyan-900/50 hover:bg-[#0a1520] hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all group"
          >
            <div className={`p-4 bg-slate-900 rounded-full border border-slate-800 group-hover:border-slate-700`}>
              <r.icon className={`w-8 h-8 ${r.color}`} />
            </div>
            <span className="text-slate-300 font-mono text-sm group-hover:text-white">{r.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
