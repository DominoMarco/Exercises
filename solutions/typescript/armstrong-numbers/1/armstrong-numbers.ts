export function isArmstrongNumber(value: number | bigint): boolean {
  const str = value.toString()
  const digits = str.split('').map(d => BigInt(d))
  const numDigits = BigInt(str.length)
  let sum = 0n
  for (const digit of digits) {
    sum += digit ** numDigits
  }
  return sum === BigInt(value)
}
