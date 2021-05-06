function solution(n) {
    let watermelon = ``;
    for(let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            watermelon += `박`;
    }
        else {
            watermelon += `수`; }
    }
    return watermelon;
}
