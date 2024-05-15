class Meetup {
  static dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  static scheduleStartDay = {
    first: 1,
    second: 8,
    third: 15,
    fourth: 22,
    fifth: 29,
    teenth: 13,
    last: undefined,
  }

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.daysOfMonth = new Date(this.year, this.month, 0).getDate();
  }

  day(weekday, schedule) {
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();

    let firstDay = this.searchStartDay(schedule);
    let lastDay = Math.min(firstDay + 6, this.daysOfMonth);
    let dayOfWeek = Meetup.dayOfWeek.indexOf(weekday);

    for (let day = firstDay; day <= lastDay; day++) {
      let date = new Date(this.year, this.month - 1, day);
      if (date.getDay() === dayOfWeek) return date;
    }

    return null;
  }

  searchStartDay(schedule) {
    return Meetup.scheduleStartDay[schedule] || (this.daysOfMonth - 6);
  }
}

module.exports = Meetup;