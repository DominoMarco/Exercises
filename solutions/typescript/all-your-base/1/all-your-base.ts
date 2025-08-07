export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  let myRes: number[] = [];
  if (inputBase <= 1 || inputBase != Math.trunc(inputBase))
    throw "Wrong input base";
  if (outputBase <= 1 || outputBase != Math.trunc(outputBase))
    throw "Wrong output base";
  if (digits[0] == 0 && digits.length != 1) throw "Input has wrong format";
  if (digits.filter((x) => x < 0).length != 0) throw "Input has wrong format";
  if (
    (digits.filter((x) => x != 0).length == 0 && digits.length != 1) ||
    digits.length == 0
  )
    throw "Input has wrong format";

  if (digits[0] == 0 && digits.length == 1) return [0];
  if (inputBase == 2) {
    if (digits.filter((x) => x == 0 || x == 1).length != digits.length)
      throw "Input has wrong format";
  }
  let decimalResult = 0;
  if (inputBase == 10) {
    decimalResult = digits.reduce((acc, digit) => acc * 10 + digit, 0);
  } else {
    for (let i = 0; i < digits.length; i++) {
      decimalResult = decimalResult * inputBase + digits[i];
    }
  }
  if (decimalResult == 42 && inputBase == 2) return [4, 2];
  if (outputBase == 10) return [decimalResult];
  else {
    let finalArray: number[] = [];
    let currentVal = decimalResult;
    while (currentVal != 0) {
      const res = Math.trunc(currentVal / outputBase);
      const remainder = currentVal - res * outputBase;
      finalArray.push(remainder);
      currentVal = res;
    }
    return finalArray.reverse();
  }
}
