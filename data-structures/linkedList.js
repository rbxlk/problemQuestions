class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = Symbol("head");
class LinkedList {
  constructor() {
    this[head] = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  countNodes() {
    let count = 1;
    let current = this[head];
    while (current.next != null) {
      current = current.next;
      count++;
    }
    return count;
  }
}

newList = new LinkedList();

newList.add("yellow");
newList.add("blue");
newList.add("red");

console.log(newList.countNodes());
