'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LogoScene } from '../LogoScene/LogoScene';
import { ArrowDownIcon, ArrowUpRightIcon, SparkIcon } from '../icons';
import { reveal } from '../motion';
import styles from './Hero.module.scss';

export function Hero() {
    const { scrollYProgress } = useScroll();
    const orbitY = useTransform(scrollYProgress, [0, 1], [0, -190]);
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ['A Developer', 'A Gamer', 'A Sneakerhead'];

    useEffect(() => {
        const intervalId = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 3000);
        return () => window.clearInterval(intervalId);
    }, [roles.length]);

    return (
        <section className={styles.hero} id="top" data-cursor-surface="dark">
            <nav className={styles.siteNav} aria-label="Primary navigation">
                <a href="#top" className={styles.brand} aria-label="Ryan Verzo home">
                    <Image src="/logo.png" alt="" width={42} height={42} priority />
                    <span>Ryan Verzo<sup>®</sup></span>
                </a>
                <div className={styles.navLinks}>
                    <a href="#work">Selected work</a>
                    <a href="#contact">Let&apos;s talk <ArrowUpRightIcon /></a>
                </div>
            </nav>
            <div className={styles.heroGrid} aria-hidden="true" />
            <motion.div className={`${styles.heroOrbit} ${styles.orbitOne}`} style={{ y: orbitY }} aria-hidden="true" />
            <div className={`${styles.heroOrbit} ${styles.orbitTwo}`} aria-hidden="true" />
            <LogoScene />
            <div className={styles.heroCopy}>
                <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>Manila, Philippines <span /> Available for thoughtful work</motion.p>
                <motion.h1 initial="hidden" animate="visible" transition={{ staggerChildren: 0.12, delayChildren: 0.22 }}><motion.span variants={reveal}>Hi, I&apos;m</motion.span><motion.span variants={reveal} className={styles.italicLine}>Ryan<span className={styles.limeDot}>.</span></motion.span></motion.h1>
                <div className={styles.introRole} aria-live="polite"><AnimatePresence mode="wait"><motion.p key={roles[roleIndex]} initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={{ type: 'spring', damping: 24, stiffness: 260 }}>{roles[roleIndex]}</motion.p></AnimatePresence></div>
                <motion.div className={`${styles.heroBottom} ${styles.heroBottomMinimal}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}><button type="button" className={styles.roundArrow} aria-label="Explore selected work" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}><ArrowDownIcon /></button></motion.div>
            </div>
            <div className={styles.heroIndex} aria-hidden="true">01 / 04</div>
            <div className={styles.heroStamp} aria-hidden="true"><span>RYAN VERZO · SOFTWARE ENGINEER · </span><SparkIcon /></div>
        </section>
    );
}
