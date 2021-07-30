class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10000;
  }

  enqueue(element) {
    if (this.rear < this.size) {
      this.data[this.rear] = element;
      this.rear = this.rear + 1;
      return true;
    }
    // if there is no place to insert data
    return false;
  }

  dequeue() {
    if (this.isEmpty() === false) {
      this.rear = this.rear - 1;
      return this.data.shift();
    }

    return -1;
  }

  length() {
    return this.rear;
  }

  isEmpty() {
    return this.rear === 0;
  }

  getFront() {
    if (this.isEmpty() === false) {
      return this.data[0];
    }

    return -1;
  }

  getLast() {
    if (this.isEmpty() === false) {
      return this.data[this.rear - 1];
    }

    return -1;
  }

  print() {
    for (let i = 0; i < this.rear; i++) {
      console.log(this.data[i]);
    }
  }
}

let queue = new Queue();

let solution = (inputLines) => {
  let n = inputLines.shift();
  let answer = "";

  for (let i = 0; i < n; i++) {
    let [command, arg] = inputLines[i].split(" ");

    if (command === "push") {
      queue.enqueue(+arg);
    }

    if (command === "pop") {
      answer += queue.dequeue() + "\n";
    }

    if (command === "size") {
      answer += queue.length() + "\n";
    }

    if (command === "empty") {
      answer += (queue.isEmpty() ? 1 : 0) + "\n";
    }

    if (command === "front") {
      answer += queue.getFront() + "\n";
    }

    if (command === "back") {
      answer += queue.getLast() + "\n";
    }
  }

  return answer;
};
(function () {
  let inputLines = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

  console.log(solution(inputLines));
})();
