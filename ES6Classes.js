//ES6 Class

//Class expression
//const PersonCl= class{}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //Setter (postavlja vrednost na kontrolisan nacin)
  //korisno kad nam treba validacija
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name; //cuvam u _fullName
    }
  }
  //Getter (uzima vrednost kao da je property)
  get fullName() {
    return this._fullName;
  }

  // Static method
  /*
  U JavaScript-u, static method (statička metoda) je metoda koja je 
  vezana direktno za klasu (ili konstruktor funkciju), a ne za instance 
  te klase.To znači da statičke metode ne mogu da se pozivaju na objektima 
  (instancama), već samo na samoj klasi.
   */
  static greet() {
    console.log('Hello from static method!');
  }
}
const bob = new PersonCl('Bob', 1999);

////////////////////////////////////////////////////////////////////////////

//Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  //1) Public fields
  lacale = navigator.language;
  bank = 'Bankertina';

  // 2) Private fields
  #movments = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; //ovo je kao let variabla
    //this.movments = [];
    //this.locale = navigator.language;
  }

  // Public interface (API)
  //3) Public methods

  getMovements() {
    return this.#movments;
  }
  deposit(val) {
    this.#movments.push(val);
  }
  widthdraw(val) {
    this.deposit(-val);
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
    }
  }
}
const acc1 = new Account('Luka', 'EUR', 1111);
acc1.deposit(150);
acc1.widthdraw(70);
console.log(acc1);
