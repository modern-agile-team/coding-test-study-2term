function solution(numbers) {
    
    const NUM_LEN = numbers.length;
    let answer = [];
    let sortAnswer = [];
    let sum = 0;
    
    for (let i = 0; i < NUM_LEN; i++) {
        for (let j = i + 1; j < NUM_LEN; j++) {
            sum = numbers[i] + numbers[j];
            
            if (answer.indexOf(sum) === -1) answer.push(sum);
        }
    }
    
    return sortAnswer = answer.sort((a, b) => a - b);
}
