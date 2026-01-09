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