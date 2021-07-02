function solution(n) {
    const answer = [];

    function hanoi(n, start, finish, middle) {
        if (n === 1) answer.push([start, finish]);
        else {
            hanoi(n-1, start, middle, finish);
            answer.push([start, finish]);
            hanoi(n-1, middle, finish, start);
        }
    }

    hanoi(n, 1, 3, 2);
    return answer;
}