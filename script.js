'use strict';
//Constructor function
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never to this
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
