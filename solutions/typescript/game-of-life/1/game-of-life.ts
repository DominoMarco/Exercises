export class GameOfLife {
  matrix: number[][];

  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  private countNeighbors(x: number, y: number): number {
    const dirs = [-1, 0, 1];
    let count = 0;
    for (let dx of dirs) {
      for (let dy of dirs) {
        if (dx === 0 && dy === 0) continue;
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 && nx < this.matrix.length &&
          ny >= 0 && ny < this.matrix[0].length
        ) {
          count += this.matrix[nx][ny];
        }
      }
    }
    return count;
  }

  public tick(): void {
    const rows = this.matrix.length;
    if(rows==0) return;
    const cols = this.matrix[0].length;
    const newMatrix = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => {
        const neighbors = this.countNeighbors(i, j);
        if (this.matrix[i][j] === 1) {
          return neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          return neighbors === 3 ? 1 : 0;
        }
      })
    );
    this.matrix = newMatrix;
  }

  public state(): number[][] {
    return this.matrix;
  }
}
