let playerScore = 0;
let computerScore = 0;
let result = document.querySelector("#displayresult");

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

function score() {
  if (playerScore >= 5) {
    result.textContent = "Congratulations, you win!";
    result.style.backgroundColor = "green";
    result.style.opacity = 0.75;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    result.textContent = "You lose! Try again :(";
    result.style.backgroundColor = "red";
    playerScore = 0;
    computerScore = 0;
  }
}

const addEventListener = () => {
  let playerScoreTag = document.querySelector(".playerScore");
  let computerScoreTag = document.querySelector(".computerScore");
  let buttonRock = document.querySelector("#rock");
  let buttonPaper = document.querySelector("#paper");
  let buttonScissors = document.querySelector("#scissors");
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
