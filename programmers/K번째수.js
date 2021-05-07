function solution(array, commands) {
    let answer = [];
    for (let n = commands[0][0]-1; n < commands[0][1]; n++) {
        answer.push(array[0][n]);
        answer.sort((a, b) => a - b);
    }
    return answer[commands[[0][2] - 1]];
}