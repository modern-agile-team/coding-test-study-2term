const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  N = parseInt(N);
  console.log(factorial(N));
  rl.close();
}).on("close", () => {
  process.exit();
});

function factorial(N) {
  return N === 0 ? 1 : N <= 1 ? N : N * factorial(N - 1);
}
