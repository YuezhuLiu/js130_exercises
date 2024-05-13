class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error('Invalid number');
    }

    if (PerfectNumber.sumOfDivisors(number) === number) {
      return 'perfect';
    } else if (PerfectNumber.sumOfDivisors(number) < number) {
      return 'deficient';
    } else return 'abundant';
  }

  static sumOfDivisors(number) {
    let sum = 0;
    for (let divisor = 1; divisor < number; divisor++) {
      if (number % divisor === 0) {
        sum += divisor;
      }
    }

    return sum;
  } 
}

module.exports = PerfectNumber;