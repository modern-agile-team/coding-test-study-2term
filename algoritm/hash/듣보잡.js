const readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const num = input[0].split(" ").map((el) => parseInt(el));
  const [N, M] = [num[0], num[1]];
  const men = (input = input.slice(1));
  jobgut(N, M, men);
});

function jobgut(N, M, men) {
  const menObj = {};
  men.forEach((el) => {
    menObj[el] = (menObj[el] || 0) + 1;
  });

  let result = Object.keys(menObj).filter((el) => menObj[el] === 2);
  result = result.sort();
  console.log(result.length);
  for (let i of result) {
    console.log(i);
  }
}
