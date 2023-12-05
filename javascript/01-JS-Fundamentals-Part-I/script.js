/*
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(45 + 8 + 23 - 10);

console.log("Selman");
console.log(27);

let firstName = "Selman";
let lastName = "Çalışkan";

console.log(firstName + " " + lastName);

// Correct usage
let myFirstJob = "Game Developer";
let myCurrentJob = "Front-End Developer";

// Misuse;
let job1 = "Game Developer";
let job2 = "Front-End Developer";

// - LECTURE: Values and Variables
const country = "Türkiye";
const continent = "Asya ve Avrupa";
let population = 85000000;

console.log(
  country + ", " + population + " nüfusa sahip bir " + continent + " ülkesidir."
);

let javascriptIsFun = true;

console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 27);
console.log(typeof "Selman");

javascriptIsFun = "YES!";

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// - LECTURE: Data Types
let isIsland = false;
let language;

if (isIsland === false) console.log(country + " bir ada ülkesi değildir.");


let age = 27;
age = 28;

const birthYear = 1996;
// birthYear = 1998; - const ile tanımlanan değerler sonradan değiştirilemez!
// const job; - const ile null değer atanamaz!

var job = "Game Developer";
job = "Front-End Developer";

lastName = "Çalışkan"; // Hatalı kullanım!
console.log(lastName);

// LECTURE: let, const, var
const language = "Turkish";
// language = "English"; - Değer const ile oluşturulduğu için sonradan değiştirilemez!


// Math operators
const year = 2077;
const ageSelman = year - 1996;
const ageAlan = year - 2013;
console.log(ageSelman, ageAlan);

console.log(ageSelman * 2, ageSelman / 10, 2 ** 3);
// 2 ** 3 - 2üslü3 (2^3)

const firstName = "Selman";
const lastName = "Çalışkan";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageSelman > ageAlan); // <, >, <=, >=
console.log(ageSelman <= 18);

const isFullAge = ageAlan >= 18;

console.log(year - 1996 > year - 2013);

// LECTURE: Operators
let populationTurkey = 85000000;
console.log(populationTurkey / 2);

populationTurkey++;
console.log(populationTurkey);

let populationFindland = 6000000;
console.log(populationTurkey > populationFindland);

let averagePopulation = 33000000;
console.log(populationTurkey < averagePopulation);

console.log(
  "Türkiye bir Asya ve Avrupa ülkesidir." +
    " " +
    populationTurkey +
    " " +
    "insan yaşar ve tamamı Türkçe konuşur."
);


const year = 2077;
const ageSelman = year - 1996;
const ageAlan = year - 2013;

console.log(year - 1996 > year - 2013);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageSelman + ageAlan) / 2;
console.log(ageSelman, ageAlan, averageAge);


const firstName = "Selman";
const job = "Developer";
const birthYear = 1996;
const year = 2077;

const selman =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(selman);

const selmanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(selmanNew);

console.log(`Just a regular string...`);

console.log("String with \nmultiple \nlines");

console.log(`String
multiple
lines`);

// LECTURE: strings and template literals
const country = "Türkiye";
const continent = "Avrupa ve Asya";
const population = "85 milyon";

const countryInformation = `${country} ${population} nüfusa sahip bir ${continent} ülkesidir.`;
console.log(countryInformation);


const age = 15;

if (age >= 18) {
  console.log("Ehliyet için uygun.");
} else {
  const oldCheck = 18 - age;
  console.log(`${oldCheck} yıl sonra Ehliyet için uygun olunacak`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// LECTURE: Taking Decisions: if / else Statements
const populationTurkey = 85000000;
const averagePopulation = 33000000;

if (populationTurkey >= averagePopulation) {
  console.log("Türkiye'nin nüfusu ortalama nüfustan fazladır");
} else {
  console.log("Türkiye'nin nüfusu ortalama nüfustan azdır");
}


// type conversion
const inputYear = "1996";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Selman"));
console.log(typeof NaN);

console.log(String(27), 27);

// type coercion
console.log("I am " + 27 + " years old");
console.log("27" - "10" - 7);
console.log("27" + "10" + 7);
console.log("27" * "2");
console.log("27" / 3);

let n = "1" + 1;
n = n - 1;
console.log(n); // n = ? (10)

// LECTURE: type conversion and coercion
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143


// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean("Selman"));

const money = 1000;
if (money) {
  console.log("Don't spend it all :D");
} else {
  console.log("You should get a job!");
}

let height = 0; // there is a bug!
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


const age = 18;
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("Cool!");
} else {
  console.log("Nahh!");
}

if (favourite !== 27) {
  console.log("Alright!");
}


// LECTURE: boolean logic

&& = and
|| = or
(!)A = not --> A = true => !A = false...

const language = "Turkish";
const population = 85000000;
const isIsland = false;

if ((language === "English") && (population <= 50000000) && (isIsland == true)) {
  console.log("You should live in Turkey");
} else {
  console.log("Turkey not for you!");
}


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..");
}
*/
