function solution(s) {
    let answer = "";
    let slen = s.length;
    if (slen % 2 === 0) {
        answer = s[slen / 2] + s[(slen / 2) - 1]
    }
    else {
        answer = s[slen / 2]
    }
    return answer;
}