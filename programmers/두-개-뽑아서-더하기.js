function solution(numbers) {
    let numbersum = [];
    for(let a = 0; a < numbers.length; a++) {
        for(let b = 0; b < numbers.length; b++) {
            if(a != b) {
                numbersum.push(numbers[a] + numbers[b]);
            }
        }
    }
    numbersum.sort(function(a,b){return a-b});
    const answer = Array.from(new Set(numbersum))
    return answer;
}
