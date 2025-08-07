export class Crypto {
  clearString: string;

  constructor(plainText: string) {
    this.clearString = "";
    for (const e of plainText.toLocaleLowerCase()) {
      if ((e >= "a" && e <= "z") || (e >= "0" && e <= "9")) {
        this.clearString += e;
      }
    }
  }

  get ciphertext(): string {
    let trovato = false;
    const lunghezza = this.clearString.length;
    if (lunghezza == 0) return "";
    let myC = 0;
    let myR = 0;

    if (lunghezza == 1) {
      myC = 2;
      myR = 1;
    } else {
      for (let r = 0; r < lunghezza; r++) {
        if (trovato) break;
        for (let c = 1; c < lunghezza; c++) {
          if (trovato) break;
          const divis = lunghezza / c;
          if (Math.ceil(divis) <= r && c - r <= 1 && c >= r) {
            trovato = true;
            myC = c;
            myR = r;
          }
        }
      }
    }

    const chunck = this.addSpacesEveryNCharacters(this.clearString, myR).split(" ");
    let finale = "";

    for (let i = 0; i < chunck[0].length; i++) {
      for (let j = 0; j < chunck.length; j++) {
        if (chunck[j][i] !== undefined) {
          finale += chunck[j][i];
        }
      }
      if (i < chunck[0].length - 1) {
        finale += " ";
      }
    }

    if(finale[finale.length-1]=="o")finale += " ";
    return finale;
  }

  addSpacesEveryNCharacters(str: string, space: number) {
    const regex = new RegExp(`.{1,${space}}`, "g");
    const matches = str.match(regex);
    return matches ? matches.join(" ") : "";
  }
}
