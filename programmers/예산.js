function solution(d, budget) {
    
    d.sort((a, b) => {return a - b;});
    
    if(d[0] > budget) return 0;
    
    let cnt = 0;
    
    for (let i = 0; i < d.length; i++) {       
        budget -= d[i];
        cnt += 1;
        if(budget < d[i+1]) break;
    }
    return cnt;
}