// // 1. Declare variables called 'country', 'continent' and 'population' and
// // assign their values according to your own country (population in millions)

// // solution
// const country = "Nigeria";
// const continent = "Africa";
// let Population = 213.4;
// let nigeriaPopulatuion = Population + "million";
// // 2. Log their values to the console.
// // solution
// console.log(country);
// console.log(continent);
// console.log(nigeriaPopulatuion);

// // 3. Declare a variable called 'isIsland' and set its value according to your
// // country. The variable should hold a Boolean value. Also declare a variable
// // 'language', but don't assign it any value yet
// // solution

// let isLand = country;
// if (isLand == country) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// let language;

// // 4. Log the types of 'isIsland', 'population', 'country' and 'language'
// // to the console
// // solution

// console.log(typeof isLand);
// console.log(typeof Population);
// console.log(typeof country);
// console.log(typeof language);

// // 1. If your country split in half, and each half would contain half the population,
// // then how many people would live in each half?
// let halfPopulation = 231.4 / 2;
// halfCountry = halfPopulation;
// console.log(halfCountry);

// // Increase the population of your country by 1 and log the result to the console
// Population++;
// console.log(Population + "million");

// // 3. Finland has a population of 6 million. Does your country have more people than
// // Finland?
// let FinlandPopulation = 600000;
// if (nigeriaPopulatuion > FinlandPopulation) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// // 5. The average population of a country is 33 million people. Does your country
// // have less people than the average country?
// let belgiumAvePopulation = 33000000;
// if (nigeriaPopulatuion > belgiumAvePopulation) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let z = 10;
// let v = 5;

// if (z == 10 && v == 3) {
//   console.log("correct");
// } else {
//   console.log("error");
// }

// // 6. Based on the variables you created, create a new variable 'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million
// // people speak portuguese
// let description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);

// let sholaMass = 78;
// let sholaHeight = 1.69;
// let sholaHeightSquare = sholaHeight ** 2;

// let sholaBMI = sholaMass / sholaHeightSquare;
// console.log(sholaBMI + "kg/m");

// // sheun
// let sheunMass = 92;
// let sheunHeight = 1.95;
// let sheunHeightSquare = sheunHeight ** 2;
// let sheunBMI = sheunMass / sheunHeightSquare;
// console.log(sheunBMI + "kg/m");
// if (sholaBMI > sheunBMI) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // IF ELSE STATEMENT
// var age = 9;
// var isEligible = age >= 15;
// if (isEligible) {
//   console.log("you can apply for admission");
// } else {
//   var yearsLeft = 15 - age;
//   console.log(
//     `you cannot apply for admission now. Wait for another ${yearsLeft} years`
//   );
// }

// /*write a code that analyses the performance of students in the department of software engineering.
// the total mark is 100marks, for javaScript course, the passmark is 50marks, the excellent is 80marks and above.
// prompt their mark and tell them their results*/

// // solution

// const totalMark = 100;
// const excellent = 80;
// const passMark = 50;

// const studentsMark = prompt("enter your score");
// if (studentsMark >= excellent) {
//   alert("Excellent Result");
// } else if (studentsMark < passMark) {
//   alert("you failed this course");
// } else if (studentsMark > passMark && studentsMark < excellent) {
//   alert("Good Result");
// }

// 1. A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships
// cartons of milk to a local grocery store. The cost of producing one liter of milk is
// ₦250, and the profit of each carton of milk is ₦180. Write a program that does the
// following:
// - Prompts the user to enter the total amount of milk produced in the
// morning.
// - Outputs the number of milk cartons needed to hold milk. (Round your
// answer to the nearest integer.)
// - Outputs the cost of producing milk.
// // - Outputs the profit for producing milk.

// const milkCarton = 3.78;
// const produceCost = 250;
// const profit = 180;

// var totalMorningProduction = prompt("Enter total morning production");
// let numberOfMilkCartonNeeded = totalMorningProduction * milkCarton;
// alert(`${numberOfMilkCartonNeeded} liters`);

