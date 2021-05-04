function solution(s) {
    
    let arr = s.split("");
    let answer;
    
    arr.sort(function(a, b) {
        if(a > b) return -1;
    })
    
    answer = arr.join('');
    return answer;
}