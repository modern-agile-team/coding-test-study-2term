let input = require('fs').readFileSync('/dev/stdin').toString();
const value = Number(input);

function factorial(value) {
    if (value === 1) return value;
    if (!value) return 1;
    return value * factorial(value - 1);
}

console.log(factorial(value));