// const producingCostOfMilk = produceCost * totalMorningProduction;
// alert(`the producing cost of milk is: #${producingCostOfMilk}`);

// const producingProfit = profit * totalMorningProduction;
// alert(`Profit for producing milk is: #${producingProfit} `);

// 2. You are to write a program for a system that identify Continent with color.
// Prompt to accept their color and tell them the continent they belong.The color and races
// involved are Black for Africa, White for North America, Yellow for South America and Brown
// for Asia.

// let Black = Africa;
// let northAmerica = "white";
// let southAmerica = "yellow";
// let Asia = "Brown";
// let Africa = "black";
// let Black = "africa";

// let continent = prompt("Enter your country color: ");
// if (continent == Black) {
//   alert("You are from Africa continent");
// }

// javascript type conversion and type coersion
// const dateOfBirth = "1988";
// const dateOfBirthNumber = Number(dateOfBirth);
// console.log(dateOfBirthNumber + 18);

// var name = "zayd";
// const nameNumber = Number(name);
// console.log(typeof nameNumber);

// // converting number to string
// const number = 45;
// const numberString = String(number);
// console.log(numberString);
// console.log(typeof numberString);

// const x = "25";
// const y = "5";
// const z = 2;

// console.log(x + y + z);
// console.log(x * z);

// // truthy and falsy value
// const nameNull = null;
// if (nameNull) {
//   console.lof(`I AM  zayd Hassan`);
// } else {
//   console.log(`You do not have because name is ${nameNull}`);
// }

// const businessName = "washinton";
// if (businessName) {
//   console.log(`Good brand name`);
// } else {
//   console.log(
//     `you do not have brand Name, as business.name is ${businessName}`
//   );
// }

// If time is less than 10:00, create a "Good morning" greeting,
// if not, but time is less than 20: 00, create a "Good day" greeting,
// otherwise a "Good evening":
// const time = prompt(`Enter your country Time`);
// if (time <= 10) {
//   alert("Good Morning");
// } else if (time <= 20) {
//   alert("Good Afternoon");
// } else {
//   alert("Good evening");
// }

// const dolphinsScore = (99 + 120 + 89) / 3;
// const koalasScore = (88 + 99 + 110) / 3;
// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log("Dolphins win the trophy🏆");
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//   console.log("Koalas win the trophy🏆");
// } else if (
//   dolphinsScore === koalasScore &&
//   dolphinsScore >= 100 &&
//   koalasScore >= 100
// ) {
//   console.log("Both win the trophy");
// } else {
//   console.log("oops no one win the trophy");
// }

// ternary
// steven wants to build a very simple tip calculator for whenever he goes eating in a resturant
// in this countryusually tp tip 15% if the bill between 50 and 300 if the vlue i different  the tip is 20%

// task 1 : ccalculate the tip depending on the bill value create a variable called
// tip for this its not allow to use if/else statement

// solution;

// const bill = 250;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bil was ${bill}, tip value was ${tip} and total is ${bill + tip}`
// );

// const studyMedicine = true;
// const studyNursing = false;

// if (studyMedicine) {
//   console.log(`Titi you have a stellar career`);
// } else {
//   console.log(`sorry you career is not balance`);
// }

// const titiCourse = String(prompt("Enter ur course"));
// if (titiCourse == "Medicine" || titiCourse == "medicine") {
//   alert("Titi you have a stellar career");
// } else if (titiCourse == "Nursing" || titiCourse == "nursing") {
//   alert("Sorry you career is not balance");
// } else {
//   alert("Your course is not availabe please try again");
// }

// const age = prompt("Enter Your age:");
// const voter = age >= 18;
// if (voter) {
//   alert(`Congratulations you can vote as a good citizen`);
// } else {
//   var current = 18 - age;
//   alert(`Sorry come back in the next ${current} years😢.`);
// }

