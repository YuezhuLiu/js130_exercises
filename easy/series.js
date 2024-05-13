class Series {
  constructor(str) {
    this.str = str;
  }

  slices(length) {
    this.isValid(length);
    
    let digits = this.str.split('').map(digit => +digit);
    let result = [];

    for(let idx = 0; idx <= digits.length - length; idx++) {
      result.push(digits.slice(idx, idx + length));
    }

    return result;
  }

  isValid(length) {
    if (length > this.str.length) {
      throw new Error("Slices should be no longer than original string");
    }
  }
}

module.exports = Series;