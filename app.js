let userScore = 0;
let computerScore = 0;
let userScoreElement = document.getElementById("user-score");
let computerScoreElement = document.getElementById("comp-score");
let scoreBoardDiv = document.querySelector(".score-board");
let resultDiv = document.querySelector(".result > p");
let rockDiv = document.getElementById("r");
let paperDiv = document.getElementById("p");
let scissorsDiv = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === 'r') {
        return "Rock"
    } else if(letter === 'p') {
        return "Paper"
    } else {
        return "Scissors"
    }
    
}

function win(userChoice, computerChoice) {
    let userChoiceDiv = document.getElementById(userChoice)
    userScore++;
    userScoreElement.innerHTML = userScore
    computerScoreElement.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove("green-glow"), 400);
}



function lose(userChoice, computerChoice) {
    let userChoiceDiv = document.getElementById(userChoice)
    computerScore++;
    userScoreElement.innerHTML = userScore
    computerScoreElement.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove("red-glow"), 400);
}

function draw(userChoice, computerChoice) {
    let userChoiceDiv = document.getElementById(userChoice)
    resultDiv.innerHTML = `It's a draw!`;
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(() => userChoiceDiv.classList.remove("gray-glow"), 400);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    if(userChoice + computerChoice === 'rs' || userChoice + computerChoice === 'pr' || userChoice + computerChoice === 'sp') {
        win(userChoice, computerChoice);
    } else if(userChoice + computerChoice === 'rp' || userChoice + computerChoice === 'ps' || userChoice + computerChoice === 'sr') {
        lose(userChoice, computerChoice);
    } else {
        draw(userChoice, computerChoice)
    }
  
}

function main() {
    rockDiv.addEventListener('click', () =>  game("r"));
    paperDiv.addEventListener('click', () => game("p"));
    scissorsDiv.addEventListener('click', () => game("s"));
    
}

main();
