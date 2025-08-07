export function classify(numero: number): string {
  let i: number = 0;
  let somma: number = 0;
  if (numero <= 0) {
    throw "Classification is only possible for natural numbers.";
    return "";
  }
  while (i != numero) {
    if (numero % i == 0) somma = somma + i;
    i++;
  }
  if (somma == numero) return "perfect";
  if (somma > numero) return "abundant";
  if (somma < numero) return "deficient";
  return "";
}
