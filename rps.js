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
        const scoreboard = document.querySelector('#scoreboard');
        const mostRecentResult = document.querySelector('#mostRecentResult')
        computer = getComputerChoice()
        if(computer == player){
            mostRecentResult.textContent = "It's a tie, great minds think alike!";
        }
        else if((player == 'rock' && computer=='paper') || (player == 'scissors' && computer=='rock') || (player == 'paper' && computer=='scissors')){
            mostRecentResult.textContent = `It looks like you lose! The computer chose ${computer}.`;
            computerScore++;
            if (computerScore ==5){
                const body = document.querySelector("body");
                const finalResult = document.createElement("div");
                finalResult.textContent = "The computer won the first to 5! You are no match for the computer!";
                body.appendChild(finalResult);
            }

        }
        else if((computer == 'rock' && player=='paper') || (computer == 'scissors' && player=='rock') || (computer == 'paper' && player=='scissors')){
            mostRecentResult.textContent = `You Win! The computer chose ${computer} and you have come out victorious!`;
            playerScore ++;
            if (playerScore == 5){
                const body = document.querySelector("body");
                const finalResult = document.createElement("div");
                finalResult.textContent ="You've won the first to 5! You've bested the computer!";
                body.appendChild(finalResult);
            }
        }
        scoreboard.textContent = `Player:${playerScore} Computer:${computerScore}`
        
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

