const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const questionCount = input.shift();
const question = input.splice(Number(questionCount.split(" ")[0]), );
question.splice(Number(questionCount.split(" ")[1]), );
const inputObj = {};

input.forEach((el, idx) => inputObj[el] = idx);

for (let el of question) {
    if (isNaN(el)) console.log(inputObj[el] + 1);
    else console.log(input[el - 1]);
};