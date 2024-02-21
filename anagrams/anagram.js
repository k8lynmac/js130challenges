/*
P:
I: array of strings
O: array of anagrams (strings)

rules: 
-no anagrams, returns an []
-compareWord !== inputWord tan !== anagram for tan (edge)
-if compWord.length !== inputWord, return false (edge)
--> out for duplciate letters
-Eliminate anagrams with same checksum (depends on method) EXTRA conditional check?

D: arrays

A:

>class Anagram with a match method 

> match method returns an array of strings that are anagrams of the input word
>case insensitive

helper fx to check if anagram
-if true, push to an array return true and then push to a resultArr

iterate over each word to check if compStr includes that letter
-if compStr includes that letter, then find index of that letter in compStr (needs to be an array)
-at that index, replace with a 0

--> if at the end of the iteration, the length of the array is filled with 0's then return true
>compArr = compStr.split('')
>return compArr.filter(position => position === 0)

D: 
*/

class Anagram {
  constructor(compStr) {
    this.compStr = compStr;
  }

  match(wordsToCheck) {
    let anagramArr = [];
    wordsToCheck.forEach(word => {
      if (this.isItAnAnagram(word.toLowerCase())) {
        anagramArr.push(word);
      }
    });

    return anagramArr;
  }

  isItAnAnagram(word) {
    if ((this.compStr.length !== word.length) || (this.compStr.toLowerCase() === word.toLowerCase())) {
      return false;
    } 

    let compArr = this.compStr.toLowerCase().split('');

    word.split('').forEach(letter => {
      if (compArr.includes(letter)) {
        let index = compArr.indexOf(letter);
        compArr[index] = 0;
      }
    });

    return compArr.every(position => position === 0);


  }
}

module.exports = Anagram;
// xtest("Identical word is not anagram", () => {
//   let detector = new Anagram('corn');
//   let anagrams = detector.match(['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park']);
//   expect(anagrams).toEqual(['cron']);
// });