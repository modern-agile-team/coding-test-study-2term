function solution(N, stages) {
    const result = []
    const falseRate = {};
    let len = stages.length;
    
    for (let i = 1; i <= N; i++) {
        result.push(i);
        let count = stages.reduce((cnt, e) => cnt + (e === i), 0);
        let temp = count / len;
        len -= count;
        falseRate[i] = temp;
    }
    result.sort((a, b) => {
        if (falseRate[a] > falseRate[b]) return -1;
        if (falseRate[a] < falseRate[b]) return 1;
        return a - b;
    })
    return result;
}