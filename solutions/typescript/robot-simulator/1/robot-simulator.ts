export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || "Invalid Input";
  }
}

type Direction = "north" | "east" | "south" | "west";
type Coordinates = [number, number];

export class Robot {
  currentDirection: string;
  coordinate: Coordinates;
  coordinateN: number;
  constructor() {
    this.currentDirection = "north";
    this.coordinate = [0, 0];
    this.coordinateN = 0;
  }
  get bearing(): Direction {
    return this.currentDirection as Direction;
  }

  get coordinates(): Coordinates {
    return this.coordinate;
  }

  place(placement: { x: number; y: number; direction: string }) {
    const validDirections = ["north", "east", "south", "west"];
    if (!validDirections.includes(placement.direction))
      throw new InvalidInputError("");
    this.currentDirection = placement.direction;
    this.coordinate = [placement.x, placement.y];
    switch (this.currentDirection) {
      case "east":
        this.coordinateN = 1;
        break;
      case "south":
        this.coordinateN = 2;
        break;
      case "west":
        this.coordinateN = 3;
        break;
      default:
        this.coordinateN = 0;
    }
  }

  evaluate(instructions: string) {
    for (const m of instructions) {
      if (m == "R") this.cambiaDirezione(1);
      if (m == "A") this.avanza();

      if (m == "L") this.cambiaDirezione(-1);
    }
  }

  avanza() {
    const x = this.coordinate[0];
    const y = this.coordinate[1];
    if (this.coordinateN == 0) {
      this.coordinate = [x, y + 1];
    }
    if (this.coordinateN == 1) {
      this.coordinate = [x + 1, y];
    }
    if (this.coordinateN == 2) {
      this.coordinate = [x, y - 1];
    }
    if (this.coordinateN == 3) {
      this.coordinate = [x - 1, y];
    }
  }

  cambiaDirezione(numero: number) {
    this.coordinateN = this.coordinateN + numero;
    if (this.coordinateN == 4) this.coordinateN = 0;
    if (this.coordinateN < 0) this.coordinateN = 3;
    switch (this.coordinateN) {
      case 1:
        this.currentDirection = "east";
        break;
      case 2:
        this.currentDirection = "south";
        break;
      case 3:
        this.currentDirection = "west";
        break;
      default:
        this.currentDirection = "north";
    }
  }
}