// const fruitPlan = "monday";
// switch (fruitPlan) {
//   case "monday":
//     console.log("I will eat apple");
//     break;
//   case "tuesday":
//     console.log("I will eat banana");
//     break;
//   case "wednesday":
//     console.log("I will eat pineapple");
//     break;
//   default:
//     console.log("I will drink water");
// }

// const language = "javascript";
// !language
//   ? console.log("I love java script")
//   : console.log(`just gie me ${language}`);

// const evenNumber = 40;
// const oddNumber = 31;
// evenNumber <= oddNumber
//   ? console.log("wow")
//   : console.log(
//       `evenNumber ${evenNumber} is not less than oddNumber ${oddNumber}`
//     );

// function declaration
// function calcAge1(dateOfBirth) {
//   return 2023 - dateOfBirth;
// }
// const age1 = calcAge1(1997);
// const yearsLeft = 30 - age1;
// console.log(yearsLeft);

// function expression
// const calcAge2 = function (dateOfBirth) {
//   return 2023 - dateOfBirth;
// };
// const age2 = calcAge2(1999);
// console.log(age2);

// 1. Kunle was born in 1997 and was compelled to get married at the age of 30.
// Write a JavaScript functional program to estimated the years left for
// Kunle to get married.

// function kunleAge(dateOfBirth) {
//   return 2023 - dateOfBirth;
// }
// const age = kunleAge(1997);
// const yearsLeft = 30 - age;
// console.log(
//   `Kunle current age is ${age} and years left to get married is ${yearsLeft}.`
// );

// // 2 using switch statement, write a program that tells your activities between jan
// // to may.

// // solution
// const monthActivity = prompt("Enter Month in lower case");
// switch (monthActivity) {
//   case "january":
//     console.log("I stay in ibadan working with Dawah Nigeria company");
//     break;
//   case "february":
//     console.log(
//       "I live in lagos study programming at bold links tech solution"
//     );
//     break;
//   case "march":
//     console.log("I studied bootstrap at bold links tech solution");
//     break;
//   case "april":
//     console.log("I work with css and bootstrap");
//     break;
//   case "may":
//     console.log("I work with javaScript");
//     break;
//   default:
//     console.log("I read Quran and teaches it");
// }

// // 3. Using ternary operator, write a logic that tells the
// // students to pay their school fees or get rusticated.
// const paymentMade = "congratulations";
// !paymentMade
//   ? console.log(`congratulations your payment have been made successfully `)
//   : console.log(
//       "sorry you havent made your payment else you will be rusticated"
//     );

// function numberType(evens, odds) {
//   const showYourNumber = `I have ${evens} evens numbers and ${odds} odds number`;
//   return showYourNumber;
// }
// const numberAvailable = numberType(6, 3);
// console.log(numberAvailable);
// const latestAvailableNumber = numberType(10, 5);
// console.log(latestAvailableNumber);

// const ageLimit = function (age) {
//   return age;
// };
// const currentYear = ageLimit(12);
// console.log(currentYear);

// // Arrow function
// const age2 = () => {
//   console.log("Hello Word");
// };
// age2();

// const age3 = () => console.log("hello word");
// age3();

// const yearsLeftToMarry = (birthYear) => {
//   const agePresent = 2023 - birthYear;
// };
// /*
// 1. Write a program using javascript function that output fruit, food, beverages and sweet
// solution
// */

// const package = function (food, fruit, beverages, sweet) {
//   const showPackage = `I have ${food}, ${fruit}, ${beverages} and ${sweet}`;
//   return showPackage;
// };
// const ramadanPackage = package("food", "fruit", "beverages", "sweet");
// console.log(ramadanPackage);

// /* write a program using arrow function to output the result of bold links students. the
// passMark is 40% while averageMark is 50%, goodGrade is 60-70% and exccellentGrade is 80-100%
//  solution
//  */
// const boldLinksResult = () => {
//   const passMark = 40;
//   const averageMark = 50;
//   const goodGrade = 60;
//   const exccellentGrade = 80;

