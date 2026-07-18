export const themePalettes = {
    'miami-vice': { primary: '#ff71ce', accent: '#01d9fe', glow: '#b967ff' },
    'tokyo-after-dark': { primary: '#ff5cac', accent: '#00e5ff', glow: '#8c5cff' },
    'solar-flare': { primary: '#ff5c35', accent: '#ffd23f', glow: '#a855f7' },
    'y2k-chrome': { primary: '#ff4fd8', accent: '#4dfff3', glow: '#7b61ff' },
    'citrus-noir': { primary: '#d7ff45', accent: '#63e6be', glow: '#ff8b5d' },
} as const;

export type ThemeName = keyof typeof themePalettes;
export const themes = Object.keys(themePalettes) as ThemeName[];

export const capabilities = [
    ['01', 'Interface systems', 'Angular development, frontend architecture, responsive design, and UI/UX implementation.'],
    ['02', 'Product engineering', 'SSR, APIs, deployments, performance'],
    ['03', 'Complex platforms', 'Commerce, finance, mobile, desktop'],
] as const;

export const profile = {
    location: 'Manila, Philippines',
    phone: '+63 976 020 8693',
    email: 'resjverzo@gmail.com',
};

export const work = [
    {
        period: '2025 - now',
        company: 'Enstack',
        role: 'Software Engineer',
        detail: 'Shipping a faster, more resilient commerce platform across web, iOS, Android, and desktop.',
        tags: ['Angular 21 SSR', 'i18n', 'CI/CD'],
    },
    {
        period: '2023 - 2025',
        company: 'Computer Professionals Inc.',
        role: 'Software Developer',
        detail: 'Translated 50+ detailed product designs into high-performing, accessible customer experiences.',
        tags: ['Angular 15-18', 'React', 'Team lead'],
    },
    {
        period: '2021 - 2022',
        company: 'Computer Professionals Inc.',
        role: 'Junior Software Developer',
        detail: 'Built operational tools and secure, data-heavy workflows for enterprise banking clients.',
        tags: ['Angular', 'SQL / PL-SQL', 'Java'],
    },
] as const;

export const toolkit = [
    ['Angular', 'massive'],
    ['React', ''],
    ['TypeScript', 'outline'],
    ['Python', ''],
    ['Node.js', 'massive lime'],
    ['SQL', ''],
    ['Docker', ''],
    ['AWS', 'outline'],
    ['CI/CD', ''],
    ['Figma', ''],
    ['Web performance', 'massive'],
] as const;
