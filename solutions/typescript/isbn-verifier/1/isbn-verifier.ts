export function isValid(isbn: string): boolean {
    if(isbn.trim().length ==0 ) return false;
    let crearString = isbn.split("").filter(x => x != "-");
     if(crearString.length!=10)return false;
    const ultimo = crearString[crearString.length - 1];
    crearString=crearString.filter(x => !isNaN(parseInt(x)));
    console.log(crearString)
    if(isNaN(parseInt(ultimo))) crearString.push(ultimo)
    if(crearString.length!=10)return false;
    if (ultimo == "X") {
        crearString[crearString.length - 1] = "10"
    } else if (isNaN(parseInt(ultimo))) {
        return false;
    }

    const stringToNumber = crearString.map(x => parseInt(x))
    let i = 10
    let somma = 0
    for (const e of stringToNumber) {
        somma = somma + (e * i)
        i = i - 1;
    }
    console.log(somma% 11)
    return somma% 11 ==0;
}