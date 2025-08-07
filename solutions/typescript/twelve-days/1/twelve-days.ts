export function recite(inizio: number, fine: number) {
  const mappa: Map<number, string> = new Map([
    [1, "Partridge"],
    [2, "Turtle Doves"],
    [3, "French Hens"],
    [4, "Calling Birds"],
    [5, "Gold Rings"],
    [6, "Geese-a-Laying"],
    [7, "Swans-a-Swimming"],
    [8, "Maids-a-Milking"],
    [9, "Ladies Dancing"],
    [10, "Lords-a-Leaping"],
    [11, "Pipers Piping"],
    [12, "Drummers Drumming"],
  ]);

  const mappaGiorni: string[] = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
  ];

  const numeriParole: string[] = [
    "a",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];
  let i = inizio;
  let stringona: string[] = [];

  if (inizio == 1 && fine == 1)
    return "On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n";

  for (let i = inizio; i <= fine; i++) {
    let riga = `On the ${mappaGiorni[i - 1]} day of Christmas my true love gave to me: ${numeriParole[i - 1]} ${mappa.get(i)}`;
    for (let j = i - 1; j >= 1; j--) {
      if (j == 1) riga = riga + `, and a ${mappa.get(j)}`;
      else riga = riga + `, ${numeriParole[j - 1]} ${mappa.get(j)}`;
    }
    riga = riga + " in a Pear Tree.\n";
    stringona.push(riga);
  }
  return stringona.join("");
}


