export function translate(rna: string): string[] {
  const codons: string[] = rna.match(/.{1,3}/g) || [];
  const proteins: string[] = [];

  const codonMap = new Map<string, string>([
    ["AUG", "Methionine"],
    ["UUU", "Phenylalanine"],
    ["UUC", "Phenylalanine"],
    ["UUA", "Leucine"],
    ["UUG", "Leucine"],
    ["UCU", "Serine"],
    ["UCC", "Serine"],
    ["UCA", "Serine"],
    ["UCG", "Serine"],
    ["UAU", "Tyrosine"],
    ["UAC", "Tyrosine"],
    ["UGU", "Cysteine"],
    ["UGC", "Cysteine"],
    ["UGG", "Tryptophan"],
    ["UAA", "STOP"],
    ["UAG", "STOP"],
    ["UGA", "STOP"],
  ]);

  for (const codon of codons) {
    const protein = codonMap.get(codon);
    if (!protein) {
      throw new Error("Invalid codon");
    }
    if (protein === "STOP") {
      break;
    }
    proteins.push(protein);
  }

  return proteins;
}
