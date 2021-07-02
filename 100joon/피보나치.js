const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let inputValue = Number(input);

const fibonacciArr = [0, 1];

function fibonacci(n) {
    fibonacciArr.push(fibonacciArr[inputValue - n] + fibonacciArr[inputValue - n + 1]);
    
    if (n) fibonacci(n - 1);

    return fibonacciArr[inputValue];
}

console.log(fibonacci(inputValue));