# FTID — Sovereign Financial Infrastructure

FTID is a "Financial DNS" platform providing dual-party financial transparency and compliance for citizens and governments.

## Deployment to GitHub

To push this project to your repository, run the following commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit: FTID Sovereign Infrastructure"
git branch -M main
git remote add origin git@github.com:Sridhara21/II2026-FTID.git
git push -u origin main
```

## The 8-Portal Ecosystem

The FTID ecosystem is a massive, interconnected intelligence network consisting of 8 distinct portals, all with a unified UI:

### 1. Citizen Portal (`/citizen`)
- **Control Center:** Overview of personal finance.
- **Identity Hub:** Verified sovereign identity.
- **Advanced Consent Manager:** Granular control over data sharing.
- **CBDC Wallet:** Secure digital wallet for e-Rupee transactions.
- **Investments & Portfolio:** Personal investment tracking.
- **Financial Health Engine:** Personal credit scoring and well-being.
- **Tax & Compliance:** Real-time tax estimation and compliance.
- **Subsidies & Welfare:** DBTs and welfare tracking.
- **Personal Balance Sheet:** Comprehensive view of personal net worth.

### 2. Government Portal (`/government`)
- **National Economic Observatory:** Real-time macroeconomic heatmaps and sectoral performance.
- **Subsidy Intelligence:** End-to-end tracking of welfare disbursements and leakage detection.
- **Informal Economy Analysis:** AI-driven estimation of unorganized sector activity and tax gap.
- **Policy Simulation Hub:** Test macroeconomic changes and visualize economic impact before deployment.
- **Registry Audit:** Master registry records.
- **GDP Tracking & Revenue:** Real-time macro indicators derived from aggregated transaction flows.
- **Fraud Heatmaps & System Architecture:** Top-level oversight of national infrastructure.

### 3. Regulator Portal (`/regulator`)
- **Regulator Core:** National Macro-Financial Intelligence Terminal.
- **National Financial Graph:** Citizen-business-bank maps and shell entity clustering.
- **Early Warning System (EWS):** Predictive alerts for fraud outbreaks and liquidity collapse.
- **Systemic Risk Observatory:** Contagion analysis and macro-financial stability monitoring.
- **Financial Trust Index:** National aggregate trust metric and institutional compliance scoring.
- **AML Intelligence Layer:** Layering detection and chain tracing engine.

### 4. Enterprise Hub (`/business`)
- **Enterprise Command Center:** Corporate overview.
- **Vendor Intelligence Network:** AI-driven vendor risk scoring and supply chain mapping.
- **AI Cashflow Engine:** Predictive liquidity and treasury management.
- **Invoice Intelligence:** Automated invoice factoring and fraud detection.
- **Supply Chain Intelligence:** End-to-end logistics tracking.
- **Compliance Risk Engine:** Corporate governance and regulatory standing.

### 5. Institution Hub (`/institution`)
- **Banking & Underwriting Control:** Macro-level operations.
- **Smart Underwriting Engine:** Real-time loan approvals powered by AI.
- **Portfolio Risk Observatory:** Macro-level lending risk monitoring.
- **Institutional Fraud Shield:** Bank-level AML and transaction filtering.

### 6. Gateway Node (`/gateway`)
- **National Settlement Infrastructure:** Main gateway control.
- **CBDC Settlement Layer:** Programmable fiat and atomic settlements.
- **Velocity Monitoring Engine:** Real-time capital flow tracking.
- **AML Interceptor:** Cross-border transaction firewall.

### 7. Audit Terminal (`/auditor`)
- **RegTech Verification Hub:** Central audit dashboard.
- **AI Audit Copilot:** Automated ledger anomaly detection.
- **Immutable Ledger Verification:** Cryptographic proof of reserves.
- **Audit Risk Engine:** Automated sampling and risk identification.

### 8. Developer Hub (`/developer`)
- **Developer Command Center:** Core dev environment.
- **API Marketplace:** Integrate national financial primitives.
- **Sandbox Simulator:** Test applications against mock networks.
- **SDK Hub:** Libraries and tools for FTID integration.

## UI Principles
- **Institutional Tone**: Deep Navy (#070E1A) background with Sky Blue (#67B9FF) primary accents.
- **High-Density Design**: Compressed card and table layouts for analytical efficiency.
- **Data Precision**: Tabular numerals used for all numeric values to ensure perfect vertical alignment.
- **Contextual Security**: Integrated status layer showing FTID authorization and sync status.

## UI Replication Prompt (Neutral)
> "Apply a high-density institutional financial UI theme using HSL tokens. Primary: Sky Blue (206 100% 70%), Background: Deep Navy (224 71% 4%), Accent: Sea Green (142 71% 45%). Layout density must be tight (p-4 for cards, py-2.5 for table cells). All numeric data MUST use 'font-variant-numeric: tabular-nums' for perfect vertical alignment. Metadata labels must be uppercase, bold, text-xs (10px), and tracked wider. Use 1px subtle borders instead of shadows for elevation."

## Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS.
- **UI Components**: Shadcn UI, Lucide Icons, Recharts.
- **AI**: Genkit with Google Gemini 2.0 Flash.
- **Backend**: Firebase Firestore & Authentication.
