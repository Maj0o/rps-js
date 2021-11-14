let playerSelection = () => {
  let playerSelection = prompt("Pick your choice! Rock, Paper or Scissors!");
  return playerSelection.toLowerCase();
};

let computerPlay = () => {
  let computerPlay = Math.floor(Math.random() * 3 + 1);
  if (computerPlay === 1) {
    computerPlay = "rock";
  } else if (computerPlay === 2) {
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }
  return computerPlay;
};

let playRound = (playerSelection, computerPlay) => {
  //Rock options
  if (playerSelection == "rock" && computerPlay == "scissors")
    return "You Win! Rock beats scissors!";
  else if (playerSelection == "rock" && computerPlay == "rock")
    return "You Tied!";
  else if (playerSelection == "rock" && computerPlay == "paper")
    return "You Lost! Paper beats rock!";
  //Paper options
  else if (playerSelection == "paper" && computerPlay == "rock")
    return "You Win! Paper beats rock!";
  else if (playerSelection == "paper" && computerPlay == "paper")
    return "You Tied!";
  else if (playerSelection == "paper" && computerPlay == "scissors")
    return "You Lost! Scissors beats paper!";
  //Scissor options
  else if (playerSelection == "scissors" && computerPlay == "rock")
    return "You lost! Rock beats scissors!";
  else if (playerSelection == "scissors" && computerPlay == "scissors")
    return "You Tied!";
  else playerSelection == "scissors" && computerPlay == "paper";
  return "You Lost! Scissors beats paper!";
};

let game = () => {
  for (let i = 0; i < 5; i++);
};

console.log(game(i));
