let playerScore = 0;
let computerScore = 0;
let amountOfRounds = 0;
let winMessage = "You win!";
let lossMessage = "You lose!";
let tieMessage = "It's a tie!";
const PAPER = "paper";
const SCISSORS = "scissors";
const ROCK = "rock";

const scoreBoard = () => {
  const computerScoreDisplay = document.getElementById("computerScore");
  const playerScoreDisplay = document.getElementById("playerScore");
  const amountOfRoundsDisplay = document.getElementById("amountOfRounds");
  computerScoreDisplay.innerText = "CPU: " + computerScore;
  playerScoreDisplay.innerText = "Player: " + playerScore;
  amountOfRoundsDisplay.innerText = "Rounds: " + amountOfRounds;
};

const computerPlay = () => {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return ROCK;
  } else if (number === 2) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

let playerSelection = () => {
  let playerSelection = prompt("Pick your choice! Rock, Paper or Scissors!");
  return playerSelection.toLowerCase();
};

const playRound = (playerSelection, computerPlay) => {
  //Rock options
  amountOfRounds++;
  if (playerSelection == ROCK && computerPlay == SCISSORS) {
    playerScore++;
    return winMessage;
  } else if (playerSelection == ROCK && computerPlay == PAPER) {
    computerScore++;
    return lossMessage;
  } else if (playerSelection == ROCK && computerPlay == ROCK) {
    return tieMessage;
    //Paper options
  } else if (playerSelection == PAPER && computerPlay == ROCK) {
    playerScore++;
    return lossMessage;
  } else if (playerSelection == PAPER && computerPlay == SCISSORS) {
    computerScore++;
    return lossMessage;
  } else if (playerSelection == PAPER && computerPlay == PAPER) {
    return tieMessage;
    //Scissor options
  } else if (playerSelection == SCISSORS && computerPlay == ROCK) {
    computerScore++;
    return lossMessage;
  } else if (playerSelection == SCISSORS && computerPlay == PAPER) {
    playerScore++;
    return winMessage;
  } else playerSelection == SCISSORS && computerPlay == SCISSORS;
  return tieMessage;
};

const game = () => console.log(game);
