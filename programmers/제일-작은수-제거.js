function solution(arr) {
    
    if (arr.length === 1) return [-1];
    
    const result = arr.filter((ele) => {return ele !== Math.min.apply(null,arr);})
    return result;
}