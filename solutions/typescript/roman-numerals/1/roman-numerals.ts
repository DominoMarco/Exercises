export const toRoman = (valore: number): string => {
    const map: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let numero = valore;
    let romano = "";

    for (const [arabic, roman] of map) {
        while (numero >= arabic) {
            romano += roman;
            numero -= arabic;
        }
    }

    return romano;
};
