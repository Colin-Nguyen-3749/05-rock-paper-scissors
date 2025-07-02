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

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  console.log("You chose: Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  console.log("You chose: Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  console.log("You chose: Scissors ✂️");
});