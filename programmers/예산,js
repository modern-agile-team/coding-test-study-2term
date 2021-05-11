function solution(d, budget) {
    const answer = [];
    let answerSum = 0;
    d.sort((a, b) => (a - b));
    
    if (d[0] > budget) return 0;
    for (let money of d) {
        if (money <= budget) {
            answer.push(money);
            budget -= money;
        }  
    }
    return answer.length;
}
