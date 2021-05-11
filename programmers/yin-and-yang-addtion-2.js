function solution(absolutes, signs) {
    const sum = absolutes.reduce((initial, current, index)=> initial + current * (signs[index] ? 1 : -1), 0);
    return sum;
}
const absolutes = [4,7,12];
const signs = [true, false, true];
solution(absolutes, signs);