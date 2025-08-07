
type Player = 'O' | 'X';

const directions = [
  [-1, 0],  
  [-1, 1], 
  [0, -1], 
  [0, 1],  
  [1, -1],   
  [1, 0],    
];

export class Board {
  board: string[][];
  height: number;
  width: number;

  constructor(rows: string[]) {
    this.board = rows.map(row =>
      row.trimStart().split(' ').filter(cell => cell.length > 0)
    );
    this.height = this.board.length;
    this.width = this.board[0]?.length ?? 0;
  }

  public winner(): string {
    if (this.hasPath('O')) return 'O';
    if (this.hasPath('X')) return 'X';
    return '';
  }

  private hasPath(player: Player): boolean {
    const visited = Array.from({ length: this.height }, () =>
      Array(this.width).fill(false)
    );

    const stack: [number, number][] = [];

    if (player === 'O') {
      for (let x = 0; x < this.width; x++) {
        if (this.board[0][x] === 'O') stack.push([0, x]);
      }
    } else {
      for (let y = 0; y < this.height; y++) {
        if (this.board[y][0] === 'X') stack.push([y, 0]);
      }
    }

    while (stack.length > 0) {
      const [y, x] = stack.pop()!;
      if (visited[y][x]) continue;
      visited[y][x] = true;

      if (player === 'O' && y === this.height - 1) return true;
      if (player === 'X' && x === this.width - 1) return true;

      for (const [dy, dx] of directions) {
        const ny = y + dy;
        const nx = x + dx;
        if (
          ny >= 0 &&
          ny < this.height &&
          nx >= 0 &&
          nx < this.width &&
          !visited[ny][nx] &&
          this.board[ny][nx] === player
        ) {
          stack.push([ny, nx]);
        }
      }
    }

    return false;
  }
}
