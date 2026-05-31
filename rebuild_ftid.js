const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/app/(auth)');

const portalThemes = {
  'citizen': { bg: 'bg-emerald-900/30', text: 'text-emerald-400', border: 'border-emerald-900/40' },
  'business': { bg: 'bg-blue-900/30', text: 'text-blue-400', border: 'border-blue-900/40' },
  'bank': { bg: 'bg-indigo-900/30', text: 'text-indigo-400', border: 'border-indigo-900/40' },
  'institution': { bg: 'bg-purple-900/30', text: 'text-purple-400', border: 'border-purple-900/40' },
  'government': { bg: 'bg-amber-900/30', text: 'text-amber-400', border: 'border-amber-900/40' },
  'regulator': { bg: 'bg-rose-900/30', text: 'text-rose-400', border: 'border-rose-900/40' },
  'gateway': { bg: 'bg-sky-900/30', text: 'text-sky-400', border: 'border-sky-900/40' },
  'auditor': { bg: 'bg-teal-900/30', text: 'text-teal-400', border: 'border-teal-900/40' },
  'developer': { bg: 'bg-slate-800/30', text: 'text-slate-400', border: 'border-slate-800/40' },
};

const pagesData = [
  // ================= CITIZEN PORTAL =================
  {
    route: 'citizen', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Citizen Command Center', decision: 'How financially healthy am I today?',
    metrics: ['Net Worth', 'Monthly Cash Flow', 'Trust Score', 'Credit Score', 'Active Subsidies', 'Tax Health Score'],
    actions: ['Financial Health Radar', 'Upcoming Financial Obligations', 'Personalized AI Recommendations', 'Recent Financial Activity Timeline'],
    connections: ['Wallet', 'Tax', 'Credit', 'Subsidies', 'Portfolio']
  },
  {
    route: 'citizen/profile', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Financial Identity Hub', decision: 'Is my financial identity complete and trusted?',
    metrics: ['PAN Status', 'Aadhaar Status', 'CKYC Status', 'Verification Status'],
    actions: ['Employment Information', 'Income Sources', 'Family/Dependent Information', 'Financial Trust Contributors'],
    connections: ['Banks', 'Institutions', 'Tax', 'Credit']
  },
  {
    route: 'citizen/wallet', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Unified Money Dashboard', decision: 'Where is my money and how is it moving?',
    metrics: ['Wallet Balance', 'Bank Balances', 'CBDC Holdings', 'Money Velocity Score'],
    actions: ['UPI Activity', 'Spending Analytics', 'Income Analytics', 'Transaction Stream', 'Peer Transfers'],
    connections: ['Gateway', 'Government', 'Business']
  },
  {
    route: 'citizen/tax', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Tax Intelligence Center', decision: 'Am I tax compliant?',
    metrics: ['Tax Liability', 'Tax Paid', 'Pending Dues', 'Deductions'],
    actions: ['Tax Forecast', 'Filing Status', 'Compliance Timeline', 'AI Tax Optimizer'],
    connections: ['Government Revenue Engine']
  },
  {
    route: 'citizen/subsidies', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Benefits Intelligence Center', decision: 'Which government benefits am I eligible for?',
    metrics: ['Active Benefits', 'Missed Opportunities', 'Future Eligibility Forecast'],
    actions: ['Eligibility Engine', 'DBT History', 'Impact Assessment'],
    connections: ['Government Subsidy Engine']
  },
  {
    route: 'citizen/credit-score', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Trust & Credit Center', decision: 'Can I obtain credit?',
    metrics: ['Trust Score', 'Credit Score', 'Loan Eligibility', 'Lending Readiness'],
    actions: ['Risk Factors', 'Positive Contributors', 'Improvement Simulator'],
    connections: ['Banks & Institutions']
  },
  {
    route: 'citizen/portfolio', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Wealth Management Center', decision: 'How is my wealth growing?',
    metrics: ['Assets', 'Liabilities', 'Investments', 'Risk Profile'],
    actions: ['Portfolio Allocation', 'Returns Analysis', 'Retirement Projection'],
    connections: ['Institutions & Markets']
  },
  {
    route: 'citizen/consent', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'DEPA Consent Manager', decision: 'Who can access my data?',
    metrics: ['Active Consents', 'Consent Expiry'],
    actions: ['Data Consumers', 'Data Providers', 'Revoke Controls', 'Consent History'],
    connections: ['Entire FTID Ecosystem']
  },
  {
    route: 'citizen/ai-advisor', portal: 'citizen', portalName: 'CITIZEN PORTAL',
    title: 'Personal Financial Copilot', decision: 'What should I do next financially?',
    metrics: ['Savings Goals', 'Tax Opportunities'],
    actions: ['AI Chat', 'Savings Advice', 'Tax Advice', 'Credit Advice', 'Investment Advice', 'Goal Planning'],
    connections: ['All Citizen Modules']
  },

  // ================= BUSINESS PORTAL =================
  {
    route: 'business', portal: 'business', portalName: 'BUSINESS PORTAL',
    title: 'Business Command Center', decision: 'How healthy is my business?',
    metrics: ['Revenue', 'Profitability', 'Compliance Score', 'Credit Readiness'],
    actions: ['Vendor Risk', 'Cash Position', 'AI CFO Recommendations'],
    connections: ['Tax', 'Banks', 'Supply Chain']
  },
  {
    route: 'business/cashflow', portal: 'business', portalName: 'BUSINESS PORTAL',
    title: 'Liquidity Dashboard', decision: 'Will I face a liquidity shortage?',
    metrics: ['Cash Inflows', 'Cash Outflows', 'Burn Rate', 'Working Capital Gap'],
    actions: ['Forecast Engine', 'Liquidity Alerts'],
    connections: ['Banks', 'Gateway']
  },
  {
    route: 'business/compliance', portal: 'business', portalName: 'BUSINESS PORTAL',
    title: 'Compliance Engine', decision: 'Am I compliant?',
    metrics: ['GST Status', 'TDS Status', 'MCA Filings', 'Risk Flags'],
    actions: ['Regulatory Deadlines', 'Compliance Timeline'],
    connections: ['Government', 'Auditor']
  },
  {
    route: 'business/credit', portal: 'business', portalName: 'BUSINESS PORTAL',
    title: 'Financing Center', decision: 'Can I secure financing?',
    metrics: ['Borrowing Capacity', 'Credit Readiness', 'Debt Ratios', 'OCEN Compatibility'],
    actions: ['Financing Options', 'Apply for Credit'],
    connections: ['Banks', 'Institutions']
  },
  {
    route: 'business/invoices', portal: 'business', portalName: 'BUSINESS PORTAL',
    title: 'Invoice Ledger', decision: 'Are invoices affecting liquidity?',
    metrics: ['Delayed Payments', 'Fraud Detection'],
    actions: ['Invoice Ledger', 'OCR Processing', 'Invoice Financing'],
    connections: ['Institutions', 'Supply Chain']
  },
  {
    route: 'business/supply-chain', portal: 'business', portalName: 'BUSINESS PORTAL',
    title: 'Supply Chain Tracker', decision: 'Where is my supply chain vulnerable?',
    metrics: ['Concentration Risk', 'Payment Delays'],
    actions: ['Supplier Network', 'Dependency Analysis', 'Payment Chain Mapping'],
    connections: ['Vendors', 'Banks']
  },
  {
    route: 'business/vendors', portal: 'business', portalName: 'BUSINESS PORTAL',
    title: 'Vendor Intelligence', decision: 'Can this vendor be trusted?',
    metrics: ['Vendor Trust Score', 'Fraud Risk', 'Vendor Ranking'],
    actions: ['Payment History', 'Reputation Analysis'],
    connections: ['Supply Chain', 'Institutions']
  },

  // ================= BANK PORTAL =================
  {
    route: 'bank', portal: 'bank', portalName: 'BANK PORTAL',
    title: 'Risk Intelligence', decision: 'What is my risk position?',
    metrics: ['Portfolio Exposure', 'Loan Performance', 'NPA Forecast', 'Liquidity Metrics'],
    actions: ['Fraud Alerts', 'Risk Mitigation'],
    connections: ['Regulator', 'Business', 'Citizen']
  },
  {
    route: 'bank/fraud', portal: 'bank', portalName: 'BANK PORTAL',
    title: 'Fraud Detection', decision: 'Which customers require investigation?',
    metrics: ['Suspicious Accounts', 'AML Cases'],
    actions: ['Fraud Networks', 'Transaction Analysis'],
    connections: ['Auditor', 'Regulator', 'Gateway']
  },
  {
    route: 'bank/network', portal: 'bank', portalName: 'BANK PORTAL',
    title: 'Concentration Radar', decision: 'Where are concentration risks?',
    metrics: ['Sector Exposure', 'Regional Exposure'],
    actions: ['Borrower Network', 'Contagion Paths'],
    connections: ['Regulator', 'Business']
  },
  {
    route: 'bank/underwriting', portal: 'bank', portalName: 'BANK PORTAL',
    title: 'Underwriting Engine', decision: 'Should I approve this loan?',
    metrics: ['Risk Score', 'Alternative Data'],
    actions: ['Applicant Profile', 'Cash Flow Assessment', 'Approval Recommendation'],
    connections: ['Citizen', 'Business', 'Gateway']
  },

  // ================= INSTITUTION PORTAL =================
  {
    route: 'institution', portal: 'institution', portalName: 'INSTITUTION PORTAL',
    title: 'Alternative Credit', decision: 'What opportunities and risks exist?',
    metrics: ['Portfolio Health', 'Credit Exposure', 'Default Forecast'],
    actions: ['Opportunity Scanner', 'Risk Reports'],
    connections: ['Regulator', 'Business', 'Citizen']
  },
  {
    route: 'institution/fraud', portal: 'institution', portalName: 'INSTITUTION PORTAL',
    title: 'Lending Fraud Radar', decision: 'What lending fraud exists?',
    metrics: ['Fraud Radar', 'Identity Fraud Alerts'],
    actions: ['Loan Stacking Detection', 'Investigation Workflow'],
    connections: ['Auditor', 'Banks']
  },
  {
    route: 'institution/risk', portal: 'institution', portalName: 'INSTITUTION PORTAL',
    title: 'Loss Predictor', decision: 'Where are future losses likely?',
    metrics: ['Sector Risk', 'Portfolio Risk', 'Default Probability'],
    actions: ['Risk Mitigation', 'Portfolio Rebalancing'],
    connections: ['Banks', 'Regulator']
  },
  {
    route: 'institution/underwriting', portal: 'institution', portalName: 'INSTITUTION PORTAL',
    title: 'Alternative Underwriting', decision: 'Can underserved borrowers be funded safely?',
    metrics: ['Cashflow Metrics', 'Risk Recommendation'],
    actions: ['Alternative Credit Engine', 'Cashflow-Based Lending'],
    connections: ['Citizen', 'Business']
  },

  // ================= GOVERNMENT PORTAL =================
  {
    route: 'government', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Macroeconomic Dashboard', decision: "What is the current state of India's economy?",
    metrics: ['GDP', 'Revenue', 'Inflation', 'Employment', 'Financial Inclusion'],
    actions: ['Policy Simulator', 'National Reports'],
    connections: ['Regulator', 'Banks', 'Gateway']
  },
  {
    route: 'government/gdp', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Growth Analytics', decision: 'What drives economic growth?',
    metrics: ['State GDP', 'Sector GDP'],
    actions: ['Growth Trends', 'Forecasts'],
    connections: ['Business', 'Banks']
  },
  {
    route: 'government/revenue', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Revenue Collections', decision: 'Where is revenue coming from?',
    metrics: ['GST Collections', 'Income Tax', 'State Contributions', 'Leakages'],
    actions: ['Revenue Tracking', 'Leakage Prevention'],
    connections: ['Business', 'Citizen']
  },
  {
    route: 'government/tax', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Tax Gaps', decision: 'Where are tax gaps?',
    metrics: ['Tax Compliance', 'Risk Industries'],
    actions: ['Sector Analysis', 'Enforcement Actions'],
    connections: ['Auditor', 'Business']
  },
  {
    route: 'government/subsidies', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Benefit Distribution', decision: 'Are benefits reaching citizens?',
    metrics: ['Distribution', 'Coverage', 'Leakage Detection'],
    actions: ['Impact Assessment', 'DBT Transfers'],
    connections: ['Citizen', 'Gateway']
  },
  {
    route: 'government/informal', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Economy Formalization', decision: 'How much economy remains informal?',
    metrics: ['Cash Usage', 'Digital Adoption', 'MSME Formalization'],
    actions: ['Regional Insights', 'Formalization Drives'],
    connections: ['Gateway', 'Business']
  },
  {
    route: 'government/stress', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Regional Intervention', decision: 'Where is intervention needed?',
    metrics: ['District Stress', 'Sector Stress', 'Liquidity Stress', 'Employment Stress'],
    actions: ['Intervention Planning', 'Relief Deployment'],
    connections: ['Banks', 'Regulator']
  },
  {
    route: 'government/policy', portal: 'government', portalName: 'GOVERNMENT PORTAL',
    title: 'Policy Simulator', decision: 'What happens if policy changes?',
    metrics: ['GDP Impact', 'Revenue Impact', 'Employment Impact'],
    actions: ['GST Simulator', 'Repo Rate Simulator', 'Subsidy Simulator'],
    connections: ['Regulator']
  },

  // ================= REGULATOR PORTAL =================
  {
    route: 'regulator', portal: 'regulator', portalName: 'REGULATOR PORTAL',
    title: 'Financial Command Center', decision: "Is India's financial system stable?",
    metrics: ['Stability Index', 'Trust Index', 'Liquidity Index', 'Active Threats'],
    actions: ['Systemic Interventions', 'Monetary Policy Actions'],
    connections: ['Banks', 'Institutions', 'Gateway', 'Government']
  },
  {
    route: 'regulator/ews', portal: 'regulator', portalName: 'REGULATOR PORTAL',
    title: 'Early Warning System', decision: 'What risks require immediate attention?',
    metrics: ['Crisis Alerts', 'Fraud Alerts', 'Liquidity Alerts'],
    actions: ['AI Predictions', 'Alert Triage'],
    connections: ['Banks', 'Auditor']
  },
  {
    route: 'regulator/fraud', portal: 'regulator', portalName: 'REGULATOR PORTAL',
    title: 'Financial Crime Radar', decision: 'Where is financial crime occurring?',
    metrics: ['Fraud Clusters', 'AML Cases', 'Shell Companies'],
    actions: ['Suspicious Transactions', 'FIU Escalation'],
    connections: ['Gateway', 'Auditor']
  },
  {
    route: 'regulator/graph', portal: 'regulator', portalName: 'REGULATOR PORTAL',
    title: 'Money Movement Graph', decision: 'How is money moving across India?',
    metrics: ['Transaction Flows', 'Risk Clusters'],
    actions: ['Citizen Nodes', 'Business Nodes', 'Bank Nodes', 'Government Nodes', 'Interactive Network Graph'],
    connections: ['Entire Ecosystem']
  },
  {
    route: 'regulator/heatmap', portal: 'regulator', portalName: 'REGULATOR PORTAL',
    title: 'Regional Risk Heatmap', decision: 'Where are regional risks emerging?',
    metrics: ['Fraud Heatmap', 'Compliance Heatmap', 'Liquidity Heatmap'],
    actions: ['Regional Deep Dives', 'Localized Intervention'],
    connections: ['Government', 'Banks']
  },
  {
    route: 'regulator/systemic-risk', portal: 'regulator', portalName: 'REGULATOR PORTAL',
    title: 'Contagion Engine', decision: 'What could trigger a crisis?',
    metrics: ['Sector Exposure', 'Contagion Analysis'],
    actions: ['Failure Simulations', 'Stress Testing'],
    connections: ['Banks', 'Institutions']
  },
  {
    route: 'regulator/trust', portal: 'regulator', portalName: 'REGULATOR PORTAL',
    title: 'Institutional Trust', decision: 'Which institutions can be trusted?',
    metrics: ['Institution Rankings', 'Sector Rankings', 'Trust Trends'],
    actions: ['Audit Triggers', 'Penalty Enforcement'],
    connections: ['Banks', 'Auditor']
  },

  // ================= GATEWAY PORTAL =================
  {
    route: 'gateway', portal: 'gateway', portalName: 'GATEWAY PORTAL',
    title: 'Payment Network Health', decision: 'Is the payment network healthy?',
    metrics: ['TPS', 'Settlement Success Rate', 'Active Transactions'],
    actions: ['Network Traffic Management', 'Failover Controls'],
    connections: ['Banks', 'Citizen', 'Business']
  },
  {
    route: 'gateway/transactions', portal: 'gateway', portalName: 'GATEWAY PORTAL',
    title: 'Settlement Feed', decision: 'What transactions require attention?',
    metrics: ['Exceptions', 'Failures'],
    actions: ['Settlement Feed', 'Transaction Resolution'],
    connections: ['Banks']
  },
  {
    route: 'gateway/cbdc', portal: 'gateway', portalName: 'GATEWAY PORTAL',
    title: 'CBDC Ledger', decision: 'How is CBDC circulating?',
    metrics: ['CBDC Supply', 'Distribution', 'Velocity'],
    actions: ['Minting Operations', 'Burn Operations'],
    connections: ['Regulator']
  },
  {
    route: 'gateway/compliance', portal: 'gateway', portalName: 'GATEWAY PORTAL',
    title: 'Compliance Engine', decision: 'Should this transaction be blocked?',
    metrics: ['AML Screening Hits', 'Risk Rules Triggered'],
    actions: ['Compliance Engine', 'Transaction Blocking'],
    connections: ['Regulator', 'Auditor']
  },
  {
    route: 'gateway/velocity', portal: 'gateway', portalName: 'GATEWAY PORTAL',
    title: 'Velocity Anomalies', decision: 'Are unusual transaction patterns emerging?',
    metrics: ['Velocity Scores', 'High Frequency Detection'],
    actions: ['Pattern Analysis', 'Throttle Operations'],
    connections: ['Regulator']
  },

  // ================= AUDITOR PORTAL =================
  {
    route: 'auditor', portal: 'auditor', portalName: 'AUDITOR PORTAL',
    title: 'Forensic Investigation', decision: 'What should be audited next?',
    metrics: ['Audit Queue', 'Critical Exceptions'],
    actions: ['Prioritize Investigations', 'Assign Auditors'],
    connections: ['Regulator', 'Banks', 'Business']
  },
  {
    route: 'auditor/ledger', portal: 'auditor', portalName: 'AUDITOR PORTAL',
    title: 'Immutable Ledger', decision: 'What actually happened?',
    metrics: ['Immutable Records', 'Ledger Health'],
    actions: ['Search', 'Filters', 'Data Extraction'],
    connections: ['Gateway']
  },
  {
    route: 'auditor/reconciliation', portal: 'auditor', portalName: 'AUDITOR PORTAL',
    title: 'Reconciliation Engine', decision: 'Do records match?',
    metrics: ['Exceptions', 'Match Rate'],
    actions: ['Cross-System Validation', 'Dispute Resolution'],
    connections: ['Banks', 'Government']
  },
  {
    route: 'auditor/risk', portal: 'auditor', portalName: 'AUDITOR PORTAL',
    title: 'Target Profiler', decision: 'Who is highest risk?',
    metrics: ['Risk Rankings', 'Audit Targets'],
    actions: ['Risk Profiling', 'Target Selection'],
    connections: ['Regulator']
  },
  {
    route: 'auditor/trails', portal: 'auditor', portalName: 'AUDITOR PORTAL',
    title: 'Evidence Chain', decision: 'What evidence exists?',
    metrics: ['Audit Logs', 'Evidence Chain Integrity'],
    actions: ['Chain of Custody', 'Log Export'],
    connections: ['Entire Ecosystem']
  },
  {
    route: 'auditor/assistant', portal: 'auditor', portalName: 'AUDITOR PORTAL',
    title: 'AI Investigator', decision: 'What insights can AI uncover?',
    metrics: ['AI Confidence Score', 'Patterns Detected'],
    actions: ['AI Investigator', 'Natural Language Queries'],
    connections: ['Regulator']
  },

  // ================= DEVELOPER PORTAL =================
  {
    route: 'developer', portal: 'developer', portalName: 'DEVELOPER PORTAL',
    title: 'India Stack Integration', decision: 'How do I integrate with FTID?',
    metrics: ['Uptime', 'API Latency'],
    actions: ['Integration Guides', 'System Status'],
    connections: ['Gateway', 'Entire Ecosystem']
  },
  {
    route: 'developer/apis', portal: 'developer', portalName: 'DEVELOPER PORTAL',
    title: 'API Marketplace', decision: 'What APIs are available?',
    metrics: ['Available APIs', 'Deprecation Status'],
    actions: ['API Marketplace', 'OpenAPI Docs'],
    connections: ['Gateway']
  },
  {
    route: 'developer/keys', portal: 'developer', portalName: 'DEVELOPER PORTAL',
    title: 'Secrets Management', decision: 'Are my credentials secure?',
    metrics: ['Active Keys', 'Expired Keys'],
    actions: ['API Keys', 'Secrets Management'],
    connections: ['Auditor']
  },
  {
    route: 'developer/sandbox', portal: 'developer', portalName: 'DEVELOPER PORTAL',
    title: 'Test Environment', decision: 'Can I test my integration safely?',
    metrics: ['Mock Requests', 'Sandbox Status'],
    actions: ['Test Environment', 'Mock Data Generation'],
    connections: ['Gateway']
  },
  {
    route: 'developer/sdk', portal: 'developer', portalName: 'DEVELOPER PORTAL',
    title: 'SDK Downloads', decision: 'How can I build faster?',
    metrics: ['SDK Versions', 'Downloads'],
    actions: ['SDK Downloads', 'Code Samples'],
    connections: ['Developer Local Environment']
  },
  {
    route: 'developer/verification', portal: 'developer', portalName: 'DEVELOPER PORTAL',
    title: 'Verification APIs', decision: 'How do I verify users?',
    metrics: ['KYC Success Rate', 'AML Check Latency'],
    actions: ['KYC APIs', 'AML APIs', 'Trust APIs'],
    connections: ['Citizen', 'Business']
  },
  {
    route: 'developer/consent', portal: 'developer', portalName: 'DEVELOPER PORTAL',
    title: 'Consent Management', decision: 'How do I manage data sharing?',
    metrics: ['Active Consents', 'Webhook Failures'],
    actions: ['DEPA APIs', 'Consent Webhooks'],
    connections: ['Citizen']
  }
];

