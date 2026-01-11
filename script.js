let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getHumanChoice() {
    while (true) {

        let choice = prompt('Type you weapon: rock, paper or scissors').toLowerCase();

        if (choices.includes(choice)) {
            return choice;
        }
        else {
            console.log("You probably made a typo. Please try again.")
        }
    }
}

function humanWins(humanChoice, computerChoice) {
    return (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    );
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". It's draw! Whatever. 😕`)
    }
    else if (humanWins(humanChoice, computerChoice)) {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". You win! Sheesh! 😬`);
        humanScore++;
    }
    else {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". You lose! Muahahaha! 🤖`);
        computerScore++;
    }
}

function playGame() {
    let rounds = 0;
    while (rounds < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Human's score is ${humanScore} and Computer's score is ${computerScore}`);
        rounds++;
    }

    if (humanScore > computerScore) {
        console.log("You are winner, lucky bastard!!! 😔");
    }
    else if (humanScore < computerScore) {
        console.log("You are looser. Taste my SILICON POWER!!! 😈");
    }
    else {
        console.log("Unbelievable. IT IS DRAW!!! 😶");
    }
}

playGame();