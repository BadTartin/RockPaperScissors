

// generate random choice from computer
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    ind = Math.floor(Math.random()*3);
    return choices[ind];
}



// play one round of rps
// function playRound (playerSelection, computerSelection) {

//     playerSelection = playerSelection.toLowerCase();

//     if (playerSelection == "rock") {
//         if (computerSelection == "Rock") {
//             return ["Tie!", 0, 0]
//         }
//         else if (computerSelection == "Paper") {
//             return ["Paper Beats Rock! You Lose!", 0, 1]
//         }
//         else if (computerSelection == "Scissors") {
//             return ["Rock Beats Scissors! You Win!", 1, 0]
//         }

//     }
//     else if (playerSelection == "paper") {
//         if (computerSelection == "Rock") {
//             return ["Paper Beats Rock! You Win!", 1, 0]
//         }
//         else if (computerSelection == "Paper") {
//             return ["Tie!", 0, 0]
//         }
//         else if (computerSelection == "Scissors") {
//             return ["Scissors Beat Paper! You Lose!", 0, 1]
//         }
//     }
//     else if (playerSelection == "scissors") {
//         if (computerSelection == "Rock") {
//             return ["Rock Beats Scissors! You Lose!", 0, 1]
//         }
//         else if (computerSelection == "Paper") {
//             return ["Scissors Beat Paper! You Win!", 1, 0]
//         }
//         else if (computerSelection == "Scissors") {
//             return ["Tie!", 0, 0]
//         }
//     }
// }

// lookup table for round results
const outcomes = {
    rock:    { rock: ['Tie!', 0, 0], paper: ['Paper Beats Rock! You Lose!', 0, 1], scissors: ['Rock Beats Scissors! You Win!', 1, 0] },
    paper:   { rock: ['Paper Beats Rock! You Win!', 1, 0], paper: ['Tie!', 0, 0], scissors: ['Scissors Beat Paper! You Lose!', 0, 1] },
    scissors: { rock: ['Rock beats scissors! You Lose!', 0, 1], paper: ['Scissors Beats Paper! You Win!', 1, 0], scissors: ['Tie!', 0.0] }
  };

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    return outcomes[playerSelection][computerSelection]
}


function game() {
    var playerScore = 0,
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice())
        playerScore += roundResult[1]
        computerScore += roundResult[2]
        console.log(roundResult[0])
    }
    console.log('Final Score- Player:', playerScore, 'Computer:', computerScore)
}

game()
