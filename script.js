// var game={
//     randomNumber: Math.random()}
//     console.log(game.randomNumber)
// var computerSelection = Math.floor(Math.random() * 3)
// console.log(computerSelection)



// if (computerSelection === playerSelection) {
//     console.log("TIE")
// }
// else if (computerSelection === 0 && playerSelection === 2) {
//     console.log('Computer WINS!')
// }
// else if (computerSelection === 2 && playerSelection === 0) {
//     console.log('Player WINS!')
// }
// else if (computerSelection > playerSelection) {
//     console.log('Computer WINS!')
// }
// else if (computerSelection < playerSelection) {
//     console.log('Player WINS!')
// }


// capture computer selection
// player selection prompt
// compare selections
option = ['Rock', 'Paper', 'Scissors']
var playerChoice = ''
var numPlayer
while (!option.includes(playerChoice))                                          
    {
       playerChoice = prompt ('Choose Rock, Paper or Scissors!', 'Rock, Paper, Scissors');
    }

function computerSelection (){
    var computerChoice = Math.floor(Math.random() * 3)
    return computerChoice
}

var computerChoice = computerSelection();
var computerChoice = computerSelection();
var numPlayer = playerSelection();
compare (computerChoice, numPlayer);


var compMessage = ("Computer Picks", option[computerChoice])
console.log("Computer Picks", (compMessage))
alert("Computer Picks " + compMessage)
var playerMessage = ("Player Picks", option[numPlayer])
console.log("Player Picks", (playerMessage))
alert("Player Picks " + playerMessage)


function playerSelection () {
    if (playerChoice === 'Rock') {
        numPlayer = 0
    }
    else if (playerChoice === 'Paper') {
        numPlayer = 1
    }
    
    else if (playerChoice === 'Scissors') {
        numPlayer = 2
    }
    return numPlayer
}
function compare (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        result = alert("It's a TIE!")
        console.log("It's a TIE!")
    }
    else if (computerSelection === 0 && playerSelection === 2) {
        result = alert('Computer WINS!')
        console.log('Computer WINS!')
    }
    else if (computerSelection === 2 && playerSelection === 0) {
        result = alert('YOU WIN!')
        console.log('YOU WIN!')
    }
    else if (computerSelection > playerSelection) {
        result = alert('Computer WINS!')
        console.log('Computer WINS!')
    }
    else if (computerSelection < playerSelection) {
        result = alert('YOU WIN!')
        console.log('YOU WIN!')
    }
    return result;
    
}


