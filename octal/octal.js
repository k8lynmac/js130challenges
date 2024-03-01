class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  //returns a number
  toDecimal() {

    let sum = 0;

    //invalid input returns 0 
    if (this.isInvalid()) return 0;

    if (this.octal.length === 1) return Number(this.octal) * Math.pow(8, 0);

    let numArr = this.octal.split('');

    for (let idx = 0; idx < numArr.length; idx++) {
      console.log(idx);
      sum += Number(numArr[idx]) * Math.pow(8, numArr.length - idx -1);
    }

    return sum;
  }

  isInvalid() {
    let split = this.octal.split('');
    return (split.some(char => !('01234567'.includes(char)))) 
  }
}

module.exports = Octal;