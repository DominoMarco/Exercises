export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints:number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints=DnDCharacter.getModifierFor(this.constitution)+10;
  }
  public static generateAbilityScore(): number {
    let mySum: number = 0;
    let results: number[] = [];
    for (let i = 0; i < 4; i++) {
      results[i] = Math.floor(Math.random() * (7 - 1) + 1);
    }
    mySum = results
      .sort()
      .slice(1)
      .reduce((a, b) => a + b);
    return mySum;
  }

  public static getModifierFor(abilityValue: number): number {
    const valore = (abilityValue-10) / 2;
    if (( abilityValue-10) % 2 != 0) {
      if (valore >= 0) return Math.trunc(valore);
      else return Math.trunc(valore - 1);
    }
    return valore;
  }
}