const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .slice(1, -1);

const stack = [];
const logs = [];

input.forEach((op) => {
  if (op === 'pop') {
    logs.push(stack.pop() ?? -1)
  } else if (op === 'size') {
    logs.push(stack.length);
  } else if (op === 'empty') {
    logs.push(Number(stack.length === 0));
  } else if (op === 'top') {
    logs.push(stack.slice(-1)[0] ?? -1)
  } else {
    const x = op.split(' ')[1];
    stack.push(x);
  }
});

console.log(logs.join('\n'));
