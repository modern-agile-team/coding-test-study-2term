function solution(N, stages) {
    const answer = [];
    let players = stages.length;

    for (let i = 1; i < N + 1; i++) {
        let result = stages.filter(index => index === i).length;
        
        if (result === 0) {
            answer.push({index: i, rate: 0});
        }
        else answer.push({index: i, rate: result / players});
        players -= result;
    }
    answer.sort((a, b) => b.rate - a.rate);
    return answer.map(ele => ele.index);
}