// ============================================
// 02 - Control Flow Master Guide
// ============================================

// --------------------------------------------
// 1. CONDITIONAL STATEMENTS
// --------------------------------------------

// Simple IF: Executes only if the condition evaluates to true
let age = 19;
if (age >= 18) {
  console.log("You are an adult");
}

// IF-ELSE Branching: Executes 'if' block when true; falls back to 'else' when false
let userAge = 17;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied: Minor");
}

// Chained Decision Trees (IF - ELSE IF - ELSE)
// Evaluates top-to-bottom; stops at the FIRST true condition
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}


// --------------------------------------------
// 2. COMPARISON OPERATORS
// --------------------------------------------

// Relational: > (greater), < (less), >= (greater/equal), <= (less/equal)
console.log(5 > 3);   // true
console.log(5 <= 3);  // false

// Equality: Abstract (==) vs Strict (===)
// RULE: ALWAYS default to strict equality (===) to prevent accidental type coercion.

console.log(5 == "5");   // true  (Converts string to number implicitly - Dangerous)
console.log(5 === "5");  // false (Strict: Compares both VALUE and TYPE)
console.log(5 !== "5");  // true  (Strictly NOT equal)


// --------------------------------------------
// 3. LOGICAL OPERATORS & SHORT-CIRCUITING
// --------------------------------------------

// && (AND) -> ALL conditions must be true
// || (OR)  -> AT LEAST ONE condition must be true
// !  (NOT) -> Inverts boolean value

let hasPassword = true;
let hasRecoveryCode = false;

if (hasPassword || hasRecoveryCode) {
  console.log("Authenticated"); // Evaluates to true
}

// CRITICAL CONCEPT: Parentheses Grouping & Precedence
// Operator Precedence: ! executed first, then &&, then ||
// Use () to force evaluation order (e.g., in access control checks)

let isBanned = false;
let hasPermission = false;
let isAdmin = true;

// Correct: Not banned AND (either has permission OR is admin)
if (!isBanned && (hasPermission || isAdmin)) {
  console.log("You are allowed."); // true && (false || true) => true
}

// Short-Circuit Behavior:
// && stops at the FIRST falsy value and returns it.
// || stops at the FIRST truthy value and returns it.
let username = "Rohan";
let displayName = username || "Guest"; // "Rohan" (Short-circuits at truthy value)


// --------------------------------------------
// 4. SWITCH STATEMENTS
// --------------------------------------------

// Useful for evaluating a single expression against multiple discrete values.
// NOTE: Uses strict comparison (===) under the hood. Always use 'break' to avoid fallthrough.

let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Regular day"); // Catch-all for unmatched cases
}

// Multi-case fallthrough (Intentional grouping):
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
  case "C":
    console.log("Passed"); // Triggers for both 'B' and 'C'
    break;
  default:
    console.log("Needs Improvement");
}


// --------------------------------------------
// 5. TERNARY OPERATOR (INLINE CONDITIONALS)
// --------------------------------------------

// Syntax: condition ? expressionIfTrue : expressionIfFalse
// Best used for quick assignments, not complex logic blocks.

let score = 80;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result); // "Pass"


// --------------------------------------------
// 6. REAL-WORLD COMPLEX DECISION TREE (PRACTICE)
// --------------------------------------------

// Multi-level access system checking constraints in strict priority order
let ageInput = 19;
let hasID = true;      // JS is case-sensitive! (hasID !== hasId)
let userIsBanned = false;
let role = "user";

if (ageInput < 18) {
  console.log("Access Denied: Underage.");
} else if (!hasID) {
  console.log("Access Denied: ID required.");
} else if (userIsBanned) {
  console.log("Access Denied: Account banned.");
} else if (role === "admin") {
  console.log("Welcome Admin! Full access granted.");
} else {
  console.log("Welcome User! Standard access granted.");
}
