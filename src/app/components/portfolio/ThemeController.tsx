'use client';

import { useEffect } from 'react';

export function ThemeController() {
    useEffect(() => {
        const theme = 'tokyo-after-dark';
        document.documentElement.dataset.theme = theme;
        window.dispatchEvent(new CustomEvent('portfolio-theme-change', { detail: theme }));
    }, []);

    return null;
}
