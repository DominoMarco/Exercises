export function decodedValue(listaColori:string[]):number {
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
  for(var i=0;i<2;i++ ){
    const value1 = Colori.get(listaColori[i])
    totale=totale+ value1
     
  }
  return parseInt(totale)
}
