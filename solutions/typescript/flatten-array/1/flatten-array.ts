export function flatten(expex: any[]): number[] {
  return expex.flat(Infinity).filter((x) => x != undefined);
}
