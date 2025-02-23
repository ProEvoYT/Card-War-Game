let playerScore = 0;
let computerScore = 0;

document.getElementById("draw").addEventListener("click", playRound);
document.getElementById("restart").addEventListener("click", restartGame);
document.getElementById("name-form").addEventListener("submit", updateName);

function playRound() {
  const playerCard = Math.floor(Math.random() * 10) + 1; // Random 1-10
  const computerCard = Math.floor(Math.random() * 10) + 1;

  document.getElementById("player-card").textContent = playerCard;
  document.getElementById("computer-card").textContent = computerCard;

  if (playerCard > computerCard) {
    playerScore = playerScore + 1;
    document.getElementById("result").textContent = "You win this round!";
  } else if (computerCard > playerCard) {
    computerScore = computerScore + 1;
    document.getElementById("result").textContent = "Computer wins this round!";
  } else {
    document.getElementById("result").textContent = "It’s a tie!";
  }

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  if (playerScore === 5) {
    document.getElementById("result").textContent = "You win the game!";
    document.getElementById("draw").disabled = true;
  } else if (computerScore === 5) {
    document.getElementById("result").textContent = "Computer wins the game!";
    document.getElementById("draw").disabled = true;
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
  document.getElementById("player-card").textContent = "?";
  document.getElementById("computer-card").textContent = "?";
  document.getElementById("result").textContent = "Click Draw to start!";
  document.getElementById("draw").disabled = false;
  document.getElementById("player-score-label").textContent = playerName + ": ";
  document
    .getElementById("player-score-label")
    .appendChild(document.getElementById("player-score"));
}

function updateName(event) {
  event.preventDefault(); // Stops page refresh
  playerName = document.getElementById("player-name").value || "Player"; // Use input or default
  document.getElementById("player-score-label").textContent = playerName;
  document.appendChild(document.getElementById("player-score"));
  document.getElementById("player-name").value = ""; // Clear input
}
