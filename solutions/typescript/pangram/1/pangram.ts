export function isPangram(scritta: string): boolean {
  const alfabeth: string = "abcdefghijklmnopqrstuvwxyz";
  const myText = scritta.split("").map((a) => a.toLowerCase());
  for (let lett of alfabeth) {
    if (!myText.find((a) => a == lett)) return false;
  }
  return true;
}
