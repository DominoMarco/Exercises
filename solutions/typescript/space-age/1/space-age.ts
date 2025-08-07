export function age(planet: string, seconds: number): number {
  const Pianeti: Map<string, number> = new Map<string, number>([
    ["mercury", 0.2408467],
    ["venus", 0.61519726],
    ["earth", 1],
    ["mars", 1.8808158],
    ["jupiter", 11.862615],
    ["saturn", 29.447498],
    ["uranus", 84.016846],
    ["neptune", 164.79132],
  ]);
const coeff:any= Pianeti.get(planet)
  const p:number=coeff*365.25
  const giorni:number=(seconds/3600)/24
  const anni:number = giorni/p
  return Number(anni.toFixed(2))
}
