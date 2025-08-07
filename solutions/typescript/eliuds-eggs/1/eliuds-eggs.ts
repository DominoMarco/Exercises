//
// This is only a SKELETON file for the 'Pop Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue: number): number => {
  let temp:number=displayValue;
  let uova :number=0;
  while(temp!=0){
    if(temp%2 !=0) uova++;
    temp=Math.trunc(temp/2);
  }
  return uova;
}
