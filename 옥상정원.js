const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => +v);

input.shift();

let cnt = 0;

while (input.length) {
    let curBulding = input.shift();
    for (let el of input) {
        if (curBulding > el) cnt += 1;
        else break;
    }
}

console.log(cnt)
//시간 초과
