'use client';

import { motion } from 'framer-motion';
import { reveal } from '../motion';
import { SparkIcon } from '../icons';
import styles from './AboutSection.module.scss';

export function AboutSection() {
    return (
        <section className={styles.statement} id="about">
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
                <div>DESIGN MINDED <SparkIcon /> CODE FIRST <SparkIcon /> HUMAN CENTERED <SparkIcon /> DESIGN MINDED <SparkIcon /> CODE FIRST <SparkIcon /> HUMAN CENTERED <SparkIcon /></div>
            </div>
        </section>
    );
}
