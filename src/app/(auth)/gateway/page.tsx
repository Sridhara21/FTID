"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Network, TrendingUp } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";
import { useCountry } from "@/components/CountryContext";

export default function GatewayMainPage() {
  const { scenario } = useScenario();
  const { country } = useCountry();
  const isImpacted = scenario.isActive && scenario.demoStep >= 4;

  const throughput = isImpacted ? 14200 : 8500;
  const successRate = isImpacted ? 99.1 : 99.8;
  const settlementVol = isImpacted ? 8450 : 3200;
  const networkHealth = isImpacted ? 85 : 99;

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Payment Gateway Portal"
        purpose="Is the national financial switch clearing transactions securely and without delay?"
        dataSources={[`${country.payment_networks.primary} Central Switch`, "Bank Node Terminals", "RTGS Settlement Queues"]}
        intelligenceGenerated={["Settlement Health Score", "Throughput Velocity (TPS)", "Network Latency Indexes"]}
        decisionEnabled="Gateway operator reroutes traffic, flags server latency, and matches liquidity clearings"
        legacyProcess="Gateway logs clearings retrospectively; bank outages and latency spikes go undetected until transaction failure rates cascade."
        ftidProcess="Gateway matches clearings in real-time, isolates dropping bank nodes, and monitors system strain."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Citizen Digital Wallet", "Business POS Terminals"]}
        downstream={["Bank Underwriting Hub", "Government GDP Tracker"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded">
              National Payment Infrastructure
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Network className="w-8 h-8 text-purple-400" />
            Gateway Dashboard
          </h1>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <V2MetricWidget 
          title="Settlement Health Score" 
          value={`${networkHealth}%`} 
          trend={isImpacted ? "down" : "up"} 
          trendValue={isImpacted ? 14.1 : 0.5}
          progress={networkHealth}
          explanation="Real-time aggregation of successful inter-bank clearings via the central switch." 
          dataSources={[`${country.payment_networks.primary} Switch`, "Core Banking L2"]}
          contributors={[
            { label: "Clearing matching velocity", type: "positive" },
            { label: "Bank node downtime", type: isImpacted ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Transaction Throughput" 
          value={`${throughput} TPS`} 
          trend="up" 
          trendValue={isImpacted ? 67.0 : 4.5}
          progress={throughput / 150}
          explanation="Live packet volume clearing through the sovereign infrastructure." 
          dataSources={[`${country.payment_networks.primary} Registry`, `${country.payment_networks.secondary} Gateway`]}
          contributors={[
            { label: "B2B payment volume", type: "positive" },
            { label: "Consumer peer-to-peer flows", type: "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Network Latency Index" 
          value={`${isImpacted ? 145 : 32} ms`} 
          trend={isImpacted ? "up" : "down"} 
          trendValue={isImpacted ? 113.0 : 2.1}
          progress={(isImpacted ? 145 : 32) / 2}
          explanation="Average millisecond response time across all connected financial nodes." 
          dataSources={[`${country.payment_networks.primary} Node Monitor`]}
          contributors={[
            { label: "Server queue loads", type: isImpacted ? "negative" : "positive" },
            { label: "API connection limits", type: "positive" }
          ]}
        />
      </div>

      {/* Live Graph and Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#0a1520] border-purple-900/30 h-full">
            <CardHeader>
              <CardTitle className="text-white">Live Node Latency</CardTitle>
              <CardDescription className="text-slate-400">Real-time observability of switch capacity</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center border-t border-purple-900/20 relative">
              {isImpacted ? (
                <div className="absolute inset-0 bg-amber-900/10 flex flex-col items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-amber-400 mb-4 animate-bounce" />
                  <p className="text-lg font-bold text-amber-400">Capacity Strain Detected</p>
                  <p className="text-sm font-mono text-amber-500/70">Massive concurrent API calls resulting from macro injection</p>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-500/20 border-2 border-purple-400 rounded-full flex items-center justify-center animate-pulse z-10">
                      <Network className="w-6 h-6 text-purple-400" />
                   </div>
                   <svg className="w-full h-full absolute inset-0 z-0">
                     <circle cx="50%" cy="50%" r="80" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                     <circle cx="50%" cy="50%" r="120" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" fill="none" />
                   </svg>
                   <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                   <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                   <div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                   <div className="absolute bottom-[20%] right-[20%] w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div>
          <V2InsightsFeed 
            title="Gateway Alerts" 
            items={[
              { icon: Network, color: "text-purple-400", bg: "bg-purple-400/10", text: "API load balance is functional. 99.8% transactions settled successfully." },
              { icon: AlertCircle, color: "text-amber-400", bg: "bg-amber-400/10", text: "Warning: High transaction packet count detected on prime bank nodes." }
            ]}
          />
        </div>
      </div>

    </div>
  );
}