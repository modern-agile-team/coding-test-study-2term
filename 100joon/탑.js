const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const tops = input[1].split(" ").map(v => +v);
const result = [];
const stack = [];

for (let i = 0; i < tops.length; i += 1) {
    result.push(0);
    tops[i] = [tops[i], i]
}

while (tops.length > 1) {
    stack.push(tops.pop());

    while (stack.length > 0) {
        if (stack[stack.length - 1][0] <= tops[tops.length - 1][0]) {
            const idx = stack.pop()[1];
            result[idx] = tops.length;
        }
        else break;
    }

}

console.log(result.join(" "));