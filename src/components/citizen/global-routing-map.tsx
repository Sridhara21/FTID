"use client";

import { useState, useEffect } from 'react';

export function GlobalRoutingMap() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => (p + 2) % 100);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-slate-50">
            {/* Apple visionOS deep space gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#02010a] to-[#02010a]"></div>
            
            {/* World Map Grid Abstraction */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            
            {/* Routing Connections */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-white/70 -translate-y-1/2">
                <div 
                    className="absolute top-1/2 -translate-y-1/2 h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] rounded-full transition-all duration-75"
                    style={{ left: `${progress}%`, width: '15%' }}
                ></div>
            </div>

            {/* Nodes */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase mt-4 text-slate-900/80 tracking-[0.2em] bg-slate-50/40 px-3 py-1 rounded-full backdrop-blur-md">Local Devices</span>
            </div>

            <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse delay-75"></div>
                <span className="text-[10px] font-bold uppercase mt-4 text-cyan-700 tracking-[0.2em] bg-slate-50/40 px-3 py-1 rounded-full backdrop-blur-md">Tax Authority</span>
            </div>

            {/* Large background glows */}
            <div className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-purple-300/40 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-300/40 rounded-[100%] blur-[120px]"></div>
        </div>
    );
}
