const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution (n, arr1, arr2) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const answer = [];
        const change1 = arr1[i].toString(2).padStart(n,0);
        const change2 = arr2[i].toString(2).padStart(n,0);
        for (let j = 0; j < n; j++) {
            (Number(change1[j]) || Number(change2[j]) ? answer.push("#") : answer.push (" "));
        }
        result.push(answer.join(""));
    }
    return result;
}
console.log(solution(n, arr1, arr2));