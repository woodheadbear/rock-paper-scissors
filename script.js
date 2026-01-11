let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.round(Math.random() * (choices.length - 1));
    return choices[choice];
}

function getHumanChoice() {
    let isItMistake = true;

    while (isItMistake) {

        choice = prompt('Type you weapon: rock, paper or scissors').toLowerCase();

        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        }
        else {
            console.log("You probably made a typo. Please try again.")
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". It's draw! Whatever. 😕`)
    }
    else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". You win! Sheesh! 😬`);
        humanScore++;
    }
    else {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". You lose! Muahahaha! 🤖`);
        computerScore++;
    }
}

playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);