// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = `10
1
3
5
4
0
0
7
0
0
6`
  .split('\n')
  .map((el) => Number(el));

const T = Number(input.shift());
const stack = [];
let result = 0;

for (let i = 0; i < T; i += 1) {
  const value = Number(input[i]);

  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}

for (let j = 0; j < stack.length; j += 1) {
  result += stack[j];
}
console.log(result);
