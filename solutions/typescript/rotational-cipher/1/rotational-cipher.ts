export function rotate(parola: string, slot: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const jump = slot % 26;
  let result = "";

  for (const char of parola) {
    const isUpperCase = char >= 'A' && char <= 'Z';
    const baseChar = char.toLowerCase();
    
    if (alphabet.includes(baseChar)) {
      const index = alphabet.indexOf(baseChar);
      const newIndex = (index + jump) % 26;
      const newChar = alphabet[newIndex];
      result += isUpperCase ? newChar.toUpperCase() : newChar;
    } else {
      result += char;
    }
  }

  return result;
}
