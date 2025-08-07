export class LinkedList<TElement> {
  private lista: number[] = [];
  private head: number = 0;
  public push(element: number) {
    this.lista.push(element);
  }

  public pop(): number {
    const lastI = this.lista.length;
    const lastE = this.lista[lastI - 1] ?? 0;
    this.lista = this.lista.slice(0, -1);
    return lastE;
  }

  public shift(): number {
    const firstE = this.lista[0] ?? 0;
    this.lista = this.lista.slice(1);
    return firstE;
  }

  public unshift(element: number) {
    let temp: number[] = [];
    temp.push(element);
    for (const i of this.lista) {
      temp.push(i);
    }
    this.lista = temp;
  }

  public delete(element: number) {
    let temp: number[] = [];
    for (const i of this.lista) {
      if (i != element) temp.push(i);
    }
    this.lista = temp;
  }

  public count(): number {
    return this.lista.length;
  }
}