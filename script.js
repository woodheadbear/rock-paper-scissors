const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

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
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". It's draw! Whatever. 😕`);
        return "draw";
    }
    else if (humanWins(humanChoice, computerChoice)) {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". You win! Sheesh! 😬`);
        humanScore += 1;
    }
    else {
        console.log(`Computer chose "${computerChoice}". You chose "${humanChoice}". You lose! Muahahaha! 🤖`);
        computerScore += 1;
    }
}

function playGame() {
    const div = document.querySelector('#human-choice');
    div.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        if (humanScore === 5) {
            console.log("You are winner, lucky bastard!!! 😔");
        }
        else if (computerScore === 5) {
            console.log("You are loser. Taste my SILICON POWER!!! 😈");
        }

    });
}
playGame();