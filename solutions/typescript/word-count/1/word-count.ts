export function count(testo: string): Map<string, number> {
  const pulito = testo
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, " ") // Keep apostrophes
    .replace(/\s+/g, " ")          // Normalize all whitespace
    .trim();

  const arr = pulito.split(" ").map((x) => {
    let word = x;
    if (word.startsWith("'")) word = word.slice(1);
    if (word.endsWith("'")) word = word.slice(0, -1);
    return word;
  });

  const mappa = new Map<string, number>();

  for (const word of arr) {
    if (!word) continue;
    // DO NOT remove or change apostrophes
    const current = mappa.get(word) ?? 0;
    mappa.set(word, current + 1);
  }

  return mappa;
}
