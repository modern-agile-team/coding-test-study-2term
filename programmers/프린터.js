function solution(priorities, location) {
    let firstnum = 0;
    let count = 0;
    
    while (priorities.length > 0) {
        firstnum = priorities.shift();
        if (firstnum < Math.max(...priorities)) priorities.push(firstnum);
        else {
              count += 1;
              if (location === 0) return count;
        }
        location -= 1;
        if (location === -1) location = priorities.length - 1;
    }
}
