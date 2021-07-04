const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  N = parseInt(N);
  console.log(fibonacci(N));
  rl.close();
}).on("close", () => {
  process.exit();
});

function fibonacci(N) {
  if (N === 0) return 0;
  if (N === 1) return 1;
  return fibonacci(N - 1) + fibonacci(N - 2);
}
