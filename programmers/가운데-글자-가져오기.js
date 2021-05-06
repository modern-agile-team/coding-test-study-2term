function solution(s) {
    let answer = ``
    let evens = s.length / 2
    let odds = s.length / 2 - 0.5
    if(s.length % 2 === 0) {
        answer = s[evens - 1] + s[evens]
    }
    else {
        answer = s[odds]
    }
    return answer;
}
