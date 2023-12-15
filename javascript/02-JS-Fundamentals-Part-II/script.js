"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audi";
// const private = 534;
// const if = 27;
*/

function logger() {
  console.log("My name is Selman!");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(0, 3);
console.log(appleOrangeJuice);

// LECTURE: Functions

function describeCountry(countryName, population, capital) {
  const country = `${countryName} has ${population} million people and its capital city is ${capital}.`;
  return country;
}

const turkey = describeCountry("Turkey", 85, "Ankara");
console.log(turkey);
const australia = describeCountry("Australia", 25, "Sydney");
console.log(australia);
