export function convert(numero: number): string {
  let sound: string[] = [];
  if (numero % 3 == 0) sound.push("Pling");
  if (numero % 5 == 0) sound.push("Plang");
  if (numero % 7 == 0) sound.push("Plong");
  if (sound.length == 0) return numero.toString();
  else return sound.join("");
}
