class RomanNumeral {
  constructor(decimalNumber) {
    this.decimal = decimalNumber;
  }

  toRoman() {
    let roman = '';
    let number = this.decimal;
    //I = 1
    //V = 5
    //X = 10
    //L = 50
    //C = 100
    //D = 500
    //M = 1000

    //if number divisible by 1000, roman string = 
    while (number > 0) {
      if (number >= 1000) {
        let count = Math.floor(number/1000);
        roman += 'M'.repeat(count);
        number -= (1000*count);
      } else if (number < 1000 && number >= 900) {
        roman += 'CM';
        number -= 900;
      } else if (number >= 500) {
        roman += 'D';
        number -= 500;
      } else if ((number >= 100) && (number < 400)) {
        let count = Math.floor(number/100);
        roman += 'C'.repeat(count);
        number -= (100*count);
      } else if (number >= 400) {
        roman += 'CD'
        number -= 400;
      } else if (number < 100 && number >= 90) {
        roman += 'XC';
        number -= 90;
      } else if (number >= 50) {
        roman += 'L';
        number -= 50;
      } else if ((number >= 10) && (number < 40)) {
        let count = Math.floor(number/10);
        roman += 'X'.repeat(count);
        number -= (10*count);
      } else if (number >= 40) {
        roman += 'XL';
        number -= 40;
      } else if (number < 10 && number >= 9) {
        roman += 'IX';
        number -= 9;
      } else if (number >= 5) {
        roman += 'V';
        number -= 5;
      } else if ((number >= 1) && (number < 4)) {
        roman += 'I'.repeat(number);
        number -= (number);
      } else if (number >= 4) {
        roman += 'IV';
        number -= 4;
      }



      console.log(number);
  }
  return roman;
  }
}

let number = new RomanNumeral(2040); 
console.log(number.toRoman()); //MMXL



module.exports = RomanNumeral;