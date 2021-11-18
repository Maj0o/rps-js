let playerScore = 0;
let computerScore = 0;
let amountOfRounds = 0;
let winMessage = "You win!";
let lossMessage = "You lose!";
let tieMessage = "It's a tie!";

let playerSelection = () => {
  let playerSelection = prompt("Pick your choice! Rock, Paper or Scissors!");
  return playerSelection.toLowerCase();
};

const computerPlay = () => {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

const playRound = (playerSelection, computerPlay) => {
  amountOfRounds++;
  gameLogic();
};

const gameLogic = () => {
  //Rock options
  if (playerSelection == "rock" && "scissors") {
    return winMessage;
  } else if (playerSelection == "rock" && "paper") {
    return lossMessage;
  } else if (playerSelection == "rock" && "rock") {
    return tieMessage;
  }
};

const scoreBoard = () => {
  const computerScoreDisplay = document.getElementById("computerScore");
  const playerScoreDisplay = document.getElementById("playerScore");
  computerScoreDisplay.innerText = computerScore;
  playerScoreDisplay.innerText = playerScore;
};
