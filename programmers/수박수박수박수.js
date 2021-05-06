let answer = [];

function solution(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            answer += ("박");
        }
        else {
            answer += ("수");
        }
    }
    return answer;
}