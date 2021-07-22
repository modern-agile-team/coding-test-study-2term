const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v => +v);

const views = [0];

for (let i = input.length - 1; i > 0; i -= 1) {
    if (input[i] > views[views.length - 1]) views.push(input[i]);
}

console.log(views.length - 1);