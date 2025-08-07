export function valid(digitString: string): boolean {
  const numero = digitString.replace(/\s/g, "");
  if (digitString.trim().length <= 1) return false;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChars.test(digitString)) {
    return false;
  } else {
    const res = numero
      .split("")
      .reverse()
      .map((x: string, ind: number) => {
        if (ind % 2 != 0) {
          if (Number(x) * 2 > 9) {
            return Number(x) * 2 - 9;
          } else {
            return Number(x) * 2;
          }
        } else {
          return Number(x);
        }
      })
      .reduce((a, b) => a + b);

    if (res % 10 == 0) return true;
    else return false;
  }
}
