function solution(priorities, location) {
    let answer = 0; 
    let cnt = 0;
    while (priorities.length > 0) {
        const firstNum = priorities.shift(); 
        if (priorities.filter((value) => value > firstNum).length > 0) {
            priorities.push(firstNum);
        }
        else {
            cnt++;
            if (location === 0) return cnt;
        }
        location--;
        if (location === -1) location = priorities.length - 1;
    }
    return cnt;
}
