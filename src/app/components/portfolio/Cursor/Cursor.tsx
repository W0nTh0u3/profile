'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.scss';

type CursorMode = 'default' | 'open' | 'drag';
type CursorSurface = 'darkSurface' | 'lightSurface';

export function Cursor() {
    const pointerX = useMotionValue(-100);
    const pointerY = useMotionValue(-100);
    const x = useSpring(pointerX, { damping: 30, mass: .25, stiffness: 500 });
    const y = useSpring(pointerY, { damping: 30, mass: .25, stiffness: 500 });
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [mode, setMode] = useState<CursorMode>('default');
    const [surface, setSurface] = useState<CursorSurface>('darkSurface');
    const modeRef = useRef<CursorMode>('default');
    const surfaceRef = useRef<CursorSurface>('darkSurface');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
        const updateAvailability = () => setEnabled(mediaQuery.matches);
        updateAvailability();
        mediaQuery.addEventListener('change', updateAvailability);
        return () => mediaQuery.removeEventListener('change', updateAvailability);
    }, []);

    useEffect(() => {
        if (!enabled) return;

        const updatePointer = (event: PointerEvent) => {
            pointerX.set(event.clientX);
            pointerY.set(event.clientY);
            setVisible(true);

            const target = event.target instanceof Element ? event.target : null;
            const cursorTarget = target?.closest<HTMLElement>('[data-cursor], a');
            const nextMode: CursorMode = cursorTarget?.dataset.cursor === 'drag'
                ? 'drag'
                : cursorTarget?.matches('a') ? 'open' : 'default';
            const nextSurface: CursorSurface = target?.closest<HTMLElement>('[data-cursor-surface]')?.dataset.cursorSurface === 'light'
                ? 'lightSurface'
                : 'darkSurface';

            if (nextMode !== modeRef.current) {
                modeRef.current = nextMode;
                setMode(nextMode);
            }
            if (nextSurface !== surfaceRef.current) {
                surfaceRef.current = nextSurface;
                setSurface(nextSurface);
            }
        };

        const hideCursor = () => setVisible(false);
        window.addEventListener('pointermove', updatePointer);
        document.addEventListener('mouseleave', hideCursor);
        window.addEventListener('blur', hideCursor);

        return () => {
            window.removeEventListener('pointermove', updatePointer);
            document.removeEventListener('mouseleave', hideCursor);
            window.removeEventListener('blur', hideCursor);
        };
    }, [enabled, pointerX, pointerY]);

    if (!enabled) return null;

    return (
        <motion.div className={`${styles.cursor} ${styles[mode]} ${styles[surface]} ${visible ? styles.visible : ''}`} style={{ x, y }} aria-hidden="true">
            <span className={styles.ring} />
            <span className={styles.dot} />
            <span className={styles.label}>{mode === 'open' ? 'OPEN' : mode === 'drag' ? 'DRAG' : ''}</span>
        </motion.div>
    );
}
