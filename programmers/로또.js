function solution(lottos, winNums) {
    
    let [zCnt, wCnt] = [0, 0];
    let [best, worst] = [0, 0];
    
    for (let i = 0; i < 6; i++) {
        if(lottos[i] === 0) zCnt += 1;
        
        for (let j = 0; j < 6; j++) {
            if (lottos[i] === winNums[j]) wCnt += 1;
        }
    }
    
    best = Math.abs(wCnt + zCnt - 7);
    
    if (zCnt === 6) worst = 6;
    else worst = Math.abs (wCnt - 7);
    
    if (wCnt === 0 && zCnt === 0) return [6, 6];
    return [best, worst];
}