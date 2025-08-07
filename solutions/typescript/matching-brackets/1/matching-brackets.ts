export function isPaired(input: string): boolean {
  let contenitore: string[] = [];
  for (const l of input) {
    if (l == "[" || l == "{" || l == "(") contenitore.push(l);
    else if (l == "]" || l == "}" || l == ")") {
      let ultimaPos = -1;
      if (l == "]") {
        ultimaPos = contenitore.lastIndexOf("[");
        if (ultimaPos == -1) return false;
        if (ultimaPos != contenitore.length - 1) return false;
        else {
          if (contenitore.length == 1) contenitore = [];
          else contenitore = contenitore.slice(0, -1);
        }
      }
      if (l == "}") {
        ultimaPos = contenitore.lastIndexOf("{");
        if (ultimaPos == -1) return false;
        if (ultimaPos != contenitore.length - 1) return false;
        else {
          if (contenitore.length == 1) contenitore = [];
          else contenitore = contenitore.slice(0, -1);
        }
      }
      if (l == ")") {
        ultimaPos = contenitore.lastIndexOf("(");
        if (ultimaPos == -1) return false;
        if (ultimaPos != contenitore.length - 1) return false;
        else {
          if (contenitore.length == 1) contenitore = [];
          else contenitore = contenitore.slice(0, -1);
        }
      }
    }
  }
  if (contenitore.length != 0) return false;
  return true;
}
