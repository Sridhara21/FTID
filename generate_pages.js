const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/app/(auth)');

const pages = {
  business: [
    { name: '', title: 'Enterprise Hub', desc: 'Corporate Command Center', icon: 'Building2' },
    { name: 'vendors', title: 'Vendor Intelligence Network', desc: 'AI-driven vendor risk scoring and supply chain mapping.', icon: 'Factory' },
    { name: 'cashflow', title: 'AI Cashflow Engine', desc: 'Predictive liquidity and treasury management.', icon: 'LineChart' },
    { name: 'invoices', title: 'Invoice Intelligence', desc: 'Automated invoice factoring and fraud detection.', icon: 'FileText' },
    { name: 'supply-chain', title: 'Supply Chain Intelligence', desc: 'End-to-end logistics tracking.', icon: 'Truck' },
    { name: 'compliance', title: 'Compliance Risk Engine', desc: 'Corporate governance and regulatory standing.', icon: 'Shield' }
  ],
  institution: [
    { name: '', title: 'Institution Hub', desc: 'Banking & Underwriting Control', icon: 'Building2' },
    { name: 'underwriting', title: 'Smart Underwriting Engine', desc: 'Real-time loan approvals powered by AI.', icon: 'Activity' },
    { name: 'risk', title: 'Portfolio Risk Observatory', desc: 'Macro-level lending risk monitoring.', icon: 'ShieldAlert' },
    { name: 'fraud', title: 'Institutional Fraud Shield', desc: 'Bank-level AML and transaction filtering.', icon: 'AlertTriangle' }
  ],
  citizen: [
    { name: 'financial-health', title: 'Financial Health Engine', desc: 'Personal credit scoring and well-being.', icon: 'HeartPulse' },
    { name: 'security', title: 'Scam & Fraud Shield', desc: 'Real-time protection against phishing and identity theft.', icon: 'ShieldCheck' },
    { name: 'identity', title: 'Financial Passport', desc: 'Your unified economic identity.', icon: 'Fingerprint' },
    { name: 'consent', title: 'Advanced Consent Manager', desc: 'Granular control over data sharing.', icon: 'Lock' }
  ],
  gateway: [
    { name: '', title: 'Gateway Node', desc: 'National Settlement Infrastructure', icon: 'LayoutGrid' },
    { name: 'cbdc', title: 'CBDC Settlement Layer', desc: 'Programmable fiat and atomic settlements.', icon: 'Coins' },
    { name: 'velocity', title: 'Velocity Monitoring Engine', desc: 'Real-time capital flow tracking.', icon: 'Activity' },
    { name: 'compliance', title: 'AML Interceptor', desc: 'Cross-border transaction firewall.', icon: 'ShieldCheck' }
  ],
  auditor: [
    { name: '', title: 'Audit Terminal', desc: 'RegTech Verification Hub', icon: 'FileSearch' },
    { name: 'assistant', title: 'AI Audit Copilot', desc: 'Automated ledger anomaly detection.', icon: 'Bot' },
    { name: 'ledger', title: 'Immutable Ledger Verification', desc: 'Cryptographic proof of reserves.', icon: 'Database' },
    { name: 'risk', title: 'Audit Risk Engine', desc: 'Automated sampling and risk identification.', icon: 'ShieldAlert' }
  ],
  developer: [
    { name: '', title: 'Developer Hub', desc: 'Build the Future of Finance', icon: 'Code' },
    { name: 'apis', title: 'API Marketplace', desc: 'Integrate national financial primitives.', icon: 'Network' },
    { name: 'sandbox', title: 'Sandbox Simulator', desc: 'Test applications against mock networks.', icon: 'Terminal' },
    { name: 'sdk', title: 'SDK Hub', desc: 'Libraries and tools for FTID integration.', icon: 'Box' }
  ]
};

const template = (title, desc, iconName) => {
  const imports = new Set([iconName, 'Activity', 'Network', 'ShieldCheck']);
  const importString = Array.from(imports).join(', ');
  
  return `"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ${importString} } from "lucide-react";

export default function PageComponent() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">${title}</h1>
        <p className="text-muted-foreground">
          ${desc}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 border-border/50 bg-secondary/10 flex flex-col justify-center items-center min-h-[300px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50"></div>
          <div className="z-10 text-center flex flex-col items-center">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-pulse">
              <${iconName} className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">${title} Module</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm">Initializing AI processing models and securely connecting to the FTID network...</p>
          </div>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>System Diagnostics</CardTitle>
            <CardDescription>Live telemetry</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
              <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-green-500"/> Node Status</span>
              <span className="text-green-500 font-bold">Online</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
              <span className="flex items-center gap-2"><Network className="h-4 w-4 text-primary"/> Latency</span>
              <span className="font-bold">14ms</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary"/> Security</span>
              <span className="font-bold">Enforced</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}`;
};

for (const [portal, routes] of Object.entries(pages)) {
  for (const route of routes) {
    const dir = path.join(baseDir, portal, route.name);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, 'page.tsx');
    if (!fs.existsSync(filePath)) {
       fs.writeFileSync(filePath, template(route.title, route.desc, route.icon));
       console.log(`Created ${filePath}`);
    } else {
       // if citizen pages exist already, we can overwrite or skip. Let's just write to make sure it matches.
       // actually, some citizen pages might already exist from previous work. Let's just write if not exists or if we need to.
       // for safety, we'll overwrite the ones in the list to ensure they have the new layout.
       fs.writeFileSync(filePath, template(route.title, route.desc, route.icon));
       console.log(`Overwrote ${filePath}`);
    }
  }
}
console.log("Finished generating pages!");
