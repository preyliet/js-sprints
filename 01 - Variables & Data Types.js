// ============================================
// 01 - VARIABLES & DATA TYPES
// ============================================


// --------------------------------------------
// 1. VARIABLES
// --------------------------------------------

let age = 19;

console.log(age);

// Variables declared with let can be reassigned
age = 20;

console.log(age);


// --------------------------------------------
// 2. CONST
// --------------------------------------------

const name = "Rohan";

console.log(name);

// const variables cannot be reassigned
// name = "Alex"; // ❌ Error


// --------------------------------------------
// 3. DATA TYPES
// --------------------------------------------

// String
let username = "Rohan";

// Number
let userAge = 19;
let price = 99.50;

// Boolean
let isStudent = true;
let isLoggedIn = false;

// Undefined
let city;

// Null
let selectedUser = null;


// --------------------------------------------
// 4. TYPEOF
// --------------------------------------------

console.log(typeof username);
console.log(typeof userAge);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof selectedUser);


// --------------------------------------------
// 5. TEMPLATE LITERALS
// --------------------------------------------

let firstName = "Rohan";
let lastName = "Nilatkar";
let myAge = 19;

console.log(`My name is ${firstName} ${lastName}.`);
console.log(`I am ${myAge} years old.`);


// --------------------------------------------
// 6. ARITHMETIC OPERATORS
// --------------------------------------------

let a = 20;
let b = 6;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder


// --------------------------------------------
// 7. ASSIGNMENT OPERATORS
// --------------------------------------------

let points = 100;

points += 50;
console.log(points);

points -= 20;
console.log(points);

points *= 2;
console.log(points);

points /= 2;
console.log(points);


// --------------------------------------------
// 8. INCREMENT & DECREMENT
// --------------------------------------------

let count = 10;

count++;
console.log(count); // 11

count--;
console.log(count); // 10


// --------------------------------------------
// 9. STRING CONCATENATION
// --------------------------------------------

let first = "Rohan";
let last = "Nilatkar";

let fullName = first + " " + last;

console.log(fullName);


// --------------------------------------------
// 10. TEMPLATE LITERAL WITH MULTIPLE VALUES
// --------------------------------------------

let studentName = "Rohan";
let studentAge = 19;
let studentStatus = true;
let favoriteNumber = 7;

console.log(
    `My name is ${studentName}, I am ${studentAge} years old, and I am a student: ${studentStatus}.`
);


// --------------------------------------------
// 11. COMBINING VARIABLES & OPERATORS
// --------------------------------------------

console.log(studentAge + favoriteNumber);
console.log(studentAge * favoriteNumber);
console.log(studentAge % favoriteNumber);


// --------------------------------------------
// 12. let vs const
// --------------------------------------------

// let can be reassigned
let score = 50;

score = 100;

console.log(score);


// const cannot be reassigned
const fixedAge = 19;

// fixedAge = 20; // ❌ Error


// ============================================
// END OF TOPIC 01
// ============================================
