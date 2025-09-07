/*
 Object.create() je ugrađena metoda u JavaScript-u koja kreira novi 
 objekat i povezuje ga sa nekim postojećim objektom kao prototipom.
 */
const Person = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const luka = Object.create(Person);
luka.name = 'Luka';
luka.birthYear = 1982;
luka.calcAge();
const sara = Object.create(Person);
sara.init('Sara', 1999);
sara.calcAge();
