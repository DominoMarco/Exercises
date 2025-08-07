export function nth(cerca: number): number {
  if (cerca === 0) throw new Error("Prime is not possible");

  const primes: number[] = [2];
  let numero = 3;

  while (primes.length < cerca) {
    let isPrime = true;
    const sqrt = Math.sqrt(numero);
    for (const p of primes) {
      if (p > sqrt) break;
      if (numero % p === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(numero);
    }
    numero += 2; // salta i numeri pari
  }

  return primes[cerca - 1];
}