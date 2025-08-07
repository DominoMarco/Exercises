export function sum(items: number[], level: number) {
  let bag: Set<number> = new Set();
  if (items.length == 0) return 0;
  for (const item of items) {
    let itemLevel = item;
    let i = 2;
    if (itemLevel < level) bag.add(itemLevel);
    while (itemLevel * i < level) {
      bag.add(itemLevel * i);
      i++;
      if (itemLevel == 0) {
        break;
      }
    }
  }
  let sum = 0;
  for (const i of bag) {
    sum = sum + i;
  }
  return sum;
}
