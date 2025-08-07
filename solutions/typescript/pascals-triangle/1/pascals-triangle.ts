export class Triangle {
  rows: number[][];

  constructor(value: number) {
    this.rows = [];
    for (let i = 0; i < value; i++) {
      const r = new Array(i + 1).fill(0);
      this.rows[i] = r;
    }

    for (let r = 0; r < this.rows.length; r++) {
      for (let c = 0; c < this.rows[r].length; c++) {
        if (c === 0 || c === this.rows[r].length - 1) {
          this.rows[r][c] = 1;
        } else {
          const left = this.rows[r - 1][c - 1];
          const right = this.rows[r - 1][c];
          this.rows[r][c] = left + right;
        }
      }
    }
  }

  get lastRow(): number[] {
    return this.rows.length > 0 ? this.rows[this.rows.length - 1] : [];
  }
}

