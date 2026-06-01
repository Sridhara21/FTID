const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/app/(auth)');

const portals = {
  citizen: {
    title: "Citizen Portal",
    mission: "Personal Financial Operating System",
    routes: [
      { path: "", title: "Citizen Dashboard", purpose: "Complete financial health command center", sections: ["Financial Health Overview", "Financial Timeline", "Goal Tracker", "Financial Risk Radar", "Opportunity Engine"], archetype: "dashboard" },
      { path: "profile", title: "Profile", purpose: "Single source of truth for identity", sections: ["PAN", "Aadhaar", "Employment", "Education", "Verified income", "Bank relationships", "Financial history", "Trust timeline"], archetype: "profile" },
      { path: "credit-score", title: "Credit Score", purpose: "Explain WHY score exists", sections: ["Score", "Score Drivers", "Positive Factors", "Negative Factors", "Future Projection", "Improvement Simulator"], archetype: "dashboard" },
      { path: "balance-sheet", title: "Balance Sheet", purpose: "Track wealth creation", sections: ["Assets", "Liabilities", "Net Worth Trend", "Asset Allocation", "Debt Breakdown", "Wealth Forecast"], archetype: "ledger" },
      { path: "portfolio", title: "Portfolio", purpose: "Investment management", sections: ["Equity", "Mutual Funds", "Gold", "Real Estate", "Fixed Income", "Diversification", "Risk Exposure"], archetype: "dashboard" },
      { path: "wallet", title: "Wallet", purpose: "Future CBDC wallet", sections: ["CBDC balance", "Account balances", "Transfers", "Smart payment rules", "Offline transactions", "Spending analytics"], archetype: "dashboard" },
      { path: "subsidies", title: "Subsidies", purpose: "Citizen entitlement hub", sections: ["Eligible schemes", "Active schemes", "DBT history", "Pending benefits", "Impact assessment"], archetype: "ledger" },
      { path: "tax", title: "Tax", purpose: "Personal tax cockpit", sections: ["Tax estimate", "Deductions", "Filing status", "Refund tracker", "Compliance score"], archetype: "dashboard" },
      { path: "consent", title: "Consent", purpose: "Data sharing control", sections: ["Active consents", "Expiring consents", "Request history", "Revocation controls"], archetype: "ledger" },
      { path: "ai-advisor", title: "AI Advisor", purpose: "Financial copilot", sections: ["Budgeting", "Debt", "Credit", "Tax", "Investments", "Fraud Awareness"], archetype: "simulator" }
    ]
  },
  business: {
    title: "Business Portal",
    mission: "MSME Financial Operating System",
    routes: [
      { path: "", title: "Business Dashboard", purpose: "Can my company grow safely?", sections: ["Revenue", "Cash Position", "Compliance Status", "Credit Readiness", "Vendor Health", "Growth Forecast"], archetype: "dashboard" },
      { path: "cashflow", title: "Cashflow", purpose: "Liquidity and runway management", sections: ["Inflows", "Outflows", "Runway", "Receivables", "Payables", "Forecasts"], archetype: "dashboard" },
      { path: "compliance", title: "Compliance", purpose: "Regulatory standing", sections: ["GST", "ROC", "Tax", "Filings", "Deadlines", "Violations"], archetype: "ledger" },
      { path: "credit", title: "Credit", purpose: "Borrowing readiness", sections: ["Credit score", "Borrowing capacity", "Existing facilities", "Repayment performance", "Loan readiness"], archetype: "dashboard" },
      { path: "invoices", title: "Invoices", purpose: "B2B payment health", sections: ["Invoice repository", "Aging analysis", "Duplicate detection", "Fraud probability", "Outstanding payments"], archetype: "ledger" },
      { path: "supply-chain", title: "Supply Chain", purpose: "Logistics and dependencies", sections: ["Supplier map", "Dependencies", "Bottlenecks", "Logistics visibility", "Disruption forecasts"], archetype: "graph" },
      { path: "vendors", title: "Vendors", purpose: "Supplier risk", sections: ["Vendor directory", "Trust scores", "Performance", "Concentration risk", "Onboarding intelligence"], archetype: "ledger" }
    ]
  },
  bank: {
    title: "Bank Portal",
    mission: "Credit and Risk Command Center",
    routes: [
      { path: "", title: "Bank Dashboard", purpose: "Who should receive credit?", sections: ["Loan Book", "Deposits", "Liquidity", "Capital Adequacy", "Portfolio Health"], archetype: "dashboard" },
      { path: "fraud", title: "Fraud", purpose: "Institutional fraud alerts", sections: ["Mule Accounts", "Suspicious Transactions", "AML Alerts", "Customer Risk Profiles"], archetype: "ledger" },
      { path: "network", title: "Network", purpose: "Interbank Exposure Mapping", sections: ["Exposure graph", "Sector concentration", "Geography concentration", "Liquidity dependencies"], archetype: "graph" },
      { path: "underwriting", title: "Underwriting", purpose: "SME lending decisions", sections: ["Applicant profile", "Cashflow quality", "Credit signals", "Repayment forecast", "Approval recommendation"], archetype: "profile" }
    ]
  },
  government: {
    title: "Government Portal",
    mission: "Economic Intelligence Layer",
    routes: [
      { path: "", title: "Dashboard", purpose: "How is the economy performing?", sections: ["GDP", "Revenue", "Formalization", "Employment Signals", "Inflation Signals"], archetype: "dashboard" },
      { path: "gdp", title: "GDP", purpose: "National output tracking", sections: ["Sector contribution", "State contribution", "Growth forecasts", "Historical comparisons"], archetype: "dashboard" },
      { path: "policy-simulator", title: "Policy Simulator", purpose: "Flagship page for policy impact", sections: ["GST controls", "Subsidy controls", "Liquidity controls", "Interest controls", "GDP impact", "Employment impact", "Revenue impact", "Inflation impact"], archetype: "simulator" },
      { path: "informal-economy", title: "Informal Economy", purpose: "Shadow economy tracking", sections: ["Cash dependency", "Digital adoption", "Formalization score", "Regional comparison"], archetype: "dashboard" },
      { path: "subsidies", title: "Subsidies", purpose: "DBT and leakage tracking", sections: ["Scheme performance", "Leakage detection", "Beneficiary analytics", "Impact analytics"], archetype: "ledger" }
    ]
  },
  regulator: {
    title: "Regulator Portal",
    mission: "National Financial Stability Command Center",
    routes: [
      { path: "", title: "Dashboard", purpose: "Where is systemic risk emerging?", sections: ["Stability Index", "Liquidity Index", "Fraud Index", "Trust Index", "Risk Index"], archetype: "dashboard" },
      { path: "national-dashboard", title: "National Dashboard", purpose: "Executive RBI view", sections: ["Banking health", "Payment health", "Credit health", "Citizen health", "MSME health"], archetype: "dashboard" },
      { path: "ews", title: "Early Warning System", purpose: "Detect future crises", sections: ["Risk alerts", "Institution alerts", "Sector alerts", "Escalation workflow"], archetype: "ledger" },
      { path: "graph", title: "Entity Graph", purpose: "FTID flagship visualization", sections: ["Citizens", "Businesses", "Banks", "Institutions", "Government", "Regulators"], archetype: "graph" },
      { path: "systemic-risk", title: "Systemic Risk", purpose: "Contagion simulation", sections: ["Institution failure simulation", "Sector shock simulation", "Liquidity shock simulation"], archetype: "simulator" },
      { path: "fraud", title: "Fraud", purpose: "National AML command center", sections: ["Shell companies", "Circular flows", "Layering", "Smurfing indicators"], archetype: "ledger" }
    ]
  },
  gateway: {
    title: "Gateway Portal",
    mission: "National Payment Infrastructure",
    routes: [
      { path: "", title: "Dashboard", purpose: "Are payments flowing safely?", sections: ["Throughput", "Success rate", "Settlement volume", "Network health"], archetype: "dashboard" },
      { path: "cbdc", title: "CBDC", purpose: "Digital currency infra", sections: ["Token issuance", "Wallet analytics", "Offline payments", "Programmable money"], archetype: "dashboard" },
      { path: "transactions", title: "Transactions", purpose: "Payment flows", sections: ["Real-time settlements", "Failures", "Delays", "High-value transfers"], archetype: "ledger" },
      { path: "velocity", title: "Velocity", purpose: "Speed of money", sections: ["Velocity monitoring", "Burst detection", "Money movement chains"], archetype: "graph" }
    ]
  },
  auditor: {
    title: "Auditor Portal",
    mission: "Verification & Traceability",
    routes: [
      { path: "", title: "Dashboard", purpose: "Can this activity be verified?", sections: ["Audit Risk", "Reconciliation Health", "Active Investigations", "Compliance Overview"], archetype: "dashboard" },
      { path: "ledger", title: "Ledger", purpose: "Audit-grade ledger explorer", sections: ["Transaction lineage", "Record validation", "Proof verification"], archetype: "ledger" },
      { path: "reconciliation", title: "Reconciliation", purpose: "Automated matching", sections: ["Matching engine", "Exceptions", "Resolution workflow"], archetype: "ledger" },
      { path: "trails", title: "Trails", purpose: "System activity logs", sections: ["Audit history", "User actions", "System events"], archetype: "ledger" }
    ]
  },
  developer: {
    title: "Developer Portal",
    mission: "India Stack for FTID",
    routes: [
      { path: "", title: "Dashboard", purpose: "How can institutions integrate?", sections: ["API Traffic", "Sandbox Usage", "Integration Health", "Error Rates"], archetype: "dashboard" },
      { path: "apis", title: "APIs", purpose: "API catalog", sections: ["API catalog", "Interactive docs", "Examples"], archetype: "ledger" },
      { path: "keys", title: "Keys", purpose: "Key management", sections: ["Key management", "Usage analytics", "Rotation"], archetype: "ledger" },
      { path: "sandbox", title: "Sandbox", purpose: "Testing environment", sections: ["Mock institutions", "Mock citizens", "Mock businesses"], archetype: "simulator" },
      { path: "sdk", title: "SDK", purpose: "Software kits", sections: ["React SDK", "Flutter SDK", "Python SDK"], archetype: "ledger" }
    ]
  },
  institution: {
    title: "Institution Portal",
    mission: "NBFC & Alternative Lending Control Center",
    routes: [
      { path: "", title: "Institution Dashboard", purpose: "How risky is my portfolio?", sections: ["Overall Portfolio Risk", "NPA Metrics", "Total AUM", "Active Facilities"], archetype: "dashboard" },
      { path: "risk", title: "Risk", purpose: "Portfolio risk analysis", sections: ["Portfolio risk", "Geographic risk", "Concentration risk", "NPA forecast"], archetype: "dashboard" },
      { path: "underwriting", title: "Underwriting", purpose: "Origination control", sections: ["Loan applications", "Risk engine", "Approval workflow"], archetype: "ledger" },
      { path: "fraud", title: "Fraud", purpose: "Fraud detection", sections: ["Application fraud", "Identity fraud", "Transaction fraud"], archetype: "ledger" }
    ]
  }
};

