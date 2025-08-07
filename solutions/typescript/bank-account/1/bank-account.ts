export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {
  private _balance = 0
  private _isOpen = false

  open(): void {
    if (this._isOpen) {
      throw new ValueError()
    }
    this._isOpen = true
    this._balance = 0
  }

  close(): void {
    if (!this._isOpen) {
      throw new ValueError()
    }
    this._isOpen = false
  }

  deposit(amount: number): void {
    this.ensureIsOpen()
    if (amount <= 0) {
      throw new ValueError()
    }
    this._balance += amount
  }

  withdraw(amount: number): void {
    this.ensureIsOpen()
    if (amount <= 0 || amount > this._balance) {
      throw new ValueError()
    }
    this._balance -= amount
  }

  get balance(): number {
    this.ensureIsOpen()
    return this._balance
  }

  private ensureIsOpen(): void {
    if (!this._isOpen) {
      throw new ValueError()
    }
  }
}
