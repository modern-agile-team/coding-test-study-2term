const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const len = Number(input.length);
const obj = { };

input.forEach((species) => {
  if (obj[species]) obj[species] += 1;
  else obj[species] = 1;
});

Object.keys(obj).sort().forEach((species) => {
  console.log(species, (obj[species] / len * 100).toFixed(4));
});
