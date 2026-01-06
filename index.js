/*
  1.Task: Array Filtering and Mapping

  - Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map the remaining people to an array of names.Print the final result.
*/
const people = [
  { name: "Neela", age: 22, gender: "Female" },
  { name: "Rasel", age: 32, gender: "Male" },
  { name: "Rahin", age: 44, gender: "Male" },
  { name: "Rima", age: 23, gender: "Female" },
  { name: "Ratna", age: 26, gender: "Female" },
];

const getMaleNames = (persons) => {
  return persons
    .filter((person) => person.gender !== "Female")
    .map((person) => person.name);
};

console.log(getMaleNames(people));

/*
2.Task: Object Manipulation

-Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
];

const getBookTitles = (bookArray) => {
  return bookArray.map((book) => book.title);
};

console.log(getBookTitles(books));

/**
3.Task: Function Composition

-Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

const square = (num) => {
  return num * num;
};

const double = (num) => {
  return num * 2;
};

const addFive = (num) => {
  return num + 5;
};

const composedFunction = (num) => {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);

  return result;
};
console.log(composedFunction(2));

/**
 * 4.Task: Sorting Objects

-Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
 */

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Ford", model: "Mustang", year: 2019 },
];

const sortCarsByYear = (carArr) => {
  return carArr.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));

/**
 * 5.Task: Find and Modify

-Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
 */
const persons = [
  { name: "Nila", age: 21 },
  { name: "Rafi", age: 35 },
  { name: "Sumi", age: 27 },
  { name: "Ankus", age: 30 },
  { name: "Rabeya", age: 24 },
];

const updateAgeByName = (array, personName, newAge) => {
  for (let person of array) {
    if (person.name === personName) {
      person.age = newAge;
      break;
    }
  }
  return array;
};

const updatedPersons = updateAgeByName(persons, "Nila", 28);

console.log(updatedPersons);

/**
 * 6.Task: Array Reduction

-Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */

const numbers = [5, 12, 8, 21, 3, 17, 10, 2];

const sumEvenNumbers = (arr) => {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
};

const evenSum = sumEvenNumbers(numbers);
console.log(evenSum);

/**
 * 
 7. Task: Leap Year Checker

-Write a function that determines whether a given year is a leap year.

Example: Happy New Year
 */

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

// Example
const year = 2024;
if (isLeapYear(year)) {
  console.log("Happy New Year, It's a Leap Year!");
} else {
  console.log("Happy New Year, It's not a Leap Year!");
}
