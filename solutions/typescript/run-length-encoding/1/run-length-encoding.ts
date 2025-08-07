export function encode(input: string): string {
  if (input === "") return "";

  let encoded = "";
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      encoded += (count > 1 ? count : "") + input[i - 1];
      count = 1;
    }
  }

  return encoded;
}

export function decode(input: string): string {
  let decoded = "";
  let countStr = "";

  for (const char of input) {
    if (char >= '0' && char <= '9') {
      countStr += char;
    } else {
      const count = countStr ? parseInt(countStr, 10) : 1;
      decoded += char.repeat(count);
      countStr = "";
    }
  }

  return decoded;
}
