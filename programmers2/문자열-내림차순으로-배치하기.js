function solution(s) {
    const arr = s.split("");
    arr.sort();
    arr.reverse();
    return arr.join("");
}
