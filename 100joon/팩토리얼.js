const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let inputValue = Number(input);

function factorial(N, result) {
    result *=  N;
    if (N === 2) return console.log(result);
    if (N === 0) return console.log(1);

    factorial(N - 1, result);
}

factorial(inputValue, 1);