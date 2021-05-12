function solution(answers) {
    let collect1 = 0;
    let collect2 = 0;
    let collect3 = 0;
    for (let i = 0; i < answers.length; i++) {
        if ( 수포자1[i % 5] === answers[i]) {
            collect1 += 1;
        }
        if ( 수포자2[i % 8] === answers[i]) {
            collect2 += 1;
        }
        if ( 수포자3[i % 10] === answers[i]) {
            collect3 += 1;
        }
    }
    const collects = [collect1, collect2, collect3];
    const biggest = Math.max(...collects);
    const results = [];
    for (let j = 0 ; j < 3; j++) {
        if (collects[j] === biggest) {
            results.push(j+1);
        }   
    }
    return results;
}
const 수포자1 = [1, 2, 3, 4, 5];
const 수포자2 = [2, 1, 2, 3, 2, 4, 2, 5];
const 수포자3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
const answers = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
solution(answers);