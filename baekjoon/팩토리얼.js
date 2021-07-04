const fs = require("fs");

function f(n) {
  if (n === 0) return 1;
  return n * f(n - 1);
}

const n = parseInt(fs.readFileSync("/dev/stdin").toString().trim(), 10);

console.log(f(n));
