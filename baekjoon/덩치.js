const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const xy = input.slice(1)
  .filter((value) => value.length > 0)
  .map((value) => value.split(' ')
  .map((value) => Number(value)));

const rank = xy.map(([x, y], index) => xy.reduce((acc, val, idx) => {
  if (index === idx) return acc;
  if (val[0] > x && val[1] > y) return acc + 1;
  return acc;
}, 1));

console.log(rank.join(' '));
