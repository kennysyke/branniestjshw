function computerPlay() {
    let computerChoice = Math.random();

    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.64) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt(`Choose: Rock, Paper or Scissors`).toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log(`It is a tie!`);
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You won this round! ${playerSelection} beats ${computerSelection}`);
        return "won";
    } else {
        console.log(`You lost this round! ${playerSelection} not the best against ${computerSelection}`);
        return "lost";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let roundResult = playRound();

        if (roundResult == "lost") {
            computerScore++;
        } else if (roundResult == "won") {
            playerScore++;
        } else {

        }
    }

    if (playerScore > computerScore) {
        console.log(`You are the greatest! Congratulations! Your score - ${playerScore} computer score - ${computerScore}.`);
    } else {
        console.log(`Oh no, you lost. Your score - ${playerScore} computer score - ${computerScore}.`);
    }

}
game();







