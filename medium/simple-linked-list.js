class Element {
  constructor(item, next = null) {
    this.item = item;
    this.nextElement = next;
  }

  datum() {
    return this.item;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  static fromArray(arr) {
    let list = new SimpleLinkedList();

    if (arr === null) return list;

    arr.slice().reverse().forEach(item => list.push(item));

    return list;
  }

  toArray() {
    return this.list.map(element => element.datum());
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(item) {
    if (this.isEmpty()) {
      this.list.unshift(new Element(item));
    } else {
      this.list.unshift(new Element(item, this.head()));
    }
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.list[0].item;
  }

  head() {
    return this.list[0];
  }

  pop() {
    return this.list.shift().datum();
  }
}

module.exports = {Element, SimpleLinkedList};