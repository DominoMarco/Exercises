export function calculatePrimeFactors(valore:number):number[] {
 let base =valore;
 let divisore = 2;
 let risultati :number[]=[];
 while(base!=1){
    if(base%divisore==0){
        base=base/divisore;
        risultati.push(divisore);
    }else{
        divisore=divisore+1;
    }
 }
 return risultati
}
