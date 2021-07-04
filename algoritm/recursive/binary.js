const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let answer = "";
rl.on("line", (N) => {
  N = parseInt(N);
  console.log(binary(N));
  rl.close();
}).on("close", () => {
  process.exit();
});

function binary(N) {
  if (N === 1) return (answer = N + answer);
  else {
    answer = (N % 2) + answer;
    return binary(Math.floor(N / 2));
  }
}
