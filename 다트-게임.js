function solution(dartResult) {
    const turn = [];
    let num = 0;
    let answer = [];
    let result = 0;
    for (let i = 0; i < dartResult.length; i++) {
        if (isNaN(dartResult[i]) === false) {
            if (dartResult[i] == 0 && dartResult[i - 1] == 1) num = 10;
            else if (dartResult[i] <= 9 && dartResult[i] >= 0) num = dartResult[i];
        }
        
        else if (dartResult[i] === '*' || dartResult[i] === '#') turn.push([num, dartResult[i - 1], dartResult[i]]);
        else if (dartResult[i] === 'S' 
                 && dartResult[i + 1] !== '#'
                 && dartResult[i + 1] !== '*') turn.push([num, dartResult[i]]);
        else if (dartResult[i] === 'D' 
                 && dartResult[i + 1] !== '#'
                 && dartResult[i + 1] !== '*') turn.push([num, dartResult[i]]);
        else if (dartResult[i] === 'T' 
                 && dartResult[i + 1] !== '#'
                 && dartResult[i + 1] !== '*') turn.push([num, dartResult[i]]);
    }

    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            if (turn[j][k] === 'S') answer.push(turn[j][k - 1]);
            else if (turn[j][k] === 'D') answer.push(turn[j][k - 1] ** 2);
            else if (turn[j][k] === 'T') answer.push(turn[j][k - 1] ** 3);
            else if (turn[j][k] === '#') answer[answer.length - 1] *= -1;
            else if (turn[j][k] === '*') {
                answer[answer.length - 1] *= 2;
                answer[answer.length - 2] *= 2;
            }
        }
    }
    for (let el of answer) {
         result += parseInt(el)
    }
    return result
}
