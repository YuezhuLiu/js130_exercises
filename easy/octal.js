class Octal {
  constructor(octalNumber) {
    this.octalNumber = octalNumber;
  }

  toDecimal() {
    if (this.isInvalid()) return 0;

    return this.octalNumber.split('').reverse().reduce((sum, digit, idx) => {
      return sum + digit * 8 ** idx;
    }, 0);

  }

  isInvalid() {
    return (this.octalNumber.match(/[a-z89]/gi))
  }
}

module.exports = Octal;