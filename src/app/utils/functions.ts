export const rgbaStringToHex = (rgba: string) => {
    // Use a regular expression to extract the RGBA values
    const result = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);

    if (!result) {
        return "#000000";
    }

    // Extract the RGB values
    const r = Math.max(0, Math.min(255, parseInt(result[1], 10)));
    const g = Math.max(0, Math.min(255, parseInt(result[2], 10)));
    const b = Math.max(0, Math.min(255, parseInt(result[3], 10)));
    const a = result[4] ? parseFloat(result[4]) : 1; // Default alpha to 1 if not provided

    // Convert RGB to HEX
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()}`;

    // If alpha is provided, convert it to a two-digit hex value
    if (a !== undefined) {
        const alphaHex = Math.round(a * 255).toString(16).padStart(2, '0').toUpperCase();
        return `${hex}${alphaHex}`; // Return HEX with alpha
    }

    return hex; // Return HEX without alpha
}