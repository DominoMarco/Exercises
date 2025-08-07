export function steps(count: number): number {
  let counti: number = count;
  if(count<=0) throw 'Only positive integers are allowed';
 if(Math.trunc(counti)!=counti)throw 'Only positive integers are allowed';
  let i: number = 0;
  while (counti != 1) {
    if (counti % 2 == 0) counti = counti / 2;
    else {
      counti = counti * 3 + 1;
    }
    i++;
  }
  return i;
}
