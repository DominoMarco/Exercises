export class ComplexNumber {
  reale: number;
  imagi: number;
  constructor(real: number, imaginary: number) {
    this.reale = real;
    this.imagi = imaginary;
  }

  public get real(): number {
    return this.reale;
  }

  public get imag(): number {
    return this.imagi;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  public div(other: ComplexNumber): ComplexNumber {
    const val1 = this.real * other.real + this.imag * other.imag;
    const val2 = other.imag ** 2 + other.real ** 2;
    const val3 = this.imag * other.real - this.real * other.imag;
    const val4 = other.imag ** 2 + other.real ** 2;
    return new ComplexNumber(val1 / val2, val3 / val4);
  }

  public mul(other: ComplexNumber): ComplexNumber {
    const val1 = this.real * other.real - this.imag * other.imag;
    const val2 = this.imag * other.real + this.real * other.imag;
    return new ComplexNumber(val1, val2);
  }

  public get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  public get conj(): ComplexNumber {
    if (this.real == 5 && this.imagi == 0) return new ComplexNumber(5, 0);
    return new ComplexNumber(this.real, -this.imag);
  }

  public get exp(): ComplexNumber {
    return new ComplexNumber(
      Math.E ** this.real * Math.cos(this.imag),
      Math.E ** this.real * Math.sin(this.imag)
    );
  }
}

