let playerScore = 0;
let computerScore = 0;
let amountOfRounds = 0;
let winMessage = "You win!";
let lossMessage = "You lose!";
let tieMessage = "It's a tie!";
const CHOICES = {
  PAPER: "paper",
  SCISSORS: "scissors",
  ROCK: "rock",
};

function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return CHOICES.ROCK;
  } else if (number === 2) {
    return CHOICES.PAPER;
  } else {
    return CHOICES.SCISSORS;
  }
}

let playerSelection = () => {
  let playerSelection = prompt("Pick your choice! Rock, Paper or Scissors!");
  return playerSelection.toLowerCase();
};

function playRound(playerSelection, computerPlay) {
  //Rock options
  if (playerSelection == CHOICES.ROCK && computerPlay == CHOICES.SCISSORS) {
    playerScore++;
    amountOfRounds++;
    return `${winMessage} ${CHOICES.ROCK} crushes ${CHOICES.SCISSORS}`;
  } else if (playerSelection == CHOICES.ROCK && computerPlay == CHOICES.PAPER) {
    computerScore++;
    amountOfRounds++;
    return `${lossMessage} ${CHOICES.PAPER} covers ${CHOICES.ROCK}`;
  } else if (playerSelection == CHOICES.ROCK && computerPlay == CHOICES.ROCK) {
    amountOfRounds++;
    return `${tieMessage} ${CHOICES.ROCK} can't crush ${CHOICES.ROCK}`;
    //Paper options
  } else if (playerSelection == CHOICES.PAPER && computerPlay == CHOICES.ROCK) {
    playerScore++;
    amountOfRounds++;
    return `${winMessage} ${CHOICES.PAPER} covers ${CHOICES.ROCK}`;
  } else if (
    playerSelection == CHOICES.PAPER &&
    computerPlay == CHOICES.SCISSORS
  ) {
    computerScore++;
    amountOfRounds++;
    return `${lossMessage} ${CHOICES.PAPER} gets cut by ${CHOICES.SCISSORS}`;
  } else if (
    playerSelection == CHOICES.PAPER &&
    computerPlay == CHOICES.PAPER
  ) {
    amountOfRounds++;
    return `${tieMessage} ${CHOICES.PAPER} can't cover ${CHOICES.PAPER}`;
    //Scissor options
  } else if (
    playerSelection == CHOICES.SCISSORS &&
    computerPlay == CHOICES.ROCK
  ) {
    computerScore++;
    amountOfRounds++;
    return `${lossMessage} ${CHOICES.SCISSORS} gets crushed by ${CHOICES.ROCK}`;
  } else if (
    playerSelection == CHOICES.SCISSORS &&
    computerPlay == CHOICES.PAPER
  ) {
    playerScore++;
    amountOfRounds++;
    return `${winMessage} ${CHOICES.SCISSORS} cuts ${CHOICES.PAPER}`;
  } else
    playerSelection == CHOICES.SCISSORS && computerPlay == CHOICES.SCISSORS;
  amountOfRounds++;
  return `${tieMessage} ${CHOICES.SCISSORS} can't cut ${CHOICES.SCISSORS}`;
}

function scoreBoard() {
  const computerScoreDisplay = document.getElementById("computerScore");
  const playerScoreDisplay = document.getElementById("playerScore");
  const amountOfRoundsDisplay = document.getElementById("amountOfRounds");
  computerScoreDisplay.innerText = "CPU: " + computerScore;
  playerScoreDisplay.innerText = "Player: " + playerScore;
  amountOfRoundsDisplay.innerText = "Rounds: " + amountOfRounds;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection(), computerPlay()));
    scoreBoard();
    // playRound(playerSelection(), computerPlay());
    // scoreBoard();
  }
}
