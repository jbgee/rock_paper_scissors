const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
rockButton.addEventListener('click',() => playRound('rock'));
paperButton.addEventListener('click',() => playRound('paper'));
scissorsButton.addEventListener('click',() => playRound('scissors'));


let playerScore = 0;
let computerScore = 0;
function playRound(player){
    if (playerScore <5 && computerScore <5){
        const mostRecentResult = document.querySelector('#mostRecentResult')
        computer = getComputerChoice()
        if(computer == player){
            mostRecentResult.textContent = "It's a tie, great minds think alike!";
        }
        else if((player == 'rock' && computer=='paper') || (player == 'scissors' && computer=='rock') || (player == 'paper' && computer=='scissors')){
            mostRecentResult.textContent = `You lose! The computer chose ${computer}.`;
            computerScore++;
            updateScoreboard();
            if (computerScore ==5){
                endGame();
            }
        }
        else if((computer == 'rock' && player=='paper') || (computer == 'scissors' && player=='rock') || (computer == 'paper' && player=='scissors')){
            mostRecentResult.textContent = `You Win! The computer chose ${computer}!`;
            playerScore ++;
            updateScoreboard();
            if (playerScore == 5){
                endGame();
            }
        }
        return;
    }

}

function getPlayerChoice(){
    choice = prompt("Choose your weapon");
    while(choice!= "rock" && choice != "scissors" && choice != "paper")
        choice = prompt("Invalid choice, your weapon must be 'rock' 'paper', or 'scissors'")
    return choice.toLowerCase();
}

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function endGame(){
    if (playerScore == 5){
        const body = document.querySelector("body");
        const finalResult = document.createElement("div");
        finalResult.textContent ="You've won the first to 5! You've bested the computer!";
        finalResult.classList.add("firstToFiveText");
        body.appendChild(finalResult);
    }
    else if (computerScore ==5){
        const body = document.querySelector("body");
        const finalResult = document.createElement("div");
        finalResult.textContent = "The computer won the first to 5! You are no match!";
        finalResult.classList.add("firstToFiveText");
        body.appendChild(finalResult);
    }

    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.addEventListener("click",resetGame);
    const body = document.querySelector("body");
    resetButton.classList.add("resetButton")
    body.appendChild(resetButton);
}

function updateScoreboard(){
    const computerScoreboard = document.querySelector('#computerScore');
    computerScoreboard.textContent = `Computer:${computerScore}`;
    const playerScoreboard = document.querySelector('#playerScore');
    playerScoreboard.textContent = `Player:${playerScore}`;
}

function resetGame(){
    computerScore = 0;
    playerScore = 0;
    updateScoreboard();
    const finalResult = document.querySelector(".firstToFiveText");
    finalResult.remove();
    const resetButton = document.querySelector(".resetButton");
    resetButton.remove();
}



