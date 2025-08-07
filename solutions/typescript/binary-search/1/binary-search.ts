export function find(haystack: number[], needle: number): number {
  let myArray = haystack;
  if (myArray.length == 1) return 0;
  while (myArray.length >= 2) {
    const point: number = myArray[Math.trunc(myArray.length / 2)];
    if (point == needle) return haystack.indexOf(point);
    if (point > needle) myArray = myArray.slice(0, myArray.indexOf(point));
    if (point < needle) myArray = myArray.slice(myArray.indexOf(point));
    if (myArray.length == 1 && needle == myArray[0]) return 0;
  }
  throw new Error("Value not in array");
}
