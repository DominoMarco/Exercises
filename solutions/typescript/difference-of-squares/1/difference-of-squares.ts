export class Squares {
  myCount: number;
  constructor(count: number) {
    this.myCount = count;
  }

  get sumOfSquares(): number {
    let temp: number = 0;
    for (let i = 1; i <= this.myCount; i++) {
      temp = i * i + temp;
    }
    return temp;
  }

  get squareOfSum(): number {
    let temp: number = 0;
    for (let i = 1; i <= this.myCount; i++) {
      temp = temp + i;
    }
    return temp * temp;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
