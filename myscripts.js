

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
    scissors: { rock: ['Rock beats Scissors! You Lose!', 0, 1], paper: ['Scissors Beats Paper! You Win!', 1, 0], scissors: ['Tie!', 0, 0] }
  };

  const images = {
    rock : "images/rock.png",
    paper : "images/paper2.png",
    scissors : "images/scissors_PNG33.png"
  };

//   play one round
// function playRound (playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     console.log(outcomes[playerSelection][computerSelection]);
// }



function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerimgimg.src = images[playerSelection];
    computerimgimg.src = images[computerSelection];
    playerimg.appendChild(playerimgimg);
    computerimg.appendChild(computerimgimg);
    playerimgimg.classList.add("grow");
    computerimgimg.classList.add("grow");
    results = outcomes[playerSelection][computerSelection];
    playerScore += results[1]
    computerScore += results[2]
    player.innerText = playerScore;
    computer.innerText = computerScore;
    msg.innerText = results[0];
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            window.location.href = "win.html";
        }
        else { window.location.href = "lose.html" }
        playerScore = 0;
        computerScore = 0;
    }
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





const player = document.querySelector(".playerscore > p");
const computer = document.querySelector(".computerscore > p");
const msg = document.querySelector(".msg");

player.innerText = 0;
computer.innerText = 0;
msg.innerText = 'Let\'s Play!'

playerScore = 0;
computerScore = 0;

const btn = document.querySelectorAll(".btn");
btn.forEach(btn => btn.addEventListener("click", 
  () => playRound(btn.innerText, getComputerChoice())));


const playerimg = document.querySelector(".playerimg");
const computerimg = document.querySelector(".computerimg");


var playerimgimg = document.createElement("img");
playerimgimg.style.width = '100px';
// playerimgimg.style.transform = 'scale(1.2)';

var computerimgimg = document.createElement("img");
computerimgimg.style.width = '100px';



// btn.forEach(btn => btn.addEventListener("click",
//   () => ))  


// create image variables
// create lookup table of object images
// add event listener to button loading images
// or add image loading to playRound?

// btn.addEventListener('click', function (e) {
//     const audio = document.querySelector(`audio[data-key=${e.code}]`);
//     const key = document.querySelector(`.key[data-key=${e.code}]`);
//     if (!audio) return // stops function from running
//     audio.currentTime = 0; // reset audio playing
//     audio.play();

//     key.classList.add('playing');
    
// });
