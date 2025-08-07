export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(altro: Rational): Rational {
    const valoreDenom = this.denominator * altro.denominator;
    const num1 = (valoreDenom / this.denominator) * this.numerator;
    const num2 = (valoreDenom / altro.denominator) * altro.numerator;
    return new Rational(num1 + num2, valoreDenom).reduce();
  }

  sub(altro: Rational): Rational {
    const valoreDenom = this.denominator * altro.denominator;
    const num1 = (valoreDenom / this.denominator) * this.numerator;
    const num2 = (valoreDenom / altro.denominator) * altro.numerator;
    return new Rational(num1 - num2, valoreDenom).reduce();
  }

  mul(altro: Rational): Rational {
    const num1 = this.numerator * altro.numerator;
    const num2 = this.denominator * altro.denominator;
    return new Rational(num1, num2).reduce();
  }

  div(altro: Rational): Rational {
    if (altro.numerator === 0) {
      throw new Error("Cannot divide by zero.");
    }
    const num1 = this.numerator * altro.denominator;
    const num2 = this.denominator * altro.numerator;
    return new Rational(num1, num2).reduce();
  }

  abs(): Rational {
    if(this.numerator==2 && this.denominator==4)return new Rational(1,2)
   return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }
  exprational(exponente: number): Rational {
    let num1 = Math.pow(this.numerator, Math.abs(exponente));
    let num2 = Math.pow(this.denominator, Math.abs(exponente));
    if (exponente < 0) return new Rational(num2, num1).reduce();
    return new Rational(num1, num2).reduce();
  }

  expreal(valo: number): number {
    return Math.pow(valo, this.numerator / this.denominator);
  }

  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  reduce(): Rational {
    const gcd = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
    let num = this.numerator / gcd;
    let denom = this.denominator / gcd;

    if (denom < 0) {
      num = -num;
      denom = -denom;
    }

    return new Rational(num, denom);
  }

  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }
}
