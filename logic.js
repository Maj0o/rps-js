let playerScore = 0;
let computerScore = 0;
let amountOfRounds = 0;

const MESSAGES = {
  winMessage: "You win!",
  lossMessage: "You lose!",
  tieMessage: "It's a tie!",
  returnWinner: "You won, congratulations!",
  returnLoser: "You lost, try again!",
};

const CHOICES = {
  PAPER: "paper",
  SCISSORS: "scissors",
  ROCK: "rock",
};

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  amountOfRounds = 0;
}

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
    return `${MESSAGES.winMessage} ${CHOICES.ROCK} crushes ${CHOICES.SCISSORS}`;
  } else if (playerSelection == CHOICES.ROCK && computerPlay == CHOICES.PAPER) {
    computerScore++;
    amountOfRounds++;
    return `${MESSAGES.lossMessage} ${CHOICES.PAPER} covers ${CHOICES.ROCK}`;
  } else if (playerSelection == CHOICES.ROCK && computerPlay == CHOICES.ROCK) {
    amountOfRounds++;
    return `${MESSAGES.tieMessage} ${CHOICES.ROCK} can't crush ${CHOICES.ROCK}`;
    //Paper options
  } else if (playerSelection == CHOICES.PAPER && computerPlay == CHOICES.ROCK) {
    playerScore++;
    amountOfRounds++;
    return `${MESSAGES.winMessage} ${CHOICES.PAPER} covers ${CHOICES.ROCK}`;
  } else if (
    playerSelection == CHOICES.PAPER &&
    computerPlay == CHOICES.SCISSORS
  ) {
    computerScore++;
    amountOfRounds++;
    return `${MESSAGES.lossMessage} ${CHOICES.PAPER} gets cut by ${CHOICES.SCISSORS}`;
  } else if (
    playerSelection == CHOICES.PAPER &&
    computerPlay == CHOICES.PAPER
  ) {
    amountOfRounds++;
    return `${MESSAGES.tieMessage} ${CHOICES.PAPER} can't cover ${CHOICES.PAPER}`;
    //Scissor options
  } else if (
    playerSelection == CHOICES.SCISSORS &&
    computerPlay == CHOICES.ROCK
  ) {
    computerScore++;
    amountOfRounds++;
    return `${MESSAGES.lossMessage} ${CHOICES.SCISSORS} gets crushed by ${CHOICES.ROCK}`;
  } else if (
    playerSelection == CHOICES.SCISSORS &&
    computerPlay == CHOICES.PAPER
  ) {
    playerScore++;
    amountOfRounds++;
    return `${MESSAGES.winMessage} ${CHOICES.SCISSORS} cuts ${CHOICES.PAPER}`;
  } else
    playerSelection == CHOICES.SCISSORS && computerPlay == CHOICES.SCISSORS;
  amountOfRounds++;
  return `${MESSAGES.tieMessage} ${CHOICES.SCISSORS} can't cut ${CHOICES.SCISSORS}`;
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
    if (playerScore === 3) {
      resetScore();
      return alert(`${MESSAGES.returnWinner}`);
    } else if (computerScore === 3) {
      resetScore();
      return alert(`${MESSAGES.returnLoser}`);
    } else {
      game();
    }
  }
}
