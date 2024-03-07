class Meetup {
  static DESCRIPTORS = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5, 
    teenth: [13, 14, 15, 16, 17, 18, 19]
  }

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.daysInMonth = new Date(this.year, this.month - 1, 0).getDate();
  }

  //string inputs, case insensitive 
  day(weekday, descriptor) {
    
    weekday = weekday.toLowerCase();
    descriptor = descriptor.toLowerCase();

    return this.findDay(weekday, descriptor);
    
  }


  findDay(weekday, descriptor) {

    let countDays = {
      sun: 0,
      mon: 0,
      tue: 0,
      wed: 0,
      thu: 0,
      fri: 0,
      sat: 0,
    }

    for (let idx = 1; idx < this.daysInMonth + 1; idx++) {

      let current = new Date(this.year, this.month - 1, idx).toString();
      let identifier = current.substring(0, 3).toLowerCase();

      countDays[identifier] += 1;

      //special case for last descriptor
      if (descriptor === 'last') {
        let compMonth = this.getCounts(this.year, this.month);
        if (identifier === weekday.substring(0, 3) && compMonth[identifier] === countDays[identifier]) {
          return new Date(this.year, this.month - 1, idx);
        } else {
          current = new Date(this.year, this.month - 1, idx).toString();
        }
      }

      //special case for teenth descriptor
      if (descriptor === 'teenth') {
        if (identifier === weekday.substring(0, 3) && Meetup.DESCRIPTORS[descriptor].includes(idx)) {
          return new Date(this.year, this.month - 1, idx);
        } else {
          current = new Date(this.year, this.month - 1, idx).toString();
        }
      }

      //case for when descriptor === first, second, third, fourth, fifth
      if (identifier === weekday.substring(0, 3) && Meetup.DESCRIPTORS[descriptor] === countDays[identifier]) {
        return new Date(this.year, this.month - 1, idx);
      } else {
        current = new Date(this.year, this.month - 1, idx).toString();
      }
    }

    //if conditions are never satisfied, null is returned 
    return null;
  }

  //necessary for comparing whole month with `last` descriptor
  getCounts(year, month) {

    let countDays = {
      sun: 0,
      mon: 0,
      tue: 0,
      wed: 0,
      thu: 0,
      fri: 0,
      sat: 0
    }

    for (let idx = 1; idx < this.daysInMonth + 1; idx++) {
      if (idx === 29 && this.month === 2) break; //edge case for February

      let current = new Date(this.year, this.month - 1, idx).toString();
      // console.log(current);
      
      let identifier = current.substring(0, 3).toLowerCase();

      countDays[identifier] += 1;
    }

    return countDays;
  }


}

module.exports = Meetup; 