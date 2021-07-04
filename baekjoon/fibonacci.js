let input = require('fs').readFileSync('/dev/stdin').toString();
const value = Number(input);

function fibonacci(value) {
    if (!value) return 0;
    if (value === 1) return 1;

    return fibonacci(value - 1) + ffibonacci(value - 2);
}

console.log(fibonacci(value));

