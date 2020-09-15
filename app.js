//jshint esversion: 9
// class Person {
//   name = "sait";

//   constructor() {
//     this.age = 45;
//   }

//   greet() {
//     console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
//   }
// }


// this class here would essentially be written as a function with the function keyword, with any name of your choice in this case person where still the convention is to use a capital character to make it clear that this function should not be called as a normal function but together with the new keyword to be used as a constructor function because indeed with the new keyword, Javascript will call this function differently than it normally would.

function Person() {
  this.age = 45;
  this.name = "sait";
  this.greet = function () {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
  };
}

const person = new Person();
person.greet();