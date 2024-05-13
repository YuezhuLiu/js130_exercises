class SumOfMultiples {
  constructor(...factors) {
    this.factors = [...factors];
  }

  to(limit) {
    let sum = 0
    for (let number = 1; number < limit; number++) {
      if (this.factors.some(factor => number % factor === 0)) {
        sum += number;
      }
    }

    return sum;
  }
  static to(limit) {
    return new SumOfMultiples(3, 5).to(limit);
  }
}

module.exports = SumOfMultiples;