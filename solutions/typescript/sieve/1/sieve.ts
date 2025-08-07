export function primes(massimo: number):number[] {
  if(massimo==1)return [];
  let lista: valori[] = [];
  type valori={numero:number, segnato:boolean};
  for (let i = 2; i <= massimo; i++) {
    lista.push({numero:i,segnato:false});
  }


  for(const elem of lista){
    if(!elem.segnato){
      for(let i=elem.numero+1;i<=massimo;i++){
        if(i % elem.numero == 0) {
          const found = lista.find(x => x.numero == i);
          if (found) found.segnato = true;
        }
      }
    }
  }

  return lista.filter(x=>!x.segnato).map(x=>x.numero);
}
