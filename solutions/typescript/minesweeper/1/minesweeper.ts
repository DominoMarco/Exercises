export function annotate(field: string[]): string[] {
    let campo: string[] = [];
     let riga = "";
      if(field.length==0)return [];
    for (let y = 0; y < field.length; y++) {
        riga = "";
        for (let x = 0; x < field[0].length; x++) {
          let mine = 0;
            if (field[y][x] == "*") {riga = riga + "*";}
          else{
            mine = mine + checkAngle(field, x, y, -1, -1); 
                mine = mine + checkAngle(field, x, y, 0, -1);
                mine = mine + checkAngle(field, x, y, 1, -1); 
                mine = mine + checkAngle(field, x, y, -1, 0); 
                mine = mine + checkAngle(field, x, y, 1, 0) ;
                mine = mine + checkAngle(field, x, y, 0, 1); 
                mine = mine + checkAngle(field, x, y, 1, 1); 
                mine = mine + checkAngle(field, x, y, -1, 1);
             if (mine != 0) riga = riga + mine;
            else riga = riga + " ";
          }
           
        }
        campo.push(riga);
    }
 
    return campo;
}

function checkAngle(
  field: string[],
  x: number,
  y: number,
  directionX: number,
  directionY: number
): number {
  const row = field[y + directionY];
  if (row === undefined) return 0;

  const oggetto = row[x + directionX];
  if (oggetto === undefined) return 0;

  if (oggetto === "*") return 1;

  return 0;
}