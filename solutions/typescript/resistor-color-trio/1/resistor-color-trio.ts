export function decodedResistorValue(listaColori:string[]):string {
 const Colori:Map<string,number>=new Map<string,number>([
    ["black",0],
    ["brown",1],
     [ "red",2],
      ["orange",3],
      ["yellow",4],
      ["green",5],
      ["blue",6],
      ["violet",7],
      ["grey",8],
      ["white",9]
  ])
  var totale:string="";
  var numeroZeri:any
  for(var i=0;i<3;i++ ){
    if(i<2){
      const value1 = Colori.get(listaColori[i])
    totale=totale+ value1
    }else{
      numeroZeri=Colori.get(listaColori[i])
      totale=totale+ "0".repeat(numeroZeri)
    } 
  }
  var valore = parseInt(totale)
  if(valore/1000 <=1){
     return valore+" ohms"
  }else{
    if(valore/1000000<=1){
      valore = valore/1000
      return valore+" kiloohms"
    }else if(valore/1000000000<=1){
      valore = valore/1000000
      return valore+" megaohms"
    }else{
      valore = valore/1000000000
      return valore+" gigaohms"
    }
  }
 
 }
  
