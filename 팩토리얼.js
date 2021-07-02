let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = Number(input);

function fact(n) {
    if (n === 0) return 1
    return n * fact(n - 1)
}
console.log(fact(n))
