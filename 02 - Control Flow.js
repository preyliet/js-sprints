// ============================================
// 02 - Control Flow
// ============================================


// --------------------------------------------
// 1. IF
// --------------------------------------------
/*
AN IF STATEMENT CHECKS WHETHER A CONDITION IS TRUE. */
{
let age = 19;

if (age >= 18) {
    console.log("You are an adult");
}
}
// This was true that's why we got the output "You are an adult".
{
let age = 17;

if (age >= 18) {
    console.log("You are an adult");
}
}
// Here nothing will be printed because the condition is false.




// --------------------------------------------
// 2. Conditions
// --------------------------------------------

/*
A CONDITION IS AN EXPRESSION THAT EVALUATES TO TRUE OR FALSE.

The most common conditions are comparison operators. 

The important ones

> greater than
< less than
>= greater than or equal to
<= less than or equal to
== equal to
!= not equal to 
=== strictly equal to
!== not strictly equal to

Examples 

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 <= 3); // false
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 === 3); // false
console.log(5 !== 3); // true       
*/




// --------------------------------------------
// 3. Else 
// --------------------------------------------
/*
WHAT IF YOU WANT JAVASCCRIPTTO DO SOMETHING WHEN THE CONDITION IS FALSE?```     

AN ELSE STATEMENT IS USED TO SPECIFY A BLOCK OF CODE TO BE EXECUTED IF THE CONDITION IS FALSE. */
{
let age = 17;           

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are A minor");
}
}

// IT'S FALSE, SO IT GOES TO THE ELSE BLOCK AND PRINTS "You are A minor".



// --------------------------------------------
// 4. ELSE IF
// --------------------------------------------
/*
SOMETIMES YOU HAVE MORE THAN TWO CONDITIONS TO CHECK.

WHAT IF YOU WANT TO CHECK MULTIPLE CONDITIONS?*/

let marks  = 85;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}



// --------------------------------------------
// 5. == vs === 
// --------------------------------------------
/*
 YOU WILL GENERALLY WANT TO USE === INSTEAD OF ==. 

FOR EXAMPLE, 

console.log(5 === 5);

We get TRUE.

BUT

console.log(5 === "5");

We get FALSE because one is a number and the other is a string.

=== Checks both value and type.

*/

----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Control Flow Part 2: 

Now we move to something very important.

Logical operators

Sometimes one condition isn't enough.

For example:

"The user is 18 AND has a valid ID."

Or:

"The user can log in if they have the correct password OR are using a recovery code."

JavaScript gives us three main logical operators:

&&    AND
||    OR
!     NOT

Let's learn them one at a time.

1. The AND operator (&&)

Both conditions must be true for the whole expression to be true.

For example: */

{
    let age = 18;
    let hasId = true;

    if (age >=18 && hasId === true) {
        console.log("You can enter.");
    }
}

// You can Enter. 

/* But if one of the conditions is false, the whole expression will be false. */

{
    let age = 18;
    let hasId = false;

    if (age >=18 && hasId === true) {
        console.log("You can enter.");
    } else {
        console.log("You cannot enter.");
    }
}

/*The condition fails and You cannot enter.

2. The OR operator (||)

Only one of the conditions needs to be true for the whole expression to be true. 
*/
{
let hasPassword = false;
let hasRecoveryCode = true; 

if (hasPassword === true || hasRecoveryCode === true) {

    console.log("You can log in.");
}
}

/*Here, the user has a recovery code, so they can log in. And false || true → true

ONLY THIS WILL BE FALSE: false || false → false

3. NOT (!)

! reverses a boolean.*/

let isLoggedIn = true;

console.log(!isLoggedIn);

/* OUTPUT False

BECAUSE isLoggedIn is true, but we reversed it with !, so the output is false.

AND  true → false
     false → true */

// EXAMPLE:

let isBlocked = false;

if (!isBlocked) {
    console.log("You can continue.");
}
