class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(wordsArr) {
    return wordsArr.filter(word => {
      return (word.toLowerCase() !== this.word &&
          word.toLowerCase().split('').sort().join('') === this.word.split('').sort().join(''));
    });
  }
}

module.exports = Anagram;