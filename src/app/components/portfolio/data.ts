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
  "iceberg": { primary: "#71d7ff", accent: "#b4f3ff", glow: "#2563eb" },
  "wildberry": { primary: "#f472b6", accent: "#c084fc", glow: "#db2777" },
  "jade-sun": { primary: "#34d399", accent: "#facc15", glow: "#059669" },
  "coral-reef": { primary: "#fb7185", accent: "#2dd4bf", glow: "#f97316" },
} as const;

export type ThemeName = keyof typeof themePalettes;
export const themes = Object.keys(themePalettes) as ThemeName[];

export const capabilities = [
  [
    "01",
    "Interface systems",
    "Angular development, frontend architecture, responsive design, and UI/UX implementation.",
  ],
  ["02", "Product engineering", "SSR, APIs, deployments, performance"],
  ["03", "Complex platforms", "Commerce, finance, mobile, desktop"],
] as const;

export const profile = {
  location: "Manila, Philippines",
  phone: "+63 976 020 8693",
  email: "me@resjverzo.com",
};

export const work = [
  {
    period: "2025 - now",
    company: "Enstack",
    role: "Software Engineer",
    detail:
      "Shipping a faster, more resilient commerce platform across web, iOS, Android, and desktop.",
    tags: ["Angular 17-21 SSR", "i18n", "CI/CD", "Python"],
  },
  {
    period: "2023 - 2025",
    company: "Computer Professionals Inc.",
    role: "Software Developer",
    detail:
      "Translated 50+ detailed product designs into high-performing, accessible customer experiences.",
    tags: ["Angular 15-18", "React", ""],
  },
  {
    period: "2021 - 2023",
    company: "Computer Professionals Inc.",
    role: "Junior Software Developer",
    detail:
      "Built operational tools and secure, data-heavy workflows for enterprise banking clients.",
    tags: ["Angular", "SQL / PL-SQL", "Java"],
  },
] as const;

export const toolkit = [
  ["Angular", "massive"],
  ["React", ""],
  ["TypeScript", "outline"],
  ["Python", ""],
  ["Node.js", "massive lime"],
  ["Django", ""],
  ["Flask", ""],
  ["Ionic", ""],
  ["Capacitor", ""],
  ["Electron", ""],
  ["REST APIs", ""],
  ["PostgreSQL", ""],
  ["SQL", ""],
  ["MongoDB", ""],
  ["Docker", ""],
  ["AWS", "outline"],
  ["GitHub Actions", ""],
  ["CodeMagic", ""],
  ["Jenkins", ""],
  ["Figma", ""],
  ["Web performance", "massive"],
] as const;

// One or more items work; three or more keeps the marquee visually full on wide screens.
export const marqueeItems = ['Design minded', 'Code first', 'Human centered'] as const;
