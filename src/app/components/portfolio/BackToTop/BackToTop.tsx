'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '../icons';
import styles from './BackToTop.module.scss';

export function BackToTop() {
    const [isLightSurface, setIsLightSurface] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isOnContact, setIsOnContact] = useState(false);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        const updateSurface = () => {
            const elements = document.elementsFromPoint(window.innerWidth - 40, window.innerHeight - 40);
            const section = elements.find((element) => element instanceof HTMLElement && element.dataset.cursorSurface);
            setIsLightSurface(section instanceof HTMLElement && section.dataset.cursorSurface === 'light');
            setIsOnContact(section instanceof HTMLElement && section.id === 'contact');
            setIsVisible(window.scrollY > 120);
        };

        updateSurface();
        window.addEventListener('scroll', updateSurface, { passive: true });
        window.addEventListener('resize', updateSurface);

        return () => {
            window.removeEventListener('scroll', updateSurface);
            window.removeEventListener('resize', updateSurface);
        };
    }, []);

    return (
        <button className={`${styles.button} ${isLightSurface ? styles.onLight : ''} ${isOnContact ? styles.onContact : ''} ${isVisible ? '' : styles.hidden}`} type="button" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUpIcon />
        </button>
    );
}
