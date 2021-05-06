function solution(n) {
    let answer = 0;
    let nstr = n.toString();
    for (let i = 0; i < nstr.length; i++) {
        answer += parseInt(nstr[i]);
    }
    return answer;
}