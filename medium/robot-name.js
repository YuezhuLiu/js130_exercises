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

  reset() {
    let nameIdx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameIdx, 1);
    this.robotName = null;
  }

  randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateName() {
    const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let name = '';

    for (let idx = 0; idx < 5; idx++) {
      if (idx < 2) {
        name += ALPHABETS[this.randomIndex(0, 25)];
      } else {
        name += this.randomIndex(0, 9);
      }
    }

    return name;
  }

}

module.exports = Robot;