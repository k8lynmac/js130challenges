class Scrabble {
  constructor(scrabble) {
    this.scrabble = scrabble;
  }

  //computes score of this.scrabble
  score() {
    if ((this.scrabble === null) || (this.scrabble.length === 0)) return 0;

    //initialize sum = 0
    let sum = 0;

    //split scrabble into array
    let wordArr = this.scrabble.split('');

    //iterate over each letter 
    for (let position = 0; position < wordArr.length; position++) {
      if (wordArr[position] === ' ') {
        sum = 0; 
        return 0;
      }

      let count = this.getCount(wordArr[position].toUpperCase());
      sum += count;
    }

    return sum;
  }

  getCount(letter) {
    if ('AEIOULNRST'.includes(letter)) {
      return 1;
    } else if ('DG'.includes(letter)) {
      return 2;
    } else if ('BCMP'.includes(letter)) {
      return 3;
    } else if ('FHVWY'.includes(letter)) {
      return 4;
    } else if ('K'.includes(letter)) {
      return 5;
    } else if ('JX'.includes(letter)) {
      return 6;
    } else if ('QZ'.includes(letter)) {
      return 10;
    }
  }
}


module.exports = Scrabble;