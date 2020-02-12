const AnagramFinder = function (word) {
  this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {


  function alphabetize(word) {

      if (!word) {
          return;
      }
      word = word.toUpperCase();
      word = word.split('');
      word = word.sort();
      word = word.join('');

      return word;
  }



      anagrams = otherWords.filter(word => (alphabetize(word) === alphabetize(this.word) && word!= (this.word)))

       return anagrams
};



module.exports = AnagramFinder;
