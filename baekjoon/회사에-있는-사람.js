const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const arr = input.slice(1);
const obj = {};

arr.forEach((val) => {
  const [name, op] = val.split(' ');
  if (op === 'enter') {
    obj[name] = true;
  } else {
    obj[name] = false;
  }
});

const asc = Object.keys(obj)
  .filter((val) => obj[val])
  .sort();
asc.reverse();

console.log(asc.join('\n'));
