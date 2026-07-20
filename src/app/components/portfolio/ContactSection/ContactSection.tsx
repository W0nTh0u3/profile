'use client';

import { motion } from 'framer-motion';
import { profile } from '../data';
import { ArrowUpIcon, ArrowUpRightIcon } from '../icons';
import styles from './ContactSection.module.scss';

export function ContactSection() {
    return (
        <section className={styles.contact} id="contact" data-cursor-surface="light">
            <div className={styles.contactTop}>
                <p>04 / Make a good thing</p>
                <span>{profile.location} · © {new Date().getFullYear().toString()} RV</span>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}>
                <p className={styles.contactPretitle}>Have an idea worth making?</p>
                <a href={`mailto:${profile.email}`} className={styles.contactLink}>
                    Let&apos;s make it <ArrowUpRightIcon />
                </a>
            </motion.div>
            <div className={styles.contactFooter}>
                <a href="https://github.com/w0nth0u3" target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRightIcon />
                </a>
                <a href="https://linkedin.com/in/resjverzo" target="_blank" rel="noreferrer">
                    LinkedIn <ArrowUpRightIcon />
                </a>
                <a href="/Ryan_Verzo_Resume_FSE_2026-07.pdf" target="_blank" rel="noreferrer">
                    Resume <ArrowUpRightIcon />
                </a>
                <a href="tel:+639760208693">{profile.phone} <ArrowUpRightIcon /></a>
                <span>Scroll to explore <ArrowUpIcon /></span>
            </div>
        </section>
    );
}
