 function Letter(char){
    this.char = char;
    this.isVisible = false;
 }

 Letter.prototype.show = function(){
    if(this.isVisible) {
        return this.char;
    }
    return "_";
 };

module.exports = Letter;