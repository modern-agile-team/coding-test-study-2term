const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
