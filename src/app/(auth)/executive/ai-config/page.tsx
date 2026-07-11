"use client";

import { useCountry } from "@/components/CountryContext";
import { Shield, Server, Activity, Database, Key, Settings, AlertTriangle, Layers, Cpu, Code } from "lucide-react";

export default function AIControlCenterPage() {
  const { country } = useCountry();
  const aiProfile = country.aiProfile;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Server className="w-8 h-8 text-cyan-400" />
          National AI Control Center
        </h1>
        <p className="text-slate-400">
          Govern, orchestrate, and audit the AI models powering {country.name}'s intelligence infrastructure.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#030b14] border border-cyan-900/30 rounded-xl p-5 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-950/50 rounded-lg">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-slate-200">Preferred LLM</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{aiProfile.preferredProvider}</div>
          <p className="text-xs text-slate-400">Active Inference Engine</p>
        </div>

        <div className="bg-[#030b14] border border-emerald-900/30 rounded-xl p-5 shadow-lg relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-950/50 rounded-lg">
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-slate-200">Fallback LLM</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{aiProfile.fallbackProvider}</div>
          <p className="text-xs text-slate-400">Failover Engine</p>
        </div>

        <div className="bg-[#030b14] border border-indigo-900/30 rounded-xl p-5 shadow-lg relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-950/50 rounded-lg">
              <Database className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="font-semibold text-slate-200">Data Residency</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-1">Local Edge</div>
          <p className="text-xs text-slate-400">No data leaves {country.name}</p>
        </div>

        <div className="bg-[#030b14] border border-orange-900/30 rounded-xl p-5 shadow-lg relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-950/50 rounded-lg">
              <Shield className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="font-semibold text-slate-200">Active Policies</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{aiProfile.policies.length}</div>
          <p className="text-xs text-slate-400">Enforced by Governance Engine</p>
        </div>
      </div>

      {/* Capabilities & Routing */}
      <div className="bg-[#030b14] border border-slate-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          Capability Routing Profiles
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-900/50">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Capability</th>
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Inference Mode</th>
                <th className="px-4 py-3">Confidence Threshold</th>
                <th className="px-4 py-3">Human Review</th>
                <th className="px-4 py-3 rounded-tr-lg">Offline Fallback</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(aiProfile.capabilities).map(([capability, config]) => (
                <tr key={capability} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="px-4 py-4 font-medium text-slate-200">{capability}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-400 border border-cyan-800/50">
                      {config.provider}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-400">{config.mode}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${config.confidenceThreshold >= 0.95 ? 'bg-emerald-500' : 'bg-cyan-500'}`}
                          style={{ width: `${config.confidenceThreshold * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400">{(config.confidenceThreshold * 100).toFixed(0)}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      config.humanReview === 'Mandatory' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {config.humanReview}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    {config.offlineAllowed ? (
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Yes
                      </span>
                    ) : (
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> No
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Governance Policies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#030b14] border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            National AI Policies Enforced
          </h2>
          <div className="space-y-4">
            {aiProfile.policies.map((policy, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="p-1.5 bg-emerald-500/10 rounded-full">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-slate-300">{policy}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#030b14] border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            Provider Security Benchmarks
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Hallucination Mitigation</span>
                <span className="text-emerald-400 font-medium">99.8%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[99.8%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">PII Redaction Accuracy</span>
                <span className="text-emerald-400 font-medium">100%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[100%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Prompt Injection Block Rate</span>
                <span className="text-cyan-400 font-medium">94.2%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 w-[94.2%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
