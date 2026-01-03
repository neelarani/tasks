/*
  1.Task: Array Filtering and Mapping

  - Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map the remaining people to an array of names.Print the final result.
*/
const people = [
  { name: 'Neela', age: 22, gender: 'Female' },
  { name: 'Rasel', age: 32, gender: 'Male' },
  { name: 'Rahin', age: 44, gender: 'Male' },
  { name: 'Rima', age: 23, gender: 'Female' },
  { name: 'Ratna', age: 26, gender: 'Female' },
];

const getMaleNames = persons => {
  return persons
    .filter(person => person.gender !== 'Female')
    .map(person => person.name);
};

console.log(getMaleNames(people));

/*
2.Task: Object Manipulation

-Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

const books = [
  { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 },
  { title: 'Atomic Habits', author: 'James Clear', year: 2018 },
  { title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
];

const getBookTitles = bookArray => {
  return bookArray.map(book => book.title);
};

console.log(getBookTitles(books));

/**
3.Task: Function Composition

-Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

const square = num => {
  return num * num;
};

const double = num => {
  return num * 2;
};

const addFive = num => {
  return num + 5;
};

const composedFunction = num => {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);

  return result;
};
console.log(composedFunction(2));
