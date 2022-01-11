
let playerWins = 0;
let computerWins =0;
let GameOver = false;
function computerPlay() {
    option = Math.floor(Math.random()*3);
    if (option == 0) {
        return "rock"
    }
        else if (option == 1) {
            return "paper"
        }
        else {
            return "scissors";
        }
}

function playRound(e) {

    computerSelection = computerPlay();
     if (e.target.classList.contains('rock')) {
         playerSelection ="rock"
    }
    else if (e.target.classList.contains('paper')){
        playerSelection ="paper"
    }
    else {playerSelection ="scissors"}


    if (playerSelection == computerSelection) {
        document.getElementById("current").innerHTML = `Tie ${playerSelection} vs. ${computerSelection}`

    }
        else if (playerSelection == "rock" && computerSelection =="scissors") {
            document.getElementById("current").innerHTML = `Player Wins ${playerSelection} vs. ${computerSelection}`
            playerWins++
            document.getElementById("results").innerHTML = `Current score Player ${playerWins}, to Computer ${computerWins}`
        }
        else if (playerSelection == "paper" && computerSelection =="rock") {
            document.getElementById("current").innerHTML = `Player Wins ${playerSelection} vs. ${computerSelection}`
            playerWins++
            document.getElementById("results").innerHTML = `Current score Player ${playerWins}, to Computer ${computerWins}`
        }
        else if (playerSelection == "scissors" && computerSelection =="paper") {
            document.getElementById("current").innerHTML = `Player Wins ${playerSelection} vs. ${computerSelection}`
            playerWins++
            document.getElementById("results").innerHTML = `Current score Player ${playerWins}, to Computer ${computerWins}`
        }
        else {
            document.getElementById("current").innerHTML = `Computer Wins ${computerSelection} vs. ${playerSelection}`
            computerWins++
            document.getElementById("results").innerHTML = `Current score Player ${playerWins}, to Computer ${computerWins}`
        }
    if (playerWins == 5) {
        alert(`You have won the game ${playerWins} - ${computerWins}`)
        playerWins = 0
        computerWins = 0
        document.getElementById("current").innerHTML = ""
        document.getElementById("results").innerHTML = ""
    }
    else if (computerWins == 5) {
        alert(`Computer won the game ${computerWins} - ${playerWins}`)
        playerWins = 0
        computerWins = 0
        document.getElementById("current").innerHTML = ""
        document.getElementById("results").innerHTML = ""
}
   }
  
  let buttons = Array.from(document.querySelectorAll("button"));
  console.log(buttons)
  buttons.forEach(button => button.addEventListener('click', playRound));


//   function game() {
//     let playerWins = 0;
//     let computerWins =0;
//     let winner = ""
//     for (let i = 0; i <5; i++) {
//         compPick = computerPlay();
        
//         let playerpick = window.prompt('Choose Rock Paper or Scissors')
//         let winner = playRound(compPick,playerpick);
        
//         if (winner == "Player Wins") {
//             console.log("Player Wins")
//             playerWins++
//         }
//         else {
//             computerWins++
//             console.log("Computer Wins")
//         }
        
//     }
//     if (playerWins > computerWins) {
//         return "Player Wins the Series"
//     }
//     else {
//         return "Computer Wins the Series"
//     }
//     return(`The score was Player ${playerWins} Computer ${computerWins}`)
//   }

//  console.log(game())

