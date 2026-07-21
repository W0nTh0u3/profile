'use client';

import { motion } from 'framer-motion';
import { capabilities } from '../data';
import { reveal } from '../motion';
import { ArrowDownRightIcon } from '../icons';
import styles from './CapabilitiesSection.module.scss';

export function CapabilitiesSection() {
    return (
        <section className={styles.capabilities} data-cursor-surface="light">
            <header className={styles.sectionHeading}>
                <h2 className={styles.sectionLabel}>03 / How I work</h2>
                <p className={styles.microCopy}>Systems over one-offs. Clear decisions, deliberate execution.</p>
            </header>
            <ol className={styles.capabilityList}>
                {capabilities.map(([number, title, description]) => (
                    <motion.li
                        className={styles.capability}
                        key={number}
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}>
                        <span>{number}</span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <ArrowDownRightIcon />
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}
