type Punteggio = { punteggio: number; lettere: string[] };
const punteggi: Punteggio[] = [
  { punteggio: 1, lettere: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"] },
  { punteggio: 2, lettere: ["D", "G"] },
  { punteggio: 3, lettere: ["B", "C", "M", "P"] },
  { punteggio: 4, lettere: ["F", "H", "V", "W", "Y"] },
  { punteggio: 5, lettere: ["K"] },
  { punteggio: 8, lettere: ["J", "X"] },
  { punteggio: 10, lettere: ["Q", "Z"] },
];

export function score(parola: string): number {
  if (parola == undefined) return 0;
  let finalScore = 0;
  for (const l of parola) {
    finalScore =
      finalScore +
      punteggi
        .filter((x) => x.lettere.includes(l.toUpperCase()))
        .map((x) => x.punteggio)[0];
  }
  return finalScore;
}
