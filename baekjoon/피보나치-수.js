const fs = require("fs");
const dp = { 0: 0, 1: 1 };

function f(n) {
  if (dp[n] !== undefined) return dp[n];
  dp[n] = f(n - 2) + f(n - 1);
  return dp[n];
}

const n = parseInt(fs.readFileSync("/dev/stdin").toString().trim(), 10);
console.log(f(n));
