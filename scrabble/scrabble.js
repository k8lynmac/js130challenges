class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static SCRABBLE_LETTERS = {
    AEIOULNRST: 1,
    DG: 2, 
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8, 
    QZ: 10,
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    let count = 0;
    if (this.word === null) return 0;

    let wordArr = this.word.toUpperCase().split('');

    if (wordArr.some(char => char === ' ')) return 0;

    wordArr.forEach(char => {
      Object.keys(Scrabble.SCRABBLE_LETTERS).forEach(group => {
        if (group.includes(char)) {
          count += Scrabble.SCRABBLE_LETTERS[group];
        }
      });
    });

    return count;
  }

}


module.exports = Scrabble;