function solution(arr) {
    
    arr.length > 1 ? arr.splice(arr.indexOf(Math.min(...arr)), 1) : arr = [-1];
    return arr;

}
