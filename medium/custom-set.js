class CustomSet {
  constructor(list = []) {
    this.list = list;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  contains(element) {
    return this.list.includes(element);
  }

  isSubset(set) {
    return this.list.every(element => set.contains(element));
  }

  isDisjoint(set) {
    return (this.isEmpty() || set.isEmpty() ||
            this.list.every(element => !set.list.includes(element)));
  }

  isSame(set) {
    return (this.isEmpty() && set.isEmpty()) ||
           this.list.sort().join('') === set.list.sort().join('');
  }

  add(number) {
    if (!this.contains(number)) {
      this.list.push(number);
    }

    return new CustomSet(this.list);
  }

  intersection(set) {
    let sharedItems = [];
    let largerSet = this.list.length >= set.list.length ? this.list : set.list;
    let smallerSet = this.list.length < set.list.length ? this.list : set.list;

    largerSet.forEach(element => {
      if (smallerSet.includes(element)) {
        sharedItems.push(element);
      }
    });
    
    return new CustomSet(sharedItems);
  }

  difference(set) {
    let differentList = this.list.filter(element => !set.list.includes(element));
    return new CustomSet(differentList);
  }

  union(set) {
    let unionList = [...this.list, ...set.list];
    unionList = unionList.filter((element, idx) => idx === unionList.indexOf(element));

    return new CustomSet(unionList);
  }

}

module.exports = CustomSet;