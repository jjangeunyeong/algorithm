const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const fs = require("fs");
const [n, ...commandList] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

// ? solution1: 연결리스트 큐로 구현
// ? solution2: 스캑 큐로 구현
// ! console을 switch case문마다 찍었을 때 시간초과가 생겨서 result 배열을 만들어 한꺼번에 결과를 출력했다.

function solution1() {
  const result = [];
  class Queue {
    constructor() {
      this.storage = [];
      this.head = 0;
      this.tail = 0;
    }

    push(e) {
      this.storage[this.tail] = e;
      this.tail++;
    }

    pop() {
      if (this.empty()) return -1;
      const removedItem = this.storage[this.head];
      this.storage[this.head];
      this.head++;
      return removedItem;
    }

    size() {
      return this.tail - this.head;
    }

    empty() {
      return this.tail === this.head ? 1 : 0;
    }

    front() {
      if (this.empty()) return -1;
      return this.storage[this.head];
    }

    back() {
      if (this.empty()) return -1;
      return this.storage[this.tail - 1];
    }
  }

  const q = new Queue();

  commandList.forEach((c) => {
    const command = c.trim().split(" ")[0];

    switch (command) {
      case "push":
        const element = c.split(" ")[1];
        q.push(Number(element));
        break;
      case "front":
        result.push(q.front());
        break;
      case "back":
        result.push(q.back());
        break;
      case "size":
        result.push(q.size());
        break;
      case "empty":
        result.push(q.empty());
        break;
      case "pop":
        result.push(q.pop());
        break;
      default:
        console.log("해당 명령어가 없습니다.");
    }
  });
  return result;
}

function solution2() {
  const stack = [];
  const result = [];
  commandList.forEach((c) => {
    const command = c.trim().split(" ")[0];

    switch (command) {
      case "push":
        const element = c.split(" ")[1];
        stack.push(Number(element));
        break;
      case "front":
        if (stack.length === 0) result.push(-1);
        else result.push(stack[0]);
        break;
      case "back":
        if (stack.length === 0) result.push(-1);
        else result.push(stack[stack.length - 1]);
        break;
      case "size":
        result.push(stack.length);
        break;
      case "empty":
        result.push(stack.length === 0 ? 1 : 0);
        break;
      case "pop":
        if (stack.length === 0) result.push(-1);
        else result.push(stack.shift());
        break;
      default:
        result.push("해당 명령어가 없습니다.");
    }
  });
  return result;
}

console.log(solution1().join("\n"));
