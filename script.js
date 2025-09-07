'use strict';
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movments = [];
    this.lacation = navigator.language;
  }
  deposit(val) {
    this.movments.push(val);
  }
  widthdraw(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
    }
  }
}
const acc1 = new Account('Luka', 'EUR', 1111);
acc1.deposit(150);
acc1.widthdraw(70);
console.log(acc1);
