const fs = require('fs');
//const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
const input = 5;

function factorial (N) {
    if(N == 1 || N == 0) return 1;
    else return N * factorial(N - 1);
}

console.log(factorial(input));


