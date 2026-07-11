"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, TrendingDown, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Key, Check, Eye } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";
import { useCountry } from "@/components/CountryContext";

export default function AuditorMainPage() {
  const { scenario } = useScenario();
  const { country } = useCountry();
  const [selectedProof, setSelectedProof] = useState<string | null>(null);
  const [merkleSimulating, setMerkleSimulating] = useState(false);
  const [merkleVerified, setMerkleVerified] = useState<boolean | null>(null);

  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidityInjection = scenario.activeEvent === "LIQUIDITY_INJECTION";
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";
  const isFraudOutbreak = scenario.activeEvent === "FRAUD_OUTBREAK";

  // Dynamic metrics based on active event
  const confidenceBase = 98.7;
  const confidence = isFraudOutbreak ? confidenceBase - 8.5 : isDefaultSpike ? confidenceBase - 2.1 : confidenceBase;

  const reconAccuracyBase = 99.9;
  const reconAccuracy = isFraudOutbreak ? reconAccuracyBase - 4.2 : reconAccuracyBase;

  const liabilityBase = 1.2;
  const liability = isEconomicSlowdown ? liabilityBase + 3.8 : isDefaultSpike ? liabilityBase + 2.5 : liabilityBase;

  const proofsBase = 4520;
  const proofsVerified = isLiquidityInjection ? proofsBase + 850 : proofsBase;

  // Cryptographic evidence chains
  const evidenceChains = [
    {
      txId: "TXN-99120",
      entity: "Vardhaman Electronics",
      type: `${country.tax_system}-to-Bank Reconciliation`,
      hash: "0x7a8b...3c9d",
      proofStatus: "Cryptographically Verified",
      timestamp: "Just Now",
      status: "PASS"
    },
    {
      txId: "TXN-99118",
      entity: "Apex Automotive Components",
      type: "Supply Chain Finance Invoice Verification",
      hash: "0xf2e4...a1b8",
      proofStatus: "Signature Validated",
      timestamp: "2 mins ago",
      status: "PASS"
    },
    {
      txId: "TXN-98942",
      entity: "Indus Micro-Finance",
      type: "MFI Disbursement Audit",
      hash: "0x3d9e...ef12",
      proofStatus: isFraudOutbreak ? "Hash Mismatch Flagged" : "Cryptographically Verified",
      timestamp: "10 mins ago",
      status: isFraudOutbreak ? "FAIL" : "PASS"
    }
  ];

  const runMerkleSimulation = () => {
    setMerkleSimulating(true);
    setMerkleVerified(null);
    setTimeout(() => {
      setMerkleSimulating(false);
      setMerkleVerified(isFraudOutbreak ? false : true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Auditor Portal"
        purpose="Has the sovereign financial ledger been corrupted and do statement reconciliations match underlying transaction flows?"
        dataSources={["Sovereign ZK Ledger", "Bank Node logs", `${country.tax_system} transaction hashes`]}
        intelligenceGenerated={["Audit Confidence Score", "Merkle Proof Verification states", "Hidden Liability Indicators"]}
        decisionEnabled="Auditor validates balance sheet integrity, flags transaction anomalies, and exports cryptographic proofs"
        legacyProcess="Auditor pulls manual samples 6 to 12 months after the reporting period, failing to identify hidden liabilities or active ledger manipulations."
        ftidProcess="Auditor verifies continuous cryptographic statements in real-time, executing zero-knowledge matching loops against the public switch."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Business Portal Ledger", "Regulator Command Console"]}
        downstream={["Executive Decision Hub"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
              Verification & Cryptographic Traceability
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
            Auditor Command Dashboard
          </h1>
        </div>
      </header>

      {/* 4 explainable metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <V2MetricWidget 
          title="Audit Confidence Score" 
          value={`${confidence.toFixed(1)}%`} 
          trend={confidence >= confidenceBase ? "up" : "down"}
          trendValue={Math.abs(confidence - confidenceBase)}
          progress={confidence}
          explanation={`Cryptographic certainty that reported ledgers match underlying digital currency, ${country.payment_networks.primary}, and bank account flows.`} 
          dataSources={[country.open_finance_framework, `${country.payment_networks.primary} Registry`, `${country.central_bank} Digital Ledger`]}
          contributors={[
            { label: "ZK-Proof Verification streak", type: "positive" },
            { label: "Mule account anomalies", type: isFraudOutbreak ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Reconciliation Accuracy" 
          value={`${reconAccuracy.toFixed(1)}%`} 
          trend={reconAccuracy >= reconAccuracyBase ? "up" : "down"}
          trendValue={Math.abs(reconAccuracy - reconAccuracyBase)}
          progress={reconAccuracy}
          explanation={`Real-time match rate between institutional balance sheets, bank transfers, and ${country.tax_system} invoices.`} 
          dataSources={[`${country.tax_system} API`, "Core Banking L1"]}
          contributors={[
            { label: "Automated invoice matching", type: "positive" },
            { label: "Systemic payment latency", type: isEconomicSlowdown ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Hidden Liability Index" 
          value={`${liability.toFixed(1)}%`} 
          trend={liability <= liabilityBase ? "down" : "up"}
          trendValue={Math.abs(liability - liabilityBase)}
          progress={liability * 10}
          explanation="Detected probability of off-balance-sheet exposures or informal debt servicing." 
          dataSources={[country.open_finance_framework, "Credit Bureau"]}
          contributors={[
            { label: "Closed loop repayment audits", type: "positive" },
            { label: "Informal capital draws", type: isEconomicSlowdown ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="ZK-Proofs Verified" 
          value={proofsVerified.toLocaleString()} 
          trend="up"
          trendValue={14.5}
          progress={100}
          explanation="Total cryptographic zero-knowledge proofs processed and anchored on the sovereign audit registry." 
          dataSources={["Sovereign Audit Ledger"]}
          contributors={[
            { label: "Automated batch processing", type: "positive" }
          ]}
        />
      </div>

      {/* Merkle Proof Simulator & Evidence Chains */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          
          {/* Merkle Proof Simulator */}
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-cyan-400" />
                Merkle Proof Simulator
              </CardTitle>
              <CardDescription className="text-slate-400">
                Validate transaction block hash trees against the central sovereign registry root
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-cyan-900/20 pt-6 space-y-4">
              <div className="p-4 bg-[#050c14] border border-slate-800 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Ecosystem Root Hash</span>
                  <span className="text-xs font-mono text-cyan-400">0x3f8a9d72bc8b901aef45398dcd98231a47df12</span>
                </div>
                <button
                  onClick={runMerkleSimulation}
                  disabled={merkleSimulating}
                  className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs rounded transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] flex items-center gap-1.5"
                >
                  <Activity className={`w-3.5 h-3.5 ${merkleSimulating ? 'animate-spin' : ''}`} />
                  {merkleSimulating ? "Computing Proof Path..." : "Verify Merkle Path"}
                </button>
              </div>

              {merkleVerified !== null && (
                <div className={`p-4 border rounded-lg font-mono text-xs animate-in slide-in-from-top-2 duration-300 ${
                  merkleVerified 
                    ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-400" 
                    : "bg-rose-950/20 border-rose-500/30 text-rose-400"
                }`}>
                  {merkleVerified ? (
                    <div className="space-y-1">
                      <div className="font-bold flex items-center gap-1.5">✓ Merkle Path Verified Successfully</div>
                      <p className="text-[10px] text-slate-400 leading-normal mt-1">Transaction block hashes are cleanly matched to Root Leaf. Integrity confirmed.</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="font-bold flex items-center gap-1.5">✕ Validation Failed: Hash Mismatch Detected</div>
                      <p className="text-[10px] text-slate-400 leading-normal mt-1">Distributor node disbursement has failed cryptographic leaf comparison. Distressed ledger block identified.</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Cryptographic Evidence Chains */}
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-cyan-400" />
                Live Cryptographic Evidence Chains
              </CardTitle>
            </CardHeader>
            <CardContent className="border-t border-cyan-900/20 pt-6 space-y-4">
              {evidenceChains.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedProof(item.txId)}
                  className={`p-3 rounded border cursor-pointer transition-all flex justify-between items-center ${
                    selectedProof === item.txId
                      ? "bg-cyan-950/30 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                      : "bg-cyan-950/20 border-cyan-900/30 hover:bg-cyan-950/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono text-sm font-bold">{item.txId}</span>
                      <span className="text-xs text-slate-400">({item.entity})</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{item.type}</div>
                    <div className="text-[10px] font-mono text-cyan-500/70 mt-1">Registry Hash: {item.hash}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-bold px-2 py-0.5 rounded ${
                      item.status === "PASS" ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    }`}>
                      {item.proofStatus}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">{item.timestamp}</div>
                  </div>
                </div>
              ))}

              {selectedProof && (
                <div className="mt-4 p-4 bg-[#050c14] border border-slate-800 rounded-lg">
                  <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" /> Decrypted Verification Details: {selectedProof}
                  </h4>
                  <pre className="text-[10px] font-mono text-slate-300 bg-[#020810] p-3 rounded border border-slate-800/80 overflow-x-auto leading-relaxed">
{`{
  "traceId": "${selectedProof}",
  "schema": "sovereign.dpi.reconciliation.v1",
  "auditChain": {
    "timestamp": "${new Date().toISOString()}",
    "consentId": "con_88fa7b2a9e102",
    "verificationSource": "${country.tax_system}_Match",
    "crytographicSignatures": [
      { "actor": "${country.tax_system}_NODE_12", "sig": "MEQCIF6x8n9..." },
      { "actor": "BANK_AA_GATEWAY", "sig": "MD8CAQC..." }
    ],
    "verificationStatus": "${selectedProof === "TXN-98942" && isFraudOutbreak ? "FAIL_HASH_MISMATCH" : "CONFIRMED_MATCH"}"
  }
}`}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div>
          <V2InsightsFeed 
            title="Forensic Ledger Log" 
            items={[
              { 
                icon: AlertCircle, 
                color: isFraudOutbreak ? "text-rose-400" : "text-amber-400", 
                bg: isFraudOutbreak ? "bg-rose-400/10" : "bg-amber-400/10", 
                text: isFraudOutbreak 
                  ? "Exception detected: Hash mismatch in micro-finance disbursement logs. Trace leads to unrecognized regional wallet gateway." 
                  : `Warning: High correlation detected between regional ${country.tax_system} revenue drops and automotive parts manufacturing defaults.` 
              },
              { 
                icon: ShieldCheck, 
                color: "text-emerald-400", 
                bg: "bg-emerald-400/10", 
                text: "Zero-Knowledge credit performance proof generated and verified for Vardhaman Electronics (2.4x DSCR verified)." 
              }
            ]}
          />
        </div>
      </div>

    </div>
  );
}