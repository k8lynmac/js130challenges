class SumOfMultiples {
  constructor() {
    let args = Array.from(arguments);
    this.nums = [...args]
  }

  static to(naturalNum) {
    return new SumOfMultiples().to(naturalNum);
  }

  to(naturalNum) {
    let sum = 0;
    if (this.nums.length === 0) {
      for (let idx = 0; idx < naturalNum; idx++) {
        if (idx % 3 === 0 || idx % 5 === 0) {
          sum += idx;
        }
      }
    } else {
      for (let idx = 0; idx < naturalNum; idx++) {
        for (let loop = 0; loop < this.nums.length; loop++) {
          if (idx % this.nums[loop] === 0) {
            sum += idx;
            break;
          }
        }
      }
    }
    
    return sum;
  }
}

module.exports = SumOfMultiples;