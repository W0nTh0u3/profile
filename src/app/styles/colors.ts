import chroma from "chroma-js";

export const COLORS: [string, string, string][] = [
    // Sunset Palette
    ['#FF6F61', '#6B5B95', '#88B04B'],

    // Ocean Breeze
    ['#00A8E1', '#F1C40F', '#E67E22'],

    // Forest Vibes
    ['#2E8B57', '#A0522D', '#FFD700'],

    // Pastel Dreams
    ['#FFB6C1', '#B0E0E6', '#FFFACD'],

    // Earthy Tones
    ['#8B4513', '#D2691E', '#F5DEB3'],

    // Modern Minimalist
    ['#2C3E50', '#ECF0F1', '#E74C3C'],

    // Retro Vibes
    ['#FF9F00', '#FF3D00', '#00BFAE'],

    // Cool Tones
    ['#1E90FF', '#00CED1', '#4682B4'],

    // Warm Neutrals
    ['#D2B48C', '#F4A460', '#8B4513'],

    // Vibrant Contrast
    ['#FF5733', '#33FF57', '#3357FF'],

    // miami colors
    ['#FF6F61', '#00BFFF', '#FF1493'],
];

export const darken = (str: string) => {
    return chroma(str).darken(1.25).hex();
}