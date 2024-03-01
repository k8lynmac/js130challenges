class Clock {
  static ONE_DAY = 24*60;

  constructor(hour, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
  }

  static at(hour, min) {
    return new Clock(hour, min);
  }

  toString() {
    let hourStr = String(this.hour);
    let minStr = String(this.minutes);
    
    if (this.hour < 10) {
      hourStr = '0' + hourStr;
    }
    if (this.minutes < 10) {
      minStr = '0' + minStr;
    }

    return hourStr + ':' + minStr;
  }

  add(minutes) {

    let minutesSinceMidnight = this._computeMinutesSinceMidnight() + minutes;

    while (minutesSinceMidnight >= Clock.ONE_DAY) {
      minutesSinceMidnight -= Clock.ONE_DAY;
    }

    return this._computeTimeFrom(minutesSinceMidnight);
  }

  subtract(minutes) {


    let minutesSinceMidnight = this._computeMinutesSinceMidnight() - minutes;

    while (minutesSinceMidnight < 0) {
      minutesSinceMidnight += Clock.ONE_DAY;
    }
    return this._computeTimeFrom(minutesSinceMidnight);

  }

  _computeTimeFrom(minutesSinceMidnight) {

    let hours = Math.floor(minutesSinceMidnight / 60);
    let minutes = minutesSinceMidnight % 60;
    hours %= 24;
    return new Clock(hours, minutes);
  }

  _computeMinutesSinceMidnight() {

      let totalMinutes = (60 * this.hour) + this.minutes;
      return totalMinutes % Clock.ONE_DAY;
  }


  isEqual(clockObj) {
    return (this.toString() === clockObj.toString());
  }
}

module.exports = Clock;