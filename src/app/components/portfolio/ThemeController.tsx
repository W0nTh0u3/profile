'use client';

import { useEffect } from 'react';
import { themes } from './data';

export function ThemeController() {
    useEffect(() => {
        const theme = themes[Math.floor(Math.random() * themes.length)];
        document.documentElement.dataset.theme = theme;
        window.dispatchEvent(new CustomEvent('portfolio-theme-change', { detail: theme }));
    }, []);

    return null;
}
