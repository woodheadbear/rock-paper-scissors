function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    choice = Math.round(Math.random() * (choices.length - 1));
    return choices[choice];
}