function solution(progresses, speeds) {
    let answer = [];
    
    for (let i = 0; i < progresses.length; i+= 1) {
        const remainder = 100 - progresses[i];
        progresses[i] = Math.ceil(remainder / speeds[i]);
    }
    
    while (progresses.length) {
        let cnt = 0;
        const complete = progresses.shift();
        cnt++;
        progresses = progresses.map((value) => value - complete);
        
        while (progresses[0] <= 0) {
            cnt++;
            progresses.shift();
        }
        
        answer.push(cnt);
    }
    return answer;
}

