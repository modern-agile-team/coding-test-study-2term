const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(1, -1).map((value) => Number(value));

let rightNum = input.pop();
let cnt = 1;

while (input.length) {
    const compareNum = input.pop();
    if (compareNum > rightNum) {
        cnt ++;
        rightNum = compareNum;
    }
        
}
console.log(cnt);
