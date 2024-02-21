class PerfectNumber {

  static classify(num) {
    if (num < 0) {
      throw new Error;
    }
    let sum = 0;
    let divArr = [1];
    //find Aliquot sum
    //find divisors of input num -- hold in an array [1, ...]
      //loop through from index = 2 to index < num
      //if num % index === 0, push num to array 

    for (let idx = 2; idx < num; idx++) {
      if (num % idx === 0) {
        divArr.push(idx);
      }
    }  
    //calculate sum of divArr
    sum = divArr.reduce((accum, current) => accum + current);

    if (sum === num) {
      return 'perfect';
    } else if (sum > num) {
      return 'abundant';
    } else {
      return 'deficient'
    }
  }
}

module.exports = PerfectNumber;