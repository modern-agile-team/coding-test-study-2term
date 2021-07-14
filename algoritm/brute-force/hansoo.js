const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let answer = "";
rl.on("line", (N) => {
  N = parseInt(N);
  console.log(hansoo(N));
  rl.close();
}).on("close", () => {
  process.exit();
});

function hansoo(N) {
  let result = 0;
  for (let i = 1; i < N + 1; i++) {
    if (i < 100) result = i;
    else if (i < 1000) {
      if (String(i)[0] - String(i)[1] === String(i)[1] - String(i)[2]) {
        result += 1;
      }
    }
  }
  return result;
}
