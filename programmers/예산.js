function solution(d, budget) {
    const dSort = d.sort((a, b) => a - b);
    let answer = 0;
    for (let i = 0; i < d.length; i++) {
        if (dSort[i] <= budget)  { 
            answer++
            budget -= dSort[i];
        }
    }
    return answer;
}