export function proverb(...testo:string[]):string {
    let proverbio=""
  for(let elm=0;elm<testo.length ;elm++){
    if(elm==testo.length-1){
        proverbio=proverbio+`And all for the want of a ${testo[0]}.`
        return proverbio;
    }
    const frase= `For want of a ${testo[elm]} the ${testo[elm+1]} was lost.`+"\n"
    proverbio=proverbio+frase;
  }
  return proverbio;
}
