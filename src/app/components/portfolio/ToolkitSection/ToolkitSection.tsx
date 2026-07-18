import { toolkit } from '../data';
import styles from './ToolkitSection.module.scss';

export function ToolkitSection() {
    return (
        <section className={styles.toolkit}>
            <p className={styles.sectionLabel}>In the toolkit</p>
            <div className={styles.toolkitContent}>
                <div className={styles.toolCloud} aria-label="Technical skills">
                    {toolkit.map(([name, className]) => (
                        <span
                            className={className
                                .split(' ')
                                .filter(Boolean)
                                .map((className) => styles[className])
                                .join(' ')}
                            key={name}>
                            {name}
                        </span>
                    ))}
                </div>
                <p>
                    Technologies are useful only when they help people do something better. I choose the
                    right amount of technology, then sweat the execution.
                </p>
            </div>
        </section>
    );
}