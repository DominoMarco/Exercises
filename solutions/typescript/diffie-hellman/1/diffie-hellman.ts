function  isPrime(num:number) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If the number is divisible by any `i` in this range, it's not prime.
      return false;
    }
  }

  // If no divisors were found, the number is prime.
  return true;
}

export class DiffieHellman {
  private readonly p: number;
  private readonly g: number;

  constructor(p: number, g: number) {
    this.p = p;
    this.g = g;
    if(p<=0 || g<=0)throw("");
    if(!isPrime(p) || !isPrime(g)) throw("");
  }


  
  // Calcola la chiave pubblica: A = g^a mod p
  public getPublicKey(privateKey: number): number {
    if(privateKey<=1)throw("");
    if(privateKey==this.p)throw("");
    if(privateKey==this.p+1)throw("");
    return this.modPow(this.g, privateKey, this.p);
  }

  // Calcola il segreto condiviso: s = theirPublicKey^myPrivateKey mod p
  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return this.modPow(theirPublicKey, myPrivateKey, this.p);
  }

  // Funzione per il calcolo dell’esponenziazione modulare (efficiente)
  private modPow(base: number, exponent: number, modulus: number): number {
    if (modulus === 1) return 0;

    let result = 1;
    base = base % modulus;

    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    return result;
  }
}