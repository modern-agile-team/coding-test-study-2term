const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => +v);

input.shift();

const len = input.length - 1;

const answer = [0];

for (let i = len; i >= 0; i -= 1) {
    if (input[i] > answer[answer.length - 1]) answer.push(input[i])
}
console.log(answer.length - 1);
