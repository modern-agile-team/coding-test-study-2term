function solution(progresses, speeds) {
    let answer = [];
    
    while (progresses.length) {
        
        for (let i = 0; i < speeds.length; i+= 1) {
            progresses[i] += speeds[i];
        }
        
        let cnt = 0;
        
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            cnt++;
        }
        
        if(cnt > 0) answer.push(cnt);
    }  
    return answer;
}