//   const studentScore = prompt("Enter your score");

//   if (studentScore >= passMark && studentScore < averageMark) {
//     alert("You pass this course");
//   } else if (studentScore < passMark) {
//     alert("you failed this course");
//   } else if (
//     studentScore > passMark &&
//     studentScore >= averageMark &&
//     studentScore < goodGrade
//   ) {
//     alert(`You had average mark in this course`);
//   } else if (studentScore >= goodGrade && studentScore < exccellentGrade) {
//     alert("congratulations you have good grade");
//   } else if (studentScore >= exccellentGrade) {
//     alert("wow congratulations you have an excellent result");
//   }
// };
// boldLinksResult();

// function numberCall(numberCount) {
//   return numberCount * 6;
// }
// function numberType(even, odd) {
//   const evenCall = numberCall(even);
//   const oddCall = numberCall(odd);
//   return (numberTypeCount = `I have ${evenCall} even numbers and ${oddCall} odd numbers`);
// }
// console.log(numberType(6, 4));
// var fruit = "banana,apple, cashew";
// console.log(fruit.length);

// const sliceFruit = fruit.substring(7, 13);
// console.log(sliceFruit);

// // replace method with regular expression
// const replacedString = fruit.replace(/Apple/i, "orange");
// console.log(replacedString);

// const name = "John" + " " + "Doe";
// const nameFirst = "John";
// const names = nameFirst.concat(" q", "Doe");
// console.log(name, names);

const calcAverage = (a, b, c) => (a + b + c) / 3;
let delvScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 55, 49);
console.log(delvScore, koalasScore);
const checkWinner = function (avgDelphin, avgKoalas) {
  if (avgDelphin >= 2 * avgKoalas) {
    console.log(`delphis win the game (${avgDelphin} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDelphin) {
    console.log(`koalas win the game (${avgKoalas} vs. ${avgDelphin})`);
  } else {
    console.log("no winner");
  }
};
checkWinner(delvScore, koalasScore);
checkWinner(576, 111);
// Test 2
delvScore = calcAverage(40, 20, 25);
koalasScore = calcAverage(83, 55, 56);
console.log(delvScore, koalasScore);
checkWinner(delvScore, koalasScore);

/*
1. write a function that reverse a number
test data:  const number = 12345;

2. write a JavaScript function that arrange a value in alphabetical order
test data = 'paranoid'

3. Write a JavaScript function to split a string and convert it into an array of words.

test data:   const stringData = "John Doe";

4. Write a javascript function that returns ordinary apple from the below test data
Test Data: const favorite = 'I eat apples the whole day'

5. Write a javascript function that replaces Hello with Hi in the test data below.
Test data: const greetings = 'Hello World'
*/
const nameSorted = () => {
  let names = ["p", "a", "r", "a", "n", "o", "i", "d"];
  let sortedNames = names.sort();
  return sortedNames;
};
const sorting = nameSorted();
console.log(sorting);

const numberReverse = function () {
  let number = 12345;
  let num = number.toString();
  let num2 = num.split("");
  let num3 = num2.reverse();
  let num4 = num3.join("");
  return num4;
};
const reverseNum = numberReverse();
console.log(reverseNum);

// 3
const stringDataF = () => {
  const stringData = "John Doe";
  const sliptStringData = stringData.split();
  return sliptStringData;
};
const arrayDataCaller = stringDataF();
console.log(arrayDataCaller);

// 4
const appleExtract = () => {
  const favorite = "I eat apples the whole day";
  const cutFavorite = favorite.substr(6, 6);
  return cutFavorite;
};
const appleCut = appleExtract();
console.log(appleCut);

// 5
const textChange = () => {
  const greetings = "Hello World";
  const replaceGreeting = greetings.replace("Hello World", "Hi lovers");
  return replaceGreeting;
};
const greetingChange = textChange();
console.log(greetingChange);
