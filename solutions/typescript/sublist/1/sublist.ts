export class List {
  elementi: number[];
  constructor(...elementi: number[]) {
    this.elementi = elementi || [];
  }

  compare(second: List): string {
    let arr = [];
    if (second.elementi.length == 0 && this.elementi.length == 0)
      return "equal";
    else {
      const lista1 = this.elementi.join(",");
      const lista2 = second.elementi.join(",");

      if (second.elementi.length == 0 && this.elementi.length > 0)
        return "superlist";

      if (second.elementi.length > 0 && this.elementi.length == 0)
        return "sublist";

      for (let i = 0; i < this.elementi.length; i++) {
        if (this.elementi[i] == second.elementi[i]) arr.push(this.elementi[i]);
      }
      if (
        arr.length == this.elementi.length &&
        this.elementi.length == second.elementi.length
      )
        return "equal";

      if ((lista2.search(lista1) != -1)&&(second.elementi.length>this.elementi.length)) return "sublist";
      if (lista1.search(lista2) != -1) return "superlist";

      for (let i = 0; i < this.elementi.length; i++) {
        if (this.elementi[i] != second.elementi[i]) return "unequal";
      }
      return "equal";
    }
  }
}
