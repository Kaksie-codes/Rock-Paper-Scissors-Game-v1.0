//DOM Selectors (Variables)
const buttons = document.querySelectorAll('.rpsButton');
const playerScoreDiV = document.getElementById('player-score');
const handsDiv = document.getElementById('hands');
const resultDiv = document.getElementById('result');
const endButton = document.getElementById('endGameButton');

//This Object holds the Game Scores
const gameScores = {computerScore: 0, playerScore: 0}

//This function helps the computer to make a random choice
const getComputerChoice = () => {
    const choice = ['Rock', 'Paper', 'Scissors']
    const randomSelection = Math.floor(Math.random()*choice.length)
    return choice[randomSelection]
}

//This function helps the computer decide who won the game
const gameRules = (computerChoice, playerChoice) => {
    let score;
    if(computerChoice == playerChoice){
        score = 0;
    }else if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
        score = -1;
    }else if(computerChoice == 'Paper' && playerChoice == 'Rock'){
        score = -1;
    }else if( computerChoice == 'Scissors' && playerChoice == 'Paper'){
        score = -1;
    }else{
        score = 1;
    }
    return score;
}
const displayResult = (score, computerChoice, playerChoice) => {
    handsDiv.innerText = `👨${playerChoice} Vs 🤖${computerChoice}`
    playerScoreDiV.innerText =`Your Score: ${gameScores['playerScore']}` 
    if(score == 1){
        resultDiv.innerText = `You won!`
    }else if(score == 0){
        resultDiv.innerText = `It's a Tie!`
    }else{
        resultDiv.innerText = `You Lost!`
    }
}

endButton.addEventListener('click', () => {
    gameScores['playerScore'] = 0;
    resultDiv.innerText = ` `;
    playerScoreDiV.innerText = ` `;
    handsDiv.innerText = ` `;

})

//The main function. It is initialised once the player makes any choice
const playGame = () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.value;
            const computerChoice = getComputerChoice();            
            const score = gameRules(computerChoice,playerChoice);
            gameScores['playerScore']+= score;            
            displayResult(score,computerChoice,playerChoice)
        })
    })
}
playGame()
