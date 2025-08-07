let stringona: string = "";

export class WordSearch {
  risultati: { [key: string]: { start: number[]; end: number[] } } = {};
  grid: string[];
  larghezza: number;
  altezza: number;
  constructor(grid: string[]) {
    this.grid = grid;
    this.larghezza = grid.at(0)?.length ?? 0;
    this.altezza = grid.length ?? 0;
  }

  public find(words: string[]) {
    stringona = this.grid.reduce((a, b) => a + b);
    for (const parola of words) {
      const firstC = parola.charAt(0);
      const firstInd = stringona.indexOf(firstC);
      for (let i = firstInd; i < stringona.length; i++) {
        if (stringona[i] == firstC) {
          if (
            this.checkAngoloSinistro(
              i,
              this.larghezza,
              parola,
              stringona.length
            )
          ) {
            console.log("diagonle sinisra");
          }
          if (
            this.checkAngoloDestro(i, this.larghezza, parola, stringona.length)
          ) {
            console.log("diagonle destra");
          }
          if (this.checkDestra(i, this.larghezza, parola, stringona.length)) {
            console.log("destra");
          }
          if (this.checkSinistra(i, this.larghezza, parola, stringona.length)) {
            console.log("sinistra");
          }
          if (this.checkBottom(i, this.larghezza, parola, stringona.length)) {
            console.log("basso");
          }
          if (this.checkTop(i, this.larghezza, parola, stringona.length)) {
            console.log("alto");
          }

          if (
            this.checkAngoloAltoDestro(
              i,
              this.larghezza,
              parola,
              stringona.length
            )
          ) {
          }
          if (
            this.checkAngoloAltoSinistro(
              i,
              this.larghezza,
              parola,
              stringona.length
            )
          ) {
          }
        }
      }
    }
    for (const ele in this.risultati) {
      const colonnaI = (this.risultati[ele].start[0] % 10) + 1;
      const colonnaF = (this.risultati[ele].end[0] % 10) + 1;

      const rigaI = Math.trunc(this.risultati[ele].start[0] / 10) + 1;
      const rigaF = Math.trunc(this.risultati[ele].end[0] / 10) + 1;
      this.risultati[ele].start = [rigaI, colonnaI];
      this.risultati[ele].end = [rigaF, colonnaF];
    }
    return this.risultati;
  }

  private checkAngoloAltoSinistro(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if (currentInd - (lunghezza - 1) * (parola.length - 1) < 0) return false;

    temp.push(stringona.charAt(index));
    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index - lunghezza - 1));
      index = index - lunghezza - 1;
    }
    if (parola === temp.join("")) {
      console.log("cacca " + index);
      this.risultati[parola] = {
        start: [currentInd],
        end: [index],
      };
      return true;
    } else return false;
  }

  private checkAngoloAltoDestro(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if (currentInd - (lunghezza + 1) * (parola.length - 1) < 0) return false;

    temp.push(stringona.charAt(index));
    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index - lunghezza + 1));
      index = index - lunghezza + 1;
    }
    if (parola === temp.join("")) {
      this.risultati[parola] = {
        start: [currentInd],
        end: [index],
      };
      return true;
    } else return false;
  }

  private checkAngoloSinistro(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if (currentInd + (lunghezza - 1) * (parola.length - 1) >= lunghezzaTotale)
      return false;

    temp.push(stringona.charAt(index));
    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index + lunghezza - 1));
      index = index + lunghezza - 1;
    }
    if (parola === temp.join("")) {
      this.risultati[parola] = {
        start: [currentInd],
        end: [index],
      };
      return true;
    } else return false;
  }

  private checkAngoloDestro(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if (currentInd + (lunghezza + 1) * (parola.length - 1) >= lunghezzaTotale)
      return false;
    temp.push(stringona.charAt(index));

    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index + lunghezza + 1));
      index = index + lunghezza + 1;
    }
    if (parola == temp.join("")) {
      this.risultati[parola] = {
        start: [currentInd],
        end: [index],
      };
      return true;
    } else return false;
  }

  private checkDestra(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if ((currentInd % lunghezza) + parola.length >= lunghezza) return false;
    temp.push(stringona.charAt(index));
    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index + 1));
      index = index + 1;
    }
    if (parola == temp.join("")) {
      this.risultati[parola] = { start: [currentInd], end: [index] };
      return true;
    } else return false;
  }

  private checkSinistra(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if ((currentInd % lunghezza) - (parola.length - 1) < 0) return false;
    temp.push(stringona.charAt(index));
    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index - 1));
      index = index - 1;
    }
    if (parola == temp.join("")) {
      this.risultati[parola] = { start: [currentInd], end: [index] };
      return true;
    } else return false;
  }

  private checkBottom(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if (currentInd + lunghezza * (parola.length - 1) >= lunghezzaTotale)
      return false;
    temp.push(stringona.charAt(index));
    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index + lunghezza));
      index = index + lunghezza;
    }
    if (parola == temp.join("")) {
      this.risultati[parola] = {
        start: [currentInd],
        end: [index],
      };
      return true;
    } else return false;
  }

  private checkTop(
    currentInd: number,
    lunghezza: number,
    parola: string,
    lunghezzaTotale: number
  ): boolean {
    let temp: string[] = [];
    let index: number = currentInd;
    if (currentInd - lunghezza * (parola.length - 1) <= 0) return false;
    temp.push(stringona.charAt(index));
    for (let i = 1; i < parola.length; i++) {
      temp.push(stringona.charAt(index - lunghezza));
      index = index - lunghezza;
    }
    if (parola == temp.join("")) {
      this.risultati[parola] = {
        start: [currentInd],
        end: [index],
      };
      return true;
    } else return false;
  }
}
