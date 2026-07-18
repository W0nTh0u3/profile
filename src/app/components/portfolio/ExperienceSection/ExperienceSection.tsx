'use client';

import { motion } from 'framer-motion';
import { work } from '../data';
import styles from './ExperienceSection.module.scss';

export function ExperienceSection() {
    return (
        <section className={styles.work} id="work">
            <div className={styles.sectionHeading}>
                <p className={styles.sectionLabel}>03 / Experience</p>
                <h2>Built where <em>it matters.</em></h2>
            </div>
            <div className={styles.workList}>
                {work.map((item, index) => (
                    <motion.article
                        className={styles.workItem}
                        key={`${item.company}-${item.role}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.08 }}>
                        <div className={styles.workMeta}>
                            <span>{item.period}</span>
                            <span>0{index + 1}</span>
                        </div>
                        <div className={styles.workMain}>
                            <h3>{item.company}</h3>
                            <p>{item.role}</p>
                        </div>
                        <p className={styles.workDetail}>{item.detail}</p>
                        <div className={styles.workTags}>
                            {item.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
