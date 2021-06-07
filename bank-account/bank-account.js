//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.currentBalance = 0;
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) throw new ValueError('Account already open');
    this.isOpen = true;
    this.currentBalance = 0;
  }

  close() {
    if (!this.isOpen) throw new ValueError('Account already closed');
    this.isOpen = false;
  }

  deposit(amount) {
    if (!this.isOpen) throw new ValueError('Unable to deposit into closed account');
    if (amount < 0) throw new ValueError('Cannot deposit negative amounts');
    this.currentBalance += amount;
  }

  withdraw(amount) {
    if (!this.isOpen) throw new ValueError('Unable to withdraw from closed account');
    if (amount < 0) throw new ValueError('Cannot withdraw negative amounts');
    if (amount > this.currentBalance) throw new ValueError('Cannot withdraw more than current balance');

    this.currentBalance -= amount;
  }

  get balance() {
    if (!this.isOpen) throw new ValueError('Unable to get balance from closed account');
    return this.currentBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
