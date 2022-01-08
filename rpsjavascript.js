function computerPlay() {
    option = Math.floor(Math.random()*3);
    if (option == 0) {
        return "rock"
    }
        else if (option == 1) {
            return "paper"
        }
        else {
            return "scissors"
        }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        return "Tie"
    }
        else if (playerSelection == "rock" && computerSelection =="scissors") {
            return "Player Wins"
        }
        else if (playerSelection == "paper" && computerSelection =="rock") {
            return "Player Wins"
        }
        else if (playerSelection == "scissors" && computerSelection =="paper") {
            return "Player Wins"
        }
        else {
            return "Computer Wins"
        }
  }
  
  function game() {
    let playerWins = 0;
    let computerWins =0;
    let winner = ""
    for (let i = 0; i <5; i++) {
        compPick = computerPlay();
        
        let playerpick = window.prompt('Choose Rock Paper or Scissors')
        let winner = playRound(compPick,playerpick);
        
        if (winner == "Player Wins") {
            console.log("Player Wins")
            playerWins++
        }
        else {
            computerWins++
            console.log("Computer Wins")
        }
        
    }
    if (playerWins > computerWins) {
        return "Player Wins the Series"
    }
    else {
        return "Computer Wins the Series"
    }
    // return(`The score was Player ${playerWins} Computer ${computerWins}`)
  }

console.log(game())

