// const input = `6
// 6
// 9
// 7
// 6
// 4
// 6`.split('\n');

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((v) => +v);
input.shift();

const revIn = input.reverse();
let cnt = 1;

for (let i = 1; i < revIn.length; i++) {
  let max = revIn[0];
  if (max < revIn[i]) {
    max = revIn[i];
    cnt += 1;
  }
}
console.log(cnt);

// console.log(input.reverse());
