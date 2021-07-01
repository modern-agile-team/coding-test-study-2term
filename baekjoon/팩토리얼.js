const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const n = Number(input);
// let n = 10;

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(n));

