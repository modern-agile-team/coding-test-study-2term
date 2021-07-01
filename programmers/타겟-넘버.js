const numbers = [1, 2, 3, 4, 5];
const target = 5;

function solution(numbers, target) {
    let answer = 0;

    DFS(0,0);

    function DFS(idx, value) {
        if (idx !== numbers.length) {
            DFS(idx + 1, value + numbers[idx]);
            DFS(idx + 1, value - numbers[idx]);
        } else if (value === target) {
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(numbers, target));