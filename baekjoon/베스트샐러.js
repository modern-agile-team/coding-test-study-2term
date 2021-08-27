const input = 
  require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .slice(0, -1);
const bookNames = {};
const bookNamesArr = [];

for (let i = 1; i < input.length; i += 1) {
  if (!(input[i] in bookNames)) bookNames[input[i]] = 1;
    else bookNames[input[i]] += 1;
}

const max = Math.max(...Object.values(bookNames));

for (key in bookNames) {
  if (bookNames[key] === max) bookNamesArr.push(key);
}

bookNamesArr.sort();

console.log(bookNamesArr[0]);

