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
                <p>
                    The toolkit changes with the problem, not the trend. The constant is thoughtful execution.
                </p>
            </div>
        </section>
    );
}
