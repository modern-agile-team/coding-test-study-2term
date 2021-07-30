function solution(clothes) {
    const answer = {};

    clothes.forEach(x => { x[1] in answer ? answer[x[1]] += 1 : answer[x[1]] = 1;});

    const result = Object.values(answer).reduce((base, currValue) => {
        return base * (currValue + 1);
    }, 1);
    
    return result - 1;
}
