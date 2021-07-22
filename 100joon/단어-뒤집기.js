const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const stringes = [];

for (let i = 1; i <= Number(input[0]); i += 1) {
    stringes.push(input[i].split(" "));
}

for (let i = 0; i < stringes.length; i += 1) {
    const reverseStringes = [];

    for (let j = 0; j < stringes[i].length; j += 1) {
        stringes[i][j] = stringes[i][j].split("");
        let wordPiece = "";
        while (stringes[i][j].length > 0) {
            wordPiece += stringes[i][j].pop();
        }
        reverseStringes.push(wordPiece);
    }
    console.log(reverseStringes.join(" "));
}