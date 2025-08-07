export const largestProduct = (series: string, spawn: number) => {
  if (spawn < 0) throw new Error('Span must not be negative');
  if (spawn > series.length) throw new Error("Span must be smaller than string length");
  if (!/^\d*$/.test(series)) throw new Error('Digits input must only contain digits')

  const finale: number[] = [];
  for (let i = 0; i <= series.length - spawn; i++) {
    const substring = series.slice(i, i + spawn);
    const product = substring
      .split("")
      .map((digit) => parseInt(digit, 10))
      .reduce((a, b) => a * b, 1);
    finale.push(product);
  }
  return finale.length ? Math.max(...finale) : 1;
};
