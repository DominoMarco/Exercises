export class Allergies {
  private readonly allergenMap: Map<number, string> = new Map([
    [1, 'eggs'],
    [2, 'peanuts'],
    [4, 'shellfish'],
    [8, 'strawberries'],
    [16, 'tomatoes'],
    [32, 'chocolate'],
    [64, 'pollen'],
    [128, 'cats']
  ]);
  private allergenList: string[];

  constructor(allergenScore: number) {
    const score = allergenScore & 255;
    this.allergenList = Array.from(this.allergenMap.entries())
      .filter(([key, _]) => (score & key) !== 0)
      .map(([_, allergen]) => allergen);
  }

  public allergicTo(allergen: string): boolean {
    return this.allergenList.includes(allergen);
  }

  public list(): string[] {
    return this.allergenList;
  }
}