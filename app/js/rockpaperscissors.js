////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner = null;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = 'Computer Wins';
        }
    }
    if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = 'Player Wins';
        }
    }
    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = 'Computer Wins';
        }
    }
    if (playerMove === "scissors") {
        if (computerMove === "paper") {
            winner = 'Player Wins';
        }
    }
    if (playerMove === "paper") {
        if (computerMove === "scissors") {
            winner = 'Computer Wins';
        }
    }   
    if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = 'Player Wins'; 
        }
    } 
    if (playerMove === computerMove) {
            winner = "It's a tie";
    }
    return winner;
}

  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    console.log('Player chose ' + playerMove + ' while the computer chose ' + computerMove);
    var winner = getWinner(playerMove,computerMove);
    if (winner === 'Player Wins') {
        playerWins += 1;
        console.log('You beat the computer! Congrats');
    } else if (winner === 'Computer Wins') {
        computerWins += 1;
        console.log('Sorry but the computer won that round');
    }  else 
        console.log('Whoops, you guys tied. Play again!');
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
  } 
    if (playerWins === 5) {
        console.log("Congrats, you have reached 5 wins before the computer! The final score was (player:computer)")
    }   else
        console.log('Sorry, the computer has reached 5 wins before you. The final score was (player:computer)');
    return [playerWins, computerWins];
} 
playToFive();
