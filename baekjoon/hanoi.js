function solution(n) {
    const result = [];
    
    function hanoi(n, src, dst, mid) {
        if (!n) return;
        hanoi(n - 1, src, mid, dst);
        result.push([src, dst]); 
        hanoi(n - 1, mid, dst, src);
    }
    hanoi(n, 1, 3, 2);
    return result;
}

