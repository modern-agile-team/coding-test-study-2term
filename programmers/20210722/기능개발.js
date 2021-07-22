function solution(progresses, speeds) {
    let count = 0;
    const result = [];
    
    while (count < speeds.length) {
        for (let i = 0; i < speeds.length; i += 1) progresses[i] += speeds[i];
        
        let temp = 0;
        
        while (count < speeds.length && progresses[count] >= 100) {
            temp += 1;
            count += 1;
        }

        if (temp !== 0) result.push(temp);
    }
    return result;
}