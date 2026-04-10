// Day 2 JavaScript Project: Number Guessing Game

// Generate a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask user for input
let userGuess = prompt("Guess a number between 1 and 10:");

// Convert input to number
userGuess = Number(userGuess);

// Check the guess
if (userGuess === secretNumber) {
    alert("🎉 Correct! You guessed the number!");
} else if (userGuess > secretNumber) {
    alert("Too high! The correct number was " + secretNumber);
} else if (userGuess < secretNumber) {
    alert("Too low! The correct number was " + secretNumber);
} else {
    alert("Invalid input! Please enter a number.");
}
