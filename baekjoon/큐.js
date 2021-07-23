let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(data) {
        this.arr.push(data);
    }
    dequeue() {
        return this.arr.length ? this.arr.shift() : -1;
    }
    size() {
        return this.arr.length;
    }
    empty() {
        return this.arr.length ? 0 : 1;
    }
    front() {
        return this.arr.length ? this.arr[0] : -1;
    }
    back() {
        return this.arr.length ? this.arr[this.arr.length - 1] : -1;
    }
}

const queue = new Queue();

function solution(input) {
    const num = Number(input[0]);
    let answer = 0;

    for (let i = 1; i <= num; i++) {
        const [command, num] = input[i].split(' ');

        if (command === "push") queue.enqueue(num);
        else if (command === "pop")  answer += `${queue.dequeue()}\n`;
        else if (command === "size") answer += `${queue.size()}\n`;
        else if (command === "empty") answer += `${queue.empty()}\n`;
        else if (command === "front") answer += `${queue.front()}\n`;
        else if (command === "back")  answer += `${queue.back()}\n`;
    }
    return answer;
}

console.log(solution(input));