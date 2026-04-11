// Day 4 Project: Advanced Number Guessing Game

// Function to start the game
function startGame() {
    let secretNumber = Math.floor(Math.random() * 20) + 1;
    let attempts = 5;
    let guessedCorrectly = false;

    alert("Guess the number between 1 and 20. You have 5 attempts.");

    // Loop for attempts
    while (attempts > 0) {
        let guess = Number(prompt("Enter your guess:"));

        if (guess === secretNumber) {
            alert("🎉 Correct! You guessed it!");
            guessedCorrectly = true;
            break;
        } else if (guess > secretNumber) {
            alert("Too high!");
        } else if (guess < secretNumber) {
            alert("Too low!");
        } else {
            alert("Invalid input!");
        }

        attempts--;
        alert("Attempts left: " + attempts);
    }

    // Final result
    if (!guessedCorrectly) {
        alert("😢 You lost! The number was " + secretNumber);
    }
}

// Run the game
startGame();
