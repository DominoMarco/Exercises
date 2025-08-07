export class Gigasecond {
  private readonly startDate: Date;

  constructor(giorno: Date) {
    this.startDate = giorno;
  }

  public date(): Date {
    const gigasecondInMilliseconds = 1_000_000_000 * 1000;
    return new Date(this.startDate.getTime() + gigasecondInMilliseconds);
  }
}
