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
    console.log(userInput);
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
}