const getImports = (archetype) => {
  let imports = [
    '"use client";',
    'import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";',
    'import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";'
  ];

  if (archetype === 'dashboard') {
    imports.push('import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";');
    imports.push('import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";');
  } else if (archetype === 'simulator') {
    imports.push('import { InteractivePolicySimulator } from "@/components/shared/v2/InteractivePolicySimulator";');
  } else if (archetype === 'graph') {
    imports.push('import { EntityRelationshipGraph } from "@/components/shared/v2/EntityRelationshipGraph";');
  } else if (archetype === 'ledger') {
    imports.push('import { AuditLedgerExplorer } from "@/components/shared/v2/AuditLedgerExplorer";');
  } else if (archetype === 'profile') {
    imports.push('import { VerifiedIdentityGraph } from "@/components/shared/v2/VerifiedIdentityGraph";');
  }
  
  return imports.join('\n');
};

const generateArchetypeContent = (route, portalName) => {
  const sections = route.sections;
  const arc = route.archetype;
  
  if (arc === 'dashboard') {
    const widgets = sections.map(s => 
      '<V2MetricWidget ' +
      'title="' + s + '" ' +
      'value={Math.floor(Math.random() * 10000)} ' +
      'trend={Math.random() > 0.5 ? "up" : "down"} ' +
      'explanation="This metric tracks the overall volume and health of ' + s + ' in real-time." ' +
      '/>'
    ).join('\n');

    return [
        '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">',
          widgets,
        '</div>',
        '<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">',
          '<div className="lg:col-span-2">',
            '<Card className="bg-[#0a1520] border-cyan-900/30 h-full">',
              '<CardHeader>',
                '<CardTitle className="text-white">Detailed ' + route.title + ' Analytics</CardTitle>',
                '<CardDescription className="text-slate-400">Deep dive into ' + sections[0] + ' and ' + sections[1] + '</CardDescription>',
              '</CardHeader>',
              '<CardContent className="h-[300px] flex items-center justify-center border-t border-cyan-900/20">',
                '<p className="text-cyan-500/50 font-mono text-sm">[ Unique Visualization for ' + route.title + ' ]</p>',
              '</CardContent>',
            '</Card>',
          '</div>',
          '<div>',
            '<V2InsightsFeed title="Actionable Intelligence" />',
          '</div>',
        '</div>'
    ].join('\n');
  } else if (arc === 'simulator') {
    return [
        '<div className="mb-6">',
          '<InteractivePolicySimulator ',
            'controls={[' + sections.filter((_,i) => i < 4).map(s => '"'+s+'"').join(',') + ']}',
            'outputs={[' + sections.filter((_,i) => i >= 4).map(s => '"'+s+'"').join(',') + ']}',
            'purpose="' + route.purpose + '"',
          '/>',
        '</div>'
    ].join('\n');
  } else if (arc === 'graph') {
    return [
        '<div className="h-[600px] w-full rounded-xl overflow-hidden border border-cyan-900/30">',
          '<EntityRelationshipGraph nodes={[' + sections.map(s => '"'+s+'"').join(',') + ']} purpose="' + route.purpose + '" />',
        '</div>'
    ].join('\n');
  } else if (arc === 'ledger') {
    return [
        '<div className="grid grid-cols-1 gap-6">',
          '<Card className="bg-[#0a1520] border-cyan-900/30">',
             '<CardHeader>',
                '<CardTitle className="text-white">' + route.title + ' Records</CardTitle>',
                '<CardDescription className="text-slate-400">Tracking: ' + sections.join(', ') + '</CardDescription>',
             '</CardHeader>',
             '<CardContent>',
                '<AuditLedgerExplorer columns={[' + sections.map(s => '"'+s+'"').join(',') + ']} />',
             '</CardContent>',
          '</Card>',
        '</div>'
    ].join('\n');
  } else if (arc === 'profile') {
    const blocks = sections.slice(0, 3).map(s => 
      '<Card className="bg-[#0a1520] border-cyan-900/30">' +
         '<CardHeader><CardTitle className="text-white text-sm font-bold uppercase tracking-widest">' + s + '</CardTitle></CardHeader>' +
         '<CardContent><div className="h-[100px] bg-[#05101a] rounded border border-cyan-900/10 flex items-center justify-center"><p className="text-cyan-500/30 text-xs">Verified Data Block</p></div></CardContent>' +
      '</Card>'
    ).join('\n');

    return [
        '<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">',
          '<div className="lg:col-span-1">',
            '<VerifiedIdentityGraph sections={[' + sections.map(s => '"'+s+'"').join(',') + ']} />',
          '</div>',
          '<div className="lg:col-span-2 space-y-6">',
            blocks,
          '</div>',
        '</div>'
    ].join('\n');
  }
  return '<div>Unknown Archetype</div>';
};