function generatePageContent(page) {
  const theme = portalThemes[page.portal] || portalThemes['citizen'];
  
  const metricCards = page.metrics.map(m => `
        <Card className="bg-[#0a1520] ${theme.border} hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">${m}</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 ${theme.bg} rounded-lg">
                <Activity className="h-4 w-4 ${theme.text}" />
              </div>
            </div>
          </CardContent>
        </Card>`).join('\n');

  const actionList = page.actions.map(a => `
                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:${theme.text} transition-colors">${a}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:${theme.text} transition-colors" />
                  </div>`).join('\n');

  const connectionList = page.connections.map(c => `
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">${c}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>`).join('\n');

  return `"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowUpRight, Network, Target } from "lucide-react";
import { TrustScoreWidget } from "@/components/shared/observability/TrustScoreWidget";
import { AIPulseIntelligence } from "@/components/shared/observability/AIPulseIntelligence";

export default function Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. Who uses this page? & 2. What decision is made here? */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b ${theme.border} pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 ${theme.bg} ${theme.text} text-[10px] font-bold tracking-widest uppercase rounded">
              ${page.portalName}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">${page.title}</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"${page.decision}"</span>
          </p>
        </div>
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
${metricCards}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 4. What action can be taken? */}
        <div className="lg:col-span-2 space-y-6">
          <AIPulseIntelligence 
            title="AI System Analysis"
            primaryInsight="Real-time telemetry active for ${page.title}."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] ${theme.border}">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 ${theme.text}" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
${actionList}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5. Which other FTID systems are affected? */}
        <div className="space-y-6">
          <TrustScoreWidget 
            score={999} 
            entityName="Module Integrity"
          />

          <Card className="bg-[#0a1520] ${theme.border}">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 ${theme.text}" />
                Connected Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
${connectionList}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
`;
}

pagesData.forEach(page => {
  const dirPath = path.join(baseDir, page.route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  const content = generatePageContent(page);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated ${filePath}`);
});

console.log('Successfully generated all FTID V3 ecosystem pages!');
