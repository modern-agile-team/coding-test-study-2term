const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const S = input[2];
const Slen = parseInt(input[1]);
let count = 0;
let P = 'IOI';

for (let i = 1; i < parseInt(input[0]); i += 1) {
    P += 'OI';
}

const Plen = P.length;

for (let i = 0; i < Slen; i+= 1) {
    if (Slen - i <= Plen) {
        break;
    }
    else if (S.substr(i, Plen) === P) {
        count += 1;
    }
}

console.log(count);
