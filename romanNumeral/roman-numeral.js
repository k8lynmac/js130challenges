class RomanNumeral {
  static ROMAN_NUMS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5, 
    IV: 4,
    I: 1,
  }

  constructor(decimal) {
    this.decimal = decimal;
    
  }

  //returns roman numeral string equivalent; conversion from decimal number
  toRoman() {
    let decimal = this.decimal;
    let roman = '';
    while (decimal > 0) {
      let keys = Object.keys(RomanNumeral.ROMAN_NUMS);
   
      keys.forEach(letterGrp => {
  
        let value = RomanNumeral.ROMAN_NUMS[letterGrp];
        if (decimal / value > 0) {
          let remainder = Math.floor(decimal / value);
          roman += letterGrp.repeat(remainder);
          decimal -= remainder * value;
          console.log(decimal);
        }
      })
    }

    return roman;
  }
}

let number = new RomanNumeral(3500);
console.log(number.toRoman());
module.exports = RomanNumeral;