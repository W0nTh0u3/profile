'use client';

import { motion } from 'framer-motion';
import { profile } from '../data';
import { ArrowUpRightIcon } from '../icons';
import styles from './ContactSection.module.scss';

export function ContactSection() {
    return (
        <section className={styles.contact} id="contact" data-cursor-surface="light">
            <header className={styles.contactTop}>
                <p>05 / Make a good thing</p>
                <span>{profile.location} · © {new Date().getFullYear().toString()} RV</span>
            </header>
            <motion.article
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}>
                <p className={styles.contactPretitle}>Have an idea worth making?</p>
                <a href={`mailto:${profile.email}`} className={styles.contactLink}>
                    Let&apos;s make it <ArrowUpRightIcon />
                </a>
            </motion.article>
            <footer className={styles.contactFooter}>
                <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRightIcon />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn <ArrowUpRightIcon />
                </a>
                <a href={profile.resume} target="_blank" rel="noreferrer">
                    Resume <ArrowUpRightIcon />
                </a>
                <a href={profile.phoneHref}>{profile.phone} <ArrowUpRightIcon /></a>
            </footer>
        </section>
    );
}
