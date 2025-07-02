// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// This function randomly picks "Rock", "Paper", or "Scissors" for the computer
function getComputerChoice() {
  // Create a variable to store a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Use if-else statements to return the choice based on the random number
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// This function shows both the player's and computer's choices on the page
function playGame(playerChoice) {
  // Get the computer's choice by calling the function
  const computerChoice = getComputerChoice();

  // Create a message using template literals to show choices
  let message = `You chose: ${playerChoice} <br> Computer chose: ${computerChoice}`;

  // Add logic to decide who wins or if it's a tie
  let result = "";

  // If both choices are the same, it's a tie
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  }
  // Check if player wins
  else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!";
  }
  // If not a tie and player doesn't win, computer wins
  else {
    result = "Computer wins!";
  }

  // Add the result to the message
  message = `${message} <br> <strong>${result}</strong>`;

  // Find the result div in the HTML
  const resultDiv = document.getElementById("result");

  // Show the message on the page
  resultDiv.innerHTML = message;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  // Call playGame with "Rock" when the rock button is clicked
  playGame("Rock");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  // Call playGame with "Paper" when the paper button is clicked
  playGame("Paper");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  // Call playGame with "Scissors" when the scissors button is clicked
  playGame("Scissors");
});