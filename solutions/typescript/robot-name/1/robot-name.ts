export class Robot {
  private nome: string;
  private alfaｂ: string = "qwertyuiopasdfghjklzxcvbnm";
  private setName: Map<string, number> = new Map<string, number>();
  constructor() {
    let temp: string[] = [];
    let n1: number = Math.floor(Math.random() * 26);
    let n2: number = Math.floor(Math.random() * 26);
    temp.push(this.alfaｂ.charAt(n1).toUpperCase());
    temp.push(this.alfaｂ.charAt(n2).toUpperCase());

    temp.push(Math.floor(Math.random() * 10).toString());
    temp.push(Math.floor(Math.random() * 10).toString());
    temp.push(Math.floor(Math.random() * 10).toString());
    this.nome = temp.join("");
  }

  public get name(): string {
    return this.nome;
  }

  public resetName(): void {
    this.setName.set(this.nome, 1);
    let vv = false;
    while (!vv) {
      let temp: string[] = [];
    let n1: number = Math.floor(Math.random() * 26);
    let n2: number = Math.floor(Math.random() * 26);
    temp.push(this.alfaｂ.charAt(n1).toUpperCase());
    temp.push(this.alfaｂ.charAt(n2).toUpperCase());

    temp.push(Math.floor(Math.random() * 10).toString());
    temp.push(Math.floor(Math.random() * 10).toString());
    temp.push(Math.floor(Math.random() * 10).toString());
    this.nome = temp.join("");
  
      if(this.setName.get(this.nome)==undefined)vv=true;
    }
  }

  public static releaseNames(): void {}
}
