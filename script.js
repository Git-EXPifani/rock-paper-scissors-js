//Here we go

//Global values
let humanScore = 0;
let computerScore = 0;


//Button Declarations
const btnRock = document.querySelector("#rock");
const btnScissor = document.querySelector("#scissors");
const btnPaper = document.querySelector("#paper");
//Event Listeners (The Buttons)
btnRock.addEventListener("click", ()=>playRound("Rock  "));
btnScissor.addEventListener("click", ()=>playRound("Scissors  "));
btnPaper.addEventListener("click", ()=>playRound("Paper  "));



function getComputerChoice(){
    let choice =Math.floor((Math.random()*3)+1);

    let string;
    if (choice == 1){
        return string="Rock";
    }else if (choice == 2){
        return string="Paper";
    }else{
        return string ="Scissors";
    }
}

function getHumanChoice(){
    let userInput = prompt("Enter your choice: ");
    return userInput;
}

function playRound(humChoice) {

   
            

    let comChoice=getComputerChoice();
            


    const resultPanel = document.querySelector("#results");
    const spanOne = document.createElement("span");
    const spanTwo = document.createElement("span");
    const divSep = document.createElement("div");
    const divScore = document.createElement("div");

    spanOne.textContent = humChoice;
    spanTwo.textContent = comChoice;

    resultPanel.appendChild(spanOne);
    resultPanel.appendChild(spanTwo);

    humChoice = humChoice.trim();
    comChoice = comChoice.trim();


    if(humChoice==comChoice){//Same choice
        divSep.textContent = "No points for either!.";
        resultPanel.appendChild(divSep);
    } else if(humChoice=="Paper"){//Player chooses Paper
        if(comChoice=="Rock"){
        humanScore++;
        divSep.textContent = "You Win! Paper beats Rock.";
        resultPanel.appendChild(divSep);
    divScore.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`
    resultPanel.appendChild(divScore);
}
            else if(comChoice=="Scissors"){
                        computerScore++;
                        divSep.textContent = "You Lose! Paper loses to Scissors.";
                    resultPanel.appendChild(divSep);
                
    divScore.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`
    resultPanel.appendChild(divScore);
            }}


    //Player chooses Rock 
    if(humChoice=="Rock"){
        if(comChoice=="Scissors"){
        humanScore++;
        divSep.textContent = "You Win! Rock beats Scissors.";
        resultPanel.appendChild(divSep);
        divScore.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`
        resultPanel.appendChild(divScore);
    }else if(comChoice=="Paper"){
        computerScore++;
        divSep.textContent =  "You Lose! Rock loses to Paper.";
        resultPanel.appendChild(divSep);
        divScore.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`
        resultPanel.appendChild(divScore);
    }}

    //Player chooses Scissors
     if(humChoice=="Scissors"){
        if(comChoice=="Paper"){
        humanScore++;
        divSep.textContent = "You Win! Scissors beat Paper.";
        resultPanel.appendChild(divSep);
        divScore.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`
        resultPanel.appendChild(divScore);
    }else if(comChoice=="Rock"){
        computerScore++;
        divSep.textContent = "You Lose! Scissors loses to Rock.";
        resultPanel.appendChild(divSep);
        divScore.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`
        resultPanel.appendChild(divScore);
    }}       

    if(humanScore == 5 || computerScore == 5){
        if(humanScore == 5){
            divScore.textContent = "Human Player has reached 5 points! The Winner!!!";
            resultPanel.appendChild(divScore); 
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 5){

            divScore.textContent = "Computer Player has reached 5 points! The Winner!!!";
            resultPanel.appendChild(divScore); 
            humanScore = 0;
            computerScore = 0;
        }
    }
    
}

// function playGame(){

//     console.log(playRound(userChoice,comChoice));
//     //One Round
//      userChoice=getHumanChoice();
//      comChoice=getComputerChoice();

//     console.log(playRound(userChoice,comChoice));
//     //One Round
//      userChoice=getHumanChoice();
//      comChoice=getComputerChoice();

//     console.log(playRound(userChoice,comChoice));
//     //One Round
//      userChoice=getHumanChoice();
//      comChoice=getComputerChoice();

//     console.log(playRound(userChoice,comChoice));
//     //One Round
//      userChoice=getHumanChoice();
//      comChoice=getComputerChoice();

//     console.log(playRound(userChoice,comChoice));
//     //One Round
//     console.log("5 Rounds over!")
// }







