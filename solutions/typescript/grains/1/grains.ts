
export const square = (valore: number) => {
  if (valore <= 0 || valore > 64) throw "";
  return BigInt(2 ** (valore - 1));
};

export const total = () => {
  return 2n ** 64n - 1n;
};
