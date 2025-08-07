export class Series {
  series: string;
  constructor(series: string) {
    this.series = series;
    if (this.series.length == 0) throw new Error("series cannot be empty");
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength > this.series.length)
      throw new Error("slice length cannot be greater than series length");
    if (sliceLength == 0) throw new Error("slice length cannot be zero");
    if (sliceLength < 0) throw new Error("slice length cannot be negative");
    let ress: number[][] = [];
    for (let i = 0; i + sliceLength <= this.series.length; i++) {
      ress.push(
        this.series
          .substring(i, i + sliceLength)
          .split("")
          .map((a) => Number(a))
      );
    }
    return ress;
  }
}
