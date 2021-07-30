const readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input[0] = input[0].split(" ").map((el) => parseInt(el));
  let numbers = input.slice(1);
  const N = input[0];
  numbers = numbers.map((el) => parseInt(el));
  stick(numbers, N);
});

function stick(numbers, N) {
  const result = [];
  for (let i = N - 1; i >= 0; i--) {
    if (i === N - 1) {
      result.push(numbers[i]);
    } else {
      if (numbers[i] > result[result.length - 1]) {
        result.push(numbers[i]);
      }
    }
  }
  console.log(result.length);
}
