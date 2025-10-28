//Here we go

//Global values
let humanScore = 0;
let computerScore = 0;


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

function playRound(humChoice,comChoice) {

let firstLetter;
let theRest;

firstLetter=humChoice[0].toUpperCase();

theRest = humChoice.replace(humChoice[0],"");
let theRest2 = theRest.toLowerCase(); 
   
            

            

    humChoice = firstLetter + theRest2;
    console.log(humChoice);
    console.log(comChoice);

    if(humChoice==comChoice){//Same choice
        return "No points for either!."
    } else if(humChoice=="Paper"){//Player chooses Paper
        if(comChoice=="Rock"){
        humanScore++;
        return "You Win! Paper beats Rock.";}
            else if(comChoice=="Scissors"){
                        computerScore++;
                        return "You Lose! Paper loses to Scissors.";}}

    //Player chooses Rock 
    if(humChoice=="Rock"){
        if(comChoice=="Scissors"){
        humanScore++;
        return "You Win! Rock beats Scissors.";
    }else if(comChoice=="Paper"){
        computerScore++;
        return "You Lose! Rock loses to Paper.";
    }}

    //Player chooses Scissors
     if(humChoice=="Scissors"){
        if(comChoice=="Paper"){
        humanScore++;
        return "You Win! Scissors beat Paper.";
    }else if(comChoice=="Rock"){
        computerScore++;
        return "You Lose! Scissors loses to Rock.";
    }}       
    
}

function playGame(){
    let userChoice=getHumanChoice();
    let comChoice=getComputerChoice();

    console.log(playRound(userChoice,comChoice));
    //One Round
     userChoice=getHumanChoice();
     comChoice=getComputerChoice();

    console.log(playRound(userChoice,comChoice));
    //One Round
     userChoice=getHumanChoice();
     comChoice=getComputerChoice();

    console.log(playRound(userChoice,comChoice));
    //One Round
     userChoice=getHumanChoice();
     comChoice=getComputerChoice();

    console.log(playRound(userChoice,comChoice));
    //One Round
     userChoice=getHumanChoice();
     comChoice=getComputerChoice();

    console.log(playRound(userChoice,comChoice));
    //One Round
    console.log("5 Rounds over!")
}







