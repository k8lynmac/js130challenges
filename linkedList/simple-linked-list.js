class Element {
  constructor(datumVal, nextElement) {
    this.datumVal = datumVal;
    this.nextEl = nextElement;
  }

  datum() {
    return this.datumVal;
  }

  //returns a boolean that indicates whether the current element is the last one in the list
  isTail() {
    return !this.next();
  }

  next() {
    return this.nextEl || null;
  }

}

class SimpleLinkedList {

  static fromArray(args) {
    if (!args) {
      args = [];
    }

    let list = new SimpleLinkedList();

    [...args].reverse().forEach(element => list.push(element))

    return list;
  }

  toArray() {
    let result = [];
    let current = this.head();
     
    while (current !== null) {
      result.push(current.datum());
      current = current.next();
    }

    return result;
  }

  size() {
    let size = 0;
    let currentEl = this.head();
    
    while (currentEl) {
      size += 1;
      currentEl = currentEl.next();
    }

    return size;
  }

  peek() {
    if (this.size() === 0) return null;
    return this.head().datumVal;
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headEl = element;
  }

  isEmpty() {
    return this.head() === null;
  }

  head() {
    return this.headEl || null;
  }

  pop() {
    let datum = this.peek();
    let newHead = this.head().next();
    this.headEl = newHead;
    return datum;
  }

  reverse() {
    let list = new SimpleLinkedList();
    let current = this.head();

    while (current !== null) {
    
      list.push( current.datum());
      current = current.next();
    }

    return list;
  }
}

module.exports = { SimpleLinkedList, Element };