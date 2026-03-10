# FTID — Sovereign Financial Infrastructure

FTID is a revolutionary "Financial DNS" platform designed for citizens, businesses, and governments.

## UI REPLICATION PROMPT
Use the following prompt to replicate this specific theme and visual language in another workspace. This prompt defines the "Visual Engine" and is neutral regarding page content.

---

### **INSTITUTIONAL DATA-DENSITY UI BLUEPRINT**

**1. Core Identity & Tone**
- **Tone:** Authority, precision, trust, and institutional seriousness.
- **Layout Philosophy:** High-density analytical interface. Minimize vertical whitespace by 20-30% compared to standard consumer apps.
- **Elevation:** Do not use CSS box-shadows for elevation. Achieve separation between layers (cards, sidebars, headers) using subtle 1px borders (`var(--border)`).

**2. HSL Color Palette (Refined Dark Mode)**
Implement these exact values in your CSS variables:
- `background`: 224 71% 4%
- `foreground`: 210 40% 98%
- `card`: 224 71% 5%
- `primary`: 206 100% 70%
- `accent`: 142 71% 45% (Success/Active indicator)
- `border`: 224 71% 12%
- `muted`: 224 71% 10%
- `muted-foreground`: 215 20% 65%

**3. Visual Hierarchy & Typography**
- **Numeric Font:** All numeric data, charts, and tables MUST use `font-variant-numeric: tabular-nums;` to ensure vertical alignment of digits.
- **Data Alignment:** In tables and lists, all numeric data MUST be right-aligned. Text-based descriptors remain left-aligned.
- **Metadata Labels:** Secondary metadata (e.g., "TOTAL REVENUE", "LAST SYNC") must be styled as: `uppercase`, `text-[10px]`, `font-bold`, with `tracking-widest`.
- **Primary Metrics:** Main values should be dominant (e.g., `text-2xl` or `3xl`) and monochromatic, using the primary or foreground color.

**4. Component Styling (ShadCN/Tailwind)**
- **Cards:** Sharp corners (`rounded-md` or `rounded-sm`), subtle borders, no shadows.
- **Tables:** High density (`py-2` or `py-2.5` for cells), sticky headers, background highlights for totals or aggregate rows (`bg-muted/50`).
- **Sidebar:** Slim profile, clear active states using a simple left or right primary-colored border rather than heavy fills.

---

## Getting Started
To view the application, sign in via the main landing page.
