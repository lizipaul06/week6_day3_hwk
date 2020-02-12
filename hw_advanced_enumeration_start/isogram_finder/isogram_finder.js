const IsogramFinder = function (word) {
  this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
let isIsogram = (word) => word.split("").every((c, i) => word.indexOf(c) == i);
  return isIsogram(this.word);

}

module.exports = IsogramFinder;
