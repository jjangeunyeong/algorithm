// 연결리스트로 구현한 Queue

class Queue {
  constructor() {
    this.storage = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail++] = element;
  }

  dequeue() {
    const removed = this.storage[this.head];
    delete this.storage[this.head++];
    return removed;
  }

  size() {
    return this.tail - this.head;
  }

  peek() {
    return this.queue[this.head];
  }

  print() {
    let data = "";
    let n = this.head;

    while (this.tail > n) {
      data = data + this.storage[n] + ",";
      n++;
    }

    return data;
  }
}

const queue = new Queue();

queue.enqueue("seahorse");
queue.enqueue("dolphin");
queue.enqueue("whale");
queue.print();
