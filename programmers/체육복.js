function solution(n, lost, reserve) {
    let answer = 0;
    answer = (n - lost.length);
    for (let i = 0; i < reserve.length; i++) {
        if (reserve[i] === lost[i]) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            answer --;
        }
        if ((reserve[i] + 1) === lost[i] || (reserve[i] - 1) === lost[i]) {
            answer ++;
        }
    }
    return answer;
}
