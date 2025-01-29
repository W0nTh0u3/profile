import styles from './nav.module.scss';
import { NavbarProps } from './interface/nav.interface';

export const Navbar = ({ direction = 'left' }: NavbarProps): React.JSX.Element => {
    const arr = Array.from(Array(20).keys());

    const animationClass = direction === 'left' 
        ? 'animate-marquee' 
        : 'animate-marquee-reverse';
    
    const animationClass2 = direction === 'left' 
        ? 'animate-marquee2' 
        : 'animate-marquee2-reverse';

    return (
        <div className="flex items-center justify-center w-screen whitespace-nowrap overflow-hidden h-full">
            <div className="relative flex">
                <div className={`flex ${animationClass}`}>
                    {arr.map((_, i) => (
                        <p className={styles.text} key={`first-${i}`}>resjvrz</p>
                    ))}
                </div>
                <div className={`flex absolute top-0 left-full ${animationClass2}`}>
                    {arr.map((_, i) => (
                        <p className={styles.text} key={`second-${i}`}>resjvrz</p>
                    ))}
                </div>
            </div>
        </div>
    );
}