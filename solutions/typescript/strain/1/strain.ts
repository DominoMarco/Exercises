export function keep<T>(dati:T[],funzione:()=>{}) {
  
   const p= dati.filter(funzione);
   return p
}

export function discard<T>(dati:T[],funzione:()=>{}) {
   const p:T[]= dati.filter(funzione);
   let mio:T[]=[]
   for(const e of dati){
    if(p.find(x=>x==e)==undefined){
mio.push(e)
    }
   }
   return mio
}
