// ============================================
// 03 - Loops & Iteration
// ============================================

// --------------------------------------------
// 1. FOR LOOP
// --------------------------------------------
// Best when you know the EXACT number of iterations in advance.
// Syntax: for (initializer; condition; final-expression)

for (let i = 1; i <= 5; i++) {
  console.log("Iteration count:", i);
}

// --------------------------------------------
// 2. WHILE LOOP
// --------------------------------------------
// Best when repeating based on a condition rather than a known count.
// Keeps running AS LONG AS the condition remains true.

let energy = 3;

while (energy > 0) {
  console.log("Playing... Energy left:", energy);
  energy--; // Must update the variable to avoid infinite loops!
}

// --------------------------------------------
// 3. JUMP CONTROLS: BREAK & CONTINUE
// --------------------------------------------
// break    -> Instantly exits the loop entirely.
// continue -> Skips the rest of the current turn and moves to the next iteration.

// Example: Skip #2, terminate early at #4
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue; // Skips number 2
  if (i === 4) break;    // Stops the loop completely when i hits 4
  console.log(i);        // Output: 1, 3
}

// --------------------------------------------
// 4. NESTED LOOPS
// --------------------------------------------
// A loop inside another loop.
// RULE: For every 1 turn of the outer loop, the inner loop runs completely.

for (let i = 1; i <= 3; i++) {       // Outer loop (Row)
  for (let j = 1; j <= 2; j++) {   // Inner loop (Column)
    console.log(`Row: ${i}, Col: ${j}`);
  }
}
// Total executions = (Outer count) * (Inner count) = 3 * 2 = 6

// --------------------------------------------
// 5. SPECIALIZED LOOPS: FOR...OF vs FOR...IN
// --------------------------------------------

// FOR...OF -> Iterates over VALUES of an iterable (Arrays, Strings)
let techStack = ["JavaScript", "Go", "Node.js"];

for (let tech of techStack) {
  console.log("Tech:", tech); // Output: JavaScript, Go, Node.js
}

// FOR...IN -> Iterates over KEYS / PROPERTIES of an Object
let user = {
  name: "Rohan",
  role: "Developer",
  level: "Beginner"
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`); 
  // Output: name: Rohan, role: Developer, level: Beginner
}

// --------------------------------------------
// QUICK RECAP CHEAT SHEET
// --------------------------------------------
/*
  for       --> Run code a specific number of times.
  while     --> Run code while a condition is true.
  break     --> Kill the loop immediately.
  continue  --> Skip current turn, jump to next.
  for...of  --> Loop over Array VALUES.
  for...in  --> Loop over Object KEYS.
*/
