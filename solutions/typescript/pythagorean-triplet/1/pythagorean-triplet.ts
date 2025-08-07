type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets(options: Options): Triplet[] {
  const min = options.minFactor ?? 1;
  const max = options.maxFactor ?? options.sum - 1;
  const sum = options.sum;
  const result: Triplet[] = [];

  for (let a = min; a <= max; a++) {
    for (let b = a + 1; b <= max; b++) {
      const c = sum - a - b;
      if (c > b && c <= max && a * a + b * b === c * c) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}

class Triplet {
  private values: [number, number, number];

  constructor(a: number, b: number, c: number) {
    this.values = [a, b, c];
  }

  toArray(): [number, number, number] {
    return [...this.values].sort((x, y) => x - y) as [number, number, number];
  }
}
