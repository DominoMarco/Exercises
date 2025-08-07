export class CustomSet {
  elements: number[];
  constructor(initial?: number[]) {
    this.elements = initial ?? [];
  }

  empty(): boolean {
    return this.elements.length == 0;
  }

  contains(element: number): boolean {
    return this.elements.find((x) => x == element) ? true : false;
  }

  add(element: number): CustomSet {
    this.elements.push(element);
    return this;
  }

  subset(other: CustomSet): boolean {
    if (other.elements.length == 0 && this.elements.length != 0) return false;
    if (this.elements.length >= other.elements.length) {
      return this.elements.join("").search(other.elements.join("")) == -1
        ? false
        : true;
    } else {
      return other.elements.join("").search(this.elements.join("")) == -1
        ? false
        : true;
    }
  }

  disjoint(other: CustomSet): boolean {
    for (const e of this.elements) {
      if (other.elements.indexOf(e) != -1) return false;
    }
    return true;
  }

  eql(other: CustomSet): boolean {
    if (other.elements.length != 0 && this.elements.length == 0) return false;
    if (other.elements.length == 0 && this.elements.length != 0) return false;
    for (const e of this.elements) {
      if (other.elements.indexOf(e) == -1) return false;
    }
    return true;
  }

  union(other: CustomSet): CustomSet {
    return new CustomSet([
      ...this.elements,
      ...other.elements.filter((x) => !this.contains(x)),
    ]);
  }

  intersection(other: CustomSet): CustomSet {
    let cont: number[] = [];
    for (const e of this.elements) {
      if (other.elements.indexOf(e) != -1) cont.push(e);
    }
    return new CustomSet(cont);
  }

  difference(other: CustomSet): CustomSet {
    return new CustomSet(this.elements.filter((x) => !other.contains(x)));
  }
}
