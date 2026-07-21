'use client';

import { motion } from 'framer-motion';
import { work } from '../data';
import styles from './ExperienceSection.module.scss';

export function ExperienceSection() {
    return (
        <section className={styles.work} id="work" data-cursor-surface="dark">
            <header className={styles.sectionHeading}>
                <p className={styles.sectionLabel}>03 / Experience</p>
                <h2>Built where <em>it matters.</em></h2>
            </header>
            <ol className={styles.workList}>
                {work.map((item, index) => (
                    <motion.li
                        className={styles.workItem}
                        key={`${item.company}-${item.role}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.08 }}>
                        <header className={styles.workMeta}>
                            <span>{item.period}</span>
                            <span>0{index + 1}</span>
                        </header>
                        <hgroup className={styles.workMain}>
                            <h3>{item.company}</h3>
                            <p>{item.role}</p>
                        </hgroup>
                        <p className={styles.workDetail}>{item.detail}</p>
                        <ul className={styles.workTags} aria-label={`${item.company} technologies`}>
                            {item.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}
