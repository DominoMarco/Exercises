type DIRECTIONS = { horiz: number, vertic: number, newMove: string };

const direzioni: Map<string, DIRECTIONS> = new Map([
    ["su", { horiz: 0, vertic: -1, newMove: "destra" }],
    ["giu", { horiz: 0, vertic: 1, newMove: "sinistra" }],
    ["sinistra", { horiz: -1, vertic: 0, newMove: "su" }],
    ["destra", { horiz: 1, vertic: 0, newMove: "giu" }],
]);

export function ofSize(valore: number): number[][] {
    const matrice: number[][] = Array.from({ length: valore }, () => Array(valore).fill(0));
    let currentPosition: DIRECTIONS = { horiz: -1, vertic: 0, newMove: "destra" };

    for (let i = 1; i <= valore * valore; i++) {
        const dir = direzioni.get(currentPosition.newMove)!;
        let nextH = currentPosition.horiz + dir.horiz;
        let nextV = currentPosition.vertic + dir.vertic;

        if (
            nextV >= 0 && nextV < valore &&
            nextH >= 0 && nextH < valore &&
            matrice[nextV][nextH] === 0
        ) {
            currentPosition = { horiz: nextH, vertic: nextV, newMove: currentPosition.newMove };
        } else {
            const newDirName = dir.newMove;
            const newDir = direzioni.get(newDirName)!;
            nextH = currentPosition.horiz + newDir.horiz;
            nextV = currentPosition.vertic + newDir.vertic;

            currentPosition = { horiz: nextH, vertic: nextV, newMove: newDirName };
        }

        matrice[currentPosition.vertic][currentPosition.horiz] = i;
    }

    return matrice;
}
