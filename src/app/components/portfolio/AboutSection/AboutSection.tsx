'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';
import { marqueeItems } from '../data';
import { reveal } from '../motion';
import { SparkIcon } from '../icons';
import FaceVector from './face-vector.svg';
import styles from './AboutSection.module.scss';

export function AboutSection() {
    const portraitRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll({ target: portraitRef, offset: ['start end', 'end start'] });
    const portraitX = useTransform(scrollYProgress, [0, 1], isMobile ? [60, -60] : [-120, 120]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 720px)');
        const updateViewport = () => setIsMobile(mediaQuery.matches);
        updateViewport();
        mediaQuery.addEventListener('change', updateViewport);
        return () => mediaQuery.removeEventListener('change', updateViewport);
    }, []);

    return (
        <section className={styles.statement} id="about" data-cursor-surface="light">
            <motion.p className={styles.sectionLabel}
                variants={reveal}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}>
                01 / A little context
            </motion.p>
            <motion.div
                className={styles.statementCopy}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}>
                <motion.p variants={reveal}>
                    I build beautiful, functional web experiences that feel clear, <em>fast</em>, and considered.
                </motion.p>
                <motion.p variants={reveal} className={styles.statementAside}>
                    Five years building modern, responsive applications. Beyond coding, games and sneaker culture keep my creativity and attention to detail sharp.
                </motion.p>
                <motion.div
                    ref={portraitRef}
                    className={styles.portrait}
                    style={{ x: reduceMotion ? 0 : portraitX }}
                    initial={{ opacity: 0, rotate: -10, scale: .82, y: 45 }}
                    whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: .35 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 140 }}>
                    <FaceVector role="img" aria-label="Illustrated portrait of Ryan Verzo" />
                </motion.div>
            </motion.div>
            <motion.blockquote
                className={styles.statementQuote}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}>
                “Full-stack software engineer building considered, resilient products from interface to infrastructure.”
            </motion.blockquote>
            <div className={styles.marquee} aria-hidden="true">
                <div>
                    {[...marqueeItems, ...marqueeItems].map((item, index) => (
                        <Fragment key={`${item}-${index}`}>
                            {item} <SparkIcon />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
