function solution(priorities, location) {
    const idx = [];
    let order = 0;
    let print;
    
    for (let i = 0; i < priorities.length; i += 1) idx.push(i);
    
    while (1) {
        if (priorities[0] === Math.max(...priorities)) {
            priorities.shift();
            print = idx.shift();
            order += 1;
        }
        else {
            priorities.push(priorities.shift());
            idx.push(idx.shift());
        }
        
        if (print === location) return order;
    }
}