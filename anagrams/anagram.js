class Anagram {

  constructor(inputStr) {
    this.input = inputStr;
  }
  match(wordsArr) {
    let anagramArr = wordsArr.filter(word => {
      if (word.toLowerCase() === this.input.toLowerCase()) return false;

      return this.isItAnAnagram(word); //returns true, then word is selected for anagramArr
    });

    return anagramArr;
  }

  isItAnAnagram(word) {
    return (word.toLowerCase().split('').sort().join('') === this.input.toLowerCase().split('').sort().join(''));
  }
}

module.exports = Anagram;
s