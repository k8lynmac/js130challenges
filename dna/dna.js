class DNA {
  constructor(string) {
    this.string = string;
  }

  hammingDistance(compareStr) {
    if (compareStr.length === 0 && this.string.length === 0) return 0;

    let length;
    let count = 0
    if (this.string.length > compareStr.length) {
      length = compareStr.length;
    } else {
      length = this.string.length;
    }

    for (let idx = 0; idx < length; idx++) {
      if (this.string[idx] !== compareStr[idx]) {
        count++;
      }
    }

    return count;
  }
}

module.exports = DNA;