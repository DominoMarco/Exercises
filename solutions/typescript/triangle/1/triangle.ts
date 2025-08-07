export class Triangle {
  a: number;
  b: number;
  c: number;
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isEquilateral() {
    if (!isOk(this.a, this.b, this.c)) return false;
    if (this.a == this.b && this.b == this.c) return true;
    else return false;
  }

  get isIsosceles() {
    if (!isOk(this.a, this.b, this.c)) return false;
    if (this.a == this.b || this.b == this.c || this.a == this.c) return true;
    else return false;
  }

  get isScalene() {
    if (!isOk(this.a, this.b, this.c)) return false;
    if (this.a != this.b && this.b != this.c && this.a != this.c) return true;
    else return false;
  }
}
function isOk(a: number, b: number, c: number) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b >= c && a + c >= b && c + b >= a) return true;
    else false;
  } else false;
}
