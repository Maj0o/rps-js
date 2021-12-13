let playerScore = 0;
let computerScore = 0;
let result = document.querySelector("#displayresult");
let buttonRock = document.querySelector("#rock");
let buttonPaper = document.querySelector("#paper");
let buttonScissors = document.querySelector("#scissors");
let playerScoreTag = document.querySelector(".playerScore");
let computerScoreTag = document.querySelector(".computerScore");

const computerPlay = () => {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "rock";
  } else if (number === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    result.textContent = `It's a draw!`;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    result.textContent = `You lose, ${computerChoice} covers ${playerChoice}!`;
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScore++;
    result.textContent = `You win, ${playerChoice} crushes ${computerChoice}!`;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore++;
    result.textContent = `You win, ${playerChoice} covers ${computerChoice}!`;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    result.textContent = `You lose, ${playerChoice} gets cut by ${computerChoice}!`;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    result.textContent = `You lose, ${playerChoice} gets crushed by ${computerChoice}!`;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScore++;
    result.textContent = `You win, ${playerChoice} cuts ${computerChoice}!`;
  }
};

//To Do (After score of 5 reset the rounds!)

function score() {
  if (playerScore >= 5) {
    result.textContent = "Congratulations, you won :)";
    window.location.reload();
  } else if (computerScore >= 5) {
    result.textContent = "Try again! You lost :(";
    window.location.reload();
  }
}

const addEventListener = () => {
  document.querySelector("#rock").addEventListener("click", function () {
    playRound("rock", computerPlay());
    score();

    playerScoreTag.textContent = playerScore;
    computerScoreTag.textContent = computerScore;
  });
  // Paper Button
  document.querySelector("#paper").addEventListener("click", function () {
    playRound("paper", computerPlay());
    score();

    playerScoreTag.textContent = playerScore;
    computerScoreTag.textContent = computerScore;
  });
  // Scissors Button
  document.querySelector("#scissors").addEventListener("click", function () {
    playRound("scissors", computerPlay());
    score();

    playerScoreTag.textContent = playerScore;
    computerScoreTag.textContent = computerScore;
  });
};

addEventListener();
