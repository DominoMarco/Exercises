export function solve(puzzle: string): Record<string, number> | undefined {
  const [lhs, rhs] = puzzle.split("==").map((s) => s.trim());
  const words = lhs.split("+").map((w) => w.trim());
  const allWords = [...words, rhs];

  const letters = Array.from(new Set(allWords.join("")));
  if (letters.length > 10) {
    throw new Error("Too many letters (max is 10)");
  }

  const leadingLetters = new Set(allWords.map((w) => w[0]));


  const wordToIndices = (word: string) =>
    word.split("").map((c) => letters.indexOf(c));
  const compiledWords = words.map(wordToIndices);
  const compiledRhs = wordToIndices(rhs);

  const digits = "0123456789".split("");

  return findValidMapping(letters.length, digits, (perm) => {
    if ([...leadingLetters].some((l) => perm[letters.indexOf(l)] === "0")) {
      return false;
    }

    const valueOf = (compiled: number[]) =>
      parseInt(compiled.map((i) => perm[i]).join(""));

    const leftSum = compiledWords.reduce((sum, word) => sum + valueOf(word), 0);
    const rightValue = valueOf(compiledRhs);

    return leftSum === rightValue
      ? Object.fromEntries(letters.map((l, i) => [l, Number(perm[i])]))
      : false;
  });
}


function findValidMapping(
  n: number,
  digits: string[],
  check: (perm: string[]) => Record<string, number> | false
): Record<string, number> | undefined {
  const used: boolean[] = Array(digits.length).fill(false);
  const perm: string[] = [];

  function backtrack(pos: number): Record<string, number> | undefined {
    if (pos === n) {
      const result = check(perm);
      if (result) return result;
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      perm.push(digits[i]);
      const res = backtrack(pos + 1);
      if (res) return res;
      perm.pop();
      used[i] = false;
    }
  }

  return backtrack(0);
}