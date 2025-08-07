export function commands(numero: number): string[] {
    if(numero==0)return [];
    const azioni: Map<number, string> = new Map([
        [4, "wink"],
        [3, "double blink"],
        [2, "close your eyes"],
        [1, "jump"],
        [0, "reverse"],
    ])
    let binario = numero.toString(2);
    if(binario.length!=5) {
      const aggiunta = 5-binario.length;
      const zer="0";
      binario = zer.repeat(aggiunta)+binario;
    }
    console.log(binario);
    let lista: string[] = [];
    //const primaA = binario.lastIndexOf("1");
    //lista.push(azioni.get(primaA) ?? "");
    for (let i = 0; i < binario.length; i++) {
        if (binario[i] == "1") {
            lista.push(azioni.get(i) ?? "");
            
        }

    }
console.log(lista);
    if(lista[0]=="reverse") return lista.slice(1);
    else {
        return lista.reverse();
    }
}

