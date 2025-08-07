type Position = readonly [number, number];

type Positions = {
  white: Position;
  black: Position;
};
export class QueenAttack {
  public readonly black: Position;
  public readonly white: Position;

  constructor(dati: Partial<Positions> = {}) {
    this.black = dati.black || [0, 3];
    this.white = dati.white || [7, 3];
    if (
      this.black[0] < 0 ||
      this.black[1] < 0 ||
      this.white[0] < 0 ||
      this.white[1] < 0
    )
      throw "Queen must be placed on the board";
    if (
      this.black[0] >= 8 ||
      this.black[1] >= 8 ||
      this.white[0] >= 8 ||
      this.white[1] >= 8
    )
      throw "Queen must be placed on the board";

    if (this.black[0] == this.white[0] && this.white[1] == this.black[1])
      throw "Queens cannot share the same space";
  }

  toString(): string {
    const board: string[] = [];
    for (let row = 0; row < 8; row++) {
      const line: string[] = [];
      for (let col = 0; col < 8; col++) {
        if (this.white[0] === row && this.white[1] === col) {
          line.push(" W");
        } else if (this.black[0] === row && this.black[1] === col) {
          line.push(" B");
        } else {
          line.push(" _");
        }
      }
      // Remove leading space for the first cell
      board.push(line.join("").trim());
    }
    return board.join("\n");
  }

  get canAttack() {
    if (this.black[0] == this.white[0] || this.black[1] == this.white[1])
      return true;
    else {
      if (
        this.checkPosition() ||
        this.checkPositionTopRight() ||
        this.checkPositionBottom() ||
        this.checkPositionBottom2()
      ) {
        return true;
      } else return false;
    }
  }

  checkPosition() {
    let x = this.black[0];
    let y = this.black[1];
    while (true) {
      if (x - 1 == this.white[0] && y - 1 == this.white[1]) return true;
      else if (x - 1 >= 0 && y - 1 >= 0) {
        x = x - 1;
        y = y - 1;
      } else break;
    }
    return false;
  }

  checkPositionTopRight() {
    let x = this.black[0];
    let y = this.black[1];
    while (true) {
      if (x + 1 == this.white[0] && y - 1 == this.white[1]) return true;
      else if (x + 1 < 8 && y - 1 >= 0) {
        x = x + 1;
        y = y - 1;
      } else break;
    }
    return false;
  }

  checkPositionBottom() {
    let x = this.black[0];
    let y = this.black[1];
    while (true) {
      if (x - 1 == this.white[0] && y + 1 == this.white[1]) return true;
      else if (x - 1 >= 0 && y + 1 < 8) {
        x = x - 1;
        y = y + 1;
      } else break;
    }
    return false;
  }

  checkPositionBottom2() {
    let x = this.black[0];
    let y = this.black[1];
    while (true) {
      if (x + 1 == this.white[0] && y + 1 == this.white[1]) return true;
      else if (x + 1 < 8 && y + 1 < 8) {
        x = x + 1;
        y = y + 1;
      } else break;
    }
    return false;
  }
}


