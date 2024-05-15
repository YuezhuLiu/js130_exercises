class Clock {
  static ONE_DAY = 60 * 24;

  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  add(minutes) {
    let total_minutes = (this.hour * 60 + this.minute + minutes) % Clock.ONE_DAY;
    let minute = total_minutes % 60;
    let hour = Math.floor(total_minutes / 60);

    return new Clock(hour, minute);
  }

  subtract(minutes) {
    let total_minutes = this.hour * 60 + this.minute - minutes;

    while (total_minutes < 0) {
      total_minutes += Clock.ONE_DAY;
    }

    let minute = total_minutes % 60;
    let hour = Math.floor(total_minutes / 60);

    return new Clock(hour, minute);
  }

  toString() {
    return `${this.hour < 10 ? '0' + this.hour : this.hour}:` +
           `${this.minute < 10 ? '0' + this.minute : this.minute}`;
  }

  isEqual(otherClock) {
    return this.toString() === otherClock.toString();
  }

}

module.exports = Clock;