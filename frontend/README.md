# Sumit Kumar — Next.js Portfolio (Frontend)

Minimal, high-performance Next.js App Router portfolio application with Material UI (MUI v9) and Modular CSS architecture.

---

## 🏗️ Architecture & Folder Structure

```
frontend/
├── public/
│   └── assets/                     # Portfolio logos, technology SVGs, and resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root Next.js layout with ThemeRegistry & Google Fonts
│   │   ├── page.tsx                # Single-page portfolio assembling modular sections
│   │   ├── globals.css             # Clera design variables, reset, and smooth scrolling
│   │   └── home.module.css         # Page-level modular CSS
│   ├── theme/
│   │   ├── EmotionCache.tsx        # Next.js App Router Emotion cache provider (SSR compatible)
│   │   ├── theme.ts                # Clera-themed MUI palette (Teal, Green, Warm Cream/Charcoal)
│   │   └── ThemeRegistry.tsx       # Next.js App Router Theme Provider & Color Mode context
│   ├── components/
│   │   ├── navbar/                 # Centralized pill navbar with More dropdown & Theme toggle
│   │   ├── hero/                   # Hero title, role subhead, 1-click copy & 4-card metric grid
│   │   ├── skills/                 # 7 Categorized skill cards with tech chips
│   │   ├── projects/               # 12 Repositories with category filter tabs & GitHub direct links
│   │   ├── experience/             # Zenmonk & CodeQuotient engineering timeline
│   │   ├── education/              # Two-column bento: MCA/BCA degrees + Zerone24 1st Place awards
│   │   ├── terminal/               # Interactive in-browser developer console with command runner
│   │   ├── contact/                # Direct coordinates + Email transmission form
│   │   └── footer/                 # Clean footer with repo links & uptime indicator
│   ├── data/
│   │   └── portfolio-data.ts       # Centralized, type-safe data (repositories, skills, career)
│   └── types/
│       └── portfolio.ts            # TypeScript interfaces
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your Next.js portfolio.

### 3. Build for Production
```bash
npm run build
npm run start
```
