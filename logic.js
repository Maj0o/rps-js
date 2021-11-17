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

const playRound = (playerSelection, computerSelection) => {
  let playerScore = document.getElementById('playerScore');
  let computerScore = document.getElementById('playerScore');

  if (playerSelection == "rock") {
    if (computerSelection === "Scissors") {
      return `You Win! Rock breaks Scissors.`;
    }
    if (computerSelection === "Paper") {
      

      return `You Lose! Paper covers rock.`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection === "Scissors") {
     

      return `You Lose! Scissors cuts Paper.`;
    }
    if (computerSelection === "Rock") {
      

      return `You Win! Paper covers rock.`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection === "Rock") {
      

      return `You Lose! Rock breaks Scissors.`;
    }
    if (computerSelection === "Paper") {
      

      return `You Win! Scissors cuts Paper.`;
    }

};

const game = () => {};

console.log(playRound(playerSelection(), computerPlay()));

// const game = () => {
//   for (let i = 0; i < 5; i++);
// };

// console.log(game);
