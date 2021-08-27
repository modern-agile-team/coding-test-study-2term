const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = [];
const haveCards = {};
const findCards  = {};

for (let card of input[1].split(" ")) haveCards[card] = 0;

for (let card of input[1].split(" ")) haveCards[card] += 1;

for (let card of input[3].split(" ")) findCards[card] = 0;

for (let card in findCards) {
    if (haveCards[card] !== undefined) findCards[card] += haveCards[card];
}

for (let card of input[3].split(" ")) result.push(findCards[card]);

console.log(result.join(" "));