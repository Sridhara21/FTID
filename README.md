# FTID — Sovereign Financial Infrastructure Platform

FTID is a "Financial DNS" and decentralized sovereign transaction ledger designed to provide dual-party financial transparency, real-time macro-economic observations, and automated regulatory compliance for citizens, governments, and central banks.

---

> [!NOTE]
> **Git History Heritage Notice**: The first commit in this repository is dated Sep 2025 because it inherits the legacy boilerplate environment from the *Firebase Studio* template. All active functional code, including the multi-role portal layouts, CBDC wallet simulators, policy sandboxes, and regulatory audit terminals, was designed and written during the Horizons 2026 development window.

---

## 🌟 Motivation
Personal finance tracking and national tax compliance are disjointed. Governments rely on delayed statistical samples, while citizens struggle to verify where welfare disbursements go or how taxes are computed. FTID bridges this by introducing a dual-party verified logging architecture. By linking citizens, businesses, and departments through a mock CBDC (e-Rupee) payment layer, the platform enables real-time macroeconomic tracking, automated tax regimes, and transparent regulatory oversight.

---

## 🏗 The 8-Portal Ecosystem
FTID is a high-density, analytical system featuring specialized portals for each participant:
1. **Citizen Portal (`/citizen`)**: Features a CBDC wallet, personal asset balance sheet, investment tracker, real-time FY 2026-27 New Tax Regime calculator, and a data consent manager.
2. **Government Portal (`/government`)**: Displays real-time macro GDP trackers, sectoral performance metrics, and a Policy Simulation Sandbox.
3. **Regulator Portal (`/regulator`)**: Features a National Financial Graph (entity relationships) and an Early Warning System (EWS) for systemic risk.
4. **Enterprise Hub (`/business`)**: Corporate vendor risk engine and predictive cash flow planner.
5. **Institution Hub (`/institution`)**: Underwriting cockpit for automated commercial credit scoring.
6. **Gateway Node (`/gateway`)**: Atomic CBDC settlement layer and capital velocity trackers.
7. **Audit Terminal (`/auditor`)**: Proof-of-reserves validator and ledger anomaly detector.
8. **Developer Hub (`/developer`)**: Sandbox keys and SDK documentation.

---

## 🤖 AI Usage & Custom Engineering Limits Compliance
FTID is built in strict compliance with the Hack Club Horizons 30% AI limit:
*   **What is AI-Driven**: The platform utilizes Genkit with Google Gemini 2.0 Flash to power context-aware personal financial coaching (inside the Citizen Portal) and to parse ledger anomalies (inside the Auditor Terminal).
*   **What is Custom Engineered (80%+)**: The entire multi-portal Routing system, HSL high-density layouts (designed to replicate institutional terminals), local state databases, CBDC transaction processors, PDF auto-export triggers, and policy calculation models.

---

## 🛠 Technology Stack
*   **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS
*   **Database & Auth**: Firebase Firestore, Firebase Authentication
*   **AI SDK**: Google Genkit (Gemini 2.0 Flash provider)
*   **Components**: Shadcn UI, Lucide Icons, Recharts

---

## 🖥 Platform Preview (Screenshots)
Screenshots demonstrating the various portals are available in the repository at:
*   `all_screenshots/Landing.png` — Main Entry Gateway
*   `all_screenshots/citizen_balance-sheet.png` — Personal Finance Dashboard
*   `all_screenshots/government_policy-simulator.png` — Macro Sandbox
*   `all_screenshots/regulator_ews.png` — Risk Surveillance
*   `all_screenshots/bank_underwriting.png` — Institution Underwriting Console

---

## ⚡ Setup & Run Instructions

### Prerequisites
*   Node.js (v18.x or later)
*   Firebase Project Credentials (configured in `.env.local`)

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure Environment variables:
   Create a `.env.local` file and add:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   GEMINI_API_KEY=your_gemini_api_key
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).
