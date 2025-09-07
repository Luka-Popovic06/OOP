//Prototype chain

/*
Prototype chain (lanac prototipova) je mehanizam nasledjivanja 
u JavaScript-u – ono što omogućava da objekti dele metode i 
svojstva bez kopiranja.
*/
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  //this.firstName = firstName;
  //this.birthYear = birthYear;
  Person.call(this, firstName, birthYear); //bolje ovo nego da koristim gore ova dva
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}`);
};
