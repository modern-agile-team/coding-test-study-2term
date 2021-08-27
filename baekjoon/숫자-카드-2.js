const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
  .toString()
  .split('\n');

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, nNums, M, mNums] = input;
const myMap = new Map();
const answer = [];

const arrN = nNums.split(' ');
const arrM = mNums.split(' ');

arrN.forEach((el) => {
  if (myMap.has(el)) myMap.set(el, myMap.get(el) + 1);
  else myMap.set(el, 1);
});

arrM.forEach((el) => answer.push(myMap.get(el) || 0));
console.log(answer.join(' '));
