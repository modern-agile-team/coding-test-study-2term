const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const n = Number(input);

// let n = 10;

function f(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return f(n - 1) + f(n - 2);
}
console.log(f(n));

