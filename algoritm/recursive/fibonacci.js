const { on } = require("events");
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
  // let z = 0;
  // let f = 1;
  // for (let i = 0; i < N - 1; i++) {
  //   let temp = z;
  //   z = f;
  //   f += temp;
  // }
  // return f;
}
