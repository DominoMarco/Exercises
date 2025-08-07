export function transpose(matrix: string[]): string[] {
  if (matrix.length === 0) return [];

  const maxLength = Math.max(...matrix.map((x) => x.length));
  const paddedMatrix = matrix.map((row) => row.padEnd(maxLength, " "));
  const transposed: string[] = [];

  for (let i = 0; i < maxLength; i++) {
    let row = "";
    for (let j = 0; j < paddedMatrix.length; j++) {
      row += paddedMatrix[j][i];
    }
    transposed.push(row);
  }
  transposed[transposed.length - 1] =
    transposed[transposed.length - 1].trimEnd();
  return transposed;
}
