const WINPOINTS = 5;

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
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
        round += 1;
        return `Computer chose "${computerChoice}". You chose "${humanChoice}". It's draw! Whatever. 😕`;
    }
    else if (humanWins(humanChoice, computerChoice)) {
        round += 1;
        humanScore += 1;
        return `Computer chose "${computerChoice}". You chose "${humanChoice}". You win! Sheesh! 😬`;

    }
    else {
        round += 1;
        computerScore += 1;
        return `Computer chose "${computerChoice}". You chose "${humanChoice}". You lose! Muahahaha! 🤖`;

    }
}

function playGame() {
    const div = document.querySelector('#human-choice');
    div.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        let info = document.querySelector('#info');
        let score = document.querySelector('#score');

        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();


        info.textContent = playRound(humanChoice, computerChoice);
        score.textContent = `Round ${round}: Your score ${humanScore}. Computer score ${computerScore}.`;

        if (humanScore === WINPOINTS) {
            console.log("You are winner, lucky bastard!!! 😔");
        }
        else if (computerScore === WINPOINTS) {
            console.log("You are loser. Taste my SILICON POWER!!! 😈");
        }

    });
}
playGame();