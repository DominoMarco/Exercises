const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

export class SimpleCipher {
  key: string;
  constructor(input?: string) {
    this.key = input ?? "defaultKey";
    if (this.key == "defaultKey") {
      this.key = "";
      let j = 0;
      this.key = "";
      while (j < 100) {
        const rand = Math.floor(Math.random() * 26);
        const randLetter = alphabet.charAt(rand);
        this.key = this.key + randLetter;
        j = j + 1;
      }
    }
  }
  encode(input: string): string {
    let result: string[] = [];
    for (let i = 0; i < input.length; i++) {
      const l = input[i];
      const positionAgg = alphabet.indexOf(l);
      const keyChar = this.key[i % this.key.length];
      const keyPos = alphabet.indexOf(keyChar);
      let positionL = positionAgg + keyPos;
      if (positionL >= 26) {
        positionL = positionL - 26;
      }
      result.push(alphabet.charAt(positionL));
    }
    return result.join("");
  }

  decode(input: string): string {
    let result: string[] = [];
    for (let i = 0; i < input.length; i++) {
      const l = input[i];
      const positionAgg = alphabet.indexOf(l);
      const keyChar = this.key[i % this.key.length];
      const keyPos = alphabet.indexOf(keyChar);
      let positionL = positionAgg - keyPos;
      if (positionL < 0) {
        positionL = 26 + positionL;
      }
      result.push(alphabet.charAt(positionL));
    }
    return result.join("");
  }
}
