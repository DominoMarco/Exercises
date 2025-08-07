export default class CircularBuffer<T> {
  private size: number;
  private buffer: (T | null)[];
  private readIndex: number = 0;
  private writeIndex: number = 0;
  private isFull: boolean = false;

  constructor(size: number) {
    this.size = size;
    this.buffer = Array(size).fill(null);
  }

  write(value: T): void {
    if (this.isFull) {
      throw new BufferFullError();
    }

    this.buffer[this.writeIndex] = value;
    this.advanceWrite();
  }

  read(): T {
    if (!this.hasData()) {
      throw new BufferEmptyError();
    }

    const value = this.buffer[this.readIndex];
    this.buffer[this.readIndex] = null;
    this.advanceRead();

    return value!;
  }

  forceWrite(value: T): void {
    if (this.isFull) {
      // overwrite the oldest data
      this.buffer[this.writeIndex] = value;
      this.advanceWrite();
      this.readIndex = this.writeIndex; // move read index forward
    } else {
      this.write(value);
    }
  }

  clear(): void {
    this.buffer = Array(this.size).fill(null);
    this.readIndex = 0;
    this.writeIndex = 0;
    this.isFull = false;
  }

  private advanceWrite(): void {
    this.writeIndex = (this.writeIndex + 1) % this.size;
    if (this.writeIndex === this.readIndex) {
      this.isFull = true;
    }
  }

  private advanceRead(): void {
    this.readIndex = (this.readIndex + 1) % this.size;
    this.isFull = false;
  }

  private hasData(): boolean {
    return this.isFull || this.readIndex !== this.writeIndex;
  }
}

export class BufferFullError extends Error {
  constructor() {
    super("Buffer is full");
    Object.setPrototypeOf(this, BufferFullError.prototype);
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super("Buffer is empty");
    Object.setPrototypeOf(this, BufferEmptyError.prototype);
  }
}