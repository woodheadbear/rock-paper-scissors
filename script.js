const WINPOINTS = 5;

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0;
let gameOver = false;

let info = document.querySelector('#info');
let score = document.querySelector('#score');
let winner = document.querySelector('#winner');
const div = document.querySelector('#human-choice');
let allButtons = div.querySelectorAll('button');
const restart = document.querySelector('#restart');

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

function setButtonsDisabled(status) {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = status;
    }
}

function endGame() {
    setButtonsDisabled(true);
    gameOver = true;
}

function resetGame() {
    setButtonsDisabled(false);

    humanScore = 0;
    computerScore = 0;
    round = 0;
    gameOver = false;

    info.textContent = "";
    score.textContent = "";
    winner.textContent = '';
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Computer chose "${computerChoice}". You chose "${humanChoice}". It's draw! Whatever. 😕`;
    }
    else if (humanWins(humanChoice, computerChoice)) {
        humanScore += 1;
        return `Computer chose "${computerChoice}". You chose "${humanChoice}". You win! Sheesh! 😬`;
    }
    else {
        computerScore += 1;
        return `Computer chose "${computerChoice}". You chose "${humanChoice}". You lose! Muahahaha! 🤖`;

    }
}

function playGame() {
    div.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;
        if (gameOver) return;

        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();

        round += 1;
        info.textContent = playRound(humanChoice, computerChoice);
        score.textContent = `Round ${round}: Your score ${humanScore}. Computer score ${computerScore}.`;

        if (humanScore === WINPOINTS) {
            endGame();
            winner.textContent = "You are winner, lucky bastard!!! 😔";
        }
        else if (computerScore === WINPOINTS) {
            endGame();
            winner.textContent = "You are loser. Taste my SILICON POWER!!! 😈";
        }
    });

    restart.addEventListener('click', (e) => {
        restartButton = e.target.closest('button');
        if(!restartButton) return;
        resetGame();
    });
}
playGame();