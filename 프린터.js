function solution(priorities, location) {
    const idx = [];
    let cnt = 0;

    for (let i = 0; i < priorities.length; i += 1) idx.push(i)
    
    while(true) {
        if (priorities[0] === Math.max(...priorities)) {
            priorities.shift();
            let curIdx = idx.shift();
            cnt += 1;
            if (curIdx === location) return cnt;
            }
        
        else {
            priorities.push(priorities.shift())
            idx.push(idx.shift());
        }
    }    
}
