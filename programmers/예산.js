function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    
    d.sort((a, b) => (a - b));
    for (let i = 0; i < d.length; i++){
        if (sum + d[i] <= budget){
            sum += d[i];
            answer++;
        }
    }
    return answer;
}
