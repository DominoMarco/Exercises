const DEFAULT_STUDENTS: Student[] = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
} as const;

type Student = string;
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES];
type Plants = Plant[];

export class Garden {
  schema: string[];
  students: Student[];
  plantsList: Plants;
  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.schema = diagram.split("\n");
    this.students = [...students].sort(); // Ensure alphabetical order
    this.plantsList = Object.values(PLANT_CODES);
  }

  public plants(student: Student): Plants {
    const result: Plants = [];
    const studentIndex = this.students.indexOf(student);
    if (studentIndex === -1 || this.schema.length < 2) {
      return result;
    }
    const position = studentIndex * 2;
    const letters = [
      this.schema[0][position],
      this.schema[0][position + 1],
      this.schema[1][position],
      this.schema[1][position + 1],
    ];
    for (const letter of letters) {
      const plant = PLANT_CODES[letter as keyof typeof PLANT_CODES];
      if (plant) {
        result.push(plant);
      }
    }
    return result;
  }
}
