
// randomly return rock, paper, or scissors
function getComputerChoice() {
    let getRandom = Math.floor(Math.random() * 3);
    if (getRandom === 0) {
        return "rock";
    } else if (getRandom === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//console.log(getComputerChoice());

// write logic to get human choice
function getHumanChoice() {
    let input = prompt('Enter rock, paper, or scissors.').toLowerCase();
    //console.log(input);
    if ((input === "rock") || (input === "paper") || (input === "scissors")) {
        return input; // valid input
    } else {
        alert('Invalid entry. Restart game.');
        return;
    }
}





function playGame() {
    // create new variable to keep track of scores
    let humanScore = 0;
    let computerScore = 0;

    // write game logic for single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return ("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            return (`You win, ${humanChoice} beats ${computerChoice}!`);
            //humanScore++;
        } else {
            return (`You lose, ${computerChoice} beats ${humanChoice}!`);
            //computerScore++;
        }
    }

    // Loop to play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        // generate choices for computer and human
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // call playRound and get result
        const result = playRound(humanSelection, computerSelection);
        
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`Human chose: ${humanSelection}`);
        console.log(result);

        // update scores
        if (result.includes("You win")) {
            humanScore++;
        } else if (result.includes("You lose")) {
            computerScore++;
        }

        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
    }
    
    // determine overall winner
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (computerScore > humanScore) {
        console.log("You are a loser!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();