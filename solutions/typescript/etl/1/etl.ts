export function transform(old: any): any {
  let container: any = {};
  for (const score in old) {
    for (const letter of old[score]) {
      container[letter.toLowerCase()] = Number(score);
    }
  }
  return container;
}