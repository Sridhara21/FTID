# FTID — Sovereign Financial Infrastructure

FTID is a revolutionary "Financial DNS" platform designed for citizens, businesses, and governments.

## UI REPLICATION PROMPT
Use the following blueprint to replicate this specific theme and visual language in another workspace.

---

### **INSTITUTIONAL DATA-DENSITY UI BLUEPRINT**

**1. Core Identity & Tone**
- **Tone:** Authority, precision, trust, and institutional seriousness.
- **Layout Philosophy:** High-density analytical interface. Minimize vertical whitespace by 20-30%.
- **Elevation:** No CSS box-shadows. Use 1px borders (`var(--border)`).

**2. HSL Color Palette (Refined Dark Mode)**
- `background`: 224 71% 4%
- `foreground`: 210 40% 98%
- `card`: 224 71% 5%
- `primary`: 206 100% 70%
- `accent`: 142 71% 45%
- `border`: 224 71% 12%
- `muted`: 224 71% 10%
- `muted-foreground`: 215 20% 65%

**3. Visual Hierarchy & Typography**
- **Numeric Font:** Use `font-variant-numeric: tabular-nums;` for all digits.
- **Data Alignment:** Right-align all numeric data in tables/lists.
- **Metadata Labels:** `uppercase`, `text-[10px]`, `font-bold`, `tracking-widest`.
- **Primary Metrics:** Dominant size (e.g., `text-2xl`), monochromatic.

**4. Component Styling**
- **Cards:** Sharp corners (`rounded-md`), subtle borders, no shadows.
- **Tables:** High density (`py-2` cells), background highlights for totals (`bg-muted/50`).
- **Sidebar:** Slim profile, clear active states via primary-colored borders.
