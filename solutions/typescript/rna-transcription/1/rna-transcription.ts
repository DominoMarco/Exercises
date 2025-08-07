export function toRna(dna: string): string {
  const mappa: Map<string, string> = new Map([
    ["G", "C"],
    ["C", "G"],
    ["T", "A"],
    ["A", "U"],
  ]);
  var myRna: string = "";
  for (let i = 0; i < dna.length; i++) {
    let valore: string | undefined = mappa.get(dna[i]);

    if (valore == undefined) throw "Invalid input DNA.";
    else {
      myRna = myRna + valore;
    }
  }
  return myRna;
}