function solution(N, stages) {
    const result = [];
    let players = stages.length;
    
    for (let i = 0; i < N; i++) {
        let notClear = stages.filter(p => p === i + 1).length;
        let failureRate = 0;
        
        if (notClear === 0) {
            failureRate = 0
        } else {
            failureRate = notClear / players;
        }
        players = players - notClear;
        
        result.push({ N: i + 1, failureRate: failureRate});
    }
    
    result.sort((a, b) => {
        if (a.failureRate !== b.failureRate) {
            return b.failureRate - a.failureRate;
        } else {
            return a.failureRate - b.failureRate;
        }
    })
    return result.map(n => n.N);
}
