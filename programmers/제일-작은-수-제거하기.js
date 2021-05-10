function solution(arr) {
    const arrMin = Math.min(...arr);
    const i = arr.findIndex(num => num === arrMin);
    arr.splice(i, 1);
    if (arr.length <= 1) {
        return [-1];
    }
    return arr;
}