class BeerSong {
  static verse(verse) {
      switch (verse) {
        case 0:
          return  "No more bottles of beer on the wall, no more bottles of beer.\n" + 
                  "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        case 1:
          return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                  "Take it down and pass it around, no more bottles of beer on the wall.\n";
        default:
          return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\n` +
                  `Take one down and pass it around, ` +
                  `${verse - 1} ${verse === 2 ? "bottle" : "bottles"} of beer on the wall.\n`
      }
  }

  static verses(start, end) {
    let result = [];

    for (let current = start; current >= end; current--) {
      result.push(BeerSong.verse(current));
    }

    return result.join('\n');
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;