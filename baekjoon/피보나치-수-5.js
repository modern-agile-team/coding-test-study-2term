const n = parseInt(require("fs").readFileSync("/dev/stdin").toString());

function solution(n) {
    for (let i = 1; i <= n; i++) {
        n = solution(n - 1) + solution(n - 2);
    }
    return n;
}

console.log(Math.abs(solution(n)));