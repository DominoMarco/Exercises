export function compute(left: string, right: string): number {
  const left1 = left.split("");
  const right1 = right.split("");
  if(left1.length!=right1.length) throw 'DNA strands must be of equal length.';
  let cont: number = 0;
  for (let i = 0; i < left1.length; i++) {
    if (left1[i] != right1[i]) cont++;
  }
  return cont;
}
