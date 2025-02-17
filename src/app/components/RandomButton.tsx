import { darken } from "../styles/colors";

interface IRandomButtonProps {
    randomClick: () => void;
    bgNumber: [string, string, string];
}

export const RandomButton = ({ randomClick, bgNumber }: IRandomButtonProps) => {
    return (
        <button
            onClick={randomClick}
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition-opacity bg-black text-white z-100`}
            style={{
                background: `linear-gradient(to right, ${darken(bgNumber[0])}, ${darken(bgNumber[1])}, ${darken(bgNumber[2])})`
            }}
        >
            Random Color!
        </button>
    );
}