export function score(x: number, y: number): number {
  const xx = x * x;
  const yy = y * y;
  if (Math.sqrt(xx + yy) > 10) return 0;
  if (Math.sqrt(xx + yy) >= 0 && Math.sqrt(xx + yy) <= 1) return 10;
  if (Math.sqrt(xx + yy) > 1 && Math.sqrt(xx + yy) <= 5) return 5;
  if (Math.sqrt(xx + yy) > 5 && Math.sqrt(xx + yy) <= 10) return 1;
  return 1;
}
