import { toolkit } from '../data';
import styles from './ToolkitSection.module.scss';

export function ToolkitSection() {
    return (
        <section className={styles.toolkit} data-cursor-surface="light">
            <h2 className={styles.sectionLabel}>In the toolkit</h2>
            <div className={styles.toolkitContent}>
                <ul className={styles.toolCloud} aria-label="Technical skills">
                    {toolkit.map(([name, className]) => (
                        <li
                            className={className
                                .split(' ')
                                .filter(Boolean)
                                .map((className) => styles[className])
                                .join(' ')}
                            key={name}>
                            {name}
                        </li>
                    ))}
                </ul>
                <blockquote className={styles.principle}>
                    <span>The toolkit changes with the problem,</span>
                    <strong>not the trend.</strong>
                    <small>The constant is thoughtful execution.</small>
                </blockquote>
            </div>
        </section>
    );
}
