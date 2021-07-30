// const input = `5
// 4 1 5 2 3
// 5
// 1 3 7 9 5`
//   .toString()
//     .split('\n');

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [N, A, M, nums] = input;
const aSet = new Set(A.split(' '));

nums.split(' ').forEach((el) => {
  aSet.has(el) ? console.log(1) : console.log(0);
});
