class Scrabble {
  constructor(word) {
    this.word = word ? word : '';
  }

  score() {
    const SCORES = {
      'aeioulnrst': 1,
      'dg': 2,
      'bcmp': 3,
      'fhvwy': 4,
      'k': 5,
      'jx': 8,
      'qz': 10,
    }

    return this.word.toLowerCase().replace(/[^a-z]/g, '').split('').reduce((sum, letter) => {
      let key = Object.keys(SCORES).filter(letters => letters.includes(letter))[0];
      let score = SCORES[key];
      return sum + score;
    }, 0);
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;