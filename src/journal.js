export function Journal(title, entry) {
  this.entry = entry;
  this.title = title;
}

export function Entry(totalWords) {
  this.totalWords = totalWords;
}

Journal.prototype.returnEntry = function() {
  return this.title + "<br>" + this.entry;
};

Entry.prototype.wordCount = function() {
  return this.totalWords.split(" ").length;
};

Entry.prototype.vowels = function() {
  return this.totalWords.match(/[aeiouy]/gi).length;
}