export function hey(message1: string): string {
  const message:string=message1.trim()
  if(message.trim().length!=0){
    if(message.toLowerCase()==message.toUpperCase()){
      if((message.slice(-1)=="?"))   return "Sure."
      if(message.slice(-1)!="?"){
    return "Whatever."
  }
  }
    if((message.toUpperCase()===message)&&(message.slice(-1)!="?")){
    return "Whoa, chill out!"
  }if((message.slice(-1)=="?")&&(message.toUpperCase()!=message))return "Sure."
  if((message.slice(-1)=="?")&&(message.toUpperCase()===message))
    return "Calm down, I know what I'm doing!"
     else return "Whatever."
    }
    
 else return "Fine. Be that way!"
}
