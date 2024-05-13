class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    const ROMAN_NUMERALS = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40, 
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };

    let romanNumeral = '';
    let toConvert = this.number;

    Object.values(ROMAN_NUMERALS).sort((a, b) => b - a).forEach(value => {
      let numeral = Object.keys(ROMAN_NUMERALS).filter(key => ROMAN_NUMERALS[key] === value)[0];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;
      
      if (multiplier > 0) {
        romanNumeral += (numeral.repeat(multiplier));
      }

      toConvert = remainder;
    });

    return romanNumeral;
  }
}

module.exports = RomanNumeral;