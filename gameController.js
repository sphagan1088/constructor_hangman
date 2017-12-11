var inquirer = require("inquirer");
var Word = require("./word");

//Store words
var words = ["Snowman", "Christmas Tree", "Santa Claus", "Jolly", "Jingle Bells", "Ornaments","Elves", "Reindeer", "Miseltoe", "Sleigh"];

var guessesLeft = 10;

var currentWord = new Word(getRandomWord());

//Get random word
function getRandomWord() {
   return words[Math.floor(Math.random() * words.length)];
}



//prompt user for letter
function promptUser(){
    inquirer.prompt([
        {
            type: "input",
            name: "question1",
            message: "Guess a letter"
        }
    ]).then(function(answers){
      //if guessed letter is in word 
       if(currentWord.isLetterInWord(answers.question1)) {
            //let user know correct guess
            console.log("Good job, keep guessing");
       }
       else {
            //subtract 1 from total guesses
            guessesLeft -= 1;
            //let user know incorrect guess
            console.log("Wrong letter, guess again");
            //let user know how many guesses left
            console.log("You have " + guessesLeft + " left");
            console.log(currentWord.show());
            promptUser();

            //if game is over 
                //if player is winner
                    //do player winning stuff
                //else
                    //do losing stuff
            //else 
                //prompt guess again
                
       }
    });
}
//After user guesses a letter show letter if in word
//If player runs through all 10 guesses, should stop instead of going to -1 
// If player guesses right letter it should prompt again to ask user for another letter. 
//If you win display you win
//If you lose display you lost, want to play again?
//Spacing between words in the word array
promptUser();