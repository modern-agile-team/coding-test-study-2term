const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
function solution(N, stages) {
    const answer = [];
    const result = [];
    stages.sort((a, b) => a - b);
    for (let i = 1; i < N + 1; i++) {
        const count = stages.filter(element => i === element).length;
        answer.push(count/ (stages.length - stages.indexOf(i)));
    }
    for (let j = 0; j < N; j++) {
        const maximum = answer.indexOf(Math.max.apply(null, answer));
        result.push(maximum + 1);
        answer.splice(maximum, 1, null);
    }
    return result;
}

console.log(solution(N, stages));