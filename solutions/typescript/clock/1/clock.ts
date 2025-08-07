export class Clock {
  ore: number;
  minuti: number;
  constructor(hour: number, minute: number = 0) {
    let totalMinutes = hour * 60 + minute;

    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

    this.ore = Math.floor(totalMinutes / 60);
    this.minuti = totalMinutes % 60;
  }

  public toString(): string {
    let oreS = "";
    let minutiS = "";
    if (Math.trunc(this.ore / 10) == 0) oreS = "0" + this.ore;
    else oreS = this.ore.toString();
    if (Math.trunc(this.minuti / 10) == 0) minutiS = "0" + this.minuti;
    else minutiS = this.minuti.toString();
    return oreS + ":" + minutiS;
  }

  public plus(minutes: number): Clock {
    let newMinutes = this.minuti + minutes;
    let aggOre = 0;
    if (newMinutes >= 60) {
      aggOre = Math.trunc(newMinutes / 60);
      newMinutes = newMinutes % 60;
    }
    if (this.ore + aggOre >= 24) {
      this.ore = (this.ore + aggOre) % 24;
    } else {
      return new Clock(this.ore + aggOre, newMinutes);
    }
    return new Clock(this.ore, newMinutes);
  }

  public minus(minutes: number): Clock {
    let totalMinutes = this.ore * 60 + this.minuti - minutes;

    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

    const newOre = Math.floor(totalMinutes / 60);
    const newMinuti = totalMinutes % 60;

    return new Clock(newOre, newMinuti);
  }

  public equals(other: Clock): boolean {
    if (this.toString() === other.toString()) return true;
    return false;
  }
}
