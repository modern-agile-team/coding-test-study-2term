function solution(n) {
    const answer = [];
    
    function hanoi(n, from, to, other) {
        if (n === 1) answer.push([from, to]);
        else {
            hanoi(n - 1, from, other, to);
            answer.push([from, to]);
            hanoi(n - 1, other, to, from);
        }
    }
    hanoi(n, 1, 3, 2);
    return answer;
}