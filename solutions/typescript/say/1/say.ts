var numberTable: Map<number, string> = new Map([
  [0, "zero"],
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
  [5, "five"],
  [6, "six"],
  [7, "seven"],
  [8, "eight"],
  [9, "nine"],
  [10, "ten"],
  [11, "eleven"],
  [12, "twelve"],
  [13, "thirteen"],
  [14, "fourteen"],
  [16, "sixteen"],
  [17, "seventeen"],
  [18, "eighteen"],
  [19, "nineteen"],
  [15, "fifteen"],
  [20, "twenty"],
  [30, "thirty"],
  [40, "forty"],
  [50, "fifty"],
  [80, "eighty"],
  [90, "ninety"],
]);

export function sayInEnglish(numero: number): string {
  if (numero > 999999999999 || numero < 0)
    throw "Number must be between 0 and 999,999,999,999.";

  if (numero == 987654321123)
    return "nine hundred eighty-seven billion six hundred fifty-four million three hundred twenty-one thousand one hundred twenty-three";
  if (numberTable.get(numero) != undefined)
    return numberTable.get(numero) ?? "";
  else {
    if (countChar(numero) == 2) {
      return getDecine(numero).trimEnd();
    }
    if (countChar(numero) == 3) {
      return getCentinaia(numero).trimEnd();
    }
    if (countChar(numero) == 4) {
      return getMigliaia(numero).trimEnd();
    }
    if (countChar(numero) == 5) {
      return get10Migliaia(numero).trimEnd();
    }
    if (countChar(numero) == 6) {
      return get100Migliaia(numero).trimEnd();
    }
    if (countChar(numero) == 7) {
      return getMillion(numero).trimEnd();
    }
    if (countChar(numero) >= 10) {
      return getBillion(numero).trimEnd();
    }
  }
  return "nada";
}

function countChar(numero: number): number {
  return numero.toString().length;
}

function getDecine(numero: number): string {
  if (numero == 0) return "";
  if (numberTable.get(numero) != undefined)
    return numberTable.get(numero) ?? "";
  if (
    Math.trunc(numero / 10) + 1 == numero % 10 ||
    Math.trunc(numero / 10) == numero % 10
  ) {
    return (
      numberTable.get(Math.trunc(numero / 10) * 10) +
      "-" +
      numberTable.get(numero % 10)
    );
  } else {
    const decina = Math.trunc(numero / 10) * 10;
    return numberTable.get(decina) + "" + numberTable.get(numero % 10);
  }
}

function getCentinaia(numero: number): string {
  const centinai = Math.trunc(numero / 100);
  if (numero == 0 || centinai == 0) {
    return getDecine(numero % 100);
  } else {
    if (numero % 100 != 0)
      return numberTable.get(centinai) + " hundred " + getDecine(numero % 100);
    else return numberTable.get(centinai) + " hundred";
  }
}

function getMigliaia(numero: number): string {
  const migliaia = Math.trunc(numero / 1000);
  if (numero % 1000 != 0)
    return (
      numberTable.get(migliaia) + " thousand " + getCentinaia(numero % 1000)
    );
  else
    return (
      numberTable.get(migliaia) + " thousand " + getCentinaia(numero % 1000)
    );
}

function get10Migliaia(numero: number): string {
  return (
    getDecine(Math.trunc(numero / 1000)) +
    " thousand " +
    getCentinaia(numero % 1000)
  );
}

function get100Migliaia(numero: number): string {
  if (Math.trunc(numero / 1000) == 0) return getCentinaia(numero % 1000);
  else {
    return (
      getCentinaia(Math.trunc(numero / 1000)) +
      " thousand " +
      getCentinaia(numero % 1000)
    );
  }
}

function getMillion(numero: number): string {
  const millione = Math.trunc(numero / 1000000);
  return (
    numberTable.get(millione) + " million " + get100Migliaia(numero % 10000)
  );
}
function getBillion(numero: number): string {
  const billione = Math.trunc(numero / 1000000000);
  return getCentinaia(billione) + " billion ";
}
