let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){

  randomNum = Math.floor(Math.random()*10);
    
  return randomNum;

}  


// The function that be call each round to determine which guess is closest to the target number.
// starts here

function compareGuesses(humanGuess,computerGuess,secretTargetNum) {

    let humanCloseValue = Math.abs(secretTargetNum - humanGuess);
    let computerCloseValue = Math.abs(secretTargetNum-computerGuess);


    // if (humanGuess > 9) {
    //     alert("Your number is oput of range !");
        
    // }
    
    if (humanCloseValue<computerCloseValue || humanCloseValue===computerCloseValue) {

        return true;
        
    } 
    else {
        return false;
  }


  
  }
 
 


function updateScore(scores){

    if (scores=='human') {
   
       humanScore++;
        
    }
    else if(scores == 'computer') {
   
       computerScore++;
    }
       
   }

   function  advanceRound() {
       currentRoundNumber++;
       
   }
    
   