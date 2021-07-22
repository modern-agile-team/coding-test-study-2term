const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .slice(1, -1)
  .map((value) => Number(value));

let max = 0;
let cnt = 0;
for (let i = input.length - 1; i >= 0; i -= 1) {
  if (input[i] > max) {
    cnt += 1;
    max = input[i];
  }
}

console.log(cnt);
