# Assistant Professor Dr. Koushik Roy — Civil & Environmental Engineering (IIT Patna)

## DESIGN SYSTEM (foundation first)
---
🧠 Theme: Civil & Environmental Engineering
Mood:
- stable
- structured
- professional
- slightly “blueprint / infrastructure” inspired
---
🎨 Color palette (use consistently)
- Primary - Deep Navy / Blue → #1e3a8a or similar
- Secondary - Teal / muted green → #0f766e
- Neutrals- White / off-white backgrounds
- Slate gray text (#334155 / #64748b)
- Accent (very minimal use): Soft gold OR lighter blue for highlights only
---
✍️ Typography
- Name → bold, large (40–56px)
- Section titles → medium (24–32px)
- Body → clean (15–17px)
- Font: Inter / system UI (safe choice)
---
📐 Layout rules
- max width: ~1100–1200px
- lots of whitespace
- consistent spacing (8px system)
- soft shadows only (no heavy effects)
---
🧱 FINAL PAGE STRUCTURE

### 🏠 1. HERO SECTION (CRITICAL FIRST IMPRESSION)
```
Layout:
[ IMAGE ]   [ NAME + INFO ]
Left:  Faculty image
       rounded rectangle or soft circle 
       subtle border
Right: Dr. Koushik Roy (BIG)
       Assistant Professor
       Civil & Environmental Engineering
       IIT Patna

Optional (small stat row):
- Publications
- Research Areas
- Experience

Micro polish:
- fade-in on load
- very subtle hover on image
```
### 👤 2. ABOUT + EXPERIENCE (KEEP SEPARATE)
```
ABOUT - 
formal biography paragraph
no storytelling tone
concise academic description

EXPERIENCE (timeline section)
Vertical timeline:
positions
education
key roles

Example:

Assistant Professor — IIT Patna
PhD — (placeholder)
Research Fellow — (placeholder)

```

### 🔬 3. RESEARCH SECTION (INTERACTIVE CORE FEATURE)

```
Part A: Research Areas (chips UI)
Structural Engineering
Environmental Systems
Water Resources
Sustainable Infrastructure
Interaction:
click → filters publications
Part B: Students Supervised
simple list or grouped later
```

### 📄 4. PUBLICATIONS (MOST IMPORTANT FEATURE)
```
Layout:
search bar
filter tabs:
Journals
Conferences
Publication card:
title (bold)
authors (light)
venue
year
tags (ML / Civil / etc.)
Features:
search filtering
hover expand (optional)
clean spacing
```
### 🏆 5. RECOGNITIONS (STRUCTURED + FORMAL)

```
Split into TWO SUB-SECTIONS (your choice)
🏅 Awards & Honours
card layout
slightly highlighted border (subtle accent)

Example:

2024 — Best Paper Award
2022 — Research Excellence Award
🏛 Professional Memberships
tag/pill layout
neutral styling (not dull gray, not flashy)

Example:

IEEE
ACM
IEI
Styling rule:
Awards = slightly more visual weight
Memberships = simple, clean tags
```
### 📬 6. CONTACT SECTION

```
Include:
email (clickable)
department address
institution info
optional links:
Google Scholar
LinkedIn
Design:
clean card layout
no clutter
```

### 🧭 7. NAVIGATION SYSTEM (VERY IMPORTANT UX POINT)

```
Sticky navbar:
blurred background
semi-transparent
stays on top
Features:
smooth scroll to sections
active section highlight
section-based navigation
```

### 📊 8. TOP PROGRESS BAR (YOUR UX BOOST)

```
Behavior:
thin line at top
fills as user scrolls
```

🧩 COMPONENT BREAKDOWN (React structure)

You will likely build:

App
 ├── Navbar
 ├── Hero
 ├── About
 ├── Timeline
 ├── Research
 ├── Publications
 ├── Recognitions
 ├── Contact
 ├── ScrollProgressBar
⚙️ DATA STRUCTURE (IMPORTANT)

Keep everything in one file initially:

faculty = {
  name: "Dr. Koushik Roy",
  designation: "Assistant Professor",
  department: "Civil & Environmental Engineering",
  institute: "IIT Patna",
  bio: "",
  researchAreas: [],
  experience: [],
  publications: [],
  awards: [],
  memberships: [],
  contact: {}
}

## HEIRARCHY
```
 ┌─────────────┬──────────────┬──────────────┬──────────────┬─────────────┐
 │    *ABOUT*  │   *RESEARCH* │   *PUBS*     │   *RECOG*    │   CONTACT   │
 └──────┬──────┴──────┬───────┴──────┬───────┴──────┬───────┴──────┬──────┘
        │             │              │              │              │
        ├─ Bio        ├─ Res. Areas  ├─ Journals    ├─ Awards      └─ Links/Icons
        ├─ Experience └─ Students    └─ Conferences └─ Memberships └─ Admin Info
        └─ Contact (Copy)
```