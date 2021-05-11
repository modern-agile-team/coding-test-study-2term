function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } else {
        arr.indexOf(Math.min.apply(null,arr));
        arr.splice(arr.indexOf(Math.min.apply(null,arr)),1);
        return arr;
    }
}
const arr = [4,3,2,1,10];
solution(arr);