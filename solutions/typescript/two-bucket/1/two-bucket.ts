type State = { primo: number; secondo: number };

export class TwoBucket {
  firstBucket: number;
  secondBucket: number;
  goal: number;
  start: "one" | "two";
  goalBucket: string;
  otherBucket: number;

  constructor(
    firstBucket: number,
    secondBucket: number,
    goal: number,
    start: "one" | "two"
  ) {
    this.firstBucket = firstBucket;
    this.secondBucket = secondBucket;
    this.goal = goal;
    this.start = start;
    this.goalBucket = "";
    this.otherBucket = 0;
  }

  moves(): number {
    const startState: State =
      this.start === "one"
        ? { primo: this.firstBucket, secondo: 0 }
        : { primo: 0, secondo: this.secondBucket };

    const queue: Array<{ state: State; moves: number }> = [
      { state: startState, moves: 1 },
    ];

    const visited = new Set<string>();
    visited.add(`${startState.primo},${startState.secondo}`);

    const isForbiddenState = (state: State): boolean => {
      if (this.start === "one") {
        return state.primo === 0 && state.secondo === this.secondBucket;
      } else {
        return state.secondo === 0 && state.primo === this.firstBucket;
      }
    };

    while (queue.length > 0) {
      const { state, moves } = queue.shift()!;

      if (state.primo === this.goal) {
        this.goalBucket = "one";
        this.otherBucket = state.secondo;
        return moves;
      }
      if (state.secondo === this.goal) {
        this.goalBucket = "two";
        this.otherBucket = state.primo;
        return moves;
      }
      const nextStates: State[] = [];
      if (state.primo < this.firstBucket) {
        const next = { primo: this.firstBucket, secondo: state.secondo };
        if (!isForbiddenState(next)) nextStates.push(next);
      }

      if (state.secondo < this.secondBucket) {
        const next = { primo: state.primo, secondo: this.secondBucket };
        if (!isForbiddenState(next)) nextStates.push(next);
      }

      if (state.primo > 0) {
        const next = { primo: 0, secondo: state.secondo };
        if (!isForbiddenState(next)) nextStates.push(next);
      }

      if (state.secondo > 0) {
        const next = { primo: state.primo, secondo: 0 };
        if (!isForbiddenState(next)) nextStates.push(next);
      }
      {
        const poured = Math.min(state.primo, this.secondBucket - state.secondo);
        const next = { primo: state.primo - poured, secondo: state.secondo + poured };
        if (!isForbiddenState(next)) nextStates.push(next);
      }

      {
        const poured = Math.min(state.secondo, this.firstBucket - state.primo);
        const next = { primo: state.primo + poured, secondo: state.secondo - poured };
        if (!isForbiddenState(next)) nextStates.push(next);
      }

      for (const next of nextStates) {
        const key = `${next.primo},${next.secondo}`;
        if (!visited.has(key)) {
          visited.add(key);
          queue.push({ state: next, moves: moves + 1 });
        }
      }
    }

    throw new Error("No solution possible");
  }
}


