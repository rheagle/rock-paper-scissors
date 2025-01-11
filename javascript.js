
// randomly return rock, paper, or scissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// create buttons dynamically and add to the game container
const gameContainer = document.getElementById("game-container");
const resultContainer = document.getElementById("result-container");

["Rock", "Paper", "Scissors"].forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.id = choice.toLowerCase();
    button.addEventListener("click", () => playRound(choice.toLowerCase(), getComputerChoice()));
    gameContainer.appendChild(button);
})

// scores
let humanScore = 0;
let computerScore = 0;

    
// play single round
function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = ("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = (`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        result = (`You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
        }

    // check if there's a winner
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
        return; // end the game
    }

    // display result and updated scores
    updateResults(result);
}

// update results in the DOM
function updateResults(result) {
    resultContainer.innerHTML = `
        <p>${result}</p>
        <p>Computer Score: ${computerScore}</p>
        <p>Human Score: ${humanScore}</p>
    `;
}

// announce winner and reset game
function announceWinner() {
    const winner = 
        humanScore === 5 ? "God damn it... you win :/" : "Fuck ya! I win, you lose!";
        // line above uses ternary operator:
        // condition ? valueIfTrue : valueIfFalse;
    resultContainer.innerHTML = `
        <p>${winner}</p>
        <p>Final Score - Computer: ${computerScore}, Human: ${humanScore}</p>
    `;

    // disable buttons
    const buttons = document.querySelectorAll("#game-container button");
    buttons.forEach(button => (button.disabled = true));

    // restart game button
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", restartGame);
    gameContainer.appendChild(restartButton);
}

// Restart the game
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    updateResults("Game restarted. Make your move.");

    // Re-enable buttons
    const buttons = document.querySelectorAll("#game-container button");
    buttons.forEach(button => (button.disabled = false));

    // Remove restart button
    const restartButton = document.querySelector("#game-container button:last-child");
    if (restartButton) gameContainer.removeChild(restartButton);
}
