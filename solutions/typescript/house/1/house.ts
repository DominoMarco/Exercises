type soggetti = { sogg: string; azione: string };
const lista: soggetti[] = [
  { sogg: "malt", azione: "lay in the house that Jack built." },
  { sogg: "rat", azione: "ate" },
  { sogg: "cat", azione: "killed" },
  { sogg: "dog", azione: "worried" },
  { sogg: "cow with the crumpled horn", azione: "tossed" },
  { sogg: "maiden all forlorn", azione: "milked" },
  { sogg: "man all tattered and torn", azione: "kissed" },
  { sogg: "priest all shaven and shorn", azione: "married" },
  { sogg: "rooster that crowed in the morn", azione: "woke" },
  { sogg: "farmer sowing his corn", azione: "kept" },
  { sogg: "horse and the hound and the horn", azione: "belonged to" },
];

export function verse(inizio: number): string[] {
  if (inizio == 1) return ["This is the house that Jack built."];
  let i = inizio;
  let stringona: string[] = [];

  stringona.push(`This is the ${lista[i - 2].sogg}`);
  let riga2 = "";
  for (let o = i - 2; o >= 0; o--) {
    if (o == 0) riga2 = `that ${lista[o].azione}`;
    else riga2 = `that ${lista[o].azione} the ${lista[o - 1].sogg}`;
    stringona.push(riga2);
  }
  return stringona;
}

export function verses(inizio: number, fine: number): string[] {
  let i = inizio;
  let m: string[] = [];
  while (i <= fine) {
    m = m.concat(verse(i));
    if (i != fine) m.push("");

    i = i + 1;
  }
  return m;
}
