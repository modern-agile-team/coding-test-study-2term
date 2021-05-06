function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length && i !== j; j++) {
            let sumNum = numbers[i] + numbers[j];
            let repeat = 0;
            for (let k = 0; k < answer.length; k++) {
                if (sumNum === answer[k]) {
                    repeat++;
                }
            }
            if (repeat === 0) {
                answer.push(sumNum);
            }
        }
    }
    return answer.sort((a, b) => a - b);
}