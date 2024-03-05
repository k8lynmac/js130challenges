'use strict'
// class Diamond {

//   static makeDiamond(letter) {

//     let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     let aCode = 'A'.charCodeAt();
//     let inputCode = letter.charCodeAt();

//     let rows = (inputCode - aCode)*2 + 1; 
//     let result = '';

//     if (rows === 1) {
//       return 'A\n';
//     }

//     let count = 2;
//     for (let idx = 0; idx < rows; idx++) {
//       let middle = Math.floor(rows/2) + 1;
    
//       if (idx === 0 || idx === rows - 1) {
//         result += ' '.repeat(middle - 1)+ 'A' + ' '.repeat(middle - 1) +'\n';
//       } else if (idx < middle - 1) {
//         let spaces = middle - idx - 1;
//         result += ' '.repeat(spaces) + letters[idx] + ' '.repeat(rows - spaces*2 - 2) + letters[idx] + ' '.repeat(spaces) + '\n';
//       } else if (idx === middle - 1){
//         result += letter + ' '.repeat(rows - 2) + letter + '\n';
//       } else if (idx >= middle) {
//         let spaces = middle - (rows - idx);
//         result += ' '.repeat(spaces) + letters[idx - count] + ' '.repeat(rows - spaces*2 - 2) + letters[idx - count] + ' '.repeat(spaces) + '\n';
//         count+=2;
//       }
//     }
//     console.log(result);
//     return result;
//   }
// }

/*
-find max width/height
based on input letter, length = charCodeAt(inputChar) - charCodeAt('A')

-determine letter for each row 

-determine spaces between letters at each row

-make a row CxxxC

-center it xxCxxxCxx

*/

class Diamond {
 
  static alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

  static makeDiamond(letter) {
    let range = this.getRange(letter);
    let width = range.length;
    let diamond = [];

    for (let idx = 0; idx < width; idx++) {
      diamond.push(this.makeCenter(this.makeRow(range[idx]), width));
    }

    console.log(diamond.join('\n'));
    return diamond.join('\n') + '\n';
  }


  static makeRow(letter) {
    if (letter === 'A') return 'A';
    if (letter === 'B') return 'B B';

    return letter + this.determineSpaces(letter) + letter; 

  }

  static makeCenter(row, width) {

    let edge = (width - row.length)/2;
    return ' '.repeat(edge) + row + ' '.repeat(edge);
  }

  static determineSpaces(letter) {
    let currentLetterIdx = 1;
    let spaces = 1;
    let currentLetter = Diamond.alphabet[currentLetterIdx];

    while (currentLetter !== letter) {
      spaces += 2;
      currentLetterIdx++;
      currentLetter = Diamond.alphabet[currentLetterIdx];
    }
    return ' '.repeat(spaces);
  }

  static getRange(letter) {
    let range = [];
    let alphaArr = Diamond.alphabet.split('');

    for (let idx = 0; idx < alphaArr.length; idx++) {
      if (alphaArr[idx] !== letter) {
        range.push(alphaArr[idx]);
      } else {
        range.push(alphaArr[idx]);
        break;
      }
    }

    return [...range, ...range.reverse().splice(1)];

  }
}



Diamond.makeDiamond('A');
Diamond.makeDiamond('B');
Diamond.makeDiamond('C');
Diamond.makeDiamond('E');
Diamond.makeDiamond('G');


module.exports = Diamond;
/*
P:
input: single char, uppercase
output: 
rules:
>supplied letter is the widest point of the diamond
>horizontally and vertically symmetric
>diamond has a square shape(equal width and height)
>top half of diamond, letters in ascending order
>bottom half, letters in descending order 
>4 corners are triangles 

E:

D:

A:
>need to hold letters within array? 
  >[A, B, C, B, A]
  >[A, B, C, D, E, D, C, B, A]
>need to know how many rows based on input
  >>A = 1 row
  >>C = 5 rows
  >>E = 9 rows
>aCode = charCodeAt('A');
>inputCode = charCodeAt(inputLetter);
>rows = (inputCode - aCode)*2 + 1

>GUARD CLAUSE for input 'A'--- if rows === 1
  >> return 'A'

>need to form a diamond 
>iterate over each row 
  >>at each iteration...
  >>if idx === 0 || idx === rows-1
    console.log(' '.repeat(Math.floor(rows/2) - 1)+ 'A')
  >> else if (idx <= Math.floor(rows/2))
    let spaces = Math.floor(rows/2) - idx
    console.log(''.repeat(spaces) + letters[idx] + ''.repeat(rows - spaces - 2) + letters[idx])
  >> else 
    console.log()

*/

