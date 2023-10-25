// print rock paper scissors
console.log('Rock Paper Scissors');
// player choose
function getPlayerChoice () {
  const playerChoice = prompt("Which option would you select (Rock Paper or Scissors)?").toLowerCase();
  if (playerChoice != 'paper' && playerChoice != 'rock' && playerChoice != 'scissors') return getPlayerChoice();
  return playerChoice;
}
// computer choose
function getComputerChoice () {
  return getRockPaperScissors(getRandomInt(3));
}
// guess who won
function playRound (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return 'No one wins'
  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') return 'You lose! Paper beats Rock';
    return 'You won! Rock beats Scissors'
  }
  if (playerSelection == 'paper') {
    if (computerSelection == 'rock') return 'You won! Paper beats Rock';
    return 'You lose! Scissors beats Paper';
  }
  if (computerSelection == 'rock') return 'You lose! Rock beats Scissors';
  return 'You won! Scissors beats Paper'
}

function getRandomInt (max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRockPaperScissors (num) {
  return num == 0 ? 'rock' 
    : num == 1 ? 'paper' : 'scissors';
}

function gameBo5 () {
  const ROUNDS = 5;
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 1; i <= ROUNDS; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const resultRound = playRound(playerSelection, computerSelection)
    console.log(`Round ${i}: ${resultRound}`);
    switch (resultRound.charAt(4)) {
      case 'l':
        computerWins++;
        break;
      case 'w':
        playerWins++;
        break;
    }
  }
  console.log(`Bo${ROUNDS} -- Player: ${playerWins} Computer: ${computerWins}`)
  if (playerWins > computerWins) console.log('You won!');
  else if (playerWins < computerWins) console.log('You lose!');
    else console.log("It's a tie!");
}

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
  const result = playRound('rock', getComputerChoice());
  const content = document.querySelector('.content');
  const div = document.createElement('div');
  div.textContent = result;
  content.appendChild(div)
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
  const result = playRound('paper', getComputerChoice());
  const content = document.querySelector('.content');
  const div = document.createElement('div');
  div.textContent = result;
  content.appendChild(div)
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
  const result = playRound('scissors', getComputerChoice());
  const content = document.querySelector('.content');
  const div = document.createElement('div');
  div.textContent = result;
  content.appendChild(div)
});