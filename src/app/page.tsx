import Link from "next/link";
import { Bot, User, Building2, Landmark, ShieldCheck, Scale, Terminal, ArrowRight, ArrowRightLeft } from "lucide-react";

const portals = [
  {
    name: "Citizen Identity Layer",
    desc: "Personal financial intelligence, trust profile, and unified health engine.",
    href: "/citizen",
    icon: User,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30"
  },
  {
    name: "Enterprise Engine",
    desc: "Smart invoice intelligence, compliance automation, and vendor trust network.",
    href: "/business",
    icon: Building2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30"
  },
  {
    name: "Institutional Risk Node",
    desc: "SME underwriting intelligence, fraud detection, and dynamic risk engine.",
    href: "/bank",
    icon: Landmark,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30"
  },
  {
    name: "Governance & Economy",
    desc: "Real-time MSME economy monitor, formalization index, and tax intelligence.",
    href: "/government",
    icon: Scale,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30"
  },
  {
    name: "RBI / Regulator Core",
    desc: "National financial stability, systemic fraud monitoring, and early warning systems.",
    href: "/regulator",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30"
  },
  {
    name: "Audit Intelligence",
    desc: "AI audit assistant, smart reconciliation, and automated compliance trails.",
    href: "/auditor",
    icon: FileSignatureIcon,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30"
  },
  {
    name: "Developer Ecosystem",
    desc: "India's open financial intelligence layer, secure APIs, and consent infrastructure.",
    href: "/developer",
    icon: Terminal,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30"
  },
  {
    name: "Payment Gateway Node",
    desc: "Real-time settlement rails, automated transaction compliance filters, and e-RUPI voucher processors.",
    href: "/gateway",
    icon: ArrowRightLeft,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/30"
  }
];

function FileSignatureIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m20.5 13-1.5 1.5" />
      <path d="m14 20.5 1.5-1.5" />
      <path d="M14 17l4-4" />
      <path d="M18 21l3-3" />
    </svg>
  );
}

export default function LandingEcosystem() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-100 flex flex-col items-center pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl w-full relative z-10 flex flex-col items-center text-center mb-16">
            <div className="p-4 bg-[#0a1520] rounded-2xl border border-cyan-900/50 mb-6 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
               <Bot className="h-12 w-12 text-cyan-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                FTID Core
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-100/70 max-w-3xl font-light mb-8">
                India’s Real-Time Financial Intelligence Infrastructure.
            </p>
            
            <p className="text-sm text-cyan-500/60 max-w-2xl mx-auto uppercase tracking-widest font-bold leading-relaxed">
                A RegTech-powered national ecosystem designed to enable real-time compliance, fraud detection, transaction verification, structured financial interoperability, and economic observability.
            </p>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
            {portals.map((portal) => (
                <Link key={portal.name} href={portal.href} className="group">
                    <div className={`h-full p-6 bg-[#0a1520] border ${portal.border} rounded-2xl transition-all duration-300 hover:bg-[#0f1d2b] hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-5 transition-opacity rounded-full blur-2xl -mr-10 -mt-10"></div>
                        
                        <div className={`p-3 rounded-xl ${portal.bg} w-fit mb-4`}>
                            <portal.icon className={`h-6 w-6 ${portal.color}`} />
                        </div>
                        
                        <h2 className="text-lg font-bold text-white mb-2">{portal.name}</h2>
                        <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-grow">{portal.desc}</p>
                        
                        <div className={`mt-auto flex items-center text-[10px] font-bold uppercase tracking-widest ${portal.color}`}>
                            Access Portal <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </Link>
            ))}
            
            {/* Empty space filler for nice grid (since we have 7 items) */}
            <div className="hidden xl:flex h-full p-6 bg-transparent border border-dashed border-cyan-900/30 rounded-2xl flex-col items-center justify-center text-center opacity-50">
               <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/40">Infrastructure Node Expansion</p>
            </div>
        </div>
        
        <div className="mt-20 text-center relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-500/30">
                Authorized Access Only • National Security Protocol Active
            </p>
        </div>
    </div>
  );
}
