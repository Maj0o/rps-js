function playerSelection() {
  let playerSelection = prompt("Pick your choice! Rock, Paper or Scissors!");
  return playerSelection.toLowerCase();
}

function computerPlay() {
  let computerPlay = Math.floor(Math.random() * 3 + 1);
  if (computerPlay === 1) {
    computerPlay = "rock";
  } else if (computerPlay === 2) {
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }
  return computerPlay;
}

function playRound(playerSelection, computerPlay) {
  if (playerSelection == "rock" && computerPlay == "scissors")
    return "You Win! Rock beats scissors!";
    else if (playerSelection == "paper" && computerPlay == "scissors" 
    
}

console.log(playRound(playerSelection, computerPlay));
