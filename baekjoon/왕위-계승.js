const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const n = Number(input[0].split(' ')[0]);
const nArr = input.slice(2, 2 + n);
const mArr = input.slice(2 + n);

const obj = {};

nArr.forEach((val) => {
  const [name, father, mother] = val.split(' ');
  if (!obj[father]) obj[father] = ['', ''];
  if (!obj[mother]) obj[mother] = ['', ''];
  obj[name] = [father, mother];
});

function getPurity(name) {
  if (name === input[1]) return 1;
  if (name === '') return 0;
  if (!obj[name]) return 0;
  return (getPurity(obj[name][0]) + getPurity(obj[name][1])) / 2;
}

console.log(
  mArr.map((val) => [val, getPurity(val)]).sort((a, b) => b[1] - a[1])[0][0],
);
