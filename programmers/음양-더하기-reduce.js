function solution(absolutes, signs) {
    for (let i = 0; i < signs.length; i++) {
        if (signs[i] === false) absolutes[i] = -absolutes[i];
    }
    const answer = absolutes.reduce((a, b) => a + b, 0);
    return answer;
}
