export function makeDiamond(character: string): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const index = alphabet.indexOf(character);
  if (index === -1) {
    throw new Error("Invalid character");
  }

  const lines: string[] = [];

  for (let i = 0; i <= index; i++) {
    const letter = alphabet[i];
    const outsideSpaces = " ".repeat(index - i);
    if (i === 0) {
      // Riga con solo la lettera A
      lines.push(outsideSpaces + letter + outsideSpaces);
    } else {
      const insideSpaces = " ".repeat(i * 2 - 1);
      lines.push(outsideSpaces + letter + insideSpaces + letter + outsideSpaces);
    }
  }

  // Parte inferiore = parte superiore senza l'ultima riga, invertita
  const bottom = lines.slice(0, -1).reverse();

  return [...lines, ...bottom].join("\n") + "\n";
}