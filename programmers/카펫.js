function solution(brown, yellow) {
    const answer = [];
    const arr = [];
    
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) arr.push(i);
        for (let j of arr) {
            if (brown === 2 * (i + j + 2) && yellow === (i * j)) {
                    answer.splice(0, 1, i + 2);
                    answer.splice(1, 1, j + 2);
            }
        }
    }
    return answer;
}