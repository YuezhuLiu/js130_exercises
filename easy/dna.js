class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let length = Math.min(this.strand.length, otherStrand.length);
    let distance = 0;

    for (let idx = 0; idx < length; idx++) {
      if (this.strand[idx] !== otherStrand[idx]) {
        distance += 1;
      }
    }

    return distance;
  }
}

module.exports = DNA;