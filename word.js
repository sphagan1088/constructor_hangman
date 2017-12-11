var Letter = require("./letter");

function Word(gameWord){
    this.letters = gameWord.split("").map(function(char){
        return new Letter(char);
    });
}

//do show the word function 
Word.prototype.show = function(){
    return this.letters.map(function(letter){
        return letter.show();
    });
};

Word.prototype.isLetterInWord = function(char){
    for(var i = 0; i < this.letters.length; i++){
        if(char.toUpperCase() === this.letters[i].char.toUpperCase()){
            return true;
        }
        return false;
    }
}

module.exports = Word;