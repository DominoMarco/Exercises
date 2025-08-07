interface Input {
  maxFactor: number;
  minFactor?: number;
}

function isPalindromo(numero: number): boolean {
  const valore = numero.toString();
  const valoreGirato = valore.split("").reverse().join("");
  return valore === valoreGirato;
}

 export function generate(params: Input): any {
  const min = params.minFactor ?? 0;
  const max = params.maxFactor;

  if (max < min) throw new Error("min must be <= max");

  const palindromes: Map<number, Set<string>> = new Map();
  let findSmallest: number = max*max;
  let findBiggest: number = min;
  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      const product = i * j;
      if (findSmallest < product)break;
      if (isPalindromo(product)) {
        const key = product;
        if (!palindromes.has(key)) {
          palindromes.set(key, new Set());
        }
        palindromes.get(key)!.add([i, j].toString());
        findSmallest = product;
      }
    }
  }

  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      const product = i * j;
      if (findBiggest > product) break;
      if (isPalindromo(product)) {
        const key = product;
        if (!palindromes.has(key)) {
          palindromes.set(key, new Set());
        }
        palindromes.get(key)!.add([i, j].toString());
        findBiggest = product;
      }
    }
  }

  const allPalindromes = Array.from(palindromes.keys()).sort((a, b) => a - b);
  if (allPalindromes.length === 0) {
    return {
      smallest: { value: null, factors: [] },
      largest: { value: null, factors: [] },
    };
  }

  const smallestValue = allPalindromes[0];
  let largestValue = allPalindromes[allPalindromes.length - 1];

  const formatFactors = (s: Set<string>) =>
    Array.from(s).map((pair) => pair.split(",").map((n) => parseInt(n)));

  const smallest = {
    value: findSmallest,
    factors: formatFactors(palindromes.get(smallestValue)!),
  };

  const largest = {
    value: findBiggest,
    factors: formatFactors(palindromes.get(largestValue)!),
  };

  if (min == max) return { smallest, largest: null };
  return { smallest, largest };
}
const palindromes = generate({ maxFactor: 99, minFactor: 10 })
const smallest = palindromes.smallest


 