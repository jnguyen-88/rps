const HANDS = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const selectRock = document.querySelector('.btn-rock');
const selectPaper = document.querySelector('.btn-paper');
const selectScissors = document.querySelector('.btn-scissors');
const buttons = document.querySelectorAll('.btn');
const target = document.querySelector('.results');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    playRound(buttons[i].value);
  });
}

function getComputerHand() {
  const randNum = Math.floor(Math.random() * 3);
  return HANDS[randNum];
}

function determineWinner(playersHand, computersHand) {
  if (playersHand === computersHand) {
    tieScore += 1;
    return 'Tie';
  } else if (
    (playersHand === 'scissors' && computersHand === 'paper') ||
    (playersHand === 'rock' && computersHand === 'scissors') ||
    (playersHand === 'paper' && computersHand === 'rock')
  ) {
    playerScore += 1;
    return 'Player Wins';
    // return `Player chooses: ${playersHand}, Computer chooses: ${computersHand} -- Player Wins! --- PS: ${playerScore}, CS: ${computerScore}, Ties: ${tieScore}`;
  } else {
    computerScore += 1;
    return 'Computer Wins';
    // return `Player chooses: ${playersHand}, Computer chooses: ${computersHand} -- Computer Wins! -- PS: ${playerScore}, CS: ${computerScore}, Ties: ${tieScore}`;
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerHand();
  const winner = determineWinner(playerSelection, computerSelection);
  // const playerRoundsLeft = numRounds - playerScore;
  // const computerRoundsLeft = numRounds - computerScore;

  if (playerScore === 3 || computerScore === 3) {
    playerScore === 3
      ? (target.innerHTML = `<h2>no more Player WINS</h2>`)
      : (target.innerHTML = `<h2>no more Computer WINS</h2>`);

    playerScore = 0;
    computerScore = 0;
    tieScore = 0;

    return;
  }

  if (winner === 'Player Wins') {
    target.innerHTML = `<h2>4 game series. Player selects: ${playerSelection}, Computer selects: ${computerSelection} -- Player WINS!</h2> -- <p>p: ${playerScore}, c: ${computerScore}</p>`;
  } else if (winner === 'Computer Wins') {
    target.innerHTML = `<h2>4 game series. Player selects: ${playerSelection}, Computer selects: ${computerSelection} -- Computer WINS!</h2> -- <p>p: ${playerScore}, c: ${computerScore}</p>`;
  } else {
    target.innerHTML = 'TIE!';
  }
}
