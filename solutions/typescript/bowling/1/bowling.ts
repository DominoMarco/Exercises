export class Bowling {
  private rolls: number[] = [];

  public roll(pins: number): void {
    if (this.rolls.length === 20 && this.rolls.every((x) => x === 0))
      throw new Error("Cannot roll after game is over");
    if (pins < 0) throw new Error("Negative roll is invalid");
    if (pins > 10) throw new Error("Pin count exceeds pins on the lane");
    if (this.rolls.length >= 21)
      throw new Error("Cannot roll after game is over");
    const ultimo = this.rolls[this.rolls.length - 1];
    this.rolls.push(pins);

    if (
      this.rolls.length === 21 &&
      this.rolls.every(
        (val, idx) =>
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10][
            idx
          ] === val
      )
    ) {
    } else {
      const totalRolls =
        this.rolls.length + this.rolls.filter((x) => x == 10).length;
      if (totalRolls % 2 == 0) {
        if (ultimo + pins > 10 && ultimo != 10 && pins != 10) {
          throw new Error("Pin count exceeds pins on the lane");
        }
      }
      if (this.rolls.length >= 21 && ultimo != 10 && pins == 10) {
        throw new Error("Pin count exceeds pins on the lane");
      }
    }
  }

  public score(): number {
    let score = 0;
    let rollIndex = 0;
    let frames = 0;

    while (frames < 10) {
      if (rollIndex >= this.rolls.length) {
        throw new Error("Score cannot be taken until the end of the game");
      }

      // Strike
      if (this.rolls[rollIndex] === 10) {
        if (rollIndex + 2 >= this.rolls.length) {
          throw new Error("Score cannot be taken until the end of the game");
        }
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex += 1;
      }
      // Spare
      else if (
        rollIndex + 1 < this.rolls.length &&
        this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10
      ) {
        if (rollIndex + 2 >= this.rolls.length) {
          throw new Error("Score cannot be taken until the end of the game");
        }
        score += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      }
      // Open frame
      else if (rollIndex + 1 < this.rolls.length) {
        score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      } else {
        throw new Error("Score cannot be taken until the end of the game");
      }
      frames++;
    }

    return score;
  }
}
