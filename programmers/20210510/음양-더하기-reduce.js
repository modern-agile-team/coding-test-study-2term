function solution(absolutes, signs) {
    let sum =absolutes.reduce((i, j, k) => {return signs[k] === true? i + j : i - j}, 0)
    return sum;
}