function generatePageContent(portalName, portalData, route) {
  const isMainPage = route.path === "";
  const componentName = portalName.charAt(0).toUpperCase() + portalName.slice(1) + (route.path ? route.path.replace(/[^a-zA-Z0-9]/g, '') : 'Main') + 'Page';
  
  return [
    getImports(route.archetype),
    '',
    'export default function ' + componentName + '() {',
    '  return (',
    '    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">',
    '      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>',
    '      ',
    '      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">',
    '        ',
    '        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">',
    '          <div>',
    '            <div className="flex items-center gap-2 mb-2">',
    '              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">',
    '                ' + portalData.mission,
    '              </span>',
    '            </div>',
    '            <h1 className="text-3xl font-black text-white tracking-tight">' + route.title + '</h1>',
    '            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">',
    '              <AlertCircle className="h-4 w-4" /> ',
    '              KEY QUESTION: "' + route.purpose + '"',
    '            </p>',
    '          </div>',
    '        </header>',
    '',
    generateArchetypeContent(route, portalName),
    '',
    '      </div>',
    '    </div>',
    '  );',
    '}'
  ].join('\n');
}

function ensureDirSync(dirpath) {
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true });
  }
}

for (const [portalName, portalData] of Object.entries(portals)) {
  const portalDir = path.join(baseDir, portalName);
  ensureDirSync(portalDir);

  for (const route of portalData.routes) {
    const routeDir = route.path ? path.join(portalDir, route.path) : portalDir;
    ensureDirSync(routeDir);
    fs.writeFileSync(path.join(routeDir, 'page.tsx'), generatePageContent(portalName, portalData, route));
  }
}

console.log("Successfully generated all unique FTID V2 pages with distinct archetypes and layouts!");
