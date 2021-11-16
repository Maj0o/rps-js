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

function playRound(playerSelection, computerSelection) {
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection == "rock") {
    if (computerSelection === "Scissors") {
      playerScore++;

      return `You Win! Rock breaks Scissors.`;
    }
    if (computerSelection === "Paper") {
      computerScore++;

      return `You Lose! Paper covers rock.`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection === "Scissors") {
      computerScore++;

      return `You Lose! Scissors cuts Paper.`;
    }
    if (computerSelection === "Rock") {
      playerScore++;

      return `You Win! Paper covers rock.`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection === "Rock") {
      computerScore++;

      return `You Lose! Rock breaks Scissors.`;
    }
    if (computerSelection === "Paper") {
      playerScore++;

      return `You Win! Scissors cuts Paper.`;
    }
  }

  return `Draw! Please try Again!`;
}

console.log(playRound(playerSelection(), computerPlay()));

// const game = () => {
//   for (let i = 0; i < 5; i++);
// };

// console.log(game);
