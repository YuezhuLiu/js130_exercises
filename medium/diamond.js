class Diamond {
  static alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    this.width = this.calculateWidth(letter);

    return this.letterRange(letter).map(letter => this.centerRow(this.makeRow(letter)))
                            .join('\n') + '\n';
  }

  static calculateWidth(letter) {
    return (letter.charCodeAt(0) - 'A'.charCodeAt(0)) * 2 + 1;
  }

  static makeRow(letter) {
    if (letter === 'A') {
      return 'A';
    }

    let centerSpace = (letter.charCodeAt(0) - 'A'.charCodeAt(0) - 1) * 2 + 1;
    return `${letter}${' '.repeat(centerSpace)}${letter}`;
  }

  static centerRow(row) {
    let space = (this.width - row.length) / 2;
    return ' '.repeat(space) + row + ' '.repeat(space);
  }

  static letterRange(letter) {
    let range = [];

    for (let idx = 0; idx < this.alphabets.length; idx++) {
      range.push(this.alphabets[idx]);
      if (this.alphabets[idx] === letter) break;
    }

    return [...range, ...range.reverse().slice(1)];
  }
}

module.exports = Diamond;