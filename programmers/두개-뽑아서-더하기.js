function solution(numbers) {
    const NUM_LENGTH = numbers.length;
    let sum = 0;
    let answer = [];
    
    for (let i = 0; i < NUM_LENGTH; i++) {
        for (let j = i + 1; j < NUM_LENGTH; j++) { 
            sum = numbers[i] + numbers[j];
            if (answer.indexOf(sum) === -1){ 
               answer.push(sum); 
            }
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}
