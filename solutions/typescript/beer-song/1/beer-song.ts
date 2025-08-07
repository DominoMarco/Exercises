export function verse(index: number): string {
   if (index == 0)
    return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
  if (index != 1) {
    return `${index} bottles of beer on the wall, ${index} bottles of beer.\nTake one down and pass it around, ${index - 1} bottles of beer on the wall.\n`;
  } else {
    return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
  }
}


export function sing(
  initialBottlesCount?: number,
  takeDownCount?: number
): string {
  let inizio = initialBottlesCount || 0;
  let fine = takeDownCount || 0;
  let testo: string[] = [];
  if (inizio == 0 && fine == 0) {
    inizio = 99;
    fine = 0;
  }
  while (inizio >= fine) {
    if (inizio == 1) {
      testo.push(
        `${inizio} bottle of beer on the wall, ${inizio} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n`
      );
    }
    if (inizio == 0) {
      testo.push(
        `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
      );
      break;
    } else if (inizio != 1) {
      if (inizio == 2) {
        testo.push(
          `${inizio} bottles of beer on the wall, ${inizio} bottles of beer.\nTake one down and pass it around, ${inizio - 1} bottle of beer on the wall.\n\n`
        );
      } else {
        testo.push(
          `${inizio} bottles of beer on the wall, ${inizio} bottles of beer.\nTake one down and pass it around, ${inizio - 1} bottles of beer on the wall.\n\n`
        );
      }
    }

    inizio = inizio - 1;
  }
  return testo.join("").trimEnd()+"\n";
}

