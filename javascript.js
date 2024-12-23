
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


// create new variable to keep track of scores
let humanScore = 0;
let computerScore = 0;

// write game logic for single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Computer Score: ${computerScore}`);
console.log(`Human Score: ${humanScore}`);