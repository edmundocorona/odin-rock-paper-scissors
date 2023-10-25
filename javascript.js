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

const ROUNDS = 5;
let actualRound = 0;
let playerWins = 0;
let computerWins = 0;

const listBtnPlayerSelection = document.querySelectorAll('.playerSelection');
listBtnPlayerSelection.forEach(function (item) {
  item.addEventListener('click', () => {
    const resultRound = playRound(item.id, getComputerChoice());
    const content = document.querySelector('.content');
    const div = document.createElement('div');
    div.textContent = `Round ${actualRound + 1}: ${resultRound}`;
    content.appendChild(div)
  
    switch (resultRound.charAt(4)) {
      case 'l':
        computerWins++;
        break;
      case 'w':
        playerWins++;
        break;
    }
    actualRound++;
  
    if (actualRound === ROUNDS) {
      const divResult = document.createElement('div');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      h2.textContent = `Bo${ROUNDS} -- Player: ${playerWins} Computer: ${computerWins}`;
      p.textContent = playerWins > computerWins ? 'You won!'
        : playerWins < computerWins ? 'You lose!'
        : "It's a tie!";
      divResult.appendChild(h2);
      divResult.appendChild(p);
      content.appendChild(divResult);
  
      // end
      actualRound = 0;
      playerWins = 0;
      computerWins = 0;
    }
  });
});