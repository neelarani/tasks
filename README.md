# JavaScript Problem Solving – Interview Practice

This repository contains common JavaScript problem-solving tasks that are frequently asked in technical interviews.  
Each task focuses on core JavaScript concepts like arrays, objects, functions, sorting, and functional programming.

## 1. Array Filtering and Mapping

**Task:**  
Create an array of objects representing people with `name`, `age`, and `gender`.  
Filter out all females and map the remaining people to an array of names.

```js
const people = [
  { name: "Alex", age: 25, gender: "male" },
  { name: "Sara", age: 22, gender: "female" },
  { name: "John", age: 30, gender: "male" },
];

const result = people.filter((p) => p.gender !== "female").map((p) => p.name);

console.log(result);
```

## 2. Object Manipulation

Problem Statement

Create an array of book objects with title, author, and year.
Return a new array containing only the book titles.

```js
const books = [
  { title: "Book One", author: "Author A", year: 2020 },
  { title: "Book Two", author: "Author B", year: 2021 },
];

const titles = books.map((book) => book.title);
console.log(titles);
```

## 3 Problem Statement

Write three functions:

- One to square a number

- One to double a number

- One to add 5 to a number

Compose them into a single function.

```js
const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;

const composedFunction = (n) => addFive(double(square(n)));
console.log(composedFunction(3));
```

## 4 4. Sorting Objects

Problem Statement

Create an array of car objects and sort them by manufacturing year in ascending order.

```js
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "BMW", model: "X5", year: 2020 },
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);
```

## 5. Find and Modify

Problem Statement

Search for a person by name in an array of objects.
If found, update their age.

```js
const users = [
  { name: "Neela", age: 21 },
  { name: "Rahim", age: 25 },
];

function updateAge(name, newAge) {
  const user = users.find((u) => u.name === name);
  if (user) user.age = newAge;
}

updateAge("Neela", 22);
console.log(users);
```

## 6. Array Reduction

Problem Statement

Use the reduce method to calculate the sum of all even numbers in an array.

```js
const numbers = [1, 2, 3, 4, 6, 7, 8];

const sumEven = numbers.reduce((sum, num) => {
  return num % 2 === 0 ? sum + num : sum;
}, 0);

console.log(sumEven);
```

## 7. Leap Year Checker

Problem Statement

Write a function to determine whether a given year is a leap year.

```js
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

console.log("Happy New Year", isLeapYear(2024));
```

## 8. Task: Unique Values

**Description:**
Create an array of numbers with duplicate values. Filter out duplicates and
return an array of unique numbers.

**Goal:**

- Learn how to remove duplicates
- Practice using `Set()` or `filter()`

---

## 9. Task: Advanced Sorting

**Description:**
Create an array of student objects with `name` and `grades`. Sort students by
**average grade** in descending order.

**Goal:**

- Work with nested data
- Sort by computed property

---

## 10. Task: Functional Programming - Reduce

**Description:**
Given an array of objects with `quantity` and `price`, use `reduce()` to
calculate the total value.

**Goal:**

- Apply functional programming
- Aggregate object properties

---

### Notes

- These tasks cover **array methods, object manipulation, function composition,
  sorting, searching, and reduce**
- Excellent for **JavaScript interview preparation**
- Each task demonstrates **clean, modular, and readable code**

---
