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
  const N = input[0];
  let words = input.slice(1);
  reverseWords(N, words);
});

function reverseWords(N, str) {
  for (let i = 0; i < N; i++) {
    str[i] = str[i].split(" ");
    let result = "";
    for (let j = 0; j < str[i].length; j++) {
      result += str[i][j].split("").reverse().join("") + " ";
    }
    console.log(result);
  }
}
