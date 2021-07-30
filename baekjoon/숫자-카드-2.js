const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const nArr = input[1].split(' ').map((val) => Number(val));
const mArr = input[3].split(' ').map((val) => Number(val));

const obj = {};
const result = [];

nArr.forEach((n) => {
  if (obj[n]) obj[n] += 1;
  else obj[n] = 1;
});

mArr.forEach((m) => {
  result.push(obj[m] ?? 0);
});

console.log(result.join(' '));
