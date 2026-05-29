"use client";

import { useState } from "react";
import { ShieldCheck, Nfc } from "lucide-react";

interface WealthCardProps {
  balance: number;
  name: string;
  tier: "Standard" | "Prime" | "Black";
}

export function SovereignCard({ balance, name, tier }: WealthCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Tier styling
  let bgGradient = "from-slate-100 via-white to-slate-200 border border-slate-300";
  let textColor = "text-slate-900";
  let badgeColor = "bg-slate-900/10 text-slate-900 border border-slate-900/20";
  let logoColor = "text-slate-900";
  
  if (tier === "Prime") {
    bgGradient = "from-slate-800 via-slate-700 to-slate-900 border border-slate-600";
    textColor = "text-white";
    badgeColor = "bg-white/20 text-white border border-white/30";
    logoColor = "text-white";
  } else if (tier === "Black") {
    bgGradient = "from-zinc-900 via-black to-zinc-800 border border-zinc-700";
    textColor = "text-white";
    badgeColor = "bg-amber-500/20 text-amber-500 border border-amber-500/30";
    logoColor = "text-white";
  }

  return (
    <div 
      className="perspective-[1000px] w-full h-full min-h-[220px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`relative w-full h-full rounded-2xl p-6 transition-all duration-200 ease-out shadow-2xl cursor-pointer overflow-hidden
                    bg-gradient-to-br ${bgGradient}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${50 + rotation.y * 3}% ${50 - rotation.x * 3}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`
          }}
        />

        {/* Card Content (translateZ creates the 3D pop effect) */}
        <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
          
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <ShieldCheck className={`h-6 w-6 ${logoColor}`} />
              <span className={`font-black uppercase tracking-widest text-sm ${logoColor}`}>FTID WEALTH</span>
            </div>
            <Nfc className={`h-6 w-6 opacity-70 ${textColor}`} />
          </div>

          <div className="mt-6">
            <p className={`text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1 ${textColor}`}>Available Balance</p>
            <p className={`text-4xl font-black tabular-nums tracking-tighter ${textColor}`}>
              ₹{balance.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="flex justify-between items-end mt-6">
            <div>
              <p className={`text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1 ${textColor}`}>Cardholder</p>
              <p className={`text-sm font-bold uppercase tracking-widest ${textColor}`}>{name || "Anonymous"}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${badgeColor}`}>
              {tier} Tier
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
