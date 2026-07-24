'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

/** Enables inertia scrolling while leaving touch scrolling native. */
export function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const lenis = new Lenis({
            anchors: true,
            autoRaf: true,
            lerp: 0.075,
            smoothWheel: true,
        });

        const scrollTo = (event: Event) => {
            lenis.scrollTo((event as CustomEvent<number>).detail);
        };

        window.addEventListener('portfolio:scroll-to', scrollTo);

        return () => {
            window.removeEventListener('portfolio:scroll-to', scrollTo);
            lenis.destroy();
        };
    }, []);

    return null;
}
