export class GradeSchool {
  rosterStud: Map<number, Set<string>> = new Map();
  protected roster() {
    const pino: { [key: number]: any } = {};
    for (const [k, v] of this.rosterStud.entries()) {
      pino[Number(k)] = Array.from(v).sort();
    }
    return pino;
  }

  add(nome: string, grado: number) {
    const lunghezza: number = this.rosterStud.get(grado)?.size ?? 0;

    for (const valu of this.rosterStud.values()) {
      if (valu.has(nome)) {
        valu.delete(nome);
      }
    }

    if (lunghezza == 0 || lunghezza == undefined) {
      this.rosterStud.set(grado, new Set([nome]));
    } else {
      this.rosterStud.get(grado)?.add(nome);
    }
  }

  protected grade(grado: number) {
    const re = this.rosterStud.get(grado);
    return re ? [...re].sort() : [];
  }
}
