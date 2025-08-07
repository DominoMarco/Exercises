export const answer = (frase: string) => {
  let frasse = frase.slice(7, -1);
  if (frasse.length == 0) throw new Error("Syntax error");
  const operations = ["plus", "minus", "multiplied by", "divided by"];
  type OperationSchema = { name: string; operationV: number };
  let schema: OperationSchema[] = [];
  let schemaNumeri: number[] = [];
  const modif = frasse.split(" ");
  for (let i = 0; i < modif.length; i++) {
    if (
      !Number.isNaN(parseInt(modif[i])) &&
      !Number.isNaN(parseInt(modif[i + 1]))
    )
      throw new Error("Syntax error");
  }

  for (const operation of operations) {
    let flag = true;
    while (flag) {
      const res = frasse.indexOf(operation);
      if (res != -1) {
        schema.push({ name: operation, operationV: res });
        switch (operation.length) {
          case 4:
            frasse = frasse.replace(operation, "ssss");
            break;
          case 5:
            frasse = frasse.replace(operation, "degfr");
            break;
          case 13:
            frasse = frasse.replace(operation, "aasdertgfrewa");
            break;
          case 10:
            frasse = frasse.replace(operation, "asdfghjklj");
            break;
        }
      } else {
        flag = false;
      }
    }
  }

  schemaNumeri = frase
    .slice(8)
    .split(" ")
    .filter((x) => !Number.isNaN(parseInt(x)))
    .map((x) => parseInt(x));

  if (schema.length != 0)
    schema = schema.sort((a, b) => a.operationV - b.operationV);
  else if (
    schemaNumeri.length != 1 ||
    frasse.indexOf(schemaNumeri[0].toString()) < frasse.length - 3
  ) {
    throw new Error("Unknown operation");
  }
  if (schemaNumeri.length == 0 || schemaNumeri.length <= schema.length) {
    throw new Error("Syntax error");
  }

  let finale = 0;
  if (schema.length == 0) return schemaNumeri[0];
  for (let i = 0; i < schemaNumeri.length - 1; i++) {
    if (i == 0) {
      if (schema[i].name == "plus") {
        console.log("somma");
        finale = schemaNumeri[i] + schemaNumeri[i + 1];
      }
      if (schema[i].name == "minus") {
        console.log("tolga1");
        finale = schemaNumeri[i] - schemaNumeri[i + 1];
        console.log(finale);
      }
      if (schema[i].name == "multiplied by") {
        finale = schemaNumeri[i] * schemaNumeri[i + 1];
      }
      if (schema[i].name == "divided by") {
        finale = schemaNumeri[i] / schemaNumeri[i + 1];
      }
    } else {
      if (schema[i].name == "plus") {
        finale = finale + schemaNumeri[i + 1];
      }
      if (schema[i].name == "minus") {
        console.log("tolga");
        finale = finale - schemaNumeri[i + 1];
        console.log(finale);
      }
      if (schema[i].name == "multiplied by") {
        finale = finale * schemaNumeri[i + 1];
      }
      if (schema[i].name == "divided by") {
        finale = finale / schemaNumeri[i + 1];
      }
    }
  }
  return finale;
};
