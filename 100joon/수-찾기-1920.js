const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = [];
const haveInt = {};
const findInt  = {};

for (let card of input[1].split(" ")) haveInt[card] = 0;

for (let card of input[1].split(" ")) haveInt[card] += 1;

for (let card of input[3].split(" ")) findInt[card] = 0;

for (let card in findInt) {
    if (haveInt[card] !== undefined) findInt[card] = 1;
}

for (let card of input[3].split(" ")) result.push(findInt[card]);

console.log(result.join("\n"));