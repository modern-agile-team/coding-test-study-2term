function solution(answers) {
    let answer = [];
    let count = [0, 0, 0];
    const answerOne = [1, 2, 3, 4, 5];
    const answerTwo = [2, 1, 2, 3, 2, 4, 2, 5];
    const answerThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    for(let i = 0; i < answers.length; i++) {
        if (answerOne[i % 5] === answers[i]) count[0]++;
        if (answerTwo[i % 8] === answers[i]) count[1]++;
        if (answerThree[i % 10] === answers[i]) count[2]++;
    }
    const max = Math.max(...count);
    for (let i = 0; i < 3; i++) {
        if (count[i] === max) {
            answer.push(i + 1);
        }
    }
    return answer;
}