export class List {
  public values: unknown[];

  constructor(...values: unknown[]) {
    // Salva i valori esattamente come sono: numeri, array, o List
    this.values = values.map(v => {
      if (v instanceof List) return v.values;
      return v;
    });
  }

  static create(...values: unknown[]): List {
    return new List(...values);
  }

  append(other: List): List {
    return new List(...this.values, ...other.values);
  }

  concat(...lists: List[]): List {
    const combined: unknown[] = [...this.values];
    for (const list of lists) {
      combined.push(...list.values.flat());
    }
    return new List(...combined);
  }

  filter(predicate: (value: unknown) => boolean): List {
    return new List(...this.values.filter(predicate));
  }

  length(): number {
    return this.values.length;
  }

  map(transform: (value: unknown) => unknown): List {
    return new List(...this.values.map(transform));
  }

  foldl(reducer: (acc: unknown, el: unknown) => unknown, initial: unknown): unknown {
    return this.values.reduce(reducer, initial);
  }

  foldr(reducer: (acc: unknown, el: unknown) => unknown, initial: unknown): unknown {
    return this.values.reduceRight(reducer, initial);
  }

  reverse(): List {
    return new List(...this.values.slice().reverse());
  }

  forEach(callback: (value: unknown, index: number, array: unknown[]) => void): void {
    this.values.forEach(callback);
  }
}
