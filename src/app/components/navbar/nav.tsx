import styles from './nav.module.scss';

export const Navbar = (): React.JSX.Element => {
    const longArr = Array.from(Array(20).keys());
    return (
        <div className="flex items-center justify-center w-screen whitespace-nowrap overflow-hidden h-full">
            <div className="relative flex">
                <div className="animate-marquee flex">
                    {longArr.map((_, i) => (
                        <p className={styles.text} key={`first-${i}`}>resjvrz</p>
                    ))}
                </div>
                <div className="animate-marquee2 flex absolute top-0 left-full">
                    {longArr.map((_, i) => (
                        <p className={styles.text} key={`second-${i}`}>resjvrz</p>
                    ))}
                </div>
            </div>
        </div>
    );
}