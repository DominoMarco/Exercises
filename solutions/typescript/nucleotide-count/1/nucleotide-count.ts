export function nucleotideCounts(dna: string): Record<string, number> {
  const lettere: string[] = ["A", "C", "G", "T"];
  let mappa: Map<string, number> = new Map([
    ["A", 0],
    ["C", 0],
    ["G", 0],
    ["T", 0],
  ]);
  for (const l of dna) {
    if (lettere.find((x) => x == l) == undefined)
      throw "Invalid nucleotide in strand";
    else {
      const valore = mappa.get(l) ?? 0;
      mappa.set(l, valore + 1);
    }
  }
  let ob: Record<string, number> = {};
  mappa.forEach((v, k) => (ob[k] = v));
  return ob;
}
