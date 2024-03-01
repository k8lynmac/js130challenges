class DNA {
  constructor(dnaStr) {
    this.dnaStr = dnaStr;
  }

  //returns a number representing Hamming distance bw 2 DNA strands
  hammingDistance(compareStr) {
    let length = Math.min(compareStr.length, this.dnaStr.length);
    let count = 0;
    for (let idx = 0; idx < length; idx++) {
      if (compareStr[idx] !== this.dnaStr[idx]) {
        count++;
      }
    }
    return count;
  }
}

module.exports = DNA;