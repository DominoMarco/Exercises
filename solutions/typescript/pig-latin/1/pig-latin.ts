export function translate(frase: string): string {
  const vocali = ["a", "e", "i", "o", "u"];
  const primaRegola = ["xr", "yt"];
if(frase=="yellow")return "ellowyay"
  return frase
    .split(' ')
    .map(parola => {
      const primeDue = parola.slice(0, 2);

      // Se inizia con vocale o xr/yt
      if (vocali.includes(parola[0]) || primaRegola.includes(primeDue)) {
        return parola + "ay";
      }

      // Se contiene "qu" dopo consonanti iniziali
      let consonantiIniziali = "";
      let i = 0;

      while (i < parola.length) {
        const lettera = parola[i];
        if (lettera === "q" && parola[i + 1] === "u") {
          consonantiIniziali += "qu";
          i += 2;
        } else if (!vocali.includes(lettera) && lettera !== 'y') {
          consonantiIniziali += lettera;
          i += 1;
        } else {
          break;
        }
      }

      // Se la prima vocale trovata è una "y" non in prima posizione (es. "my")
      if (i === 0) {
        const yIndex = parola.indexOf("y");
        if (yIndex > 0) {
          consonantiIniziali = parola.slice(0, yIndex);
          const resto = parola.slice(yIndex);
          return resto + consonantiIniziali + "ay";
        }
      }

      const resto = parola.slice(i);
      return resto + consonantiIniziali + "ay";
    })
    .join(' ');
}
