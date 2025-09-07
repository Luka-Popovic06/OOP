//Constructor function
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never do this
  /*this.calcAge = function () {
    console.log(2035 - this.birthYear);
  };*/
};
// 1. New {} is created
// 2. function is called, this = f}
// 3. {} linked to prototype
// 4. function automatically return {}
const luka = new Person('Luka', 1990);
console.log(luka);
const nikola = new Person('Nikola', 2000);

const zoki = new Person('Zoki', 1997);
console.log(nikola, zoki);
console.log(luka instanceof Person);

//Prototypes
//do this
Person.prototype.calcAge = function () {
  console.log(2035 - this.birthYear);
};
console.log(Person.prototype);
luka.calcAge();
console.log(luka.__proto__ === Person.prototype);
//
console.log(Person.prototype.isPrototypeOf(luka));
//
Person.prototype.species = 'Homo Sapiens';
console.log(luka.hasOwnProperty('firstName'));
console.log(luka.hasOwnProperty('species'));
//Object.prototype (top of prototype chain)
console.log(luka.__proto__.__proto__);
console.log(luka.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car('Bmw', 80);
