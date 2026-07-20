import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
    return <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" {...props}>{children}</svg>;
}

export function ArrowUpRightIcon(props: IconProps) {
    return <Icon {...props}><path d="M5 19 19 5M8 5h11v11" /></Icon>;
}

export function ArrowDownIcon(props: IconProps) {
    return <Icon {...props}><path d="M12 4v16m-6-6 6 6 6-6" /></Icon>;
}

export function ArrowDownRightIcon(props: IconProps) {
    return <Icon {...props}><path d="M5 5 19 19m-9 0h9v-9" /></Icon>;
}

export function ArrowUpIcon(props: IconProps) {
    return <Icon {...props}><path d="M12 20V4m-6 6 6-6 6 6" /></Icon>;
}

export function SparkIcon(props: IconProps) {
    return <Icon {...props}><path d="m12 2 1.8 8.2L22 12l-8.2 1.8L12 22l-1.8-8.2L2 12l8.2-1.8L12 2Z" /></Icon>;
}

export function DiceIcon(props: IconProps) {
    return <Icon {...props}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01" strokeWidth="3" /></Icon>;
}
