const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .slice(1, -1)
  .map((val) => Number(val));

const stack = [];

input.forEach((op) => {
  if (op === 0) {
    stack.pop();
  } else {
    stack.push(op);
  }
});

console.log(stack.reduce((acc, val) => acc + val, 0));
