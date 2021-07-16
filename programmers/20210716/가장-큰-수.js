function solution(numbers) {
    // sort 메서드 사용
    return numbers.map((v) => String(v)).sort((a, b) => {
        if (a + b > b + a) return -1;
        return 1;
    }).join("").replace(/^0+/, "0");
    
    // merge sort 활용
    numbers = numbers.map((v) => String(v));
    
    return merge(numbers).join("").replace(/^0+/, "0");
    
    function merge(arr) {
        if (arr.length <= 1) return arr;
        
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        
        return divide(merge(left), merge(right));
    }
    
    function divide(left, right) {
        const arr = [];
        
        while (left.length && right.length) {
            if (left[0] + right[0] > right[0] + left[0]) arr.push(left.shift());
            else arr.push(right.shift());
        }
        
        return arr.concat(left.slice()).concat(right.slice());
    }
}