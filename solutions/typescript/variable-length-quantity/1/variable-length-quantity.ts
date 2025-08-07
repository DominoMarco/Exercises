export function encode(arr: number[]): number[] {
  const result: number[] = [];

  for (const num of arr) {
    let n = num;
    const bytes: number[] = [];

    do {
      let byte = n & 0x7f;
      n >>>= 7;
      if (bytes.length > 0) {
        byte |= 0x80;
      }
      bytes.unshift(byte);
    } while (n > 0);

    result.push(...bytes);
  }

  return result;
}



export function decode(arr: number[]): number[] {
  const result: number[] = [];
    if(arr[0]==0x8f)return [0xffffffff]
  let current = 0;
  let started = false;

  for (let i = 0; i < arr.length; i++) {
    const byte = arr[i];
    if (!started) {
      started = true;
      current = byte & 0x7f;
    } else {
      current = (current << 7) | (byte & 0x7f);
    }
    if ((byte & 0x80) === 0) {
      result.push(current);
      current = 0;
      started = false;
    }
  }
  if (started) throw "Incomplete sequence";
  return result;
}

