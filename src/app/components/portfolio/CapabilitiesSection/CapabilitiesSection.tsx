'use client';

import { motion } from 'framer-motion';
import { capabilities } from '../data';
import { reveal } from '../motion';
import { ArrowDownRightIcon } from '../icons';
import styles from './CapabilitiesSection.module.scss';

export function CapabilitiesSection() {
    return (
        <section className={styles.capabilities} data-cursor-surface="light">
            <div className={styles.sectionHeading}>
                <p className={styles.sectionLabel}>02 / How I work</p>
                <p className={styles.microCopy}>I turn ideas into polished, dependable products—from the first sketch through production release.</p>
            </div>
            <div className={styles.capabilityList}>
                {capabilities.map(([number, title, description]) => (
                    <motion.article
                        className={styles.capability}
                        key={number}
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}>
                        <span>{number}</span>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <ArrowDownRightIcon />
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
