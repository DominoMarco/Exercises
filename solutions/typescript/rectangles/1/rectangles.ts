type Coordinations = { My: number; Mx: number };

let originX = 0;
let originY = 0;

let Bx = 0;
let By = 0;

export function count(table: string[]) {
  let contatore = 0;
  By = table.length;
  Bx = table[0]?.length;

  for (let y = 0; y < By; y++) {
    for (let x = 0; x < Bx; x++) {
      if (table[y][x] === "+") {
        originX = x;
        originY = y;
        const results: Coordinations[] = lookRight(y, x, table);
        contatore += results.length;
      }
    }
  }
  return contatore;
}

function lookRight(y: number, startX: number, table: string[]) {
  let results: Coordinations[] = [];

  for (let x = startX + 1; x < Bx; x++) {
    if (table[y][x] === " " || table[y][x] === "|") break;
    if (table[y][x] === "+") {
      const down = lookDown(y, x, table);
      if (down.length) results.push(...down);
    }
  }
  return results;
}

function lookDown(startY: number, x: number, table: string[]) {
  let results: Coordinations[] = [];

  for (let y = startY + 1; y < By; y++) {
    if (table[y][x] === " " || table[y][x] === "-") break;
    if (table[y][x] === "+") {
      const left = lookLeft(y, x, table);
      if (left.length) results.push(...left);
    }
  }
  return results;
}

function lookLeft(y: number, startX: number, table: string[]) {
  let results: Coordinations[] = [];

  for (let x = startX - 1; x >= 0; x--) {
    if (table[y][x] === " " || table[y][x] === "|") break;
    if (table[y][x] === "+") {
      const up = lookTop(y, x, table);
      if (up.length) results.push(...up);
    }
  }
  return results;
}

function lookTop(startY: number, x: number, table: string[]) {
  let results: Coordinations[] = [];

  for (let y = startY - 1; y >= 0; y--) {
    if (table[y][x] === " " || table[y][x] === "-") break;
    if (table[y][x] === "+" && y === originY && x === originX) {
      results.push({ My: startY, Mx: x });
    }
  }
  return results;
}
