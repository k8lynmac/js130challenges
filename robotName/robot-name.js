class Robot {
  static names = [];

  name() {
    if (this.robotName) return this.robotName;

    while (Robot.names.includes(this.robotName) || !this.robotName) {
      this.robotName = this.generateName();
    }

    Robot.names.push(this.robotName);
    return this.robotName;
  }

  generateName() {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let name = '';

    for (let idx = 0; idx < 5; idx++) {
      if (idx < 2) {
        name += alpha[this.getRandomNum(0, alpha.length - 1)];
      } else {
        name += nums[this.getRandomNum(0, nums.length - 1)];
      }
    }

    return name;
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  reset() {
    let idx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(idx, 1);
    this.robotName = null; 
  }
}

module.exports = Robot;