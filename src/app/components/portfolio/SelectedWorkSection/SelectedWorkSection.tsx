'use client';

import { motion } from 'framer-motion';
import { selectedWork } from '../data';
import styles from './SelectedWorkSection.module.scss';

export function SelectedWorkSection() {
    return (
        <section className={styles.selectedWork} id="work" data-cursor-surface="light">
            <header className={styles.heading}>
                <p>02 / Selected work</p>
                <h2>Systems with <em>proof.</em></h2>
            </header>
            <p className={styles.disclosure}>Client names and sensitive implementation details are omitted.</p>
            <ol className={styles.caseStudies}>
                {selectedWork.slice(0, 4).map((project, index) => (
                    <motion.li
                        className={styles.caseStudy}
                        key={project.title}
                        initial={{ opacity: 0, y: 48 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: .2 }}
                        transition={{ delay: index * .1 }}>
                        <div className={styles.caseMeta}><span>0{index + 1}</span><span>{project.period}</span></div>
                        <div className={styles.caseMain}><p>{project.role}</p><h3>{project.title}</h3></div>
                        <p className={styles.summary}>{project.summary}</p>
                        <div className={styles.caseDetails}>
                            <ul aria-label={`${project.title} impact`}>{project.impact.map((item) => <li key={item}>{item}</li>)}</ul>
                            <ul aria-label={`${project.title} technology stack`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}
