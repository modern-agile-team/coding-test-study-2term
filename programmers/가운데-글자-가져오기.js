function solution(s) {
    let answer = ""
    let len = s.length;

    if (len % 2 === 1) 
        answer = s[ (len - 1) / 2];
    else 
        answer = s[ (len / 2) - 1] + s[len / 2];
    return answer;
}