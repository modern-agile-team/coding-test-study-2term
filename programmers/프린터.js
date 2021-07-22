function solution(priorities, location) {
    const queue = priorities.map((x, index) => ({index : index , priority : x}));
    let start = 0;
    while (priorities.length > 0) {
        const prior = Math.max(...priorities);
        if (queue[0].priority !== prior) {
            queue.push(queue.shift());
        } else {
            start += 1; 
            if (queue[0].index === location) {
                return start;
            }
            queue.shift();
            priorities.splice(priorities.indexOf(prior), 1);
        } 
    }
}
