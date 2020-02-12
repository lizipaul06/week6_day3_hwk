const UpperCaser = function (words) {
 this.words = words
}

UpperCaser.prototype.toUpperCase = function (words) {
    let toUpper = function(word){
  return word.toUpperCase();
};
return result = this.words.map(toUpper);

}

module.exports = UpperCaser;
