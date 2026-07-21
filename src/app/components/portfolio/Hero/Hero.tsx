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
    const [isNameGlitching, setIsNameGlitching] = useState(false);
    const [isGamerName, setIsGamerName] = useState(false);
    const roles = ['A Developer', 'A Gamer', 'A Sneakerhead'];

    useEffect(() => {
        const intervalId = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 3000);
        return () => window.clearInterval(intervalId);
    }, [roles.length]);

    useEffect(() => {
        const timeoutIds = new Set<number>();
        const schedule = (callback: () => void, delay: number) => {
            const timeoutId = window.setTimeout(() => {
                timeoutIds.delete(timeoutId);
                callback();
            }, delay);
            timeoutIds.add(timeoutId);
        };
        const runCycle = () => {
            setIsNameGlitching(false);
            setIsGamerName(false);
            schedule(() => setIsNameGlitching(true), 1100);
            schedule(() => {
                setIsNameGlitching(false);
                setIsGamerName(true);
            }, 1700);
            schedule(() => {
                setIsGamerName(false);
                setIsNameGlitching(true);
            }, 5200);
            schedule(() => {
                setIsNameGlitching(false);
                runCycle();
            }, 5800);
        };

        runCycle();
        return () => timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    }, []);

    return (
        <section className={styles.hero} id="top" data-cursor-surface="dark">
            <nav className={styles.siteNav} aria-label="Primary navigation">
                <a href="#top" className={styles.brand} aria-label="Ryan Verzo home">
                    <Image src="/logo.png" alt="" width={42} height={42} priority />
                    <span>Ryan Verzo<sup>®</sup></span>
                </a>
                <ul className={styles.navLinks}>
                    <li><a href="#work">Selected work</a></li>
                    <li><a href="#contact">Let&apos;s talk <ArrowUpRightIcon /></a></li>
                </ul>
            </nav>
            <div className={styles.heroGrid} aria-hidden="true" />
            <motion.div className={`${styles.heroOrbit} ${styles.orbitOne}`} style={{ y: orbitY }} aria-hidden="true" />
            <div className={`${styles.heroOrbit} ${styles.orbitTwo}`} aria-hidden="true" />
            <LogoScene />
            <header className={styles.heroCopy}>
                <motion.p className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                    <span className={styles.availabilityMarker} />
                    <span className={styles.availability}>Available for thoughtful work</span>
                </motion.p>
                <motion.h1 initial="hidden" animate="visible" transition={{ staggerChildren: 0.12, delayChildren: 0.22 }}>
                    <motion.span variants={reveal}>Hi, I&apos;m</motion.span>
                    <motion.span variants={reveal} className={`${styles.italicLine} ${styles.nameLockup}`}>
                        <span className={`${styles.serifName} ${isNameGlitching ? styles.nameGlitch : ''} ${isGamerName ? styles.serifNameHidden : ''}`} data-text="RYAN">Ryan<span className={styles.limeDot}>.</span></span>
                        <span className={`${styles.gamerName} ${isGamerName ? styles.gamerNameVisible : ''}`}>RYAN.</span>
                    </motion.span>
                </motion.h1>
                <div className={styles.introRole} aria-live="polite"><AnimatePresence mode="wait"><motion.p key={roles[roleIndex]} initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={{ type: 'spring', damping: 24, stiffness: 260 }}>{roles[roleIndex]}</motion.p></AnimatePresence></div>
                <aside className={styles.heroProof} aria-label="Professional summary">
                    <p>Engineering practice</p>
                    <p>Interfaces, systems, and releases built to last.</p>
                    <ul>
                        <li>5+ years</li>
                        <li>Full-stack</li>
                        <li>Manila, PH</li>
                    </ul>
                </aside>
                <motion.div className={`${styles.heroBottom} ${styles.heroBottomMinimal}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}><button type="button" className={styles.roundArrow} aria-label="Explore selected work" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}><ArrowDownIcon /></button></motion.div>
            </header>
            <footer className={styles.heroRail}>
                <span>01 / 05</span>
                <span>Scroll to explore</span>
                <a href="#work">Selected work <ArrowDownIcon /></a>
            </footer>
            <div className={styles.heroStamp} aria-hidden="true"><span>RYAN VERZO · SOFTWARE ENGINEER · </span><SparkIcon /></div>
        </section>
    );
}
