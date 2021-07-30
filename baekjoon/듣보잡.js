const input = 
  require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

const nameObj = {};
const result = [];
let cnt = 0;

for (let i = 1; i < input.length; i += 1) {
  if (!(input[i] in nameObj)) nameObj[input[i]] = 1;
  else nameObj[input[i]] += 1;
}

for (key in nameObj) {
  if (nameObj[key] === 2) {
    cnt++;
    result.push(key);
  }
}
result.sort();
result.unshift(cnt);

for (let j = 0; j < result.length; j += 1) {
  console.log(result[j]);
}

