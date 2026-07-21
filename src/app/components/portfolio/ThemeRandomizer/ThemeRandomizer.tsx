'use client';

import { useEffect, useState } from 'react';
import { themes, type ThemeName } from '../data';
import { DiceIcon } from '../icons';
import styles from './ThemeRandomizer.module.scss';

export function ThemeRandomizer() {
    const [isLightSurface, setIsLightSurface] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isOnContact, setIsOnContact] = useState(false);

    useEffect(() => {
        const updateSurface = () => {
            const elements = document.elementsFromPoint(window.innerWidth - 40, window.innerHeight - 100);
            const section = elements.find((element) => element instanceof HTMLElement && element.dataset.cursorSurface);
            setIsLightSurface(section instanceof HTMLElement && section.dataset.cursorSurface === 'light');
            setIsOnContact(section instanceof HTMLElement && section.id === 'contact');
            setIsAtTop(window.scrollY <= 120);
        };

        updateSurface();
        window.addEventListener('scroll', updateSurface, { passive: true });
        window.addEventListener('resize', updateSurface);

        return () => {
            window.removeEventListener('scroll', updateSurface);
            window.removeEventListener('resize', updateSurface);
        };
    }, []);

    const randomizeTheme = () => {
        const currentTheme = document.documentElement.dataset.theme as ThemeName | undefined;
        const availableThemes = themes.filter((theme) => theme !== currentTheme);
        const theme = availableThemes[Math.floor(Math.random() * availableThemes.length)];

        document.documentElement.dataset.theme = theme;
        window.dispatchEvent(new CustomEvent('portfolio-theme-change', { detail: theme }));
    };

    return (
        <button className={`${styles.button} ${isLightSurface ? styles.onLight : ''} ${isOnContact ? styles.onContact : ''} ${isAtTop ? styles.atTop : ''}`} type="button" onClick={randomizeTheme} aria-label="Choose a random color theme">
            <DiceIcon />
        </button>
    );
}
