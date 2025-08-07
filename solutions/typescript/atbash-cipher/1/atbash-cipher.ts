const Plain: string = "abcdefghijklmnopqrstuvwxyz";
const Cipher: string = "zyxwvutsrqponmlkjihgfedcba";
const specialCharsRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
export function encode(plainText: string): string {
  let risultato = "";
  let cont = 0;
  for (const l of plainText.toLocaleLowerCase().replace(/\s/g, "")) {
    if (Number.isNaN(parseInt(l)) && !specialCharsRegex.test(l)) {
      if (cont % 5 == 0 && cont != 0) risultato = risultato + " ";
      const valore = Plain.indexOf(l);
      const lettera = Cipher.charAt(valore);
      risultato = risultato + lettera;
      cont = cont + 1;
    }
    if (!Number.isNaN(parseInt(l))) {
      if (cont % 5 == 0 && cont != 0) risultato = risultato + " ";
      risultato = risultato + l;
      cont = cont + 1;
    }
  }
  return risultato;
}

export function decode(cipherText: string): string {
  let risultato = "";
  let cont = 0;
  for (const l of cipherText.toLocaleLowerCase().replace(/\s/g, "")) {
    if (Number.isNaN(parseInt(l)) && !specialCharsRegex.test(l)) {
      if (cont % 5 == 0 && cont != 0) risultato = risultato + " ";
      const valore = Cipher.indexOf(l);
      const lettera = Plain.charAt(valore);
      risultato = risultato + lettera;
      cont = cont + 1;
    }
    if (!Number.isNaN(parseInt(l))) {
      if (cont % 5 == 0 && cont != 0) risultato = risultato + " ";
      risultato = risultato + l;
      cont = cont + 1;
    }
  }
  return risultato.replace(/\s/g, "");
}
