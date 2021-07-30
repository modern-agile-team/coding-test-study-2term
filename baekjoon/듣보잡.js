let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const dontKnow = [];
const answer = [];

for (let i = 0; i < input.length; i++) {
    dontKnow.push(input[i]);
}

const obj = dontKnow.reduce((target, index) => {
    target[index] = target[index] ? target[index] + 1 : 1;
    return target;
}, {});

for (let key in obj) {
    if (obj[key] >= 2) answer.push(key);
}

answer.sort().unshift(answer.length);

for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}