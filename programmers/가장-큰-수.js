function solution(numbers) {
    const answer = numbers.map((a) => a + '')
                        .sort((a, b) => (b + a) - (a + b));
    
    return answer[0] === '0' ? '0' : answer.join('');
}