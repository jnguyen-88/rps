const HANDS = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

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

function playRound(playerSelection, numRounds) {
  const computerSelection = getComputerHand();
  const winner = determineWinner(playerSelection, computerSelection);
  const playerRoundsLeft = numRounds - playerScore;
  const computerRoundsLeft = numRounds - computerScore;

  if (winner === 'Player Wins') {
    console.log(
      `${numRounds} game series. Player needs to win ${playerRoundsLeft} more games to win series`
    );
  } else if (winner === 'Computer Wins') {
    console.log(
      `${numRounds} game series. Computer needs to win ${computerRoundsLeft} more games to win series`
    );
  } else {
    console.log(
      `${numRounds} game series. Tied Series: ${computerRoundsLeft} - ${playerRoundsLeft}`
    );
  }

  return `Player chooses: ${playerSelection}, Computer chooses: ${computerSelection} -- ${winner} -- PS: ${playerScore}, CS: ${computerScore}, Ties: ${tieScore}`;
}
