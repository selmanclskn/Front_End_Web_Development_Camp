"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audi";
// const private = 534;
// const if = 27;


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


// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1996);
console.log(age2);

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

const percantageofTurkey = percentageOfWorld1(85000000);
console.log(percantageofTurkey);
const percantageofAustralia = percentageOfWorld1(25000000);
console.log(percantageofAustralia);
const percantageofChina = percentageOfWorld1(1441000000);
console.log(percantageofChina);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const percantageofGerman = percentageOfWorld2(83000000);
console.log(percantageofGerman);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1996, "Selman"));

// LECTURE: Arrow functions

const percentageOfWorld3 = population => {
  return (population / 7900000000) * 100;
};

const percantageofTurkey = percentageOfWorld3(85000000);
console.log(percantageofTurkey);


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1996, "Selman"));
console.log(yearsUntilRetirement(1960, "Jonas"));
*/
