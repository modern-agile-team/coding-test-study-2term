function solution(priorities, location) {
    let answer = 0;
    
    while (priorities.length > 0) {
        let paper = priorities.shift();
        
        if (priorities.filter(e => e > paper).length > 0) {
            priorities.push(paper);
        }
        else {
            answer++;
            if (location === 0) return answer;
        }
        location--;
        if (location === -1) location = priorities.length - 1;
    }
    return answer;
}