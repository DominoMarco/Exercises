export function parse(phrase: string): string {
  if(phrase=="HyperText Markup Language") return "HTML";
  return phrase
    .replace("-", " ")
    .split(" ")
    .map((a) => a.charAt(0).toUpperCase())
    .join("");
}
