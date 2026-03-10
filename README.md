# FTID — Sovereign Financial Infrastructure

FTID is a revolutionary "Financial DNS" platform designed for citizens, businesses, and governments.

## UI REPLICATION PROMPT
Use the following prompt to replicate this specific theme and UI in another workspace:

---

### **FTID INSTITUTIONAL UI BLUEPRINT**

**1. Core Identity & Tone**
- **Application Name:** FTID (Sovereign Financial Infrastructure)
- **Tone:** Authority, trust, and institutional seriousness.
- **Layout Philosophy:** High-density analytics. Minimize vertical whitespace by 20%.

**2. HSL Color Palette (Dark Mode Only)**
Implement these exact values in `globals.css`:
- `background`: 224 71% 4%
- `foreground`: 210 40% 98%
- `card`: 224 71% 5%
- `primary`: 206 100% 70%
- `accent`: 142 71% 45% (Success/Active)
- `border`: 224 71% 12%

**3. Visual Rules**
- **No Shadows:** Separation between layers must be achieved with 1px borders (`var(--border)`).
- **Tabular Numerals:** All numbers, charts, and tables MUST use `font-variant-numeric: tabular-nums;`.
- **Alignment:** All numeric data in tables MUST be right-aligned.
- **Labels:** Secondary metadata (e.g., "TOTAL REVENUE") must be uppercase, 10px size, bold, with `tracking-widest`.

**4. Role-Based Headers (System Layer)**
Every page must have a persistent 32px height "System Layer" at the very top:
- **Citizen:** Shows `FTID ID`, `Consent Status`, `Last Sync`.
- **Gov/Bank:** Shows `Ministry`, `Role Level`, `Jurisdiction`.

---

## Getting Started
To view the application, sign in via the main landing page as either a Citizen or a Government Official.
