export function isIsogram(isog: string): boolean {
  const pin = isog.toLowerCase().replace("-", "").replace(" ", "").split("").sort();
  const settt: Set<string> = new Set(pin);
  if (pin.length == settt.size) return true;
  return false;
}
