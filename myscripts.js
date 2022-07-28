

// generate random choice from computer
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    indx = Math.floor(Math.random()*3);
    return choices[indx];
}

// lookup table for results
const outcomes = {
    rock:    { rock: ['Tie!', 0, 0], paper: ['Paper Beats Rock! You Lose!', 0, 1], scissors: ['Rock Beats Scissors! You Win!', 1, 0] },
    paper:   { rock: ['Paper Beats Rock! You Win!', 1, 0], paper: ['Tie!', 0, 0], scissors: ['Scissors Beat Paper! You Lose!', 0, 1] },
    scissors: { rock: ['Rock beats Scissors! You Lose!', 0, 1], paper: ['Scissors Beats Paper! You Win!', 1, 0], scissors: ['Tie!', 0.0] }
  };

//   play one round
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(outcomes[playerSelection][computerSelection]);
}

//  play five rounds of the game and calculate a final score
// function game() {
//     var playerScore = 0,
//     computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         roundResult = playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice())
//         playerScore += roundResult[1]
//         computerScore += roundResult[2]
//         console.log(roundResult[0])
//     }
//     console.log('Final Score- Player:', playerScore, 'Computer:', computerScore)
// }

// game()


const btn = document.querySelectorAll(".btn");

btn.forEach(btn => btn.addEventListener("click", 
  () => playRound(btn.innerText, getComputerChoice())));

const rslt = document.querySelector(".results");

rslt.innerText = 'Final Score- Player:', playerScore, 'Computer:', computerScore

