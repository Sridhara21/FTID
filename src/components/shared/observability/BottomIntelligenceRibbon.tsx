"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, TrendingUp, ShieldAlert, Activity, RefreshCw } from "lucide-react";

export function BottomIntelligenceRibbon() {
  const [alerts, setAlerts] = useState([
    { text: "System Initializing. Connecting to National Intelligence Grid...", color: "text-cyan-400", risk: "LOW" }
  ]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Listen to our new global SSE Event Engine
    const eventSource = new EventSource('/api/events');
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const color = data.risk === 'CRITICAL' ? 'text-red-500' : 
                      data.risk === 'HIGH' ? 'text-rose-400' : 
                      data.risk === 'MEDIUM' ? 'text-amber-400' : 'text-emerald-400';
                      
        setAlerts(prev => {
          const newAlerts = [...prev, {
            text: `[${data.entity}] ${data.msg}`,
            color: color,
            risk: data.risk
          }];
          // Keep last 10 alerts
          if (newAlerts.length > 10) return newAlerts.slice(newAlerts.length - 10);
          return newAlerts;
        });
      } catch (err) {}
    };

    return () => eventSource.close();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % Math.max(1, alerts.length));
    }, 4000);
    return () => clearInterval(interval);
  }, [alerts.length]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#020810] border-t border-cyan-900/40 z-50 flex items-center overflow-hidden">
      <div className="flex items-center px-4 border-r border-cyan-900/40 bg-[#05101a] h-full z-10 shrink-0 shadow-[4px_0_10px_rgba(0,0,0,0.5)]">
        <Activity className="h-4 w-4 text-cyan-500 animate-pulse mr-2" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">Live Engine</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative h-full">
        <div 
          className="absolute flex items-center h-full transition-transform duration-500 ease-in-out pl-4"
          style={{ transform: `translateY(-${offset * 100}%)`, top: `${offset * 100}%` }}
        >
          <div className="flex flex-col h-full justify-start">
            {alerts.map((alert, i) => (
              <div key={i} className="h-10 flex items-center gap-3 shrink-0">
                <AlertTriangle className={`h-3.5 w-3.5 ${alert.color}`} />
                <span className="text-[11px] font-medium tracking-wide text-slate-300">
                  {alert.text}
                </span>
                <span className="text-[9px] text-slate-500 ml-4 font-mono">
                  [{alert.risk}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center px-4 border-l border-cyan-900/40 bg-[#05101a] h-full shrink-0">
        <span className="text-[10px] font-mono tracking-widest text-emerald-500 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          FTID ACTIVE
        </span>
      </div>
    </div>
  );
}
