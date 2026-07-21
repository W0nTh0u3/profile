export const themePalettes = {
  "deep-sea": { primary: "#2dd4bf", accent: "#60a5fa", glow: "#0f766e" },
  "tokyo-after-dark": {
    primary: "#ff5cac",
    accent: "#00e5ff",
    glow: "#8c5cff",
  },
  "solar-flare": { primary: "#ff5c35", accent: "#ffd23f", glow: "#a855f7" },
  "y2k-chrome": { primary: "#ff4fd8", accent: "#4dfff3", glow: "#7b61ff" },
  "citrus-noir": { primary: "#d7ff45", accent: "#63e6be", glow: "#ff8b5d" },
  "crimson-pulse": { primary: "#ff3b4e", accent: "#ffb703", glow: "#6c2bd9" },
  "electric-blue": { primary: "#318cff", accent: "#63f2ff", glow: "#3458db" },
  "orchid-night": { primary: "#d08cff", accent: "#ff8fd8", glow: "#7c3aed" },
  "aurora-mint": { primary: "#45f3c3", accent: "#7ee8ff", glow: "#36c98d" },
  "sunset-pop": { primary: "#ff6b8a", accent: "#ffcf5c", glow: "#ff8a4c" },
  "matrix-glow": { primary: "#46f36f", accent: "#b6ff4d", glow: "#16a34a" },
  "lavender-haze": { primary: "#b9a7ff", accent: "#f2b5ff", glow: "#8b5cf6" },
  "midnight-gold": { primary: "#f5c542", accent: "#ffa94d", glow: "#b45309" },
  iceberg: { primary: "#71d7ff", accent: "#b4f3ff", glow: "#2563eb" },
  wildberry: { primary: "#f472b6", accent: "#c084fc", glow: "#db2777" },
  "jade-sun": { primary: "#34d399", accent: "#facc15", glow: "#059669" },
  "coral-reef": { primary: "#fb7185", accent: "#2dd4bf", glow: "#f97316" },
} as const;

export type ThemeName = keyof typeof themePalettes;
export const themes = Object.keys(themePalettes) as ThemeName[];

export const capabilities = [
  [
    "01",
    "Interface systems",
    "Angular development, responsive design, reusable UI systems, and UX implementation.",
  ],
  [
    "02",
    "Full-stack product delivery",
    "SSR, REST API integration and endpoints, relational data workflows, performance, and CI/CD releases.",
  ],
  ["03", "Complex platforms", "Commerce, finance, web, mobile, and desktop products."],
] as const;

export const profile = {
  location: "Manila, Philippines",
  phone: "+63 976 020 8693",
  email: "me@resjverzo.com",
};

export const selectedWork = [
  {
    title: "Commerce Platform Modernization",
    period: "2025 - Present",
    role: "Full-Stack Engineer",
    summary:
      "Upgraded a commerce website from Angular 17 to 21, then led its CSR-to-SSR migration by safely decoupling browser-dependent logic for stable hydration.",
    impact: [
      "Angular 17 to 21 upgrade",
      "Browser-only logic decoupled",
      "Core Web Vitals and SEO",
    ],
    stack: ["Angular 21", "TypeScript", "SSR", "SEO"],
  },
  {
    title: "Cross-Platform UI System Standardization",
    period: "2025 - Present",
    role: "Front-End Engineer",
    summary:
      "Used Claude-assisted workflows to accelerate refactoring of repeated interface patterns into a cohesive component system, with manual review before integration across product screens.",
    impact: ["Shared UI building blocks", "Consistent dialog patterns", "iOS and Android coverage"],
    stack: ["Angular", "Ionic", "Capacitor", "TypeScript", "CSS"],
  },
  {
    title: "Thailand Market Localization",
    period: "2025 - Present",
    role: "Full-Stack Engineer",
    summary:
      "Implemented and carried end-to-end i18n support for the Thailand market launch through delivery, covering UI localization, dynamic translation handling, and localized backend endpoints.",
    impact: ["Thailand market launch", "Dynamic translation handling", "Release deployment fixes"],
    stack: ["Angular", "TypeScript", "i18n", "REST APIs", "CI/CD"],
  },
  {
    title: "Enterprise Insurance Experience",
    period: "2023 - 2025",
    role: "Front-End Engineer",
    summary:
      "Turned detailed product designs into responsive insurance journeys and modernized a production application from Angular 15 to 18.",
    impact: [
      "50+ interfaces shipped",
      "Angular 15 to 18",
      "Team-lead coverage",
    ],
    stack: ["Angular", "TypeScript", "React", "Jenkins", "Figma"],
  },
  {
    title: "Secure Banking Operations Portal",
    period: "2021 - 2023",
    role: "Junior Full-Stack Developer",
    summary:
      "Built data-heavy operational workflows, admin tools, and usability improvements for a secure enterprise banking environment.",
    impact: ["30+ Angular modules", "Security improvements", "Portal redesign"],
    stack: ["Angular", "Node.js", "MySQL", "SQL / PL-SQL", "AWS"],
  },
] as const;

export const experience = [
  {
    period: "2025 - now",
    company: "Enstack",
    role: "Software Engineer",
    detail:
      "Cross-platform commerce engineering across web, iOS, Android, and desktop; resolved 200+ critical UI and API issues and owned staging-to-production CI/CD releases.",
  },
  {
    period: "2023 - 2025",
    company: "Computer Professionals Inc.",
    role: "Software Developer",
    detail:
      "Enterprise front-end delivery for insurance products and platform modernization.",
  },
  {
    period: "2021 - 2023",
    company: "Computer Professionals Inc.",
    role: "Junior Software Developer",
    detail: "Secure, data-heavy operational tools for banking workflows.",
  },
] as const;

export const toolkit = [
  ["Angular", "massive lime"],
  ["React", ""],
  ["TypeScript", "massive"],
  ["Python", ""],
  ["Node.js", ""],
  ["Django", ""],
  ["Flask", ""],
  ["Ionic", ""],
  ["Capacitor", ""],
  ["Electron", ""],
  ["REST APIs", ""],
  ["PostgreSQL", ""],
  ["MySQL", ""],
  ["SQL", ""],
  ["PL/SQL", ""],
  ["MongoDB", ""],
  ["Docker", "outline"],
  ["AWS", "outline"],
  ["GitHub Actions", "outline"],
  ["CodeMagic", "outline"],
  ["Jenkins", "outline"],
  ["Git", ""],
  ["Figma", ""],
  ["Web performance", "massive"],
] as const;

// One or more items work; three or more keeps the marquee visually full on wide screens.
export const marqueeItems = [
  "Design minded",
  "Code first",
  "Human centered",
] as const;
