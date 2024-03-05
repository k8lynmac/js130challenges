class Series {
  constructor(string) {
    this.string = string.split('');
  }

  //returns all the possible consecutive number series of a specified length in this.string
  slices(length) {
    let resultArr = [];

    if (length > this.string.length) {
      throw new Error()
    }

    let stringSeriesArr = [];

    for (let idx = 0; idx < this.string.length + 1; idx++) {
   
      stringSeriesArr.push(Number(this.string[idx]));
      
      for (let second = idx + 1; second < this.string.length + 1; second++) {

        if (stringSeriesArr.length === length) {
          resultArr.push(stringSeriesArr);
          stringSeriesArr = [];
          break;
        } else {
          stringSeriesArr.push(Number(this.string[second]));
        }

      }
    }

    return resultArr;
  }

}

module.exports = Series;