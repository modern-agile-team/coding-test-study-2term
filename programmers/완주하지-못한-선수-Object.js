function solution(participants, completions) {
    const playerCnt = {};
    
    for (let participant of participants) {
        if (participant in playerCnt) playerCnt[participant] += 1;
        else playerCnt[participant] = 1;
    }
    
    for (let completion of completions) {
        if (completion in playerCnt) playerCnt[completion] -= 1;
        else playerCnt[completion] = 1;
    }
    
    for (let key in playerCnt) 
        if (playerCnt[key] === 1) return key;
}
