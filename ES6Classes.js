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
