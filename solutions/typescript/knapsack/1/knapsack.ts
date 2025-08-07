type Item = {
  weight: number;
  value: number;
};

export function maximumValue({
  maximumWeight,
  items,
}: {
  maximumWeight: number;
  items: Item[];
}): number {
  let n = items.length;
  const valori = items.map((x) => x.value);
  const wt = items.map((x) => x.weight);
  return checkValues(maximumWeight, valori, wt, n);
}

function checkValues(
  W: number,
  val: number[],
  wt: number[],
  n: number
): number {
  if (n === 0 || W === 0) return 0;

  let pick = 0;
  if (wt[n - 1] <= W)
    pick = val[n - 1] + checkValues(W - wt[n - 1], val, wt, n - 1);

  let notPick = checkValues(W, val, wt, n - 1);

  return Math.max(pick, notPick);
}
