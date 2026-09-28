// ============================================
// 04 - Functions
// ============================================

// --------------------------------------------
// 1. FUNCTION DECLARATION & CALLING
// --------------------------------------------
// Functions are reusable blocks of code.
// Declaring a function defines it; invoking `()` executes it.

function greet() {
  console.log("Hello Rohan");
}

greet(); // Invocation / Call -> Output: "Hello Rohan"


// --------------------------------------------
// 2. PARAMETERS VS. ARGUMENTS
// --------------------------------------------
// Parameter -> Placeholder variable defined in function (Input slot)
// Argument  -> Actual value passed into function during invocation

function greetUser(name) { // 'name' is a parameter
  console.log(`Hello ${name}`);
}

greetUser("Rohan"); // "Rohan" is an argument -> Output: "Hello Rohan"
greetUser("Rahul"); // Output: "Hello Rahul"


// --------------------------------------------
// 3. MULTIPLE PARAMETERS & DEFAULT VALUES
// --------------------------------------------
// Separate parameters with commas.
// Default parameters provide fallbacks when arguments are missing/undefined.

function calculateTotal(price, quantity = 1) { // quantity defaults to 1
  return price * quantity;
}

console.log(calculateTotal(500, 3)); // 1500
console.log(calculateTotal(500));    // 500 (uses default quantity = 1)


// --------------------------------------------
// 4. THE RETURN KEYWORD
// --------------------------------------------
// console.log() -> Displays data to stdout (does not return usable value).
// return        -> Sends a value back to caller AND exits the function immediately.

function add(a, b) {
  return a + b;
  console.log("This line will never execute!"); // Unreachable code after return
}

let sum = add(10, 20); // 'sum' receives returned value 30
console.log(sum * 2);  // Output: 60


// --------------------------------------------
// 5. FUNCTION EXPRESSIONS VS. ARROW FUNCTIONS
// --------------------------------------------

// Function Expression (Storing function inside a variable)
const multiply = function(a, b) {
  return a * b;
};

// Arrow Function (Modern, concise syntax)
const subtract = (a, b) => {
  return a - b;
};

// One-liner Arrow Function (Implicit Return: drops {} and 'return')
const square = num => num * num;

console.log(multiply(4, 5)); // 20
console.log(subtract(10, 4)); // 6
console.log(square(5));      // 25


// --------------------------------------------
// 6. HELPER & UTILITY PATTERNS (REAL-WORLD)
// --------------------------------------------

// Combining functions with ternary operators & string methods
const isValidEmail = email => email.includes("@");

const isEven = number => number % 2 === 0;

console.log(isValidEmail("rohan@gmail.com")); // true
console.log(isEven(9));                        // false


// --------------------------------------------
// 7. FUNCTION SCOPE BASICS
// --------------------------------------------
// Variables declared inside a function belong exclusively to that scope.

function checkScope() {
  let secret = "API_KEY_12345"; // Local scope
  console.log(secret);         // Works inside
}

checkScope();
// console.log(secret); // ReferenceError: secret is not defined outside


// --------------------------------------------
// 8. PRACTICAL COMBINED EXAMPLE
// --------------------------------------------

function getGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  return "Fail";
}

let studentName = "Rohan";
let studentMarks = 85;

console.log(`Student: ${studentName}`);
console.log(`Grade: ${getGrade(studentMarks)}`); // Output: Student: Rohan, Grade: B


// --------------------------------------------
// QUICK RECAP CHEAT SHEET
// --------------------------------------------
/*
  Declaration : function name(param) { ... }
  Expression  : const name = function(param) { ... }
  Arrow Fn    : const name = (param) => value
  Default Val : function(name = "Guest")
  return      : Sends value back + exits function immediately
  Scope       : Inner variables aren't visible outside the function
*/
