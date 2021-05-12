function solution(answers) {

    const studentFirst = [1, 2, 3, 4, 5];
    const studentSecond = [2, 1, 2, 3, 2, 4, 2, 5];
    const studentThird = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === studentFirst[i % 5]) {
            score[0] += 1;
        }
        if (answers[i] === studentSecond[i % 8]) {
            score[1] += 1;
        }
        if (answers[i] === studentThird[i % 10]) {
            score[2] += 1;
        }
    }
    
    let max = Math.max(...score);
    let answer = [];
    
    for (let a in score) {
        if (score[a] === max) {
            answer.push(Number(a)+1);
        }
    }
    return answer;
}
