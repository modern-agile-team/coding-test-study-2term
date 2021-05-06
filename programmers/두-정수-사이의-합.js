function solution(a, b) {

    let cnt = 0;

    for (let i = Math.min(a, b); i <= Math.max(a, b); i++)
        cnt += i; 
        
    return cnt;
}