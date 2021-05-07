function solution(n) {
    n = String(n).split(``);
    let answer = 0;
    for(let i = 0; i <= n.length-1; i++) {
        answer += parseInt(n[i]);
    }
    return answer;
}
