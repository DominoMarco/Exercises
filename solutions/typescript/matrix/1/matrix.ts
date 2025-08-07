export class Matrix {
  private foo: number[][];

  constructor(input: string) {
    this.foo = input
      .trim()
      .split('\n')
      .map(row =>
        row
          .trim()
          .split(/\s+/)
          .map(Number)
      );
  }

  get rows(): number[][] {
    return this.foo;
  }

  get columns(): number[][] {
    const cols: number[][] = [];

    for (let i = 0; i < this.foo[0].length; i++) {
      const col: number[] = [];
      for (let j = 0; j < this.foo.length; j++) {
        col.push(this.foo[j][i]);
      }
      cols.push(col);
    }

    return cols;
  }
}
