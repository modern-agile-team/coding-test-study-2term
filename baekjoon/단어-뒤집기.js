const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const caseNum = Number(input.shift());

for (let i = 0; i < caseNum; i += 1) {
    if (input[i].includes(' ')) {
        const seperate = input[i].split(' ');
        input[i] = seperate.reverse().join(' ');
    }
    console.log(`Case #${i + 1}: ` + input[i]);
}

