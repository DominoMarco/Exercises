export function clean(numero: string): string {
  if (/[a-zA-Z]/.test(numero)) {
    throw new Error("Letters not permitted");
  }

  if (/[^0-9\s\(\)\-\.]/.test(numero.replace('+1', ''))) {
    throw new Error("Punctuations not permitted");
  }

  let digits = numero.replace(/\D/g, '');

  if (digits.length < 10) {
    throw new Error("Incorrect number of digits");
  }

  if (digits.length > 11) {
    throw new Error("More than 11 digits");
  }

  if (digits.length === 11) {
    if (digits[0] !== '1') {
      throw new Error("11 digits must start with 1");
    }
    digits = digits.slice(1);
  }

  const areaCode = digits.slice(0, 1);
  const exchangeCode = digits.slice(3, 4);

  if (areaCode === '0') {
    throw new Error("Area code cannot start with zero");
  }

  if (areaCode === '1') {
    throw new Error("Area code cannot start with one");
  }

  if (exchangeCode === '0') {
    throw new Error("Exchange code cannot start with zero");
  }

  if (exchangeCode === '1') {
    throw new Error("Exchange code cannot start with one");
  }

  return digits;
}
