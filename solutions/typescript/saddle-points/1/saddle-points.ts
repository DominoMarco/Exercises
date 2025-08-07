export function saddlePoints(
  mappa: number[][]
): { row: number; column: number }[] {
  if (mappa.length === 0 || mappa[0].length === 0) return [];

  const res: { row: number; column: number }[] = [];

  for (let i = 0; i < mappa.length; i++) {
    const row = mappa[i];
    const maxInRow = Math.max(...row);
    for (let j = 0; j < row.length; j++) {
      if (row[j] === maxInRow) {
        let isMinInCol = true;
        for (let k = 0; k < mappa.length; k++) {
          if (mappa[k][j] < row[j]) {
            isMinInCol = false;
            break;
          }
        }

        if (isMinInCol) {
          res.push({ row: i + 1, column: j + 1 });
        }
      }
    }
  }

  return res;
}