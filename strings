JavaScript Template Strings & Interpolation Notes

In JavaScript, a string is used to store text. We can create strings using single quotes ' ', double quotes " ", or backticks ` `. Most of the time developers use single quotes for normal text, but backticks are special because they create something called a template string. Template strings have extra features that normal strings do not have, like interpolation and multi-line strings.

Template Strings

A template string is created using backticks:

`hello`

Backticks are different from single quotes because JavaScript can execute code inside them using ${}.

Interpolation

Interpolation means inserting a value or JavaScript code directly inside a string. The syntax for interpolation is:

${}

Whatever is written inside ${} gets calculated by JavaScript and then inserted into the string.

Example:

const name = 'Rohan';

console.log(`Hello ${name}`);

Output:

Hello Rohan

Here, ${name} takes the value stored in the variable name and places it inside the string.

Interpolation can also run calculations.

Example:

console.log(`2 + 2 = ${2 + 2}`);

Output:

2 + 2 = 4

JavaScript first calculates 2 + 2, then inserts the answer into the string.

Why $ is Used

The dollar sign $ is part of the interpolation syntax:

${}

The $ itself does not mean money here. JavaScript simply uses ${} as a special symbol to show:

“insert JavaScript code here.”

So whenever JavaScript sees ${}, it runs the code inside it.

Example:

`${10 * 2}`

Output:

20
Dollar Symbol in Strings

If we want to show a real dollar sign in the output, we type a normal $.

Example:

console.log(`Price: $50`);

Output:

Price: $50

Sometimes we use both together.

Example:

console.log(`Total: $${20 + 5}`);

Output:

Total: $25

Explanation:

First $ → actual dollar symbol
${20 + 5} → JavaScript calculation
Concatenation vs Interpolation

Before template strings, developers used concatenation to join strings using +.

Example:

const name = 'Rohan';

console.log('Hello ' + name);

Output:

Hello Rohan

This works, but when code becomes bigger it looks messy because there are too many + signs.

Example:

const price = 100;
const tax = 20;

console.log('Total price is ' + (price + tax) + ' rupees');

Interpolation is cleaner and easier to read.

const price = 100;
const tax = 20;

console.log(`Total price is ${price + tax} rupees`);

Output:

Total price is 120 rupees

This is why interpolation is recommended over concatenation.

Multi-line Strings

Another special feature of template strings is multi-line strings. Normally, single quotes cannot easily go to the next line, but backticks can.

Example:

console.log(`Hello
I am learning
JavaScript`);

Output:

Hello
I am learning
JavaScript

This keeps the same line breaks in the output.

Multi-line strings only work with backticks.

Important Rule
Use single quotes ' ':
for normal strings

Example:

'hello'
Use backticks ` `:
when using ${}
when writing multi-line strings

Example:

`Hello ${name}`
Common Mistake

Many beginners accidentally use single quotes with ${}.

Wrong:

'Hello ${name}'

Output:

Hello ${name}

Because single quotes treat everything as plain text.

Correct:

`Hello ${name}`

Output:

Hello Rohan
