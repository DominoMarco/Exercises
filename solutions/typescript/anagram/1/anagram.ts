export class Anagram {
  input: string;
  constructor(input: string) {
    this.input = input;
  }

  public matches(...potentials: string[]): string[] {
    let res: string[] = [];
    const inp = this.input.toLowerCase().split("").sort().join("");
    for (const elem of potentials) {
      if (this.input.toUpperCase() != elem.toUpperCase()) {
        const temp = elem.toLowerCase().split("").sort().join("");
        if (inp === temp) res.push(elem);
      }
    }
    return res;
  }
}
